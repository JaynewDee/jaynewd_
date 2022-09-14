import React from "react";

const ExitBtn = ({ setRound }) => {
  const handleExit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setRound(0);
  };
  return (
    <div className="btn-box">
      <button
        className="exit-btn"
        onClick={(e) => {
          handleExit(e);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ExitBtn;
