import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  return <span className="simple-clock">Time: {currentTime}</span>;
};

export default Clock;
