import React, { useState } from "react";
import "../../../styles/Nav/ExpNav.scss";
import { exptabs } from "../../../data/tabs";

const ExpNav = ({setDisplay}) => {
  const [previousClicked, setPrevious] = useState("");

  const locked = "tabStateLocked";
  const unlocked = "tabStateUnlocked";

  const tabSwitch = (e) => {
    if (previousClicked !== "") {
      previousClicked.className = unlocked;
    }

    if (e.target.className === locked) {
      e.target.className = unlocked;
    } else if (e.target.className === unlocked) {
      e.target.className = locked;
    }
    setPrevious(e.target);
  };

  return (
    exptabs.map((item) => 
     (
      <button
        onClick={(e) => {
          tabSwitch(e);
          setDisplay(e.target.value);
        }}
        className={item.className}
        key={item.key}
        value={item.name}
      >
        {item.icon}
      </button>
    )
  ));
};

export default ExpNav;
