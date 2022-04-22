import React, { useState } from 'react'

import '../../styles/Nav/AboutNav.scss'
import { GiFox,  GiWingedSword, GiGlassHeart } from "react-icons/gi"


const abouttabs = [
   {
      key: 1,
      name: "Fox",
      icon: <GiFox size={"4rem"}/>,
      className: "aboutTab"
   },
   {
      key: 2,
      name: "Owl",
      icon: <GiWingedSword size={"4rem"}/>,
      className: "aboutTab"
   },
   {
      key: 3,
      name: "Heart",
      icon: <GiGlassHeart size={"3.66rem"}/>,
      className: "aboutTab"
   },
]
const AboutNav = () => {
   const [tab, setTab] = useState("Fox")
   
     return (
        abouttabs.map((item) => {
           return (
            <div className={item.className} key={item.key}>
               {item.icon}
            </div>
        )})
      
     )
}

export default AboutNav