import React, { useState } from "react";
import LoginForm from "./Log/LoginForm";
import SignupForm from "./Log/SignupForm";
import { GiExitDoor } from "react-icons/gi";
const Modal = ({ modalState, visibility, setVisibility, setLoggedIn }) => {

  const modalSwitch = (state) => {
    switch (state) {
      case "login":
        return <LoginForm setLoggedIn={setLoggedIn}/>;
      case "signup":
        return <SignupForm setLoggedIn={setLoggedIn}/>;
      default:
        break;
    }
  };

  return (
    <div value={visibility} className="modal">
      <GiExitDoor
        onClick={() => {
          setVisibility("hidden");
        }}
        className="modalExitBtn"
        size={"3rem"}
      />
      {modalSwitch(modalState)}
    </div>
  );
};

export default Modal;
