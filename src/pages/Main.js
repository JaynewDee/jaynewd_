import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMain from './About/AboutMain';
import AboutNav from './About/AboutNav';
const Main = () => {
   
  return (
     <BrowserRouter>
     <div id="bodyBox">
         <div id="leftBox">
               <aside id="sideNav">
                  <Routes>
                     <Route exact path="/about" element={<AboutNav />}>

                     </Route>
                     <Route>

                     </Route>
                     <Route>

                     </Route>
                  </Routes>
            </aside>
         </div>
         <div id="rightBox">
            <section className="displayBox">
               <Routes>
                  <Route exact path="/about" element={<AboutMain />}>

                  </Route>
                  <Route>

                  </Route>
                  <Route>

                  </Route>
               </Routes>
            </section>
         </div>
      </div>
      </BrowserRouter>
  )
}

export default Main;