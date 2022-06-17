import React from 'react'
import { useUserContext } from '../context/UserContext';

const UserPlate = () => {
  const user = useUserContext()
  return (
    
      user.loggedIn ? <div>Joshua</div> : <p></p>
    
    
  )
}

export default UserPlate;