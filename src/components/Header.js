import React from 'react';

const routes = [
   {
      key: 1,
      title: "About",
      className: 'navLink',
      href: "https://www.google.com",
      // style: 
   },
   {
      key: 2,
      title: "Projects",
      className: 'navLink',
      href: "https://www.google.com",
   },
   {
      key: 3,
      title: "Elsewhere",
      className: 'navLink',
      href: "https://www.google.com",
   },
]
const curlyLeft = '{'
const curlyRight = '}'

const Header = () => {

  return (
    <header>
       <h1>
          <data>Synthetic</data>
          <data> Rain </data>
       </h1>
       <nav>
          {routes.map((route) => {
             return (
                <a 
                  key={route.key} 
                  href={route.href} 
                  className={route.className}>
                     
                        <span className="curly">{curlyLeft}</span>
                           <span className="navText"> {route.title} </span> 
                        <span className="curly">{curlyRight}</span>
               </a>
             )
          })}
       </nav>
    </header>
  )
}

export default Header;