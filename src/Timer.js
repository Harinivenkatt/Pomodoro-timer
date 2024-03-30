// Timer.js
import React from 'react';

const Timer = ({ timeLeft, timerType }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer">
      <h2>{timerType}</h2>
      <div className="time">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default Timer;
