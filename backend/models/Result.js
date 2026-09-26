const mongoose = require('mongoose');

const singleAnswerSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    selectedOption: {
      type: Number,
      default: -1, // -1 means unattempted/skipped for MCQ
    },
    submittedCode: {
      type: String,
      default: '',
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
    marksObtained: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
      required: true,
      index: true,
    },
    attemptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attempt',
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Intermediate', 'Hard', 'Mixed'],
      default: 'Intermediate',
    },
    answers: [singleAnswerSchema],
    correctAnswersCount: {
      type: Number,
      default: 0,
    },
    incorrectAnswersCount: {
      type: Number,
      default: 0,
    },
    unansweredCount: {
      type: Number,
      default: 0,
    },
    mcqScore: {
      type: Number,
      default: 0,
    },
    codingScore: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    submissionType: {
      type: String,
      enum: ['manual', 'automatic'],
      default: 'manual',
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
