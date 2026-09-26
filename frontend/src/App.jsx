import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Register from './pages/public/Register';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import AvailableExams from './pages/student/AvailableExams';
import ExamInstructions from './pages/student/ExamInstructions';
import DifficultySelection from './pages/student/DifficultySelection';
import TakeExam from './pages/student/TakeExam';
import Result from './pages/student/Result';
import MyResults from './pages/student/MyResults';
import Profile from './pages/student/Profile';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageExams from './pages/admin/ManageExams';
import CreateExam from './pages/admin/CreateExam';
import EditExam from './pages/admin/EditExam';
import ManageQuestions from './pages/admin/ManageQuestions';
import AdminResults from './pages/admin/AdminResults';
import Students from './pages/admin/Students';

// Layout wrapper to hide top navbar on admin pages and inside distraction-free exam room
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  const isTakeExamPath = location.pathname.includes('/take');

  return (
    <div className="app-root">
      {!isAdminPath && !isTakeExamPath && <Navbar />}
      {children}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Student Protected Routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute allowedRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/exams"
              element={
                <ProtectedRoute allowedRole="student">
                  <AvailableExams />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/exam/:id/difficulty"
              element={
                <ProtectedRoute allowedRole="student">
                  <DifficultySelection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/exam/:id/instructions"
              element={
                <ProtectedRoute allowedRole="student">
                  <ExamInstructions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/exam/:id/take"
              element={
                <ProtectedRoute allowedRole="student">
                  <TakeExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/result/:resultId"
              element={
                <ProtectedRoute allowedRole="student">
                  <Result />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/results"
              element={
                <ProtectedRoute allowedRole="student">
                  <MyResults />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/profile"
              element={
                <ProtectedRoute allowedRole="student">
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Admin Protected Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/exams"
              element={
                <ProtectedRoute allowedRole="admin">
                  <ManageExams />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/exams/create"
              element={
                <ProtectedRoute allowedRole="admin">
                  <CreateExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/exams/:id/edit"
              element={
                <ProtectedRoute allowedRole="admin">
                  <EditExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/exams/:id/questions"
              element={
                <ProtectedRoute allowedRole="admin">
                  <ManageQuestions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/results"
              element={
                <ProtectedRoute allowedRole="admin">
                  <AdminResults />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute allowedRole="admin">
                  <Students />
                </ProtectedRoute>
              }
            />

            {/* Fallback Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
