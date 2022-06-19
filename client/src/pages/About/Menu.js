import React from "react";
import MenuBtn from "./collapsible/Btn";
import MenuSection from "./collapsible/Section";
import { useMemo } from "react";

const Menu = ({ props }) => {


  return (
    <div key={Math.floor(Math.random() * 1000)} className="menuBox">
      {props.map((item, index) => {
        return (
          <>
            <MenuBtn
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
