import React, { useState, useEffect, useRef } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const Timer = ({ initialSeconds, onTimeUp }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const timeUpTriggered = useRef(false);

  useEffect(() => {
    // Only set initial if not already running
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!timeUpTriggered.current) {
        timeUpTriggered.current = true;
        onTimeUp();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          if (!timeUpTriggered.current) {
            timeUpTriggered.current = true;
            onTimeUp();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, onTimeUp]);

  const formatTime = (totalSecs) => {
    const minutes = Math.floor(totalSecs / 60);
    const seconds = totalSecs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const isLowTime = secondsLeft <= 120; // 2 minutes or less

  return (
    <div className={`exam-timer ${isLowTime ? 'timer-warning' : ''}`}>
      {isLowTime ? <AlertTriangle size={18} /> : <Clock size={18} />}
      <span>Time Remaining: {formatTime(secondsLeft)}</span>
    </div>
  );
};

export default Timer;
