import React, { useState } from "react";
import Header from "../components/Header";
import UtilityBar from "../components/UtilityBar";
import { aboutSwitch, projectSwitch, experimentSwitch } from "../utils/displaySwitch";
import ProjectsNav from "../pages/Projects/ProjectsNav";
import AboutNav from "../pages/About/AboutNav";
import { IconContext } from "react-icons";

const Portal = () => {
  const [displayState, setDisplay] = useState("aboutMain");
  const [navState, setNav] = useState("");

  const navSwitch = (state) => {
    const about = state.includes("about") ? state : false;
    const project = state.includes("project") ? state : false;

    switch (state) {
      case about:
        return <AboutNav id="aboutNav" setDisplay={setDisplay} />;
      case project:
        return <ProjectsNav setDisplay={setDisplay} />;
      default:
        break;
    }
  };
  return (
    <>
      <Header setDisplay={setDisplay} setNav={setNav} />

      <div id="bodyBox">
        <IconContext.Provider value={{ className: "icons" }}>
          <div id="leftBox">
            <div id="buttonBox">{navSwitch(navState)}</div>
          </div>
        </IconContext.Provider>

        <div id="rightBox">
          <section className="displayBox">
            {aboutSwitch(displayState)}
            {projectSwitch(displayState)}
          </section>
          <UtilityBar />
        </div>
      </div>
    </>
  );
};

export default Portal;
