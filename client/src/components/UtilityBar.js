import React, { useReducer } from "react";
import { LogBtns } from "./Log/LogBtns";
import Controls from "./Controls";
import Modal from "../components/Modal";
import LogoutBtn from "../components/Log/LogoutBtn";
import { useUserContext } from "../context/UserContext";

const UtilityBar = ({ setDisplay }) => {
  const { user } = useUserContext();

  return (
    <>
      <div className="utilityBox">
        {user ? <Controls setDisplay={setDisplay} /> : <div></div>}
        {user ? <LogoutBtn /> : <LogBtns />}
      </div>
    </>
  );
};

export default UtilityBar;
