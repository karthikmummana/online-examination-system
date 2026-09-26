import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import * as resultService from '../../services/resultService';
import StatCard from '../../components/StatCard';
import ExamCard from '../../components/ExamCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  FileText,
  CheckCircle,
  Percent,
  Award,
  ArrowRight,
  Clock,
  Calendar,
} from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await resultService.getStudentStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to load student dashboard metrics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <LoadingSpinner fullPage message="Loading your dashboard..." />;
  }

  const recentResult = stats?.recentResult;

  return (
    <div className="page-container">
      {/* Welcome Greeting */}
      <div className="dashboard-welcome">
        <div className="welcome-text">
          <h1>Welcome, {user?.name}</h1>
          <p>Track your assessment performance and discover newly scheduled tests</p>
        </div>
        <Link to="/student/exams" className="btn btn-primary">
          Explore Available Exams <ArrowRight size={16} />
        </Link>
      </div>

      {/* 4 Stat Cards */}
      <div className="stats-grid">
        <StatCard
          title="Available Exams"
          value={stats?.availableExamsCount ?? 0}
          subtext="Ready to attempt"
          icon={FileText}
          color="#6366f1"
          bgGradient="rgba(99, 102, 241, 0.15)"
        />
        <StatCard
          title="Completed Exams"
          value={stats?.completedExamsCount ?? 0}
          subtext="Submitted tests"
          icon={CheckCircle}
          color="#10b981"
          bgGradient="rgba(16, 185, 129, 0.15)"
        />
        <StatCard
          title="Average Score"
          value={`${stats?.averageScore ?? 0}%`}
          subtext="Across all attempts"
          icon={Percent}
          color="#06b6d4"
          bgGradient="rgba(6, 182, 212, 0.15)"
        />
        <StatCard
          title="Recent Result"
          value={recentResult ? `${recentResult.score}/${recentResult.totalMarks}` : 'N/A'}
          subtext={recentResult ? `${recentResult.percentage}% accuracy` : 'No attempts yet'}
          icon={Award}
          color="#f59e0b"
          bgGradient="rgba(245, 158, 11, 0.15)"
        />
      </div>

      {/* Section 1: Available Exams */}
      <div style={{ marginBottom: '3rem' }}>
        <div className="section-header">
          <h2>Available Exams</h2>
          <Link to="/student/exams" className="view-all-link">
            View All Exams <ArrowRight size={14} />
          </Link>
        </div>

        {stats?.availableExams && stats.availableExams.length > 0 ? (
          <div className="exams-grid">
            {stats.availableExams.map((exam) => (
              <ExamCard key={exam._id} exam={exam} />
            ))}
          </div>
        ) : (
          <div className="glass-card empty-state">
            <FileText className="empty-state-icon" />
            <h3>No exams currently available</h3>
            <p>Check back later once instructors publish new assessments.</p>
          </div>
        )}
      </div>

      {/* Section 2: Recent Results */}
      <div>
        <div className="section-header">
          <h2>Recent Assessment Results</h2>
          <Link to="/student/results" className="view-all-link">
            View Full History <ArrowRight size={14} />
          </Link>
        </div>

        {stats?.recentResults && stats.recentResults.length > 0 ? (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Exam Title</th>
                  <th>Score</th>
                  <th>Total Marks</th>
                  <th>Percentage</th>
                  <th>Date Attempted</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentResults.map((result) => (
                  <tr key={result._id}>
                    <td style={{ fontWeight: 600 }}>{result.examId?.title || 'Assessment'}</td>
                    <td>{result.score}</td>
                    <td>{result.totalMarks}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            result.percentage >= 70
                              ? 'rgba(16, 185, 129, 0.15)'
                              : result.percentage >= 40
                              ? 'rgba(245, 158, 11, 0.15)'
                              : 'rgba(244, 63, 94, 0.15)',
                          color:
                            result.percentage >= 70
                              ? '#34d399'
                              : result.percentage >= 40
                              ? '#fbbf24'
                              : '#fb7185',
                        }}
                      >
                        {result.percentage}%
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={14} />
                        {new Date(result.submittedAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td>
                      <Link to={`/student/result/${result._id}`} className="btn btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                        View Result
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="glass-card empty-state">
            <Award className="empty-state-icon" />
            <h3>You haven't completed any assessments yet</h3>
            <p>Take an available assessment to see your performance metrics and grades here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
