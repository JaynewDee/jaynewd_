import React from 'react'
import LoginBtn from './Log/LoginBtn';
import LogoutBtn from './Log/LogoutBtn';
import Controls from './Controls';
import { useUserContext } from '../context/UserContext';

const UtilityBar = ({ setModalType, setVisibility}) => {

  const { user } = useUserContext();

  return (
     
    <div className="utilityBox">
      {
        user ? <LogoutBtn /> : <LoginBtn setVisibility={setVisibility} setMode={setModalType}/>
      }
      {
        user ? <Controls /> : <div></div>
      }
    </div>
  )
}

export default UtilityBar;