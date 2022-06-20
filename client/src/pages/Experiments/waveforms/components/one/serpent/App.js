import React from "react";
import "./App.scss";
import Serpent from './components/Serpent';
import { v4 as uuidv4 } from "uuid";

const Serpents = () => {

  return (
    <div key={uuidv4}className=".Serpents">
      <article key={uuidv4} className="slideline-box">
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
      </article>
    </div>
  );
};

export default React.memo(Serpents);
