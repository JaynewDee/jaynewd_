import React, { useState } from 'react';
import { abouttabs } from '../../data/tabs';

const AboutNav = ({setDisplay}) => {
      
   const [previousClicked, setPrevious] = useState("")

   const locked = 'aboutTabLocked';
   const unlocked = 'aboutTabUnlocked';

   const tabSwitch = (e) => {
      if (previousClicked !== "") {
         previousClicked.className = unlocked;
      }
      if (e.target.className === locked) {
         e.target.className = unlocked
      }
      else if (e.target.className === unlocked) {
         e.target.className = locked
      }
      setPrevious(e.target)
   }


     return (
        abouttabs.map((item) => {
           return (
            <button onClick={((e) => {
                              tabSwitch(e);
                              setDisplay(e.target.value)
                              })}className={item.className} key={item.key} value={item.name}>
               {item.icon}
            </button>
        )})
     )
}

export default AboutNav;