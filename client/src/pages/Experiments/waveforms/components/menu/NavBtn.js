import React from "react";

const NavBtn = ({ label, index }) => {
  return (
    <button className="menu-btn" key={index}>
      {label}
    </button>
  );
};

export default NavBtn;
