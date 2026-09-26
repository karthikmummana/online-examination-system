const Question = require('../models/Question');
const Exam = require('../models/Exam');

// Helper to recalculate total marks for an exam
const syncExamTotalMarks = async (examId) => {
  const questions = await Question.find({ examId });
  const total = questions.reduce((sum, q) => sum + (q.marks || 1), 0);
  await Exam.findByIdAndUpdate(examId, { totalMarks: total });
};

// @desc    Get questions for an exam
// @route   GET /api/exams/:examId/questions
// @access  Private (Students receive questions WITHOUT correctAnswer; Admins receive full details)
const getExamQuestions = async (req, res) => {
  try {
    const { examId } = req.params;

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    if (req.user.role !== 'admin' && exam.status !== 'published') {
      return res.status(403).json({ message: 'Exam is not currently published' });
    }

    let query = Question.find({ examId }).sort({ createdAt: 1 });

    // CRITICAL SECURITY REQUIREMENT:
    // Strip correctAnswer when requested by a student
    if (req.user.role !== 'admin') {
      query = query.select('-correctAnswer');
    }

    const questions = await query.exec();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a question to an exam (MCQ or Coding)
// @route   POST /api/exams/:examId/questions
// @access  Private/Admin
const addQuestion = async (req, res) => {
  try {
    const { examId } = req.params;
    const {
      questionType = 'mcq',
      questionText,
      options,
      correctAnswer,
      marks,
      difficulty = 'Intermediate',
      problemStatement,
      inputFormat,
      outputFormat,
      constraints,
      sampleInput,
      sampleOutput,
      supportedLanguage,
      starterCode,
      publicTestCases,
      hiddenTestCases,
    } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    if (!questionText || !questionText.trim()) {
      return res.status(400).json({ message: 'Question title/text is required' });
    }

    if (questionType === 'coding') {
      const question = new Question({
        examId,
        questionType: 'coding',
        questionText: questionText.trim(),
        problemStatement: problemStatement ? problemStatement.trim() : questionText.trim(),
        inputFormat: inputFormat || '',
        outputFormat: outputFormat || '',
        constraints: constraints || '',
        sampleInput: sampleInput || '',
        sampleOutput: sampleOutput || '',
        supportedLanguage: supportedLanguage || 'Python',
        starterCode: starterCode || '',
        publicTestCases: Array.isArray(publicTestCases) ? publicTestCases : [],
        hiddenTestCases: Array.isArray(hiddenTestCases) ? hiddenTestCases : [],
        marks: Number(marks) || 5,
        difficulty: ['Easy', 'Intermediate', 'Hard'].includes(difficulty) ? difficulty : 'Intermediate',
      });

      const savedQuestion = await question.save();
      await syncExamTotalMarks(examId);
      return res.status(201).json(savedQuestion);
    } else {
      // MCQ Question
      if (!options || !Array.isArray(options) || options.length < 2) {
        return res.status(400).json({
          message: 'Question text and at least 2 options are required for MCQ',
        });
      }

      const parsedCorrect = Number(correctAnswer);
      if (isNaN(parsedCorrect) || parsedCorrect < 0 || parsedCorrect >= options.length) {
        return res.status(400).json({
          message: `Correct answer index must be between 0 and ${options.length - 1}`,
        });
      }

      const question = new Question({
        examId,
        questionType: 'mcq',
        questionText: questionText.trim(),
        options: options.map((opt) => opt.trim()),
        correctAnswer: parsedCorrect,
        marks: Number(marks) || 1,
        difficulty: ['Easy', 'Intermediate', 'Hard'].includes(difficulty) ? difficulty : 'Intermediate',
      });

      const savedQuestion = await question.save();
      await syncExamTotalMarks(examId);
      return res.status(201).json(savedQuestion);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a question
// @route   PUT /api/questions/:id
// @access  Private/Admin
const updateQuestion = async (req, res) => {
  try {
    const {
      questionType,
      questionText,
      options,
      correctAnswer,
      marks,
      difficulty,
      problemStatement,
      inputFormat,
      outputFormat,
      constraints,
      sampleInput,
      sampleOutput,
      supportedLanguage,
      starterCode,
      publicTestCases,
      hiddenTestCases,
    } = req.body;

    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    if (questionType) question.questionType = questionType;
    if (questionText) question.questionText = questionText.trim();
    if (difficulty && ['Easy', 'Intermediate', 'Hard'].includes(difficulty)) {
      question.difficulty = difficulty;
    }
    if (marks !== undefined) question.marks = Number(marks) || 1;

    if (question.questionType === 'coding') {
      if (problemStatement !== undefined) question.problemStatement = problemStatement;
      if (inputFormat !== undefined) question.inputFormat = inputFormat;
      if (outputFormat !== undefined) question.outputFormat = outputFormat;
      if (constraints !== undefined) question.constraints = constraints;
      if (sampleInput !== undefined) question.sampleInput = sampleInput;
      if (sampleOutput !== undefined) question.sampleOutput = sampleOutput;
      if (supportedLanguage !== undefined) question.supportedLanguage = supportedLanguage;
      if (starterCode !== undefined) question.starterCode = starterCode;
      if (publicTestCases && Array.isArray(publicTestCases)) question.publicTestCases = publicTestCases;
      if (hiddenTestCases && Array.isArray(hiddenTestCases)) question.hiddenTestCases = hiddenTestCases;
    } else {
      if (options && Array.isArray(options) && options.length >= 2) {
        question.options = options.map((opt) => opt.trim());
      }
      if (correctAnswer !== undefined) {
        const parsedCorrect = Number(correctAnswer);
        if (!isNaN(parsedCorrect) && parsedCorrect >= 0 && parsedCorrect < question.options.length) {
          question.correctAnswer = parsedCorrect;
        }
      }
    }

    const updated = await question.save();
    await syncExamTotalMarks(question.examId);

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a question
// @route   DELETE /api/questions/:id
// @access  Private/Admin
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const examId = question.examId;
    await Question.findByIdAndDelete(question._id);
    await syncExamTotalMarks(examId);

    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExamQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};
