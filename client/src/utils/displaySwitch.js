import AboutMain from "../pages/About/AboutMain";
import AboutTruth from "../pages/About/AboutTruth";
import AboutBeauty from "../pages/About/AboutBeauty";
import AboutGoodness from "../pages/About/AboutGoodness";
import ProjectsMain from "../pages/Projects/ProjectsMain";
import ProjectPage from "../pages/Projects/ProjectPage";
import projectLayout from "../pages/Projects/projectLayout";
import ExpMain from "../pages/Experiments/ExpMain";
import ConverStation from "../pages/Experiments/converStation/ConverStation";

import {GetProject} from './API';
const getGit = new GetProject();


export const aboutSwitch = (state) => {
  switch (state) {
    case "aboutMain":
      return <AboutMain />;
    case "Fox":
      return <AboutTruth />;
    case "Sword":
      return <AboutBeauty />;
    case "Heart":
      return <AboutGoodness />;
    default:
      break;
  }
};

export const projectSwitch = (state) => {
  switch (state) {
    case "projectMain":
      return <ProjectsMain />;
    case "Dino":
      const Wrapped = 
         projectLayout(ProjectPage, getGit.dino());
         return <Wrapped/>
    case "Paw":
      projectLayout(ProjectPage, {
        owner: "MikeMallonIT",
        repo: "Project2-DaySpaw",
      });
      break;
    case "Ring":
      projectLayout(ProjectPage);
      break;
    case "Flower":
      projectLayout(ProjectPage);
      break;
    case "Truck":
      projectLayout(ProjectPage);
      break;
    default:
      break;
  }
};

export const experimentSwitch = (state) => {
  switch (state) {
    case "experimentMain":
      return <ExpMain />;
    case "ConverStation":
      return <ConverStation />;
    default:
      break;
  }
};
