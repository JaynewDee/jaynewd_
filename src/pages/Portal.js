import React, { useState } from 'react';
import Header from '../components/Header'
import Aside from '../components/Aside';
import {aboutSwitch, projectSwitch} from '../utils/displaySwitch'

const Portal = () => {
      
   const [displayState, setDisplay] = useState("")
   
   console.log(displayState)
  return (
      <>
         <Header setDisplay={setDisplay}/>

         <div id="bodyBox">

             <div id="leftBox">
                   <Aside id="sideBar" setDisplay={setDisplay}/>
             </div>

             <div id="rightBox">
               <section>
                  {aboutSwitch(displayState)}
                  {projectSwitch(displayState)}
               </section>
             </div>
         </div>
      </>
  )
}

export default Portal;