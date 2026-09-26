import React from 'react';

const StatCard = ({ title, value, subtext, icon: Icon, color = '#6366f1', bgGradient }) => {
  return (
    <div className="glass-card stat-card">
      <div
        className="stat-icon-wrapper"
        style={{
          background: bgGradient || `rgba(99, 102, 241, 0.15)`,
          color: color,
        }}
      >
        {Icon && <Icon size={26} />}
      </div>
      <div className="stat-info">
        <span className="stat-label">{title}</span>
        <span className="stat-value">{value}</span>
        {subtext && <span className="stat-subtext">{subtext}</span>}
      </div>
    </div>
  );
};

export default StatCard;
