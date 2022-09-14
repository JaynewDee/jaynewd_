import React, { useState } from "react";

const Score = ({ score }) => {
  return <span className="score">Score: {score.score}</span>;
};

export { Score };
