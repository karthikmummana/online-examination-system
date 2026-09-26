const express = require('express');
const router = express.Router();
const {
  updateQuestion,
  deleteQuestion,
} = require('../controllers/questionController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

router.route('/:id')
  .put(protect, adminOnly, updateQuestion)
  .delete(protect, adminOnly, deleteQuestion);

module.exports = router;
