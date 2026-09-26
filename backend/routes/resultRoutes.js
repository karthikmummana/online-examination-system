const express = require('express');
const router = express.Router();
const {
  getMyResults,
  getResultById,
  getAdminResults,
  deleteResult,
  clearAllMyResults,
} = require('../controllers/resultController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

router.get('/my-results', protect, getMyResults);
router.delete('/clear-all', protect, clearAllMyResults);
router.get('/admin/all', protect, adminOnly, getAdminResults);
router.get('/:id', protect, getResultById);
router.delete('/:id', protect, deleteResult);

module.exports = router;


