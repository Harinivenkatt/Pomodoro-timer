import React, { useState, useEffect } from 'react';
import Timer from './Timer'; // Corrected import path
import Controls from './Control'; // Corrected import path

const Pomodoro = () => { // Fixed function declaration

  const [sessionLength, setSessionLength] = useState(25); // Corrected useState syntax
  const [breakLength, setBreakLength] = useState(5); // Corrected useState syntax
  const [timerType, setTimerType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // Corrected calculation
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1); // Corrected setTimeLeft function
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, sessionLength]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (timerType === 'Session') {
        setTimerType('Break');
        setTimeLeft(breakLength * 60); // Corrected calculation
      } else {
        setTimerType('Session');
        setTimeLeft(sessionLength * 60); // Corrected calculation
      }
    }
  }, [timeLeft, sessionLength, breakLength, timerType]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning); // Fixed setIsRunning function
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimerType('Session');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <div className="Pomodoro">
      <h1>Pomodoro Timer</h1>
      <Timer timeLeft={timeLeft} timerType={timerType} /> {/* Corrected props syntax */}
      <Controls
        sessionLength={sessionLength} breakLength={breakLength}
        setSessionLength={setSessionLength} setBreakLength={setBreakLength}
        isRunning={isRunning}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Pomodoro;