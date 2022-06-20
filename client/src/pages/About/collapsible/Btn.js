import React, { useState } from "react";

const Btn = ({name}) => {

    const locked = "collapsed";
    const unlocked = "expanded";

    const clickHandler = (e) => {

        if (e.target.value === unlocked) {
          e.target.value = locked;
        } else {
          e.target.value = unlocked;
        }
    }
    
  return (
    <>
      <button
        value={locked}
        key={Math.floor(Math.random()*100)}
        onClick={(e) => {
          e.preventDefault();
          console.log(e.target)
          clickHandler(e);
        }}
      >
        {name}
      </button>
    </>
  );
};

export default React.memo(Btn);
