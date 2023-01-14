import React, { useState, useMemo, useReducer } from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";

import { GiExitDoor } from "react-icons/gi";

import LoginForm from "../components/Log/LoginForm";
import SignupForm from "../components/Log/SignupForm";
import { useUtilsContext } from "../context/UtilityContext";
const modalRoot = document.getElementById("modal-root");

const Modal = ({}) => {
  const [containerEl, setContainerEl] = useState(document.createElement("div"));
  const { modal, off } = useUtilsContext();

  const renderSwitch = (modal) => {
    switch (modal.type) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "close":
        return null;
      default:
        break;
    }
  };

  useMemo(() => {
    modalRoot.appendChild(containerEl);
  }, [containerEl]);

  return createPortal(
    <div value={modal.visibility} className="modal">
      <GiExitDoor
        onClick={() => {
          off();
        }}
        className="modalExitBtn"
        size={"3rem"}
      />
      {renderSwitch(modal)}
    </div>,
    containerEl
  );
};

export default Modal;
