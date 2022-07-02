import React from "react";
import "./index.scss";
import { v4 as uuid } from "uuid";
import Menu from "./components/menu/Menu";
import Construction from "../../../components/Construction";
const WavePortal = ({ props }) => {
  return (
    <div key={uuid()} className="wave-portal">
      <Menu menuProps={props} />
      <Construction />
    </div>
  );
};

export default WavePortal;
