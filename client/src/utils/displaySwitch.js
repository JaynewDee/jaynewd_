import AboutMain from '../pages/About/AboutMain';
import AboutTruth from '../pages/About/AboutTruth';
import AboutBeauty from '../pages/About/AboutBeauty';
import AboutGoodness from '../pages/About/AboutGoodness';
import ProjectsMain from '../pages/Projects/ProjectsMain';
import ProjectPage from '../pages/Projects/ProjectPage';
import projectLayout from '../pages/Projects/projectLayout';
import ExpMain from '../pages/Experiments/ExpMain';
import Git from './API';
import ConverStation from '../pages/Experiments/converStation/ConverStation';

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
         return projectLayout(<ProjectPage/>, Git.getRex())
      case "Paw":
         return projectLayout(<ProjectPage/>, Git.getPaws())
      case "Ring":
         return projectLayout(<ProjectPage/>)
      case "Flower":
         return projectLayout(<ProjectPage/>)
      case "Truck":
         return projectLayout(<ProjectPage/>)
      default:
         break
   }
};

export const experimentSwitch = (state) => {
   switch (state) {
      case "experimentMain":
         return <ExpMain />
      case "ConverStation":
         return <ConverStation />
      default:
         break
   }
}