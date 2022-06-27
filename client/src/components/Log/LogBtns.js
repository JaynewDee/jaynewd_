import React, { useReducer } from "react";
import { useUtilsContext } from "../../context/UtilityContext";
const LogBtns = ({}) => {
  const { modal, on, off } = useUtilsContext();
  const handleBtnClick = (e) => {
    e.preventDefault();
    on(e.target.value);
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

export { LogBtns };
