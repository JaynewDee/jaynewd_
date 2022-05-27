import ProjectsNav from '../pages/Projects/ProjectsNav';
import AboutNav from '../pages/About/AboutNav';
import ExpNav from '../pages/Experiments/Nav/expNav';


export const navSwitch = (state) => {
   const about = state.includes("about") ? state : false;
   const project = state.includes("project") ? state : false;
   const experiment = state.includes("experiment") ? state : false;
   switch(state) {
      case about:
         return <AboutNav />
      case project:
         return <ProjectsNav />
      case experiment:
         return <ExpNav />
      default:
         break
   }
}