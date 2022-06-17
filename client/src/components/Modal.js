import React, { useState } from "react";
import LoginForm from "./Log/LoginForm";
import SignupForm from "./Log/SignupForm";
import { GiExitDoor } from "react-icons/gi";



const Modal = ({ modalState, visibility, setVisibility, setUser }) => {

  const modalSwitch = (state) => {
    switch (state) {
      case "login":
        return <LoginForm setUser={setUser} />;
      case "signup":
        return <SignupForm setUser={setUser} />;
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
