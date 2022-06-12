import AboutMain from '../pages/About/AboutMain';
import AboutPage from '../pages/About/AboutPage';
import aboutlayout from '../pages/About/aboutLayout';
import ProjectsMain from "../pages/Projects/ProjectsMain";
import ProjectPage from "../pages/Projects/ProjectPage";
import projectLayout from "../pages/Projects/projectLayout";
import ExpMain from "../pages/Experiments/ExpMain";
import ConverStation from "../pages/Experiments/converStation/ConverStation";

import { dino, paws, ring, flower, truck } from "./config";

let Wrapped = undefined;
export const aboutSwitch = (state) => {
  switch (state) {
    case "aboutMain":
      return <AboutMain />;
    case "Fox":
      return
    case "Sword":
      return 
    case "Heart":
      return 
    default:
      break;
  }
};

export const projectSwitch = (state) => {
  switch (state) {
    case "projectMain":
      return <ProjectsMain />;
    case "Dino":
      Wrapped = projectLayout(ProjectPage, dino);
      return <Wrapped />;
    case "Paw":
      Wrapped = projectLayout(ProjectPage, paws);
      return <Wrapped />;
    case "Ring":
      Wrapped = projectLayout(ProjectPage, ring);
      return <Wrapped />;
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
