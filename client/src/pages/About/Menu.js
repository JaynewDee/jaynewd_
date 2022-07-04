import React, { useState } from "react";
import MenuBtn from "./collapsible/Btn";
import MenuSection from "./collapsible/Section";
import "../../styles/components/AboutMenu.scss";

const Menu = ({ props }) => {
  return (
    <div key={Math.floor(Math.random() * 1000)} className="menu-box">
      {props.map((item, index) => {
        return (
          <div className="value-box" key={Math.floor(Math.random() * 1000)}>
            <MenuBtn name={item.name} id={item.id} />
            <MenuSection
              headerText={item.header.text}
              bodyText={item.section.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
