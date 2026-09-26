import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import * as resultService from '../../services/resultService';
import * as examService from '../../services/examService';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  FileCheck2,
  Search,
  Calendar,
  ExternalLink,
  Code,
  Trash2,
} from 'lucide-react';

const AdminResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialExamId = searchParams.get('examId') || '';

  const [results, setResults] = useState([]);
  const [exams, setExams] = useState([]);
  const [selectedExamId, setSelectedExamId] = useState(initialExamId);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (resultId) => {
    if (!window.confirm('Are you sure you want to delete this candidate submission record?')) {
      return;
    }

    setDeletingId(resultId);
    try {
      await resultService.deleteResult(resultId);
      setResults((prev) => prev.filter((r) => r._id !== resultId));
    } catch (err) {
      console.error('Failed to delete candidate result:', err);
      alert('Failed to delete record. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };


  // Fetch all exams for dropdown filter
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const examsData = await examService.getExams();
        setExams(examsData);
      } catch (err) {
        console.error('Failed to load exams filter list:', err);
      }
    };
    fetchExams();
  }, []);

  // Fetch results based on filters
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const params = {};
        if (selectedExamId) params.examId = selectedExamId;
        if (searchTerm) params.search = searchTerm;

        const data = await resultService.getAdminResults(params);
        setResults(data);
      } catch (err) {
        console.error('Failed to load admin results:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [selectedExamId, searchTerm]);

  const handleExamChange = (e) => {
    const val = e.target.value;
    setSelectedExamId(val);
    if (val) {
      setSearchParams({ examId: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <div className="admin-header">
          <div className="admin-title-box">
            <h1>Candidate Submission Records</h1>
            <p>Gradebook and detailed attempt histories across all student evaluations</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="filter-bar">
          <div className="filter-input-wrap">
            <Search size={18} />
            <input
              type="text"
              className="form-control"
              placeholder="Search candidate by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ minWidth: '240px' }}>
            <select
              className="form-control"
              value={selectedExamId}
              onChange={handleExamChange}
            >
              <option value="">All Assessments</option>
              {exams.map((exam) => (
                <option key={exam._id} value={exam._id}>
                  {exam.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <LoadingSpinner fullPage message="Retrieving attempt records..." />
        ) : results.length > 0 ? (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Assessment</th>
                  <th>Category</th>
                  <th>Score</th>
                  <th>Accuracy</th>
                  <th>Submission Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => {
                  const student = result.studentId || {};
                  const exam = result.examId || {};
                  const isPassed = result.percentage >= 60;

                  return (
                    <tr key={result._id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{student.name || 'Anonymous Candidate'}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {student.email || 'N/A'}
                        </div>
                      </td>
                      <td style={{ fontWeight: 500 }}>{exam.title || 'Untitled Assessment'}</td>
                      <td>
                        <span className="tech-tag">
                          <Code size={12} /> {exam.category || 'Programming'}
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
                          <Calendar size={13} />
                          {new Date(result.submittedAt).toLocaleDateString()} {new Date(result.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Link
                            to={`/student/result/${result._id}`}
                            className="btn btn-outline"
                            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', gap: '0.3rem' }}
                            target="_blank"
                          >
                            Details <ExternalLink size={13} />
                          </Link>
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
                            title="Delete this submission record"
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
            <FileCheck2 className="empty-state-icon" />
            <h3>No submission records found</h3>
            <p>
              {selectedExamId || searchTerm
                ? 'No candidate results match the applied filters.'
                : 'No candidates have submitted assessments yet.'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminResults;
