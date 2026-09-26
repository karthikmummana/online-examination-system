const User = require('../models/User');
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const Result = require('../models/Result');

// @desc    Get all students with performance statistics
// @route   GET /api/admin/students
// @access  Private/Admin
const getStudentsList = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' })
      .select('-password')
      .sort({ createdAt: -1 });

    const studentStats = await Promise.all(
      students.map(async (student) => {
        const results = await Result.find({ studentId: student._id });
        const examsAttempted = results.length;
        const totalPercentage = results.reduce((acc, r) => acc + (r.percentage || 0), 0);
        const averageScore = examsAttempted > 0 ? Number((totalPercentage / examsAttempted).toFixed(1)) : 0;

        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          createdAt: student.createdAt,
          examsAttempted,
          averageScore,
        };
      })
    );

    res.json(studentStats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update current user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.body.name) {
      user.name = req.body.name.trim();
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      createdAt: updatedUser.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Admin Dashboard summary metrics
// @route   GET /api/admin/stats
// @access  Private/Admin
const getAdminStats = async (req, res) => {
  try {
    const [totalExams, publishedExams, totalStudents, totalQuestions, allResults] = await Promise.all([
      Exam.countDocuments(),
      Exam.countDocuments({ status: 'published' }),
      User.countDocuments({ role: 'student' }),
      Question.countDocuments(),
      Result.find().select('percentage score totalMarks submittedAt'),
    ]);

    const totalAttempts = allResults.length;
    const avgScore =
      totalAttempts > 0
        ? Number(
            (
              allResults.reduce((sum, r) => sum + (r.percentage || 0), 0) /
              totalAttempts
            ).toFixed(1)
          )
        : 0;

    const recentExams = await Exam.find()
      .populate('questionsCount')
      .sort({ createdAt: -1 })
      .limit(5);

    const recentAttempts = await Result.find()
      .populate('studentId', 'name email')
      .populate('examId', 'title duration totalMarks')
      .sort({ submittedAt: -1 })
      .limit(5);

    res.json({
      totalExams,
      publishedExams,
      totalStudents,
      totalQuestions,
      totalAttempts,
      averagePerformance: avgScore,
      recentExams,
      recentAttempts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Student Dashboard summary metrics
// @route   GET /api/student/stats
// @access  Private/Student
const getStudentStats = async (req, res) => {
  try {
    const studentId = req.user._id;

    const [publishedExams, studentResults] = await Promise.all([
      Exam.find({ status: 'published' }).populate('questionsCount').sort({ createdAt: -1 }),
      Result.find({ studentId })
        .populate('examId', 'title duration totalMarks')
        .sort({ submittedAt: -1 }),
    ]);

    const completedExamsCount = studentResults.length;
    const totalPercentage = studentResults.reduce(
      (sum, r) => sum + (r.percentage || 0),
      0
    );
    const averageScore =
      completedExamsCount > 0
        ? Number((totalPercentage / completedExamsCount).toFixed(1))
        : 0;

    const recentResult = studentResults.length > 0 ? studentResults[0] : null;

    res.json({
      availableExamsCount: publishedExams.length,
      completedExamsCount,
      averageScore,
      recentResult,
      availableExams: publishedExams.slice(0, 4),
      recentResults: studentResults.slice(0, 5),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStudentsList,
  updateProfile,
  getAdminStats,
  getStudentStats,
};
