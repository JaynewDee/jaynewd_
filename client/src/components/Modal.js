import React, { useState, useReducer } from "react";
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom';

import { GiExitDoor } from "react-icons/gi";
import { useUserContext } from '../context/UserContext'
import { modalReducer } from "../context/reducers";
import { TOGGLE_MODAL } from "../context/actions";
import LoginForm from "../components/Log/LoginForm";
import SignupForm from "../components/Log/SignupForm";

const Modal = ({state}) => {
  const [loading, setLoadState] = useState(true)
  const renderSwitch = (state) => {
    switch(state){
      case "login":
        return <LoginForm />
      case "signup":
        return <SignupForm />
        default:
          break
    }
  }

  return (
  createPortal(
    
    <div value={state} className="modal">
      <GiExitDoor
        onClick={() => {
          dispatch(null)
        }}
        className="modalExitBtn"
        size={"3rem"}
      />
      {renderSwitch(state)}
    </div>,
    document.getElementById('root')
  ))
};

export default Modal;
