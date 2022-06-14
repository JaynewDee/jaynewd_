import React, { useState } from 'react';
import {Menu} from './collapsible/Menu';
import {propsObject} from './collapsible/props'

const AboutPage= () => {
   const [previous, setPrevious] = useState("");
   
   const locked = "collapsed";
   const unlocked = "expanded";

   
   const clickHandler = (e) => {
         if (previous !== "") {
            if(e.target === previous) {return}
            setPrevious(e.target)
            e.target.className = unlocked;
            previous.className = locked;
            return;
         }
         if (e.target.className === unlocked) {
            e.target.className = locked
         }
         else {
            e.target.className = unlocked
         }
         setPrevious(e.target)
      }
   
  return (
      <div key="55" id="truthBox">
         {propsObject.map((item) => {
        return (
           <>
            <button 
               className={locked}
               text={item.name} key={item.key} onClick={((e) => {
                  clickHandler(e)

            })}>
               {item.name}
            </button>
            <Menu text={item.section.text} header={item.header.text} key={Math.floor(Math.random()*1000)} />
            </>
         )
         
        })}
      </div>
      )
   
}

export default AboutPage;