import React from 'react'
import { v4 as uuidv4 } from "uuid";

const NavBtn = ({index, label}) => {
  return (
    <button className="menu-btn"key={uuidv4()*index}>{label}</button>
  )
}

export default NavBtn;