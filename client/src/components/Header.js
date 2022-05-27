import React, { useState } from "react";
import { routes } from "../data/navRoutes";

const curlyLeft = "{";
const curlyRight = "}";
const bracketLeft = "[";
const bracketRight = "]";

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
      <h1
        onClick={() => {
          window.location.reload();
        }}
      >
        <data id="synthetic">
          <em>Synthetic</em>
        </data>
        <div>
          <span style={{ color: "rgba(0, 121, 140, 0.8)" }}>{bracketLeft}</span>
          <span style={{ color: "rgb(170, 0, 0)" }} className="curly">
            {curlyLeft}
          </span>
          <data id="rain">
            <em>Rain</em>
          </data>
          <span style={{ color: "rgb(170, 0, 0)" }} className="curly">
            {curlyRight}
          </span>
          <span style={{ color: "rgba(0, 121, 140, 0.8)" }}>
            {bracketRight}
          </span>
        </div>
      </h1>
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
              className={route.className}
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
