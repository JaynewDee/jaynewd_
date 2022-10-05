import AboutMain from "../pages/About/AboutMain";
import aboutLayout from "../pages/About/AboutLayout";
import Menu from "../pages/About/Menu";
import ProjectsMain from "../pages/Projects/ProjectsMain";
import ProjectPage from "../pages/Projects/ProjectPage";
import projectLayout from "../pages/Projects/projectLayout";
import ExpMain from "../pages/Experiments/ExpMain";
import WavePortal from "../pages/Experiments/waveforms/WavePortal";
import Audio from "../components/Audio/Audio";
import Astronomy from "../components/Astronomy";
import { App } from "../pages/Experiments/typerider/App";
const TypeRider = App;
import {
  truthProps,
  beautyProps,
  goodnessProps,
} from "../pages/About/collapsible/props";
import { waveProps } from "../pages/Experiments/waveforms/props/waveProps";
import { CurrentWeather } from "../components/Weather/Current";

export const aboutSwitch = (state) => {
  const Wrapped = aboutLayout(Menu);
  switch (state) {
    case "aboutMain":
      return <AboutMain />;
    case "Fox":
      return <Wrapped props={truthProps} />;
    case "Sword":
      return <Wrapped props={beautyProps} />;
    case "Heart":
      return <Wrapped props={goodnessProps} />;
    default:
      break;
  }
};

export const projectSwitch = (state) => {
  let Wrapped;
  switch (state) {
    case "projectMain":
      return <ProjectsMain />;
    case "Dino":
      Wrapped = projectLayout(ProjectPage, { name: "Parks & Rex" });
      return <Wrapped />;
    case "Paw":
      Wrapped = projectLayout(ProjectPage, { name: "Dayspaw" });
      return <Wrapped />;
    case "Ring":
      Wrapped = projectLayout(ProjectPage, { name: "Mood Ring" });
      return <Wrapped />;
    case "Flower":
      Wrapped = projectLayout(ProjectPage, { name: "Cara Bella" });
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
    case "WaveForms":
      return <WavePortal props={waveProps} />;
    case "Radio":
      return <Audio />;
    case "TypeRider":
      return <TypeRider />;
    case "Stars":
      return <Astronomy />;
    default:
      break;
  }
};

export const weatherSwitch = (state) => {
  switch (state) {
    case "current":
      return <CurrentWeather />;
  }
};
