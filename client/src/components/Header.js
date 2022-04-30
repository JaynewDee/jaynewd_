import React, { useState } from 'react';
import {routes} from '../data/navRoutes'
const curlyLeft = '{'
const curlyRight = '}'


const Header = ({ setNav, setDisplay }) => {
   
   const [previousClicked, setPrevious] = useState("")
   
   const locked = 'navLinkLocked';
   const unlocked = 'navLinkUnlocked';

   const tabSwitch = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      console.log(e.target)
      if (previousClicked !== "") {
         previousClicked.className = unlocked;
      }
      if (e.target.className === locked) {
         e.target.className = unlocked
      }
      else if (e.target.className === unlocked) {
         e.target.className = locked
      }
      setPrevious(e.target)
   }

  return (
    <header>
      <h1 onClick={(() => {window.location.reload()})}>
          <data id="synthetic">Synthetic</data>
          <data id="rain"> Rain </data>
      </h1>
       <nav>
          {routes.map((route) => {
             
             return (
                <button autoFocus={route.autofocus}type="reset" value={route.value} onClick={((e) => {
                  tabSwitch(e);
                  setNav(e.target.value)
                  setDisplay(e.target.value)
                  console.log(e.target)
                  })} className={route.className} style={{textDecoration: 'none'}} key={route.key}>
                        <span className="curly">{curlyLeft}</span>
                        <span className="navText"> {route.title} </span> 
                        <span className="curly">{curlyRight}</span>
                  </button>
                  
             )
          })}
       </nav>
    </header>
  )
}

export default Header;