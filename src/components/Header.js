import { AirlineSeatFlatAngledTwoTone } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const curlyLeft = '{'
const curlyRight = '}'



const Header = () => {
   const [fadeOne, setFadeOne] = useState("hide")
   const [fadeTwo, setFadeTwo] = useState("hide")
   const [fadeThree, setFadeThree] = useState("hide")
   const [fadeFour, setFadeFour] = useState("hide")
   const [fadeFive, setFadeFive] = useState("hide")

   const routes = [
      {
         key: 1,
         title: "About",
         className: 'navLink',
         href: "/about",
         fade: fadeThree
      },
      {
         key: 2,
         title: "Projects",
         className: 'navLink',
         href: "/projects",
         fade: fadeFour
      },
      {
         key: 3,
         title: "Elsewhere",
         className: 'navLink',
         href: "/elsewhere",
         fade: fadeFive
      },
   ]

   useEffect(() => {

      setFadeOne("show");

      setTimeout(() => {
        setFadeTwo("show")
      }, 500)
      setTimeout(() => {
         setFadeThree("show")
      }, 1000)
      setTimeout(() => {
         setFadeFour("show")
      }, 1500)
      setTimeout(() => {
         setFadeFive("show")
      }, 2000)
   })
  return (
    <header>
       <h1>
          <data className={fadeOne}>Synthetic</data>
          <data className={fadeTwo}> Rain </data>
          
       </h1>
       <nav>
          {routes.map((route) => {
             return (
                <Link className={route.fade} style={{textDecoration: 'none'}}key={route.key} to={route.href}>
                
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