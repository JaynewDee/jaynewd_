import React from "react";

const LoginBtn = ({ setMode, setVisibility }) => {

  const handleBtnClick = (e) => {
    e.preventDefault();
    setMode(e.target.value);
    setVisibility("shown")
  }


  return (
    <>
      <button value="login" onClick={(e) => handleBtnClick(e)}className="utilityBtn loginBtn">Login</button>
    </>
  );
};

export default LoginBtn;
