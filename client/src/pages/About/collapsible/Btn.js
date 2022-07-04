import React, { useState } from "react";

const Btn = ({ name, id }) => {
  const [classState, setClass] = useState("menu-btn-collapsed");
  let locked = "menu-btn-collapsed";
  let unlocked = "menu-btn-expanded";
  const handleClick = (e) => {
    let btns = document.querySelectorAll(".menu-btn");
    btns.forEach((btn, index) => {
      if (index === parseInt(e.target.id)) {
        btn.classList.replace(locked, unlocked);
      } else {
        btn.classList.replace(unlocked, locked);
      }
    });
    return btns;
  };

  return (
    <>
      <button
        id={id}
        className={"menu-btn " + classState}
        key={Math.floor(Math.random() * 1000)}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick(e);
        }}
      >
        {name}
      </button>
    </>
  );
};

export default Btn;
