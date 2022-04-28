import React from 'react'
import { IconContext } from 'react-icons';
import {Routes, Route} from 'react-router-dom'
import ProjectsNav from '../pages/Projects/ProjectsNav';
import AboutNav from '../pages/About/AboutNav';
import Unopened from '../pages/Unopened';

const Aside = ({ setDisplay }) => {
  return (
   <IconContext.Provider value={{ className: "icons" }}>
      
   </IconContext.Provider>
  )
}

export default Aside;