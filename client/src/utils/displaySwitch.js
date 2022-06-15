import AboutMain from '../pages/About/AboutMain';
import aboutLayout from '../pages/About/AboutLayout';
import Menu from '../pages/About/Menu';
import ProjectsMain from "../pages/Projects/ProjectsMain";
import ProjectPage from "../pages/Projects/ProjectPage";
import projectLayout from "../pages/Projects/projectLayout";
import ExpMain from "../pages/Experiments/ExpMain";
import ConverStation from "../pages/Experiments/converStation/ConverStation";
import {truthProps, beautyProps, goodnessProps} from '../pages/About/collapsible/props'
import { dino, paws, ring, flower, truck } from "./config";

let Wrapped = undefined;
export const aboutSwitch = (state) => {
  switch (state) {
    case "aboutMain":
      return <AboutMain />;
    case "Fox":
      Wrapped = aboutLayout(Menu);
      return <Wrapped props={truthProps} />
    case "Sword":
      return <Menu props={beautyProps}/>;
    case "Heart":
      return <Menu props={goodnessProps}/>;
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
      Wrapped = projectLayout(ProjectPage);
      return <Wrapped />;
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
