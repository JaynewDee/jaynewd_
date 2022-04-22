import React from 'react'
import '../../styles/Nav/AboutNav.scss'
import { DiCode } from "react-icons/di";


const tabs = [
   {
      key: 1,
      name: "",
      icon: DiCode,
      className: "aboutTab"
   },
   {
      key: 2,
      name: "",
      icon: "",
      className: "aboutTab"
   },
   {
      key: 3,
      name: "",
      icon: "",
      className: "aboutTab"
   },
]
const AboutNav = () => {


  
     return (
        tabs.map((item) => {
           return (
            <div className={item.className} key={item.key}>
               <a href={item.icon}>{item.icon}</a>
            </div>
        )})
      
     )
}

export default AboutNav