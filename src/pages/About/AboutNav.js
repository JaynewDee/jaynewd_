import React from 'react';
import '../../styles/Nav/AboutNav.scss';
import { abouttabs } from '../../data/tabs';

const AboutNav = ({setDisplay}) => {
      
     return (
        abouttabs.map((item) => {
           return (
            <button onClick={((e) => {
                              setDisplay(e.target.value)
                              })}className={item.className} key={item.key} value={item.name}>
               {item.icon}
            </button>
        )})
     )
}

export default AboutNav;