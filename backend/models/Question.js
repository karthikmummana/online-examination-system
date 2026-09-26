const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
      required: [true, 'Exam reference is required'],
      index: true,
    },
    questionType: {
      type: String,
      enum: ['mcq', 'coding'],
      default: 'mcq',
    },
    questionText: {
      type: String,
      required: [true, 'Please provide question text or title'],
      trim: true,
    },
    options: {
      type: [String],
      default: [],
    },
    correctAnswer: {
      type: Number,
      default: 0,
    },
    // Coding specific fields
    problemStatement: {
      type: String,
      default: '',
    },
    inputFormat: {
      type: String,
      default: '',
    },
    outputFormat: {
      type: String,
      default: '',
    },
    constraints: {
      type: String,
      default: '',
    },
    sampleInput: {
      type: String,
      default: '',
    },
    sampleOutput: {
      type: String,
      default: '',
    },
    supportedLanguage: {
      type: String,
      default: 'Python',
    },
    starterCode: {
      type: String,
      default: '',
    },
    publicTestCases: [
      {
        input: { type: String, default: '' },
        expectedOutput: { type: String, default: '' },
      },
    ],
    hiddenTestCases: [
      {
        input: { type: String, default: '' },
        expectedOutput: { type: String, default: '' },
      },
    ],
    marks: {
      type: Number,
      default: 1,
      min: [1, 'Marks must be at least 1'],
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Intermediate', 'Hard'],
      default: 'Intermediate',
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

