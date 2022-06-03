import React, { useState } from "react";
import { routes } from "../data/navRoutes";

const curlyLeft = "{";
const curlyRight = "}";

const Header = ({ setNav, setDisplay }) => {
  const [previousClicked, setPrevious] = useState("");

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

  return (
    <section className="navHeader">
      
      <nav>
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
              className={route.className + ' navLink'}
              style={{ textDecoration: "none" }}
              key={route.key}
            >
              <span className="curly">{curlyLeft}</span>
              <span className="navText"> {route.title} </span>
              <span className="curly">{curlyRight}</span>
            </button>
          );
        })}
      </nav>
    </section>
  );
};

export default Header;
