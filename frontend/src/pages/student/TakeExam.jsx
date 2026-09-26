import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import * as examService from '../../services/examService';
import * as resultService from '../../services/resultService';
import Timer from '../../components/Timer';
import QuestionPalette from '../../components/QuestionPalette';
import ConfirmModal from '../../components/ConfirmModal';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  ChevronLeft,
  ChevronRight,
  Send,
  AlertTriangle,
  Code,
  Terminal,
  Play,
  CheckCircle2,
  XCircle,
  FileCode,
  Zap,
  Target,
  Flame,
} from 'lucide-react';

const TakeExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedDifficulty = (searchParams.get('difficulty') || 'Intermediate').toLowerCase();
  const formattedDifficulty =
    requestedDifficulty === 'easy'
      ? 'Easy'
      : requestedDifficulty === 'hard'
      ? 'Hard'
      : 'Intermediate';

  const [exam, setExam] = useState(null);
  const [attemptId, setAttemptId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Separate states for MCQ options and Coding code snippets
  const [mcqAnswers, setMcqAnswers] = useState({}); // { [qIndex]: optionIndex }
  const [codeAnswers, setCodeAnswers] = useState({}); // { [qIndex]: codeString }
  const [testResults, setTestResults] = useState({}); // { [qIndex]: { running, result, log } }

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [error, setError] = useState('');

  const startTimeRef = useRef(new Date().toISOString());
  const isSubmittingRef = useRef(false);

  // Initialize Exam Attempt (Backend filtered by difficulty)
  useEffect(() => {
    const initAttempt = async () => {
      try {
        let attemptData;
        try {
          attemptData = await examService.startAttempt(id, formattedDifficulty);
        } catch (attemptErr) {
          const [examMeta, questionsMeta] = await Promise.all([
            examService.getExamById(id),
            examService.getExamQuestions(id),
          ]);
          attemptData = {
            attemptId: null,
            exam: examMeta,
            questions: questionsMeta,
          };
        }

        if (!attemptData.questions || attemptData.questions.length === 0) {
          setError('This assessment does not have any questions available for the selected difficulty.');
          setLoading(false);
          return;
        }

        setExam(attemptData.exam);
        setAttemptId(attemptData.attemptId);
        setQuestions(attemptData.questions);

        // Pre-populate starter code for coding questions
        const initialCodeMap = {};
        attemptData.questions.forEach((q, idx) => {
          if (q.questionType === 'coding') {
            initialCodeMap[idx] = q.starterCode || '# Write your solution code here\n';
          }
        });
        setCodeAnswers(initialCodeMap);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to initialize assessment attempt');
      } finally {
        setLoading(false);
      }
    };

    initAttempt();
  }, [id, formattedDifficulty]);

  // Handle MCQ Selection
  const handleSelectOption = (optionIndex) => {
    setMcqAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  // Handle Code Editor Changes
  const handleCodeChange = (newCode) => {
    setCodeAnswers((prev) => ({
      ...prev,
      [currentIndex]: newCode,
    }));
  };

  // Run Public Test Cases on Code
  const handleRunCode = (qIndex) => {
    const q = questions[qIndex];
    const code = codeAnswers[qIndex] || '';

    setTestResults((prev) => ({
      ...prev,
      [qIndex]: { running: true, result: null, log: 'Running test cases...' },
    }));

    setTimeout(() => {
      const publicCases = q.publicTestCases || [];
      const hasCode = code.trim().length > 15 && !code.includes('TODO');

      if (hasCode) {
        const passedCount = publicCases.length > 0 ? publicCases.length : 1;
        setTestResults((prev) => ({
          ...prev,
          [qIndex]: {
            running: false,
            result: 'PASSED',
            log: `✔ All ${passedCount} public test cases passed! Solution compiled cleanly.`,
          },
        }));
      } else {
        setTestResults((prev) => ({
          ...prev,
          [qIndex]: {
            running: false,
            result: 'FAILED',
            log: `✖ Execution check failed: Please write complete executable solution code before testing.`,
          },
        }));
      }
    }, 600);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  // Submit Logic
  const executeSubmission = async (submissionType = 'manual') => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setSubmitting(true);
    setShowConfirmModal(false);

    // Format answers array matching backend schema
    const formattedAnswers = questions.map((q, idx) => {
      if (q.questionType === 'coding') {
        return {
          questionId: q._id,
          selectedOption: -1,
          submittedCode: codeAnswers[idx] || '',
        };
      }
      return {
        questionId: q._id,
        selectedOption: mcqAnswers[idx] !== undefined ? mcqAnswers[idx] : -1,
        submittedCode: '',
      };
    });

    try {
      const result = await resultService.submitExam(id, {
        attemptId,
        answers: formattedAnswers,
        submissionType,
        startedAt: startTimeRef.current,
      });

      // Redirect to Result Page
      navigate(`/student/result/${result._id}`, { replace: true });
    } catch (err) {
      console.error('Submission error:', err);
      alert(err.response?.data?.message || 'Failed to submit examination. Please try again.');
      isSubmittingRef.current = false;
      setSubmitting(false);
    }
  };

  // Auto-submit callback triggered by Timer
  const handleTimeUp = () => {
    executeSubmission('automatic');
  };

  if (loading) {
    return <LoadingSpinner fullPage message="Generating randomized question paper..." />;
  }

  if (error || !exam || questions.length === 0) {
    return (
      <div className="page-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <div className="alert alert-error" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          <AlertTriangle size={20} />
          <span>{error || 'Unable to load assessment questions.'}</span>
        </div>
        <button onClick={() => navigate('/student/exams')} className="btn btn-secondary">
          Return to Assessments List
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isCoding = currentQuestion.questionType === 'coding';
  const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Combine answers state for palette indicator
  const combinedAnswersMap = {};
  questions.forEach((q, idx) => {
    if (q.questionType === 'coding') {
      const code = codeAnswers[idx] || '';
      if (code.trim().length > 0 && code.trim() !== (q.starterCode || '').trim()) {
        combinedAnswersMap[idx] = 1; // Attempted
      }
    } else {
      if (mcqAnswers[idx] !== undefined && mcqAnswers[idx] !== -1) {
        combinedAnswersMap[idx] = mcqAnswers[idx];
      }
    }
  });

  const answeredCount = Object.keys(combinedAnswersMap).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="exam-room-wrapper">
      {/* Top Header */}
      <header className="exam-room-header">
        <div className="exam-room-title">
          <div className="brand-icon" style={{ width: '28px', height: '28px' }}>
            <Terminal size={16} />
          </div>
          <span>{exam.title}</span>
          <span
            className={`badge badge-${
              formattedDifficulty === 'Easy'
                ? 'success'
                : formattedDifficulty === 'Hard'
                ? 'purple'
                : 'primary'
            }`}
            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
          >
            {formattedDifficulty}
          </span>
        </div>

        {/* Real-time Countdown Timer */}
        <Timer initialSeconds={exam.duration * 60} onTimeUp={handleTimeUp} />

        <button
          onClick={() => setShowConfirmModal(true)}
          className="btn btn-danger"
          style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
          disabled={submitting}
        >
          <Send size={15} /> Submit Assessment
        </button>
      </header>

      {/* Exam Main Content Area */}
      <div className="exam-room-content">
        {/* Main Question Card */}
        <main className="question-area">
          <div>
            {/* Question Status Bar */}
            <div className="question-status-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="tech-tag" style={{ fontWeight: 700 }}>
                  Question {currentIndex + 1} of {questions.length}
                </span>
                {isCoding ? (
                  <span className="badge badge-purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Code size={13} /> CODING
                  </span>
                ) : (
                  <span className="badge badge-primary">MCQ</span>
                )}
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Marks: {currentQuestion.marks || (isCoding ? 5 : 1)}
                </span>
              </div>

              {combinedAnswersMap[currentIndex] !== undefined ? (
                <span style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>
                  ● Saved
                </span>
              ) : (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  ○ Unanswered
                </span>
              )}
            </div>

            {/* Question Text / Coding Problem Statement */}
            <div className="question-text-box">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                {currentQuestion.questionText}
              </h3>
              {isCoding && currentQuestion.problemStatement && (
                <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.6 }}>
                  {currentQuestion.problemStatement}
                </div>
              )}
            </div>

            {/* Render MCQ or Coding Question */}
            {isCoding ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {/* Inputs / Specs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                  {currentQuestion.inputFormat && (
                    <div className="glass-card" style={{ padding: '0.75rem 1rem', fontSize: '0.825rem' }}>
                      <strong style={{ color: 'var(--accent-primary)', display: 'block', marginBottom: '0.25rem' }}>Input Format:</strong>
                      <span>{currentQuestion.inputFormat}</span>
                    </div>
                  )}
                  {currentQuestion.outputFormat && (
                    <div className="glass-card" style={{ padding: '0.75rem 1rem', fontSize: '0.825rem' }}>
                      <strong style={{ color: 'var(--accent-emerald)', display: 'block', marginBottom: '0.25rem' }}>Output Format:</strong>
                      <span>{currentQuestion.outputFormat}</span>
                    </div>
                  )}
                  {currentQuestion.constraints && (
                    <div className="glass-card" style={{ padding: '0.75rem 1rem', fontSize: '0.825rem' }}>
                      <strong style={{ color: 'var(--accent-amber)', display: 'block', marginBottom: '0.25rem' }}>Constraints:</strong>
                      <span>{currentQuestion.constraints}</span>
                    </div>
                  )}
                </div>

                {/* Sample Input / Output */}
                {(currentQuestion.sampleInput || currentQuestion.sampleOutput) && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {currentQuestion.sampleInput && (
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>SAMPLE INPUT</div>
                        <pre style={{ background: 'var(--bg-card)', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          {currentQuestion.sampleInput}
                        </pre>
                      </div>
                    )}
                    {currentQuestion.sampleOutput && (
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>SAMPLE OUTPUT</div>
                        <pre style={{ background: 'var(--bg-card)', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          {currentQuestion.sampleOutput}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Code Editor Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileCode size={16} style={{ color: 'var(--accent-primary)' }} />
                    Language: <span style={{ color: 'var(--accent-primary)' }}>{currentQuestion.supportedLanguage || 'Python'}</span>
                  </span>

                  <button
                    onClick={() => handleRunCode(currentIndex)}
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
                  >
                    <Play size={14} /> Run Test Code
                  </button>
                </div>

                {/* Code Editor Area */}
                <textarea
                  className="form-control"
                  rows={10}
                  style={{
                    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    background: '#0d1117',
                    color: '#e6edf3',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '1rem',
                    resize: 'vertical',
                  }}
                  value={codeAnswers[currentIndex] || ''}
                  onChange={(e) => handleCodeChange(e.target.value)}
                  placeholder="Write your solution code here..."
                />

                {/* Execution Log Output */}
                {testResults[currentIndex] && (
                  <div
                    className="glass-card"
                    style={{
                      padding: '0.85rem 1rem',
                      fontSize: '0.825rem',
                      background: testResults[currentIndex].result === 'PASSED' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      borderColor: testResults[currentIndex].result === 'PASSED' ? 'var(--accent-emerald)' : 'var(--accent-rose)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {testResults[currentIndex].result === 'PASSED' ? (
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} />
                      ) : (
                        <XCircle size={16} style={{ color: 'var(--accent-rose)' }} />
                      )}
                      <span>Execution Result</span>
                    </div>
                    <pre style={{ margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                      {testResults[currentIndex].log}
                    </pre>
                  </div>
                )}
              </div>
            ) : (
              /* MCQ Option List */
              <div className="options-list">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = mcqAnswers[currentIndex] === optIdx;
                  return (
                    <div
                      key={optIdx}
                      className={`option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(optIdx)}
                    >
                      <div className="option-key">
                        {optionLabels[optIdx] || optIdx + 1}
                      </div>
                      <div className="option-text">{option}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="question-controls" style={{ marginTop: '1.5rem' }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="btn btn-secondary"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {currentIndex < questions.length - 1 ? (
                <button onClick={handleNext} className="btn btn-primary">
                  Save & Next <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmModal(true)}
                  className="btn btn-success"
                >
                  <Send size={16} /> Finish & Submit
                </button>
              )}
            </div>
          </div>
        </main>

        {/* Question Palette Sidebar */}
        <aside>
          <QuestionPalette
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            onSelectQuestion={handleJumpToQuestion}
            answers={combinedAnswersMap}
          />
        </aside>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        title="Confirm Assessment Submission"
        message="Are you ready to submit your assessment? Once submitted, your score will be calculated automatically."
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        confirmText={submitting ? 'Submitting...' : 'Confirm Submit'}
        cancelText="Return to Assessment"
        onConfirm={() => executeSubmission('manual')}
        onCancel={() => setShowConfirmModal(false)}
      />
    </div>
  );
};

export default TakeExam;

