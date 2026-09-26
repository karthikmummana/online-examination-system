const express = require('express');
const router = express.Router();
const {
  getExams,
  getExamById,
  createExam,
  updateExam,
  deleteExam,
  toggleExamStatus,
  startAttempt,
} = require('../controllers/examController');
const {
  getExamQuestions,
  addQuestion,
} = require('../controllers/questionController');
const { submitExam } = require('../controllers/resultController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

// Exam CRUD
router.route('/')
  .get(protect, getExams)
  .post(protect, adminOnly, createExam);

router.route('/:id')
  .get(protect, getExamById)
  .put(protect, adminOnly, updateExam)
  .delete(protect, adminOnly, deleteExam);

router.patch('/:id/status', protect, adminOnly, toggleExamStatus);

// Start a new attempt (randomized questions)
router.post('/:id/start-attempt', protect, startAttempt);

// Questions belonging to an exam
router.route('/:examId/questions')
  .get(protect, getExamQuestions)
  .post(protect, adminOnly, addQuestion);

// Student submits an exam
router.post('/:examId/submit', protect, submitExam);

module.exports = router;
