import React, { useEffect, useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const curlyLeft = '{'
const curlyRight = '}'





const Header = () => {
   const [visibility, setVisibility] = useState(["hide", "hide", "hide", "hide", "hide"])

   const routes = [
      {
         key: 1,
         title: "About",
         className: 'navLink',
         href: "/about",
      },
      {
         key: 2,
         title: "Projects",
         className: 'navLink',
         href: "/projects",
      },
      {
         key: 3,
         title: "Elsewhere",
         className: 'navLink',
         href: "/elsewhere",
      },
   ]

  return (
    <header>
       <h1>
          <data>Synthetic</data>
          <data> Rain </data>
          
       </h1>
       <nav>
          {routes.map((route) => {
             
             return (
                <Link className={route.className} style={{textDecoration: 'none'}}key={route.key} to={route.href}>
                
                   <Nav.Item 
                        className={route.className}>
                     
                        <span className="curly">{curlyLeft}</span>
                           <span className="navText"> {route.title} </span> 
                        <span className="curly">{curlyRight}</span>
                        </Nav.Item>
               </Link>
               
             )
          })}
       </nav>
    </header>
  )
}

export default Header;