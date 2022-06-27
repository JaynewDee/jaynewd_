import React from "react";
import Name from "../Name";
import SocialBox from "../SocialBox";
import ProjectsNav from "../../pages/Projects/ProjectsNav";
import AboutNav from "../../pages/About/AboutNav";
import ExpNav from "../../pages/Experiments/Nav/ExpNav";

const Sidebar = ({ navState, setDisplay }) => {
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
    <aside id="leftBox">
      <Name />
      <section key={Math.floor(Math.random() * 1000)} id="buttonBox">
        {navSwitch(navState)}
      </section>
      <SocialBox />
    </aside>
  );
};

export default React.memo(Sidebar);
