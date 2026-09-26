import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as resultService from '../../services/resultService';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowLeft,
  ListOrdered,
  Sparkles,
  AlertCircle,
  RotateCcw,
  Code,
} from 'lucide-react';

const Result = () => {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const data = await resultService.getResultById(resultId);
        setResult(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch assessment results');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [resultId]);

  if (loading) {
    return <LoadingSpinner fullPage message="Evaluating performance and calculating scores..." />;
  }

  if (error || !result) {
    return (
      <div className="page-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <div className="alert alert-error" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          <AlertCircle size={20} />
          <span>{error || 'Result record could not be retrieved.'}</span>
        </div>
        <Link to="/student/dashboard" className="btn btn-secondary">
          <ArrowLeft size={16} /> Return to Dashboard
        </Link>
      </div>
    );
  }

  const exam = result.examId || {};
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
  const totalQuestions = result.answers ? result.answers.length : 0;
  const isPassed = result.percentage >= 60;
  const difficultyLabel = result.difficulty || exam.difficulty || 'Intermediate';

  const handlePracticeAgain = () => {
    if (exam._id) {
      navigate(`/student/exam/${exam._id}/difficulty`);
    } else {
      navigate('/student/exams');
    }
  };

  return (
    <div className="page-container">
      <div className="result-container">
        <div className="result-hero">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span
              className="badge"
              style={{
                background: isPassed ? 'var(--accent-emerald-light)' : 'var(--accent-amber-light)',
                color: isPassed ? 'var(--accent-emerald)' : 'var(--accent-amber)',
              }}
            >
              {isPassed ? 'Passed' : 'Needs Practice'}
            </span>
            <span
              className={`badge badge-${
                difficultyLabel === 'Easy'
                  ? 'success'
                  : difficultyLabel === 'Hard'
                  ? 'purple'
                  : 'primary'
              }`}
            >
              Difficulty: {difficultyLabel}
            </span>
            <span className="badge badge-secondary">Submission: {result.submissionType || 'manual'}</span>
          </div>

          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.35rem' }}>
            {exam.title || 'Assessment Outcome'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Submitted on {new Date(result.submittedAt).toLocaleDateString()} at{' '}
            {new Date(result.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

        {/* Central Score Card */}
        <div className="score-display-box">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem', fontWeight: 600 }}>
            Overall Performance Score
          </div>
          <div className="score-number">
            {result.score} <span style={{ fontSize: '1.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ {result.totalMarks}</span>
          </div>
          <div className="score-percentage">
            {result.percentage}% Accuracy
          </div>

          {(result.mcqScore > 0 || result.codingScore > 0) && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
              <div>MCQ Score: <strong style={{ color: 'var(--accent-primary)' }}>{result.mcqScore || 0}</strong></div>
              <div>Coding Score: <strong style={{ color: 'var(--accent-purple)' }}>{result.codingScore || 0}</strong></div>
            </div>
          )}
        </div>

        {/* Breakdown Cards Grid */}
        <div className="result-breakdown-grid">
          <div className="breakdown-card">
            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>
              <HelpCircle size={22} style={{ margin: '0 auto' }} />
            </div>
            <div className="breakdown-value">{totalQuestions}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Assigned Questions</div>
          </div>

          <div className="breakdown-card">
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '0.3rem' }}>
              <CheckCircle2 size={22} style={{ margin: '0 auto' }} />
            </div>
            <div className="breakdown-value" style={{ color: 'var(--accent-emerald)' }}>
              {result.correctAnswersCount}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Correct Answers</div>
          </div>

          <div className="breakdown-card">
            <div style={{ color: 'var(--accent-rose)', marginBottom: '0.3rem' }}>
              <XCircle size={22} style={{ margin: '0 auto' }} />
            </div>
            <div className="breakdown-value" style={{ color: 'var(--accent-rose)' }}>
              {result.incorrectAnswersCount}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Incorrect Answers</div>
          </div>

          <div className="breakdown-card">
            <div style={{ color: 'var(--accent-amber)', marginBottom: '0.3rem' }}>
              <AlertCircle size={22} style={{ margin: '0 auto' }} />
            </div>
            <div className="breakdown-value" style={{ color: 'var(--accent-amber)' }}>
              {result.unansweredCount || 0}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Unanswered</div>
          </div>
        </div>

        {/* Prominent Action Buttons - Includes Prominent Practice Again */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button
            onClick={handlePracticeAgain}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
          >
            <RotateCcw size={18} /> Practice Again (New Question Set)
          </button>
          <Link to="/student/results" className="btn btn-secondary">
            <ListOrdered size={16} /> My Results History
          </Link>
          <Link to="/student/dashboard" className="btn btn-outline">
            <ArrowLeft size={16} /> Dashboard
          </Link>
        </div>

        {/* Detailed Question Review Section */}
        {result.answers && result.answers.length > 0 && (
          <div style={{ textAlign: 'left', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
              Attempt Question Breakdown
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {result.answers.map((ans, idx) => {
                const qObj = ans.questionId;
                if (!qObj) return null;

                const hasSelected = ans.selectedOption !== undefined && ans.selectedOption !== -1;

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      background: '#ffffff',
                      border: `1px solid ${
                        ans.isCorrect
                          ? 'rgba(5, 150, 105, 0.3)'
                          : hasSelected
                          ? 'rgba(220, 38, 38, 0.3)'
                          : 'rgba(217, 119, 6, 0.3)'
                      }`,
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="tech-tag" style={{ fontWeight: 700 }}>
                        QUESTION {idx + 1}
                      </span>
                      <span
                        className="badge"
                        style={{
                          background: ans.isCorrect
                            ? 'var(--accent-emerald-light)'
                            : hasSelected
                            ? 'var(--accent-rose-light)'
                            : 'var(--accent-amber-light)',
                          color: ans.isCorrect
                            ? 'var(--accent-emerald)'
                            : hasSelected
                            ? 'var(--accent-rose)'
                            : 'var(--accent-amber)',
                        }}
                      >
                        {ans.isCorrect
                          ? `+${ans.marksObtained} Marks (Correct)`
                          : hasSelected
                          ? '0 Marks (Incorrect)'
                          : '0 Marks (Skipped)'}
                      </span>
                    </div>

                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                      {qObj.questionText}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem' }}>
                      {qObj.options &&
                        qObj.options.map((opt, optIdx) => {
                          const isStudentPick = ans.selectedOption === optIdx;
                          const isTheCorrectAnswer = qObj.correctAnswer === optIdx;

                          let bg = 'var(--bg-primary)';
                          let border = 'var(--border-subtle)';
                          let color = 'var(--text-primary)';

                          if (isTheCorrectAnswer) {
                            bg = 'var(--accent-emerald-light)';
                            border = 'rgba(5, 150, 105, 0.3)';
                            color = 'var(--accent-emerald)';
                          } else if (isStudentPick && !ans.isCorrect) {
                            bg = 'var(--accent-rose-light)';
                            border = 'rgba(220, 38, 38, 0.3)';
                            color = 'var(--accent-rose)';
                          }

                          return (
                            <div
                              key={optIdx}
                              style={{
                                padding: '0.6rem 0.85rem',
                                borderRadius: 'var(--radius-sm)',
                                background: bg,
                                border: `1px solid ${border}`,
                                color: color,
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: isTheCorrectAnswer || isStudentPick ? 600 : 400,
                              }}
                            >
                              <span style={{ fontWeight: 700 }}>{optionLabels[optIdx]}.</span>
                              <span>{opt}</span>
                              {isTheCorrectAnswer && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700 }}>✓ Correct</span>}
                              {isStudentPick && !isTheCorrectAnswer && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700 }}>✗ Your Answer</span>}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
