import React, { useState } from 'react';
import Aside from '../components/Aside'
import AboutMain from './About/AboutMain';
import AboutTruth from './About/AboutTruth';
import AboutBeauty from './About/AboutBeauty';
import AboutGoodness from './About/AboutGoodness'


const Main = (props) => {
   const [displayState, setDisplay] = useState("Fox");
   console.log(displayState);
   
      const aboutSwitch = (state) => {
         switch (state) {
            case "none":
               return <AboutMain/>
            case "Fox":
               return <AboutTruth />
            case "Sword":
               return <AboutBeauty />
            case "Heart":
               return <AboutGoodness />
            default:
               break
         }  
      }
   
  return (
         <div id="bodyBox">
             <div id="leftBox">
                   <Aside setDisplay={setDisplay}/>
             </div>
             <div id="rightBox">
                <section className="displayBox">
                  {aboutSwitch(displayState)}
                </section>
             </div>
          </div>
  )
}

export default Main;