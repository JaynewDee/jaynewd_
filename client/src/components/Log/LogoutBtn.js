import React from "react";
import { useUserContext } from "../../context/UserContext";
import {deleteAll} from '../../utils/dbAPI/user';

const LogoutBtn = () => {
  const {signout, user}= useUserContext();

  const handleLogout = () => {
    console.log(`User {${user.lastName}} signing out ...`)
    signout();
  };

  const handleUserDeletion = async () => {
    await deleteAll();
  }
  return (
    <>
    <button value="delete" onClick={(e) => handleUserDeletion(e)} className="utilityBtn loginBtn">DELETE USERS</button>

    <button onClick={() => handleLogout()} className="utilityBtn logoutBtn">
      LOGOUT
    </button>
    </>
  );
};

export default LogoutBtn;
