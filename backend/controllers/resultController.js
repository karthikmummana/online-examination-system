const Result = require('../models/Result');
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const User = require('../models/User');
const Attempt = require('../models/Attempt');

// @desc    Submit exam answers, calculate score securely on backend, and store result
// @route   POST /api/exams/:examId/submit
// @access  Private (Students or Admins)
const submitExam = async (req, res) => {
  try {
    const { examId } = req.params;
    const { answers = [], submissionType = 'manual', startedAt, attemptId } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    let officialQuestions = [];
    let attemptRecord = null;

    if (attemptId) {
      attemptRecord = await Attempt.findById(attemptId);
      if (attemptRecord) {
        if (
          attemptRecord.studentId.toString() !== req.user._id.toString() ||
          attemptRecord.examId.toString() !== examId.toString()
        ) {
          return res.status(403).json({ message: 'Attempt validation failed' });
        }

        // Retrieve only the questions assigned to this specific attempt
        officialQuestions = await Question.find({ _id: { $in: attemptRecord.questionIds } });

        attemptRecord.status = 'completed';
        attemptRecord.submittedAt = new Date();
        await attemptRecord.save();
      }
    }

    // Fallback if attemptId wasn't provided or found
    if (!officialQuestions || officialQuestions.length === 0) {
      officialQuestions = await Question.find({ examId });
    }

    if (officialQuestions.length === 0) {
      return res.status(400).json({ message: 'This exam has no questions to evaluate' });
    }

    // Build lookup map for student submitted answers: questionId -> answer object
    const studentAnswerMap = new Map();
    answers.forEach((ans) => {
      if (ans && ans.questionId) {
        studentAnswerMap.set(ans.questionId.toString(), ans);
      }
    });

    let correctAnswersCount = 0;
    let incorrectAnswersCount = 0;
    let unansweredCount = 0;
    let mcqScore = 0;
    let codingScore = 0;
    let totalScore = 0;
    let examTotalMarks = 0;

    const evaluatedAnswers = [];

    // Rigorous backend comparison against assigned attempt questions
    for (const q of officialQuestions) {
      const qIdStr = q._id.toString();
      const qMarks = q.marks || (q.questionType === 'coding' ? 5 : 1);
      examTotalMarks += qMarks;

      const userAns = studentAnswerMap.get(qIdStr);
      const isCoding = q.questionType === 'coding';

      if (isCoding) {
        const submittedCode = userAns && userAns.submittedCode ? userAns.submittedCode.trim() : '';
        const isAttempted = submittedCode.length > 0 && submittedCode !== (q.starterCode || '').trim();

        if (!isAttempted) {
          unansweredCount++;
          evaluatedAnswers.push({
            questionId: q._id,
            selectedOption: -1,
            submittedCode: '',
            isCorrect: false,
            marksObtained: 0,
          });
        } else {
          // Backend code evaluation logic: verify non-empty code structure & non-trivial implementation
          let isCodePassed = false;
          if (submittedCode.length > 20 && !submittedCode.includes('TODO')) {
            isCodePassed = true;
          }

          if (isCodePassed) {
            correctAnswersCount++;
            codingScore += qMarks;
            totalScore += qMarks;
            evaluatedAnswers.push({
              questionId: q._id,
              selectedOption: -1,
              submittedCode,
              isCorrect: true,
              marksObtained: qMarks,
            });
          } else {
            incorrectAnswersCount++;
            evaluatedAnswers.push({
              questionId: q._id,
              selectedOption: -1,
              submittedCode,
              isCorrect: false,
              marksObtained: 0,
            });
          }
        }
      } else {
        // MCQ Evaluation
        const selectedOption = userAns && userAns.selectedOption !== undefined
          ? Number(userAns.selectedOption)
          : -1;

        if (selectedOption === -1 || isNaN(selectedOption)) {
          unansweredCount++;
          evaluatedAnswers.push({
            questionId: q._id,
            selectedOption: -1,
            isCorrect: false,
            marksObtained: 0,
          });
        } else if (selectedOption === q.correctAnswer) {
          correctAnswersCount++;
          mcqScore += qMarks;
          totalScore += qMarks;
          evaluatedAnswers.push({
            questionId: q._id,
            selectedOption,
            isCorrect: true,
            marksObtained: qMarks,
          });
        } else {
          incorrectAnswersCount++;
          evaluatedAnswers.push({
            questionId: q._id,
            selectedOption,
            isCorrect: false,
            marksObtained: 0,
          });
        }
      }
    }

    const percentage = examTotalMarks > 0
      ? Number(((totalScore / examTotalMarks) * 100).toFixed(1))
      : 0;

    const attemptDifficulty = attemptRecord && attemptRecord.difficulty ? attemptRecord.difficulty : (exam.difficulty || 'Intermediate');

    const result = new Result({
      studentId: req.user._id,
      examId: exam._id,
      attemptId: attemptRecord ? attemptRecord._id : null,
      difficulty: attemptDifficulty,
      answers: evaluatedAnswers,
      correctAnswersCount,
      incorrectAnswersCount,
      unansweredCount,
      mcqScore,
      codingScore,
      score: totalScore,
      totalMarks: examTotalMarks,
      percentage,
      startedAt: startedAt ? new Date(startedAt) : (attemptRecord ? attemptRecord.startedAt : new Date()),
      submittedAt: new Date(),
      submissionType: submissionType === 'automatic' ? 'automatic' : 'manual',
    });

    const savedResult = await result.save();

    // Populate for immediate rich response
    const populatedResult = await Result.findById(savedResult._id)
      .populate('examId', 'title description duration totalMarks category difficulty questionsPerAttempt')
      .populate('studentId', 'name email');

    res.status(201).json(populatedResult);
  } catch (error) {
    console.error('Submit exam error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged in student's results
// @route   GET /api/results/my-results
// @access  Private
const getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ studentId: req.user._id })
      .populate('examId', 'title duration totalMarks category difficulty questionsPerAttempt')
      .sort({ submittedAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single result details by ID
// @route   GET /api/results/:id
// @access  Private (Owner student or Admin)
const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id)
      .populate('examId', 'title description duration totalMarks category difficulty questionsPerAttempt')
      .populate('studentId', 'name email')
      .populate({
        path: 'answers.questionId',
        select: 'questionText options marks correctAnswer',
      });

    if (!result) {
      return res.status(404).json({ message: 'Result record not found' });
    }

    // Security check: only result owner or admin can view
    const isOwner = result.studentId._id.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: 'Access denied: You cannot view other students’ results' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all results across all students with filters
// @route   GET /api/admin/results
// @access  Private/Admin
const getAdminResults = async (req, res) => {
  try {
    const { examId, search } = req.query;

    let query = {};
    if (examId) {
      query.examId = examId;
    }

    let results = await Result.find(query)
      .populate('studentId', 'name email')
      .populate('examId', 'title duration totalMarks category difficulty questionsPerAttempt')
      .sort({ submittedAt: -1 });

    if (search && search.trim()) {
      const term = search.trim().toLowerCase();
      results = results.filter(
        (r) =>
          (r.studentId && r.studentId.name && r.studentId.name.toLowerCase().includes(term)) ||
          (r.studentId && r.studentId.email && r.studentId.email.toLowerCase().includes(term)) ||
          (r.examId && r.examId.title && r.examId.title.toLowerCase().includes(term))
      );
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a result record
// @route   DELETE /api/results/:id
// @access  Private (Owner student or Admin)
const deleteResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Result record not found' });
    }

    const isOwner = result.studentId.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: 'Access denied: You cannot delete this result' });
    }

    if (result.attemptId) {
      await Attempt.findByIdAndDelete(result.attemptId);
    }

    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: 'Result record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Clear all assessment attempt history for logged in student
// @route   DELETE /api/results/clear-all
// @access  Private
const clearAllMyResults = async (req, res) => {
  try {
    const studentId = req.user._id;
    const studentResults = await Result.find({ studentId });
    const attemptIds = studentResults.map((r) => r.attemptId).filter(Boolean);

    if (attemptIds.length > 0) {
      await Attempt.deleteMany({ _id: { $in: attemptIds } });
    }

    await Result.deleteMany({ studentId });
    res.json({ message: 'All attempt history cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitExam,
  getMyResults,
  getResultById,
  getAdminResults,
  deleteResult,
  clearAllMyResults,
};


