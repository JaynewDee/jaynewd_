import React from 'react';
import { Link } from 'react-router-dom'

const curlyLeft = '{'
const curlyRight = '}'


const Header = () => {
   
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
         title: "Experiments",
         className: 'navLink',
         href: "/experiments",
      },
   ]

  return (
    <header>
       <h1>
          <data id="synthetic">Synthetic</data>
          <data id="rain"> Rain </data>
       </h1>
       <nav>
          {routes.map((route) => {
             
             return (
                <Link className={route.className} style={{textDecoration: 'none'}}key={route.key} to={route.href}>
                        <span className="curly">{curlyLeft}</span>
                           <span className="navText"> {route.title} </span> 
                        <span className="curly">{curlyRight}</span>
                  </Link>
               
             )
          })}
       </nav>
    </header>
  )
}

export default Header;