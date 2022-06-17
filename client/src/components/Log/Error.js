import React from "react";

const Error = ({ text, duration, setError }) => {


  const displayTimer = () => {
    setTimeout(() => {
        setError({show: false, error: null})
    }, duration);
  };
  displayTimer()
  return <div className="logError">{text}</div>;
};

export default Error;
