import React, { useState, useReducer } from "react";
import NavTab from "../components/NavTab";
import UtilityBar from "../components/UtilityBar";
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
import Modal from "../components/Modal";
import { modalReducer } from "../context/reducers";

import { IconContext } from "react-icons";
import { useUserContext } from "../context/UserContext";
import { UtilityContextProvider } from "../context/UtilityContext";

const Portal = ({ navLocation }) => {
  const [displayState, setDisplay] = useState("aboutMain");
  const [navState, setNav] = useState("");
  const [modalState, dispatch] = useReducer(modalReducer, <div></div>);
  const user = useUserContext();
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
      <UtilityContextProvider>
        <NavTab
          setDisplay={setDisplay}
          setNav={setNav}
          location={navLocation}
        />

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
            <footer className="footer">
              <UtilityBar modalReducer={dispatch} />
            </footer>
          </article>
        </div>
      </UtilityContextProvider>
      {/* <Modal state={modalState} /> */}

    </>
  );
};

export default Portal;
