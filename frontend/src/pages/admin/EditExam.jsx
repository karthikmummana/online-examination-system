import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import * as examService from '../../services/examService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft, Save, AlertCircle, CheckCircle2 } from 'lucide-react';

const EditExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [questionsPerAttempt, setQuestionsPerAttempt] = useState('');
  const [category, setCategory] = useState('Programming');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [status, setStatus] = useState('draft');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const data = await examService.getExamById(id);
        setTitle(data.title);
        setDescription(data.description || '');
        setDuration(data.duration);
        setQuestionsPerAttempt(data.questionsPerAttempt || 10);
        setCategory(data.category || 'Programming');
        setDifficulty(data.difficulty || 'Intermediate');
        setStatus(data.status);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load assessment');
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }

    try {
      setSaving(true);
      await examService.updateExam(id, {
        title: title.trim(),
        description: description.trim(),
        duration: Number(duration),
        questionsPerAttempt: Number(questionsPerAttempt) || 10,
        totalMarks: Number(questionsPerAttempt) || 10,
        category,
        difficulty,
        status,
      });

      setSuccess('Assessment updated successfully!');
      setTimeout(() => {
        navigate('/admin/exams');
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update assessment');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Link to="/admin/exams" className="btn btn-outline" style={{ padding: '0.45rem 0.75rem' }}>
              <ArrowLeft size={16} />
            </Link>
            <div>
              <h1 style={{ fontSize: '1.85rem' }}>Edit Assessment</h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                Update title, domain category, difficulty, duration, and question allocation
              </p>
            </div>
          </div>

          {error && (
            <div className="alert alert-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <CheckCircle2 size={18} />
              <span>{success}</span>
            </div>
          )}

          {loading ? (
            <LoadingSpinner fullPage message="Loading assessment parameters..." />
          ) : (
            <div className="glass-card" style={{ padding: '2.25rem', background: '#ffffff' }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="editTitle">Assessment Title *</label>
                  <input
                    id="editTitle"
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="editDesc">Description</label>
                  <textarea
                    id="editDesc"
                    className="form-control"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="editCategory">Domain Category</label>
                    <select
                      id="editCategory"
                      className="form-control"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Programming">Programming Languages</option>
                      <option value="Frontend">Frontend Development</option>
                      <option value="Backend">Backend Development</option>
                      <option value="Database">Database Assessments</option>
                      <option value="Interview Prep">Interview Preparation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="editDifficulty">Difficulty Level</label>
                    <select
                      id="editDifficulty"
                      className="form-control"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="editDuration">Duration (Minutes) *</label>
                    <input
                      id="editDuration"
                      type="number"
                      min="1"
                      className="form-control"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="editQPerAttempt">Questions Per Attempt *</label>
                    <input
                      id="editQPerAttempt"
                      type="number"
                      min="1"
                      className="form-control"
                      value={questionsPerAttempt}
                      onChange={(e) => setQuestionsPerAttempt(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="editStatus">Publication Status</label>
                  <select
                    id="editStatus"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="draft">Draft (Hidden from students)</option>
                    <option value="published">Published (Visible to students)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => navigate('/admin/exams')}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={saving}
                  >
                    {saving ? <LoadingSpinner message="Saving..." /> : <><Save size={16} /> Save Changes</>}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditExam;
