import React, { useState, useEffect } from 'react'
import '../../styles/Nav/ProjectsNav.scss'
import {projecttabs} from '../../data/tabs'

const ProjectsNav = () => {

   const lockStateStyles = `animation: lockIn 1s ease-out; animation-fill-mode: forwards; color: rgb(170,0,0)`;
   const unLockStateStyles = `animation: unLock 1s ease-out; animation-fill-mode: backwards`;
   
   
   const [locked, setLocked] = useState(false);
   const [toggle, setToggle] = useState("")
   const [previous, setPrevious] = useState("")

   console.log(toggle)
   const animationSwitch = (e) => {
      setPrevious(e.target)
      console.log(e)
      console.log(locked)
      let clicked = e.target.value;
      if (locked === true) {
         
      }
      if (clicked === toggle){
         e.target.style = unLockStateStyles;
         setToggle("");
         setLocked(false);
      }
      else if (clicked !== toggle) {
         e.target.style = lockStateStyles
         setToggle(e.target.value)
         setLocked(true)
      }
      previous.style = unLockStateStyles;
      setPrevious("")
   }
   

   
   return (
      projecttabs.map((item) => {
         return (
          <div onClick={animationSwitch} className={item.className} key={item.key} value={item.name}>
             {item.icon}
          </div>
      )})
   )
}

export default ProjectsNav;