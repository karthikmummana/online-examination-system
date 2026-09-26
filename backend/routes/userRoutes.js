const express = require('express');
const router = express.Router();
const {
  getStudentsList,
  updateProfile,
  getAdminStats,
  getStudentStats,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');

// Student endpoints
router.get('/student/stats', protect, getStudentStats);
router.put('/profile', protect, updateProfile);

// Admin endpoints
router.get('/admin/students', protect, adminOnly, getStudentsList);
router.get('/admin/stats', protect, adminOnly, getAdminStats);

module.exports = router;
