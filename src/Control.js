// Controls.js
import React from 'react';

const Controls = ({ sessionLength, breakLength, setSessionLength, setBreakLength, isRunning, handleStartStop, handleReset }) => {
  const handleSessionChange = (e) => {
    if (!isRunning) {
      const newValue = parseInt(e.target.value);
      setSessionLength(newValue);
    }
  };

  const handleBreakChange = (e) => {
    if (!isRunning) {
      const newValue = parseInt(e.target.value);
      setBreakLength(newValue);
    }
  };

  return (
    <div className="controls">
      <div className="session-controls">
        <h3>Session Length</h3>
        <input type="number" value={sessionLength} onChange={handleSessionChange} />
      </div>
      <div className="break-controls">
        <h3>Break Length</h3>
        <input type="number" value={breakLength} onChange={handleBreakChange} />
      </div>
      <button onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
