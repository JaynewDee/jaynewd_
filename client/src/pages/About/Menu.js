import React from "react";
import MenuBtn from "./collapsible/Btn";
import MenuSection from "./collapsible/Section";

const Menu = ({ props }) => {
  return (
    <div key={Math.floor(Math.random() * 1000)} className="menuBox">
      {props.map((item, index) => {
        return (
          <div key={Math.floor(Math.random() * 1000)}>
            <MenuBtn name={item.name} />
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
