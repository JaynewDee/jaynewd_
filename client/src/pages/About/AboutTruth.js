import React, { useState } from 'react';
import {Truth} from './collapsible/main';
import {propsObject} from '../About/collapsible/Truth/props'
import '../../styles/Main/About.scss'

const AboutTruth = () => {
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
            <Truth text={item.section.text} header={item.header.text} key={Math.floor(Math.random()*10)} />
            </>
         )
         
        })}
      </div>
      )
   
}

export default AboutTruth;