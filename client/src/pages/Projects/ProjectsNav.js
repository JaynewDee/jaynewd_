import React, { useState } from "react";
import "../../styles/Nav/ProjectsNav.scss";
import { projecttabs } from "../../data/tabs";

const ProjectsNav = ({ setDisplay }) => {
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

  return projecttabs.map((item) => {
    return (
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
    );
  });
};

export default ProjectsNav;
