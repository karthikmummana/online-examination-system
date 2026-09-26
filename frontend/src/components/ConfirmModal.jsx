import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';

const ConfirmModal = ({
  isOpen,
  title = 'Confirmation Required',
  message = 'Are you sure you want to proceed?',
  answeredCount,
  unansweredCount,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  isDanger = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: isDanger ? 'rgba(239, 68, 68, 0.15)' : 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDanger ? '#ef4444' : '#6366f1',
              flexShrink: 0,
            }}
          >
            {isDanger ? <AlertCircle size={24} /> : <HelpCircle size={24} />}
          </div>
          <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>{title}</h3>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          {message}
        </p>

        {/* Optional Stats Breakdown (e.g. for Exam Submission) */}
        {answeredCount !== undefined && unansweredCount !== undefined && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.8)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={20} style={{ color: '#34d399' }} />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399' }}>{answeredCount}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Answered</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <AlertCircle size={20} style={{ color: '#fbbf24' }} />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fbbf24' }}>{unansweredCount}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Unanswered</div>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button onClick={onCancel} className="btn btn-secondary">
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`btn ${isDanger ? 'btn-danger' : 'btn-primary'}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
