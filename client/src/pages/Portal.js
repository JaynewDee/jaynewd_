import React, { useState } from "react";
import NavTab from "../components/NavTab";
import Sidebar from "../components/Sidebar/Sidebar";
import UtilityBar from "../components/UtilityBar";
import {
  AboutSwitch,
  ProjectSwitch,
  ExperimentSwitch,
  weatherSwitch,
} from "../utils/displaySwitch";

import Modal from "../components/Modal";

import { IconContext } from "react-icons";
import { UtilityContextProvider } from "../context/UtilityContext";

const Portal = ({ navLocation }) => {
  const [displayState, setDisplay] = useState("aboutMain");
  const [navState, setNav] = useState("");
  const keygen = () => {
    return Math.floor(Math.random() * 10000);
  };

  return (
    <>
      <UtilityContextProvider>
        <NavTab
          setDisplay={setDisplay}
          setNav={setNav}
          location={navLocation}
        />

        <div id="bodyBox">
          <IconContext.Provider value={{ className: "icons" }}>
            <Sidebar navState={navState} setDisplay={setDisplay} />
          </IconContext.Provider>
          <article id="rightBox">
            <section className="displayBox">
              <aside key={keygen()} className="contentBox">
                {AboutSwitch(displayState)}
                {ProjectSwitch(displayState)}
                {ExperimentSwitch(displayState)}
                {weatherSwitch(displayState)}
              </aside>
            </section>
            <footer key={keygen()} className="footer">
              <UtilityBar setDisplay={setDisplay} />
            </footer>
          </article>
        </div>

        <Modal />
      </UtilityContextProvider>
    </>
  );
};

export default React.memo(Portal);
