import React, { useState } from 'react'
const Truth = ({text, header}) => {
   
  return (
     <>
         
            <section className="truthSection" key={Math.floor(Math.random()*1000)}>
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
 
export { Truth };