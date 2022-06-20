import React, { useReducer } from "react";
import { LogBtns } from "./Log/LogBtns";
import Controls from "./Controls";
import Modal from "../components/Modal";
import { useUserContext } from "../context/UserContext";

const UtilityBar = ({ modalReducer }) => {
  const { user } = useUserContext();

  return (
    <>
    <div className="utilityBox">
      {user ? <Controls /> : <div></div>}
      {user ? (
        <LogoutBtn />
      ) : (
        <LogBtns dispatch={modalReducer} />
      )}
    </div>
    </>
  );
};

export default UtilityBar;
