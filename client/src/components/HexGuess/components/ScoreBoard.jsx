import React from "react";

const ScoreBoard = ({ streakState }) => {
  return (
    <div className="scoreboard">
      <div className="streak-num">{streakState}</div>
      <div className="streak-label">STREAK</div>
    </div>
  );
};

export default ScoreBoard;
