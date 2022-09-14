import React from "react";
const EnterBtn = ({ setRound, solved, setSolved, round }) => {
  return (
    <button
      style={
        solved ? { backgroundColor: "green" } : { backgroundColor: "gray" }
      }
      autoFocus={true}
      className="enter-btn"
      onKeyDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key === "Enter") {
          setRound(round + 1);
          setSolved(false);
        }
      }}
    >
      Next
    </button>
  );
};

export { EnterBtn };
