const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide an exam title'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, 'Please provide exam duration in minutes'],
      min: [1, 'Duration must be at least 1 minute'],
    },
    totalMarks: {
      type: Number,
      default: 0,
      min: [0, 'Total marks cannot be negative'],
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    questionsPerAttempt: {
      type: Number,
      default: 10,
      min: [1, 'Questions per attempt must be at least 1'],
    },
    category: {
      type: String,
      default: 'Programming',
      trim: true,
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Intermediate',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual to populate questions count
examSchema.virtual('questionsCount', {
  ref: 'Question',
  localField: '_id',
  foreignField: 'examId',
  count: true,
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
