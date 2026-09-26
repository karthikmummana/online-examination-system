import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as examService from '../../services/examService';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  Zap,
  Target,
  Flame,
  ArrowLeft,
  CheckCircle2,
  Code,
  Clock,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

const DifficultySelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const data = await examService.getExamById(id);
        setExam(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load assessment details');
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [id]);

  const handleSelectDifficulty = (difficultyLevel) => {
    navigate(`/student/exam/${id}/instructions?difficulty=${difficultyLevel.toLowerCase()}`);
  };

  if (loading) {
    return <LoadingSpinner fullPage message="Loading difficulty options..." />;
  }

  if (error || !exam) {
    return (
      <div className="page-container">
        <div className="alert alert-error">
          <AlertTriangle size={20} />
          <span>{error || 'Assessment not found'}</span>
        </div>
        <Link to="/student/exams" className="btn btn-secondary">
          <ArrowLeft size={16} /> Back to Available Assessments
        </Link>
      </div>
    );
  }

  const qPerAttempt = exam.questionsPerAttempt || 10;

  return (
    <div className="page-container">
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="tech-tag" style={{ fontWeight: 700 }}>
              <Code size={13} /> {exam.category || 'Programming'}
            </span>
          </div>
          <h1 style={{ fontSize: '2.1rem', marginBottom: '0.5rem' }}>{exam.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Choose a difficulty level to generate your randomized question paper ({qPerAttempt} Questions, {exam.duration} Mins).
          </p>
        </div>

        {/* Difficulty Cards Container */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {/* Easy Difficulty */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              borderTop: '4px solid var(--accent-emerald)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge badge-success" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                  <Zap size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> EASY
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Level 1</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Fundamental Concepts</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Recommended for beginners looking to test core syntax, basic terminology, and fundamental logic operations.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} /> Core Syntax & Basics
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} /> Beginner MCQs & Coding
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} /> High success rate target
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectDifficulty('easy')}
              className="btn btn-secondary"
              style={{ width: '100%', borderColor: 'var(--accent-emerald)', color: 'var(--accent-emerald)' }}
            >
              Select Easy
            </button>
          </div>

          {/* Intermediate Difficulty */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              borderTop: '4px solid var(--accent-primary)',
              boxShadow: '0 8px 24px rgba(79, 70, 229, 0.15)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                  <Target size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> INTERMEDIATE
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Level 2 (Popular)</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Practical Problem Solving</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Recommended for students with basic knowledge ready for application questions, debugging, and algorithms.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} /> Practical Applications
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} /> Mixed MCQs & Code Logic
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)' }} /> Standard skill evaluation
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectDifficulty('intermediate')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Select Intermediate
            </button>
          </div>

          {/* Hard Difficulty */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              borderTop: '4px solid var(--accent-purple)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge badge-purple" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                  <Flame size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> HARD
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Level 3</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Advanced & Interview Prep</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Recommended for advanced preparation, complex algorithmic scenarios, optimization, and technical interviews.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-purple)' }} /> Advanced Scenarios & DSA
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-purple)' }} /> Complex Coding Challenges
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-purple)' }} /> Interview level benchmark
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleSelectDifficulty('hard')}
              className="btn btn-secondary"
              style={{ width: '100%', borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}
            >
              Select Hard
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/student/exams" className="btn btn-secondary">
            <ArrowLeft size={16} /> Back to Assessments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelection;
