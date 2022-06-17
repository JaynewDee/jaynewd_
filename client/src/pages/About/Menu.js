import React from "react";
import MenuControl from "./collapsible/Btn";
import MenuSection from "./collapsible/Section";

const Menu = ({ props }) => {


  return (
    <div key={Math.floor(Math.random() * 1000)} className="menuBox">
      {props.map((item, index) => {
        return (
          <>
            <MenuControl
              name={item.name}
            />
            <MenuSection
              headerText={item.header.text}
              bodyText={item.section.text}
            />
          </>
        );
      })}
    </div>
  );
};

export default Menu;
