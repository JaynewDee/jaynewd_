import React, { useState } from "react";
import { routes } from "../data/navRoutes";
import {BiUpArrowCircle} from 'react-icons/bi'
const curlyLeft = "{";
const curlyRight = "}";

const Nav = ({ setNav, setDisplay, location}) => {
  const [previousClicked, setPrevious] = useState("");
  const [collapseState, setCollapse] = useState("collapsed")
  const locked = "navLinkLocked";
  const unlocked = "navLinkUnlocked";
  const tabSwitch = (e) => {
    e.preventDefault();

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

  const handleNavCollapse = (e) => {
    if(collapseState === "collapsed") {
      setCollapse("expanded")
    }
    else {
      setCollapse("collapsed");
    }
  }
  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
 
  return (
      <nav
        className={collapseState}
        draggable="true"
        onDrag={(e) => onDrag(e)}
        style={location}
      >
        {routes.map((route) => {
          return (
            <button
              autoFocus={route.autofocus}
              type="reset"
              value={route.value}
              onClick={(e) => {
                tabSwitch(e);
                setNav(e.target.value);
                setDisplay(e.target.value);
              }}
              className={route.className + " navLink"}
              style={{ textDecoration: "none" }}
              key={route.key}
            >
              <span className="curly">{curlyLeft}</span>
              <span className="navText"> {route.title} </span>
              <span className="curly">{curlyRight}</span>
            </button>
          );
        })}
        <BiUpArrowCircle onClick={(e) => handleNavCollapse(e)}className="navCollapseBtn" size={"2rem"}/>
      </nav>
  );
};

export default Nav;
