import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import StatCard from '../../components/StatCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import * as resultService from '../../services/resultService';
import {
  FileSpreadsheet,
  CheckCircle,
  Users,
  HelpCircle,
  BarChart2,
  Percent,
  PlusCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
  Code,
} from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const data = await resultService.getAdminStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to load admin stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStats();
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <div className="admin-header">
          <div className="admin-title-box">
            <h1>Assessment Platform Console</h1>
            <p>Monitor platform exam metrics, candidate performance, and manage technical assessments</p>
          </div>

          <Link to="/admin/exams/create" className="btn btn-primary">
            <PlusCircle size={16} /> Create New Assessment
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner fullPage message="Aggregating assessment analytics..." />
        ) : (
          <>
            {/* 6 Metric Stat Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <StatCard
                title="Total Assessments"
                value={stats?.totalExams ?? 0}
                subtext="Created assessments"
                icon={FileSpreadsheet}
                color="var(--accent-primary)"
                bgGradient="var(--accent-primary-light)"
              />
              <StatCard
                title="Published Tests"
                value={stats?.publishedExams ?? 0}
                subtext="Active for candidates"
                icon={CheckCircle}
                color="var(--accent-emerald)"
                bgGradient="var(--accent-emerald-light)"
              />
              <StatCard
                title="Registered Students"
                value={stats?.totalStudents ?? 0}
                subtext="Total candidates"
                icon={Users}
                color="var(--accent-cyan)"
                bgGradient="var(--accent-cyan-light)"
              />
              <StatCard
                title="Question Pool Size"
                value={stats?.totalQuestions ?? 0}
                subtext="In question bank"
                icon={HelpCircle}
                color="var(--accent-purple)"
                bgGradient="var(--accent-purple-light)"
              />
              <StatCard
                title="Total Attempts"
                value={stats?.totalAttempts ?? 0}
                subtext="Completed submissions"
                icon={BarChart2}
                color="var(--accent-amber)"
                bgGradient="var(--accent-amber-light)"
              />
              <StatCard
                title="Average Performance"
                value={`${stats?.averagePerformance ?? 0}%`}
                subtext="Across all attempts"
                icon={Percent}
                color="var(--accent-emerald)"
                bgGradient="var(--accent-emerald-light)"
              />
            </div>

            {/* Section 1: Recent Assessments */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-header">
                <h2>Recent Assessments</h2>
                <Link to="/admin/exams" className="view-all-link">
                  Manage All Assessments <ArrowRight size={14} />
                </Link>
              </div>

              {stats?.recentExams && stats.recentExams.length > 0 ? (
                <div className="table-container">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Question Pool</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentExams.map((exam) => (
                        <tr key={exam._id}>
                          <td style={{ fontWeight: 600 }}>{exam.title}</td>
                          <td>
                            <span className="tech-tag">
                              <Code size={12} /> {exam.category || 'Programming'}
                            </span>
                          </td>
                          <td>{exam.duration} mins</td>
                          <td>
                            <span className={`badge badge-${exam.status}`}>
                              {exam.status}
                            </span>
                          </td>
                          <td>{exam.questionsCount || 0} Qs</td>
                          <td>
                            <Link
                              to={`/admin/exams/${exam._id}/questions`}
                              className="btn btn-outline"
                              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                            >
                              Questions
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="glass-card empty-state">
                  <FileSpreadsheet className="empty-state-icon" />
                  <h3>No assessments created yet</h3>
                  <p>Click "Create New Assessment" above to add your first technical skill test.</p>
                </div>
              )}
            </div>

            {/* Section 2: Recent Student Submissions */}
            <div>
              <div className="section-header">
                <h2>Recent Student Attempt Submissions</h2>
                <Link to="/admin/results" className="view-all-link">
                  View All Submissions <ArrowRight size={14} />
                </Link>
              </div>

              {stats?.recentAttempts && stats.recentAttempts.length > 0 ? (
                <div className="table-container">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Candidate</th>
                        <th>Assessment</th>
                        <th>Score</th>
                        <th>Accuracy</th>
                        <th>Submitted At</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentAttempts.map((attempt) => (
                        <tr key={attempt._id}>
                          <td>
                            <div style={{ fontWeight: 600 }}>{attempt.studentId?.name || 'Student'}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {attempt.studentId?.email}
                            </div>
                          </td>
                          <td>{attempt.examId?.title || 'Assessment'}</td>
                          <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                            {attempt.score} / {attempt.totalMarks}
                          </td>
                          <td>
                            <span
                              className="badge"
                              style={{
                                background:
                                  attempt.percentage >= 70
                                    ? 'var(--accent-emerald-light)'
                                    : 'var(--accent-amber-light)',
                                color:
                                  attempt.percentage >= 70
                                    ? 'var(--accent-emerald)'
                                    : 'var(--accent-amber)',
                              }}
                            >
                              {attempt.percentage}%
                            </span>
                          </td>
                          <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <Calendar size={13} />
                              {new Date(attempt.submittedAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td>
                            <Link
                              to={`/student/result/${attempt._id}`}
                              className="btn btn-outline"
                              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
                              target="_blank"
                            >
                              View <ExternalLink size={13} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="glass-card empty-state">
                  <BarChart2 className="empty-state-icon" />
                  <h3>No attempts registered yet</h3>
                  <p>When candidates take skill assessments, their live submissions will be logged here.</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
