// TimeoutSection.js

import React, { useState, useEffect } from "react";
import "./TimeOut.css";

function TimeoutSection() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);

  // Function to format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setTimerActive(false);
    }
  }, [timerActive, timeLeft]);

  return (
    <div className="timeout-container font-customFont">
      <div className="section-heading">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          Time is running out.
        </h2>
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
          Grab your spot fast.
        </h2>
      </div>
      <div className="timer">{formatTime(timeLeft)}</div>
      <p className="remaining-time">time remaining</p>
      <button
        className="register-button rounded-lg tracking-wide text-black font-bold hover:bg-[#FFD800]"
        onClick={() => alert("Register Now at $499")}
      >
        Register Now at $499
      </button>
    </div>
  );
}

export default TimeoutSection;
