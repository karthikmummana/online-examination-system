import React from 'react';
import { Check } from 'lucide-react';

const QuestionPalette = ({
  totalQuestions,
  currentIndex,
  onSelectQuestion,
  answers = {}, // map of index -> selectedOption (-1 or >= 0)
}) => {
  return (
    <div className="glass-card palette-sidebar">
      <h3 className="palette-header">Question Palette</h3>

      <div className="palette-grid">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isCurrent = index === currentIndex;
          const isAnswered =
            answers[index] !== undefined &&
            answers[index] !== null &&
            answers[index] !== -1;

          let btnClass = 'palette-btn';
          if (isCurrent) btnClass += ' current';
          if (isAnswered) btnClass += ' answered';

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => onSelectQuestion(index)}
              title={`Jump to Question ${index + 1}`}
            >
              {index + 1}
              {isAnswered && !isCurrent && (
                <span style={{ position: 'absolute', top: '2px', right: '3px', fontSize: '9px' }}>✓</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="palette-legend">
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#34d399' }} />
          <span>Answered</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#818cf8', border: '1px solid #6366f1' }} />
          <span>Current Active</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
          <span>Unanswered</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;
