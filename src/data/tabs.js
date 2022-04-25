import { GiFox,  GiWingedSword, GiGlassHeart, GiBigDiamondRing, GiDinosaurBones, GiSunflower, GiTruck } from "react-icons/gi"
import { FaPaw } from "react-icons/fa"

const abouttabs = [
   {
      key: 1,
      name: "Fox",
      icon: <GiFox size={"2.66rem"}/>,
      className: "aboutTab",
   },
   {
      key: 2,
      name: "Sword",
      icon: <GiWingedSword size={"2.66rem"}/>,
      className: "aboutTab",
   },
   {
      key: 3,
      name: "Heart",
      icon: <GiGlassHeart size={"2.33rem"}/>,
      className: "aboutTab",
   },
]

const projecttabs = [
   {
      key: 1,
      name: "Dino",
      icon: <GiDinosaurBones size={"2rem"} />,
      className: "projectTab",
      toggled: false

   },
   {
      key: 2,
      name: "Paw",
      icon: <FaPaw size={"1.66rem"} />,
      className: "projectTab",
      toggled: false
   },
   {
      key: 3,
      name: "Ring",
      icon: <GiBigDiamondRing size={"2rem"}/>,
      className: "projectTab",
      toggled: false
   },
   {
      key: 4,
      name: "Flower",
      icon: <GiSunflower size={"2rem"} />,
      className: "projectTab",
      toggled: false
   },
   {
      key: 5,
      name: "Truck",
      icon: <GiTruck size={"2rem"} />,
      className: "projectTab",
      toggled: false
   }
]

export {abouttabs, projecttabs};