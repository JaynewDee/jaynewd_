import React, { useState } from "react";
import Header from "../components/Header";
// import UtilityBar from "../components/UtilityBar";
import {
  aboutSwitch,
  projectSwitch,
  experimentSwitch,
} from "../utils/displaySwitch";
import ProjectsNav from "../pages/Projects/ProjectsNav";
import AboutNav from "../pages/About/AboutNav";
import ExpNav from "../pages/Experiments/Nav/ExpNav";
import SocialBox from "../components/SocialBox";
import Name from "../components/Name";
import { IconContext } from "react-icons";

const Portal = () => {
  const [displayState, setDisplay] = useState("aboutMain");
  const [navState, setNav] = useState("");
  console.log(displayState)
  const navSwitch = (state) => {
    const about = state.includes("about") ? state : false;
    const project = state.includes("project") ? state : false;
    const experiment = state.includes("experiment") ? state : false;

    switch (state) {
      case about:
        return <AboutNav id="aboutNav" setDisplay={setDisplay} />;
      case project:
        return <ProjectsNav setDisplay={setDisplay} />;
      case experiment:
        return <ExpNav setDisplay={setDisplay} />;
      default:
        break;
    }
  };

  return (
    <>
      <Header setDisplay={setDisplay} setNav={setNav} />
      <div value={displayState} id="bodyBox">
        <IconContext.Provider value={{ className: "icons" }}>
          <aside id="leftBox">
            <Name />
            <section id="buttonBox">{navSwitch(navState)}</section>
            <SocialBox />
          </aside>
        </IconContext.Provider>

        <article id="rightBox">
          <section className="displayBox">
            <aside className="contentBox">
              {aboutSwitch(displayState)}
              {projectSwitch(displayState)}
              {experimentSwitch(displayState)}
            </aside>
          </section>
          {/* <UtilityBar /> */}
        </article>
      </div>
    </>
  );
};

export default Portal;
