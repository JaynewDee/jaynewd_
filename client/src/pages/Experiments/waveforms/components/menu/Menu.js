import React from "react";

import NavBtn from "./NavBtn";

const Menu = ({ menuProps }) => {
  return (
    <div className="menu-box">
      {menuProps.map((wave, idx) => {
        return <NavBtn label={wave.text} index={idx} />;
      })}
    </div>
  );
};

export default Menu;
