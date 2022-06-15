import React from 'react'
import LoginBtn from './Log/LoginBtn';
import LogoutBtn from './Log/LogoutBtn';
const UtilityBar = ({loginStatus, setModalType, setVisibility}) => {
  return (
     
    <div className="utilityBox">
      {
        loginStatus ? <LogoutBtn /> : <LoginBtn setVisibility={setVisibility} setMode={setModalType}/>
      }
    </div>
  )
}

export default UtilityBar;