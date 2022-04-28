import React from 'react'
import { IconContext } from 'react-icons';
import {Routes, Route} from 'react-router-dom'
import ProjectsNav from '../pages/Projects/ProjectsNav';
import AboutNav from '../pages/About/AboutNav';
import Unopened from '../pages/Unopened';

const Aside = ({ setDisplay }) => {
  return (
   <IconContext.Provider value={{ className: "icons" }}>
      <Routes>
         <Route exact path="/" element={<Unopened />}>

         </Route>
         <Route exact path={"/about"} element={<AboutNav setDisplay={setDisplay}/>}>

         </Route>
         <Route exact path={"/projects"} element={<ProjectsNav setDisplay={setDisplay}/>}>

         </Route>
         <Route exact path={"/experiments"} element={<Unopened />}>

         </Route>
      </Routes>
   </IconContext.Provider>
  )
}

export default Aside;