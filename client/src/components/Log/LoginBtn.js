import React, { useState } from "react";

const LoginBtn = ({ setMode, setVisibility }) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    setMode(e.target.value);
    setVisibility("shown")
  }



  return (
    <>
      <button value="login" onClick={(e) => handleBtnClick(e)} className="utilityBtn loginBtn">LOGIN</button>
      <button value="signup" onClick={(e) => handleBtnClick(e)} className="utilityBtn loginBtn">SIGNUP</button>
    </>
  );
};

export default LoginBtn;