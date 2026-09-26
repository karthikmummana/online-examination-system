import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, HelpCircle, Award, ArrowRight, RotateCcw, Code, Layers, Zap } from 'lucide-react';

const ExamCard = ({ exam, userResults = [] }) => {
  // Find all previous attempts by logged in student for this exam
  const examAttempts = userResults.filter(
    (r) => r.examId && (r.examId._id === exam._id || r.examId === exam._id)
  );
  const attemptCount = examAttempts.length;
  const isAttempted = attemptCount > 0;

  // Best score percentage if attempted
  let bestScore = 0;
  if (isAttempted) {
    bestScore = Math.max(...examAttempts.map((r) => r.percentage || 0));
  }

  // Question counts
  const qPerAttempt = exam.questionsPerAttempt || 10;
  const totalPoolCount = exam.questionsCount || qPerAttempt;

  return (
    <div className="exam-card">
      <div>
        <div className="exam-card-header">
          <div>
            <span className="tech-tag" style={{ marginBottom: '0.5rem' }}>
              <Code size={13} /> {exam.category || 'Programming'}
            </span>
            <h3 className="exam-card-title">{exam.title}</h3>
          </div>
          {exam.difficulty && (
            <span
              className={`badge badge-${
                exam.difficulty === 'Beginner'
                  ? 'success'
                  : exam.difficulty === 'Advanced'
                  ? 'purple'
                  : 'primary'
              }`}
            >
              {exam.difficulty}
            </span>
          )}
        </div>

        <p className="exam-card-desc">
          {exam.description || 'Comprehensive assessment covering key domain concepts and practical evaluation.'}
        </p>
      </div>

      <div>
        {isAttempted && (
          <div style={{ marginBottom: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>
              Attempted: <strong>{attemptCount} {attemptCount === 1 ? 'time' : 'times'}</strong>
            </span>
            <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>
              Best Score: {bestScore}%
            </span>
          </div>
        )}

        <div className="exam-card-meta">
          <div className="meta-item" title={`Each attempt presents ${qPerAttempt} randomized questions`}>
            <HelpCircle size={15} style={{ color: 'var(--accent-primary)' }} />
            <span>{qPerAttempt} Questions</span>
          </div>
          <div className="meta-item">
            <Clock size={15} style={{ color: 'var(--accent-amber)' }} />
            <span>{exam.duration} Mins</span>
          </div>
          <div className="meta-item">
            <Award size={15} style={{ color: 'var(--accent-emerald)' }} />
            <span>{exam.totalMarks || qPerAttempt} Marks</span>
          </div>
        </div>

        <Link
          to={`/student/exam/${exam._id}/difficulty`}
          className={`btn ${isAttempted ? 'btn-secondary' : 'btn-primary'}`}
          style={{ width: '100%' }}
        >
          {isAttempted ? (
            <>
              <RotateCcw size={16} /> Practice Again
            </>
          ) : (
            <>
              Start Assessment <ArrowRight size={16} />
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
