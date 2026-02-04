import React from 'react';

import './StepsProgress.css';

export const StepsProgress = ({ totalSteps, completed }) => {
  const progress = (completed / totalSteps) * 100;

  return (
    <div className="steps-progress">
      <div className="steps-text">
        <span className="steps-current">Step {String(completed).padStart(2, '0')}</span>
        <span className="steps-total">/ {String(totalSteps).padStart(2, '0')}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
