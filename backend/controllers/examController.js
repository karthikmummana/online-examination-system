const Exam = require('../models/Exam');
const Question = require('../models/Question');
const Result = require('../models/Result');
const Attempt = require('../models/Attempt');

// Helper Fisher-Yates shuffle
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// @desc    Get all exams (Students get published only, Admin gets all)
// @route   GET /api/exams
// @access  Private
const getExams = async (req, res) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { status: 'published' };
    const exams = await Exam.find(filter)
      .populate('createdBy', 'name email')
      .populate('questionsCount')
      .sort({ createdAt: -1 });

    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single exam by ID
// @route   GET /api/exams/:id
// @access  Private
const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('questionsCount');

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    if (req.user.role !== 'admin' && exam.status !== 'published') {
      return res.status(403).json({ message: 'This exam is not currently available for students' });
    }

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new exam
// @route   POST /api/exams
// @access  Private/Admin
const createExam = async (req, res) => {
  try {
    const { title, description, duration, totalMarks, status, questionsPerAttempt, category, difficulty } = req.body;

    if (!title || !duration) {
      return res.status(400).json({ message: 'Exam title and duration (minutes) are required' });
    }

    const exam = new Exam({
      title: title.trim(),
      description: description ? description.trim() : '',
      duration: Number(duration),
      totalMarks: Number(totalMarks) || 0,
      status: status || 'draft',
      questionsPerAttempt: Number(questionsPerAttempt) || 10,
      category: category ? category.trim() : 'Programming',
      difficulty: difficulty || 'Intermediate',
      createdBy: req.user._id,
    });

    const savedExam = await exam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update existing exam
// @route   PUT /api/exams/:id
// @access  Private/Admin
const updateExam = async (req, res) => {
  try {
    const { title, description, duration, totalMarks, status, questionsPerAttempt, category, difficulty } = req.body;

    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    if (title) exam.title = title.trim();
    if (description !== undefined) exam.description = description.trim();
    if (duration !== undefined) exam.duration = Number(duration);
    if (totalMarks !== undefined) exam.totalMarks = Number(totalMarks);
    if (status) exam.status = status;
    if (questionsPerAttempt !== undefined) exam.questionsPerAttempt = Number(questionsPerAttempt) || 10;
    if (category) exam.category = category.trim();
    if (difficulty) exam.difficulty = difficulty;

    const updatedExam = await exam.save();
    res.json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete exam and its related questions and results
// @route   DELETE /api/exams/:id
// @access  Private/Admin
const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Cascade delete associated questions, attempts, and results
    await Question.deleteMany({ examId: exam._id });
    await Result.deleteMany({ examId: exam._id });
    await Attempt.deleteMany({ examId: exam._id });
    await Exam.findByIdAndDelete(exam._id);

    res.json({ message: 'Exam and all associated questions/results deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Toggle exam status between 'draft' and 'published'
// @route   PATCH /api/exams/:id/status
// @access  Private/Admin
const toggleExamStatus = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    exam.status = exam.status === 'published' ? 'draft' : 'published';
    await exam.save();

    res.json({
      message: `Exam status changed to ${exam.status}`,
      exam,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Start a new randomized attempt for an exam
// @route   POST /api/exams/:id/start-attempt
// @access  Private
// @desc    Start a new randomized attempt for an exam with specific difficulty
// @route   POST /api/exams/:id/start-attempt
// @access  Private
const startAttempt = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    if (req.user.role !== 'admin' && exam.status !== 'published') {
      return res.status(403).json({ message: 'Exam is not currently published' });
    }

    const rawDifficulty = req.body?.difficulty || req.query?.difficulty || 'Intermediate';
    let requestedDifficulty = 'Intermediate';
    if (typeof rawDifficulty === 'string') {
      const lower = rawDifficulty.toLowerCase();
      if (lower === 'easy') requestedDifficulty = 'Easy';
      else if (lower === 'hard') requestedDifficulty = 'Hard';
      else requestedDifficulty = 'Intermediate';
    }

    // Strict query: examId + difficulty
    let targetQuestionsPool = await Question.find({
      examId: exam._id,
      difficulty: requestedDifficulty,
    });

    const targetCount = exam.questionsPerAttempt || 10;
    // Fallback if specific difficulty pool is empty
    if (targetQuestionsPool.length === 0) {
      targetQuestionsPool = await Question.find({ examId: exam._id });
    }

    if (targetQuestionsPool.length === 0) {
      return res.status(400).json({ message: 'This assessment has no questions available for the selected difficulty.' });
    }

    // Separate MCQs and Coding questions in the target pool
    const mcqPool = targetQuestionsPool.filter((q) => q.questionType !== 'coding');
    const codingPool = targetQuestionsPool.filter((q) => q.questionType === 'coding');

    // Find student's most recent completed attempt for this exam and difficulty
    const previousAttempt = await Attempt.findOne({
      studentId: req.user._id,
      examId: exam._id,
      difficulty: requestedDifficulty,
      status: 'completed',
    }).sort({ createdAt: -1 });

    const recentQIds = new Set(
      previousAttempt && previousAttempt.questionIds
        ? previousAttempt.questionIds.map((id) => id.toString())
        : []
    );

    let selected = [];

    if (codingPool.length > 0) {
      // Mixed assessment: determine desired number of coding questions based on target count & difficulty
      let desiredCodingCount = requestedDifficulty === 'Easy' ? 2 : requestedDifficulty === 'Hard' ? 4 : 3;
      if (targetCount >= 15) {
        desiredCodingCount = requestedDifficulty === 'Easy' ? 3 : requestedDifficulty === 'Hard' ? 6 : 5;
      }
      desiredCodingCount = Math.min(desiredCodingCount, codingPool.length);
      const desiredMcqCount = Math.max(1, targetCount - desiredCodingCount);

      // Select coding questions (prioritize unseen)
      const unseenCoding = codingPool.filter((q) => !recentQIds.has(q._id.toString()));
      const seenCoding = codingPool.filter((q) => recentQIds.has(q._id.toString()));
      let selectedCoding = shuffleArray(unseenCoding).slice(0, desiredCodingCount);
      if (selectedCoding.length < desiredCodingCount) {
        selectedCoding = selectedCoding.concat(
          shuffleArray(seenCoding).slice(0, desiredCodingCount - selectedCoding.length)
        );
      }

      // Select MCQ questions (prioritize unseen)
      const unseenMcq = mcqPool.filter((q) => !recentQIds.has(q._id.toString()));
      const seenMcq = mcqPool.filter((q) => recentQIds.has(q._id.toString()));
      let selectedMcq = shuffleArray(unseenMcq).slice(0, desiredMcqCount);
      if (selectedMcq.length < desiredMcqCount) {
        selectedMcq = selectedMcq.concat(
          shuffleArray(seenMcq).slice(0, desiredMcqCount - selectedMcq.length)
        );
      }

      selected = shuffleArray([...selectedMcq, ...selectedCoding]);
    } else {
      // Standard MCQ only
      const unseenQuestions = targetQuestionsPool.filter((q) => !recentQIds.has(q._id.toString()));
      const seenQuestions = targetQuestionsPool.filter((q) => recentQIds.has(q._id.toString()));

      let sel = shuffleArray(unseenQuestions).slice(0, targetCount);
      if (sel.length < targetCount) {
        sel = sel.concat(shuffleArray(seenQuestions).slice(0, targetCount - sel.length));
      }
      selected = shuffleArray(sel);
    }

    const selectedQuestionIds = selected.map((q) => q._id);
    const attemptTotalMarks = selected.reduce((sum, q) => sum + (q.marks || 1), 0);

    const newAttempt = new Attempt({
      studentId: req.user._id,
      examId: exam._id,
      questionIds: selectedQuestionIds,
      difficulty: requestedDifficulty,
      startedAt: new Date(),
      status: 'in-progress',
    });

    await newAttempt.save();

    // Map questions for frontend response (strip correctAnswer and hiddenTestCases for non-admins)
    const clientQuestions = selected.map((q) => {
      const qObj = q.toObject();
      if (req.user.role !== 'admin') {
        delete qObj.correctAnswer;
        delete qObj.hiddenTestCases;
      }
      return qObj;
    });

    res.status(201).json({
      attemptId: newAttempt._id,
      exam,
      difficulty: requestedDifficulty,
      questions: clientQuestions,
      startedAt: newAttempt.startedAt,
      totalMarks: attemptTotalMarks,
    });
  } catch (error) {
    console.error('Error starting attempt:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExams,
  getExamById,
  createExam,
  updateExam,
  deleteExam,
  toggleExamStatus,
  startAttempt,
};
