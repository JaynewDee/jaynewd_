import AboutMain from '../pages/About/AboutMain';
import AboutTruth from '../pages/About/AboutTruth';
import AboutBeauty from '../pages/About/AboutBeauty';
import AboutGoodness from '../pages/About/AboutGoodness';
import ProjectsMain from '../pages/Projects/ProjectsMain';
import ProjectOne from '../pages/Projects/displays/ProjectOne'
import ProjectTwo from '../pages/Projects/displays/ProjectTwo';
import ProjectThree from '../pages/Projects/displays/ProjectThree';
import ProjectFour from '../pages/Projects/displays/ProjectFour';
import ProjectFive from '../pages/Projects/displays/ProjectFive';
import converStation from '../pages/converStation/converStation.js';



export const aboutSwitch = (state) => {
   switch (state) {
      case "aboutMain":
         return <AboutMain />
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

export const projectSwitch = (state) => {
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
};

export const experimentSwitch = (state) => {
   switch (state) {
      case "converStation":
         return <converStation />
      default:
         break
   }
}