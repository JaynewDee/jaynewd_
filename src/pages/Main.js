import React, { useState } from 'react';
import Aside from '../components/Aside';
import {aboutSwitch, projectSwitch} from '../utils/displaySwitch'


const Main = () => {
   const [displayState, setDisplay] = useState("");
   console.log(displayState)
      
   
   
  return (
         <div id="bodyBox">

             <div id="leftBox">
                   <Aside id="sideBar" setDisplay={setDisplay}/>
             </div>

             <div id="rightBox">

                <section className="displayBox">
                  {aboutSwitch(displayState)}
                  {projectSwitch(displayState)}
                </section>

             </div>

         </div>
  )
}

export default Main;