import React from 'react';

export const ProgressBar = ({
  value = 0,
  max = 100,
  showLabel = false,
  label = '',
  height = 'h-2',
  className = '',
  barColor = 'bg-charcoal-900',
  trackColor = 'bg-taupe-200'
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 text-xs text-charcoal-600 font-medium tracking-wide">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className={`w-full ${trackColor} rounded-full overflow-hidden ${height}`}>
        <div
          className={`${barColor} ${height} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
