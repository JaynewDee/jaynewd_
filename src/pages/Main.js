import React, { useState } from 'react';
import Aside from '../components/Aside';
import AboutMain from './About/AboutMain';
import AboutTruth from './About/AboutTruth';
import AboutBeauty from './About/AboutBeauty';
import AboutGoodness from './About/AboutGoodness';
import ProjectsMain from './Projects/ProjectsMain';
import ProjectOne from './Projects/displays/ProjectOne'
import ProjectTwo from './Projects/displays/ProjectTwo';
import ProjectThree from './Projects/displays/ProjectThree';
import ProjectFour from './Projects/displays/ProjectFour';
import ProjectFive from './Projects/displays/ProjectFive';


const Main = () => {
   const [displayState, setDisplay] = useState("");
   console.log(displayState)
      const aboutSwitch = (state) => {
         switch (state) {
            case "aboutNone":
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
      const projectSwitch = (state) => {
         switch (state) {
            case "projectMain":
               return <ProjectsMain />
            case "Dino":
               return <ProjectOne />
            case "Paw":
               return <ProjectTwo />
            case "Ring":
               return <ProjectThree />
            case "Flower":
               return <ProjectFour />
            case "Truck":
               return <ProjectFive />
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
                  {projectSwitch(displayState)}
                </section>
             </div>
          </div>
  )
}

export default Main;