import React, { useState } from 'react'
const Menu = ({text, header}) => {
   
  return (
     <>
         
            <section className="truthSection" key={Math.floor(Math.random()*100)}>
               <h2>
                  {header}
               </h2>
               <p>
               {text}
               </p>

            </section>
      </>
  )
}
 
export {Menu};