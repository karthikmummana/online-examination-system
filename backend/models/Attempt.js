const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema(
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
    questionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    startedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['in-progress', 'completed'],
      default: 'in-progress',
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Intermediate', 'Hard', 'Mixed'],
      default: 'Intermediate',
    },
    submittedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Attempt = mongoose.model('Attempt', attemptSchema);
module.exports = Attempt;
