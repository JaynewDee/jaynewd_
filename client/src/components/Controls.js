import React from 'react';
import { useUserContext } from '../context/UserContext';

const Controls = () => {
  const {user} = useUserContext();

  return (
    <div className="controlBox">
      <p>OPERATOR: <span>{user.lastName}</span></p>
      <p>Time: <span>{new Date(12345 * 1000).toISOString().slice(11, -5)}</span></p>
      <p>Secrets: <span></span></p>
    </div>
  )
}

export default Controls;