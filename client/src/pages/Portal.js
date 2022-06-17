import React, { useState, useEffect } from "react";
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

import { IconContext } from "react-icons";
import { useUserContext } from "../context/UserContext";

const Portal = ({ navLocation }) => {
  const [displayState, setDisplay] = useState("aboutMain");
  const [navState, setNav] = useState("");
  const [modalType, setModalType] = useState("");
  const [modalVisibility, setModalVisibility] = useState("hidden");

  const user = useUserContext();

  useEffect(() => {
    if (user.loggedIn) {
      setModalVisibility("hidden");
    }
  }, [user]);

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
      <NavTab setDisplay={setDisplay} setNav={setNav} location={navLocation} />
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
            <Modal
              visibility={modalVisibility}
              setVisibility={setModalVisibility}
              modalState={modalType}
            />
            <aside className="contentBox">
              {aboutSwitch(displayState)}
              {projectSwitch(displayState)}
              {experimentSwitch(displayState)}
            </aside>
          </section>
          <footer className="footer">
            <UtilityBar
              setModalType={setModalType}
              setVisibility={setModalVisibility}
              loginStatus={user.loggedIn}
            />
          </footer>
        </article>
      </div>
    </>
  );
};

export default Portal;
