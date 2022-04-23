import React, { useState, useEffect } from 'react'
import '../../styles/Nav/AboutNav.scss'
import {abouttabs} from '../../data/tabs'

const AboutNav = (items) => {
   
      
     return (
        abouttabs.map((item) => {
           return (
            <div className={item.className} key={item.key}>
               {item.icon}
            </div>
        )})
     )
}

export default AboutNav;