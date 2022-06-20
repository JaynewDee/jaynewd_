import React from "react";
import { v4 as uuidv4 } from "uuid";

import NavBtn from "./NavBtn";

const Menu = ({menuProps}) => {
  return (
    <div key={uuidv4()}className="menu-box">
      {menuProps.map((wave) => {

        return <NavBtn index={wave.index} label={wave.text} />;
      })}
    </div>
  );
};

export default Menu;
