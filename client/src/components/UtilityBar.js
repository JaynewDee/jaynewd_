import React from 'react'
import LoginBtn from './Log/LoginBtn';
import LogoutBtn from './Log/LogoutBtn';
import UserPlate from './UserPlate';
import { useUserContext } from '../context/UserContext';

const UtilityBar = ({ setModalType, setVisibility}) => {

  const user = useUserContext();
  return (
     
    <div className="utilityBox">
      {
        user.loggedIn ? <LogoutBtn /> : <LoginBtn setVisibility={setVisibility} setMode={setModalType}/>
      }
      <UserPlate />
    </div>
  )
}

export default UtilityBar;