import ProjectsNav from '../pages/Projects/ProjectsNav';
import AboutNav from '../pages/About/AboutNav';


export const navSwitch = (state) => {
   const about = state.includes("about") ? state : false;
   const project = state.includes("project") ? state : false;
   
   switch(state) {
      case about:
         return <AboutNav />
      case project:
         return <ProjectsNav />
      default:
         break
   }
}