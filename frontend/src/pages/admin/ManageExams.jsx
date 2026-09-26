import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import ConfirmModal from '../../components/ConfirmModal';
import LoadingSpinner from '../../components/LoadingSpinner';
import * as examService from '../../services/examService';
import {
  PlusCircle,
  Edit2,
  Trash2,
  HelpCircle,
  BarChart2,
  Calendar,
  ToggleLeft,
  ToggleRight,
  Code,
  FileSpreadsheet,
} from 'lucide-react';

const ManageExams = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchExams = async () => {
    try {
      setLoading(true);
      const data = await examService.getExams();
      setExams(data);
    } catch (err) {
      console.error('Failed to load exams:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const handleToggleStatus = async (examId) => {
    try {
      setActionLoading(true);
      const res = await examService.toggleExamStatus(examId);
      setMessage(`Assessment status updated to ${res.exam.status}`);
      setTimeout(() => setMessage(''), 3000);
      fetchExams();
    } catch (err) {
      alert('Failed to update status: ' + (err.response?.data?.message || err.message));
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;

    try {
      setActionLoading(true);
      await examService.deleteExam(deleteTarget._id);
      setDeleteTarget(null);
      setMessage('Assessment and related questions deleted successfully');
      setTimeout(() => setMessage(''), 3000);
      fetchExams();
    } catch (err) {
      alert('Failed to delete assessment: ' + (err.response?.data?.message || err.message));
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <div className="admin-header">
          <div className="admin-title-box">
            <h1>Manage Assessments</h1>
            <p>Configure skill tests, manage question pools, and toggle publication status</p>
          </div>

          <Link to="/admin/exams/create" className="btn btn-primary">
            <PlusCircle size={16} /> Create New Assessment
          </Link>
        </div>

        {message && (
          <div className="alert alert-success" style={{ marginBottom: '1.5rem' }}>
            {message}
          </div>
        )}

        {loading ? (
          <LoadingSpinner fullPage message="Loading assessment catalog..." />
        ) : exams.length > 0 ? (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Assessment Title</th>
                  <th>Category</th>
                  <th>Question Pool</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam._id}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exam.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {exam.description || 'No description provided'}
                      </div>
                    </td>
                    <td>
                      <span className="tech-tag">
                        <Code size={12} /> {exam.category || 'Programming'}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>
                        {exam.questionsCount || 0} Pool Qs
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        ({exam.questionsPerAttempt || 10} per attempt)
                      </div>
                    </td>
                    <td style={{ fontWeight: 500 }}>{exam.duration} mins</td>
                    <td>
                      <button
                        onClick={() => handleToggleStatus(exam._id)}
                        className={`badge badge-${exam.status}`}
                        style={{ cursor: 'pointer', border: 'none' }}
                        title="Click to toggle status between Published and Draft"
                        disabled={actionLoading}
                      >
                        {exam.status === 'published' ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
                        {exam.status}
                      </button>
                    </td>
                    <td>
                      <div className="action-btn-group">
                        <Link
                          to={`/admin/exams/${exam._id}/questions`}
                          className="icon-btn"
                          title="Manage Question Bank"
                        >
                          <HelpCircle size={16} style={{ color: 'var(--accent-primary)' }} />
                        </Link>

                        <Link
                          to={`/admin/exams/${exam._id}/edit`}
                          className="icon-btn"
                          title="Edit Assessment Settings"
                        >
                          <Edit2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                        </Link>

                        <Link
                          to={`/admin/results?examId=${exam._id}`}
                          className="icon-btn"
                          title="View Attempt Results"
                        >
                          <BarChart2 size={16} style={{ color: 'var(--accent-emerald)' }} />
                        </Link>

                        <button
                          onClick={() => setDeleteTarget(exam)}
                          className="icon-btn delete"
                          title="Delete Assessment"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="glass-card empty-state">
            <FileSpreadsheet className="empty-state-icon" />
            <h3>No assessments found</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Create an assessment to start accepting student evaluations.
            </p>
            <Link to="/admin/exams/create" className="btn btn-primary">
              <PlusCircle size={16} /> Create First Assessment
            </Link>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          title="Delete Assessment"
          message={`Are you sure you want to permanently delete "${deleteTarget?.title}"? All associated question pools and student results will be deleted.`}
          confirmText="Yes, Delete Assessment"
          cancelText="Cancel"
          isDanger={true}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      </main>
    </div>
  );
};

export default ManageExams;
