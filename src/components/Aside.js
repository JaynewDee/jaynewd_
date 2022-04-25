import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProjectsNav from '../pages/Projects/ProjectsNav';
import AboutNav from '../pages/About/AboutNav';
import Unopened from '../pages/Unopened';

const Aside = ({ setDisplay }) => {
  return (
      <Routes>
         <Route exact path="/" element={<Unopened />}>

         </Route>
         <Route exact path={"/about"} element={<AboutNav setDisplay={setDisplay}/>}>

         </Route>
         <Route exact path={"/projects"} element={<ProjectsNav />}>

         </Route>
         <Route exact path={"/experiments"} element={<Unopened />}>

         </Route>
      </Routes>
  )
}

export default Aside;