import React from "react";
import { useUserContext } from "../../context/UserContext";
const LogoutBtn = () => {
  const user = useUserContext();

  const handleLogout = () => {
    user.logout()
  };


  return (
    <button onClick={() => handleLogout()} className="utilityBtn logoutBtn">
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
