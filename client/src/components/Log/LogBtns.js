import React, { useReducer } from "react";
import { modalReducer } from '../../context/reducers';
const LogBtns = ({dispatch}) => {

  const handleBtnClick = (e) => {
    e.preventDefault();
    dispatch(e.target.value)
  };

  return (
    <>
      <button
        value="login"
        onClick={(e) => {
          handleBtnClick(e);
        }}
        className="utilityBtn loginBtn"
      >
        LOGIN
      </button>
      <button
        value="signup"
        onClick={(e) => handleBtnClick(e)}
        className="utilityBtn loginBtn"
      >
        SIGNUP
      </button>
    </>
  );
};

export {LogBtns}
