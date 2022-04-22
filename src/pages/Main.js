import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import AboutMain from './About/AboutMain';
import AboutNav from './About/AboutNav';
import AboutCleverness from './About/AboutCleverness'
import Unopened from './Unopened';
const Main = () => {
   const [bodyfade, setFade] = useState("hide");
   

   useEffect(() => {
      setTimeout(() => {
         setFade("show")
      }, 2700)
   })
  return (
     <div className={bodyfade} id="bodyBox">
         <div id="leftBox">
               <aside id="sideNav">
                  <Routes>
                     <Route exact path="/" element={<Unopened />}>

                     </Route>
                     <Route exact path={"/about"} element={<AboutNav />}>

                     </Route>
                     <Route>

                     </Route>
                  </Routes>
            </aside>
         </div>
         <div id="rightBox">
            <section className="displayBox">
               
            </section>
         </div>
      </div>
  )
}

export default Main;