import AboutMain from "../pages/About/AboutMain";
import aboutLayout from "../pages/About/AboutLayout";
import Menu from "../pages/About/Menu";
import ProjectsMain from "../pages/Projects/ProjectsMain";
import ProjectPage from "../pages/Projects/ProjectPage";
import projectLayout from "../pages/Projects/projectLayout";
import ExpMain from "../pages/Experiments/ExpMain";
<<<<<<< HEAD
import Feature from "../pages/Experiments/feature/Feature";
=======
>>>>>>> main
import WavePortal from "../pages/Experiments/waveforms/WavePortal";
import Audio from "../components/Audio/Audio";
import Astronomy from "../components/Astronomy";
import { TypeRider } from "../pages/Experiments/typerider/App";

import {
  truthProps,
  beautyProps,
  goodnessProps,
} from "../pages/About/collapsible/props";
import { waveProps } from "../pages/Experiments/waveforms/props/waveProps";
import { CurrentWeather } from "../components/Weather/Current";

export const AboutSwitch = (state) => {
  const Wrapped = aboutLayout(Menu);
  const aboutOptions = {
    aboutMain: <AboutMain />,
    Fox: <Wrapped props={truthProps} />,
    Sword: <Wrapped props={beautyProps} />,
    Heart: <Wrapped props={goodnessProps} />,
  };
  return aboutOptions[state];
};

export const ProjectSwitch = (state) => {
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

export const ExperimentSwitch = (state) => {
  const expOptions = {
    experimentMain: <ExpMain />,
    feature: <Feature />,
    WaveForms: <WavePortal props={waveProps} />,
    Radio: <Audio />,
    TypeRider: <TypeRider />,
    Stars: <Astronomy />,
  };
  return expOptions[state];
};

export const weatherSwitch = (state) => {
  const weatherOptions = {
    current: <CurrentWeather />,
  };
  return weatherOptions[state];
};
