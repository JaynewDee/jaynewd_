import React, { useState } from 'react';
import { Principle } from './collapsible/Principle';

const Menu = ({props}) => {
   const [previous, setPrevious] = useState("");
   console.log(props)
   const locked = "collapsed";
   const unlocked = "expanded";

  const clickHandler = (e) => {
    if (previous !== "") {
      if (e.target === previous) {
        return;
      }
      setPrevious(e.target);
      e.target.className = unlocked;
      previous.className = locked;
      return;
    }
    if (e.target.className === unlocked) {
      e.target.className = locked;
    } else {
      e.target.className = unlocked;
    }
    setPrevious(e.target);
  };

  return (
    <div key={Math.floor(Math.random()*1000)} id="truthBox">
      {props.map((item, index) => {
        return (
          <>
            <button
              className={locked}
              text={item.name}
              key={index}
              onClick={(e) => {
                clickHandler(e);
              }}
            >
              {item.name}
            </button>
            <Principle key={item.key} text={item.text} header={item.header.text} />
            </>
         )
        })}
      </div>
      )
   
}

export default Menu;
