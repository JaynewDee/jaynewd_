import React from "react";
import "./index.scss";
import { v4 as uuid } from 'uuid';
import Menu from "./components/menu/Menu";
import Serpent from "./components/one/serpent/components/Serpent";
import Serpents from "./components/one/serpent/App";
const WavePortal = ({props}) => {
  return (
    <div key={uuid()}className="wave-portal">
      <Menu menuProps={props}/>
      <Serpent />
    </div>
  );
};

export default WavePortal;
