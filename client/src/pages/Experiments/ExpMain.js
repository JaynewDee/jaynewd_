import React from "react";

const bracketLeft = {
  color: "rgba(0,121,145,.9)",
  marginRight: "1rem",
  fontSize: "2rem",
};
const bracketRight = {
  color: "rgba(0,121,145,.9)",
  marginLeft: "1rem",
  fontSize: "2rem",
};
const ExpMain = () => {
  return (
    <>
      <h2 className="drop-shadow" style={{ marginTop: "20vh" }}>
        <span style={bracketLeft}>{"["}</span>
        Experiments
        <span style={bracketRight}>{"]"}</span>
      </h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{ width: "12rem", textAlign: "center" }}>
        Explore freely using the buttons at left!
      </p>
    </>
  );
};

export default ExpMain;
