import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import * as examService from '../../services/examService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { ArrowLeft, Save, AlertCircle } from 'lucide-react';

const CreateExam = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('20');
  const [questionsPerAttempt, setQuestionsPerAttempt] = useState('10');
  const [category, setCategory] = useState('Programming');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [status, setStatus] = useState('draft');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Assessment title is required');
      return;
    }

    const durationNum = Number(duration);
    if (isNaN(durationNum) || durationNum <= 0) {
      setError('Duration must be a positive number of minutes');
      return;
    }

    try {
      setSubmitting(true);
      const newExam = await examService.createExam({
        title: title.trim(),
        description: description.trim(),
        duration: durationNum,
        questionsPerAttempt: Number(questionsPerAttempt) || 10,
        totalMarks: Number(questionsPerAttempt) || 10,
        category,
        difficulty,
        status,
      });

      // After successful creation, redirect to question management
      navigate(`/admin/exams/${newExam._id}/questions`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create assessment');
    } finally {
      setSubmitting(false);
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
              <h1 style={{ fontSize: '1.85rem' }}>Create New Technical Assessment</h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                Configure parameters and question pool settings before adding questions
              </p>
            </div>
          </div>

          {error && (
            <div className="alert alert-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className="glass-card" style={{ padding: '2.25rem', background: '#ffffff' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="examTitle">
                  Assessment Title *
                </label>
                <input
                  id="examTitle"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Python Skills Assessment"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="examDesc">
                  Description
                </label>
                <textarea
                  id="examDesc"
                  className="form-control"
                  rows={3}
                  placeholder="Synopsis of topics evaluated and practical application skills..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="category">
                    Domain Category
                  </label>
                  <select
                    id="category"
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
                  <label className="form-label" htmlFor="difficulty">
                    Difficulty Level
                  </label>
                  <select
                    id="difficulty"
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
                  <label className="form-label" htmlFor="examDuration">
                    Duration (Minutes) *
                  </label>
                  <input
                    id="examDuration"
                    type="number"
                    min="1"
                    className="form-control"
                    placeholder="e.g. 20"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="questionsPerAttempt">
                    Questions Per Attempt *
                  </label>
                  <input
                    id="questionsPerAttempt"
                    type="number"
                    min="1"
                    className="form-control"
                    placeholder="e.g. 10"
                    value={questionsPerAttempt}
                    onChange={(e) => setQuestionsPerAttempt(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="examStatus">
                  Publication Status
                </label>
                <select
                  id="examStatus"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="draft">Draft (Hidden while authoring)</option>
                  <option value="published">Published (Available for students)</option>
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
                  disabled={submitting}
                >
                  {submitting ? <LoadingSpinner message="Creating..." /> : <><Save size={16} /> Save & Manage Questions</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateExam;
