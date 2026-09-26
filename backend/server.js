const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const User = require('./models/User');
const { seedData } = require('./scripts/seed');

// Route imports
const authRoutes = require('./routes/authRoutes');
const examRoutes = require('./routes/examRoutes');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'Online Examination & Assessment API',
    timestamp: new Date().toISOString(),
  });
});

const { getAdminResults } = require('./controllers/resultController');
const { getStudentsList, getAdminStats } = require('./controllers/userController');
const { protect } = require('./middleware/authMiddleware');
const { adminOnly } = require('./middleware/adminMiddleware');

app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/users', userRoutes);

// Direct /api/admin convenience endpoints matching REST API design
app.get('/api/admin/results', protect, adminOnly, getAdminResults);
app.get('/api/admin/students', protect, adminOnly, getStudentsList);
app.get('/api/admin/stats', protect, adminOnly, getAdminStats);

// Centralized Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Database Connection
    await connectDB();

    // Auto-seed development database if empty
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log('[Server] Database is empty. Running initial development seed...');
      await seedData(false);
    }

    const server = app.listen(PORT, () => {
      console.log(`[Server] Online Examination Backend running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
    });

    return server;
  } catch (err) {
    console.error('[Server] Fatal startup failure:', err.message);
    process.exit(1);
  }
};

const server = startServer();

module.exports = { app, server };
