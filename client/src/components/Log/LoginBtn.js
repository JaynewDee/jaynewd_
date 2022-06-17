import React, { useState } from "react";
import {deleteAll} from '../../utils/dbAPI/user';

const LoginBtn = ({ setMode, setVisibility }) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    setMode(e.target.value);
    setVisibility("shown")
  }

  const handleUserDeletion = async () => {
      await deleteAll();
  }

  return (
    <>
    <button value="delete" onClick={(e) => handleUserDeletion(e)} className="utilityBtn loginBtn">DELETE USERS</button>
      <button value="login" onClick={(e) => handleBtnClick(e)} className="utilityBtn loginBtn">LOGIN</button>
      <button value="signup" onClick={(e) => handleBtnClick(e)} className="utilityBtn loginBtn">SIGNUP</button>
    </>
  );
};

export default LoginBtn;