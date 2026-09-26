import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as resultService from '../../services/resultService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Award, Calendar, ExternalLink, ArrowRight, RotateCcw, Code, Trash2 } from 'lucide-react';

const MyResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [clearingAll, setClearingAll] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await resultService.getMyResults();
        setResults(data);
      } catch (err) {
        console.error('Failed to load student result history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleDelete = async (resultId) => {
    if (!window.confirm('Are you sure you want to delete this assessment attempt record?')) {
      return;
    }

    setDeletingId(resultId);
    try {
      await resultService.deleteResult(resultId);
      setResults((prev) => prev.filter((r) => r._id !== resultId));
    } catch (err) {
      console.error('Failed to delete attempt result:', err);
      alert('Failed to delete attempt record. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleClearAll = async () => {
    if (!window.confirm('Are you sure you want to delete ALL assessment attempt records from your history? This action cannot be undone.')) {
      return;
    }

    setClearingAll(true);
    try {
      await resultService.clearAllResults();
      setResults([]);
    } catch (err) {
      console.error('Failed to clear attempt history:', err);
      alert('Failed to clear attempt history. Please try again.');
    } finally {
      setClearingAll(false);
    }
  };

  return (
    <div className="page-container">
      <div
        style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.75rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Assessment Attempt History</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Review your performance across all assessment attempts. Every attempt is logged independently.
          </p>
        </div>
        {results.length > 0 && (
          <button
            onClick={handleClearAll}
            disabled={clearingAll}
            className="btn btn-outline"
            style={{
              borderColor: 'rgba(239, 68, 68, 0.4)',
              color: 'var(--accent-rose, #f43f5e)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              opacity: clearingAll ? 0.6 : 1,
            }}
            title="Delete all assessment attempt records from history"
          >
            <Trash2 size={16} /> {clearingAll ? 'Clearing All...' : 'Clear All History'}
          </button>
        )}
      </div>

      {loading ? (
        <LoadingSpinner fullPage message="Retrieving your attempt history..." />
      ) : results.length > 0 ? (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Assessment Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Score</th>
                <th>Accuracy</th>
                <th>Date & Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, idx) => {
                const isPassed = result.percentage >= 60;
                const exam = result.examId || {};
                const dateObj = new Date(result.submittedAt);
                const diffLabel = result.difficulty || exam.difficulty || 'Intermediate';

                return (
                  <tr key={result._id}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        {exam.title || 'Assessment'}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Submission: {result.submissionType || 'manual'}
                      </div>
                    </td>
                    <td>
                      <span className="tech-tag">
                        <Code size={12} /> {exam.category || 'Programming'}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-${
                          diffLabel === 'Easy'
                            ? 'success'
                            : diffLabel === 'Hard'
                            ? 'purple'
                            : 'primary'
                        }`}
                      >
                        {diffLabel}
                      </span>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {result.score} / {result.totalMarks}
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background:
                            result.percentage >= 70
                              ? 'var(--accent-emerald-light)'
                              : result.percentage >= 50
                              ? 'var(--accent-amber-light)'
                              : 'var(--accent-rose-light)',
                          color:
                            result.percentage >= 70
                              ? 'var(--accent-emerald)'
                              : result.percentage >= 50
                              ? 'var(--accent-amber)'
                              : 'var(--accent-rose)',
                        }}
                      >
                        {result.percentage}%
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={14} />
                        {dateObj.toLocaleDateString()} {dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Link
                          to={`/student/result/${result._id}`}
                          className="btn btn-outline"
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', gap: '0.3rem' }}
                        >
                          View Report <ExternalLink size={13} />
                        </Link>
                        {exam._id && (
                          <Link
                            to={`/student/exam/${exam._id}/difficulty`}
                            className="btn btn-secondary"
                            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', gap: '0.3rem' }}
                            title="Start another attempt choosing your difficulty level"
                          >
                            <RotateCcw size={13} /> Retake
                          </Link>
                        )}
                        <button
                          onClick={() => handleDelete(result._id)}
                          disabled={deletingId === result._id}
                          className="btn btn-outline"
                          style={{
                            padding: '0.35rem 0.65rem',
                            fontSize: '0.8rem',
                            gap: '0.3rem',
                            borderColor: 'rgba(239, 68, 68, 0.35)',
                            color: 'var(--accent-rose, #f43f5e)',
                            opacity: deletingId === result._id ? 0.6 : 1,
                          }}
                          title="Delete this assessment attempt record"
                        >
                          <Trash2 size={13} /> {deletingId === result._id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="glass-card empty-state">
          <Award className="empty-state-icon" />
          <h3>No assessment attempts recorded yet</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When you complete an assessment, your scores and reports will appear here.
          </p>
          <Link to="/student/exams" className="btn btn-primary">
            Explore Assessments <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyResults;
