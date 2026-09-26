import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import * as examService from '../../services/examService';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  Clock,
  HelpCircle,
  Award,
  ArrowLeft,
  Play,
  CheckSquare,
  AlertTriangle,
  Info,
  Shuffle,
  Code,
  Zap,
  Target,
  Flame,
} from 'lucide-react';

const ExamInstructions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedDifficulty = (searchParams.get('difficulty') || 'intermediate').toLowerCase();
  const formattedDifficulty =
    selectedDifficulty === 'easy'
      ? 'Easy'
      : selectedDifficulty === 'hard'
      ? 'Hard'
      : 'Intermediate';

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

  const handleStartExam = () => {
    navigate(`/student/exam/${id}/take?difficulty=${formattedDifficulty.toLowerCase()}`);
  };

  if (loading) {
    return <LoadingSpinner fullPage message="Preparing assessment session..." />;
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

  const getDifficultyBadge = () => {
    if (formattedDifficulty === 'Easy') {
      return <span className="badge badge-success" style={{ fontSize: '0.85rem' }}><Zap size={14} style={{ marginRight: '4px' }} /> Easy Tier</span>;
    }
    if (formattedDifficulty === 'Hard') {
      return <span className="badge badge-purple" style={{ fontSize: '0.85rem' }}><Flame size={14} style={{ marginRight: '4px' }} /> Hard Tier</span>;
    }
    return <span className="badge badge-primary" style={{ fontSize: '0.85rem' }}><Target size={14} style={{ marginRight: '4px' }} /> Intermediate Tier</span>;
  };

  return (
    <div className="page-container">
      <div className="instructions-container">
        <div className="instructions-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span className="tech-tag" style={{ fontWeight: 700 }}>
              <Code size={13} /> {exam.category || 'Programming'}
            </span>
            {getDifficultyBadge()}
          </div>
          <h1 style={{ fontSize: '2.1rem', marginBottom: '0.6rem' }}>{exam.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            {exam.description || 'Please carefully review the assessment guidelines and evaluation structure before starting your attempt.'}
          </p>
        </div>

        {/* Assessment Highlights */}
        <div className="instructions-meta-grid">
          <div className="instructions-meta-card">
            <div style={{ color: 'var(--accent-primary)' }}>
              <HelpCircle size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Attempt Size</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{qPerAttempt} Questions</div>
            </div>
          </div>

          <div className="instructions-meta-card">
            <div style={{ color: 'var(--accent-amber)' }}>
              <Clock size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Duration</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{exam.duration} Minutes</div>
            </div>
          </div>

          <div className="instructions-meta-card">
            <div style={{ color: 'var(--accent-emerald)' }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Selected Difficulty</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>{formattedDifficulty}</div>
            </div>
          </div>
        </div>

        {/* Assessment Instructions */}
        <div style={{ marginBottom: '2.25rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={18} style={{ color: 'var(--accent-primary)' }} /> Assessment Rules & Attempt Policy
          </h3>

          <ul className="rules-list">
            <li>
              <Shuffle size={18} />
              <span><strong>Difficulty-Specific Question Pool:</strong> This attempt is populated with randomized <strong>{formattedDifficulty}</strong> difficulty questions (MCQs and Coding challenges where applicable).</span>
            </li>
            <li>
              <CheckSquare size={18} />
              <span>Select options for MCQs and write solution code in the editor for Coding questions. State is automatically preserved when navigating between questions.</span>
            </li>
            <li>
              <CheckSquare size={18} />
              <span>Use the <strong>Save & Next</strong> button or Question Palette on the right to navigate.</span>
            </li>
            <li>
              <CheckSquare size={18} />
              <span>The countdown timer starts as soon as you click <strong>Start Assessment</strong>.</span>
            </li>
            <li>
              <CheckSquare size={18} />
              <span>If time expires, your current answers and written code will be submitted automatically.</span>
            </li>
            <li>
              <CheckSquare size={18} />
              <span><strong>Unlimited Retakes:</strong> You can attempt Easy, Intermediate, or Hard tiers anytime to test your growth.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
          <Link to={`/student/exam/${id}/difficulty`} className="btn btn-secondary">
            <ArrowLeft size={16} /> Change Difficulty
          </Link>

          <button onClick={handleStartExam} className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}>
            <Play size={18} /> Start {formattedDifficulty} Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;

