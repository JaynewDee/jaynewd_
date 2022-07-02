import React from "react";

import NavBtn from "./NavBtn";

const Menu = ({ menuProps }) => {
  return (
    <div key={Math.round(Math.random() * 1000)} className="menu-box">
      {menuProps.map((wave) => {
        return <NavBtn label={wave.text} />;
      })}
    </div>
  );
};

export default Menu;
