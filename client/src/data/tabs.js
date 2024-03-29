import {
  GiFox,
  GiWingedSword,
  GiGlassHeart,
  GiBigDiamondRing,
  GiDinosaurBones,
  GiSunflower,
  GiTruck,
  GiWaves,
  GiPocketRadio,
  GiBlackBook,
  GiStarSwirl,
  GiIceSpellCast,
  GiScales
} from "react-icons/gi";
import { FaPaw } from "react-icons/fa";

var abouttabs = [
  {
    key: 1,
    name: "Fox",
    icon: <GiFox size={"2.66rem"} />,
    className: "aboutTabUnlocked",
    toggled: false
  },
  {
    key: 2,
    name: "Sword",
    icon: <GiWingedSword size={"2.66rem"} />,
    className: "aboutTabUnlocked",
    toggled: false
  },
  {
    key: 3,
    name: "Heart",
    icon: <GiGlassHeart size={"2.66rem"} />,
    className: "aboutTabUnlocked",
    toggled: false
  }
];

var projecttabs = [
  {
    key: 6,
    name: "Grouper",
    icon: <GiScales size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 4,
    name: "Flower",
    icon: <GiSunflower size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 1,
    name: "Dino",
    icon: <GiDinosaurBones size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 2,
    name: "Paw",
    icon: <FaPaw size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 3,
    name: "Ring",
    icon: <GiBigDiamondRing size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 5,
    name: "Truck",
    icon: <GiTruck size={"1.66rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  }
];

var exptabs = [
  {
    key: 3,
    name: "Radio",
    icon: <GiPocketRadio size={"2rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 1,
    name: "Hex",
    icon: <GiIceSpellCast size={"2rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },

  {
    key: 4,
    name: "TypeRider",
    icon: <GiBlackBook size={"2rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 5,
    name: "Stars",
    icon: <GiStarSwirl size={"2rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  },
  {
    key: 2,
    name: "WaveForms",
    icon: <GiWaves size={"2rem"} />,
    className: "tabStateUnlocked",
    toggled: false
  }
];
export { abouttabs, projecttabs, exptabs };
