import React from "react";

const NavBtn = ({ index, label }) => {
  return (
    <button className="menu-btn" key={index + label}>
      {label}
    </button>
  );
};

export default NavBtn;
