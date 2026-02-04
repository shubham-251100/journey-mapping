import React from 'react';

import redFlag from '../assets/redFlag.svg';
import orangeFlag from '../assets/orangeFlag.svg';
import purpleFlag from '../assets/purpleFlag.svg';

import './JourneyMap.css';

const getFlagByStatus = (status) => {
  switch (status) {
    case 'completed':
      return redFlag;
    case 'current':
      return orangeFlag;
    case 'upcoming':
    default:
      return purpleFlag;
  }
};

const getStatus = (id, progress) => {
  if (id < progress) {
    return 'completed';
  } else if (id === progress) {
    return 'current';
  } else {
    return 'upcoming';
  }

};

const JourneyBlock = ({ data, position, onClick, id, progress }) => {
  const status = getStatus(id, progress)
  const flag = getFlagByStatus(status);
  return (
    <div className={`journey-block ${position} ${status}`} onClick={onClick}>
      <div className="block-content">
        <div className="flag-container">
          <img src={flag} alt="flag" className="flag-icon" />
          <span className="block-number">{data.id}</span>
        </div>
        <h3 className="block-title">{data.title}</h3>
        <div className="skills-container">
          <span className="skills-label">Skills:</span>
          <div className="skills-list">
            {data.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="connector">
        <div className="dotted-line"></div>
        <div className="connector-dot"></div>
      </div>
    </div>
  );
};

const CenterPath = ({ itemCount }) => {
  const pathHeight = Math.max(600, itemCount * 140);

  return (
    <div className="center-path" style={{ height: `${pathHeight}px` }}>
      <div className="path-inner">
        <div className="path-side-line path-side-line-left"></div>
        <div className="path-dashed-line"></div>
        <div className="path-side-line path-side-line-right"></div>
      </div>
    </div>
  );
};

export const JourneyMap = ({journeyData, progress, handleProgress }) => {
  return (
    <div className="journey-map">
      <div className="journey-container">
        <div className="blocks-left">
          {journeyData
            .filter((_, index) => index % 2 === 0)
            .map((item, index) => (
              <JourneyBlock
                key={item.id}
                data={item}
                id={item.id}
                progress={progress}
                onClick={() => handleProgress(item.id)}
                position="left"
              />
            ))}
        </div>

        <CenterPath itemCount={journeyData.length} />

        <div className="blocks-right">
          {journeyData
            .filter((_, index) => index % 2 === 1)
            .map((item, index) => (
              <JourneyBlock
                key={item.id}
                data={item}
                id={item.id}
                progress={progress}
                onClick={() => handleProgress(item.id)}
                position="right"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
