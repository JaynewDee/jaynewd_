import React, { useState } from 'react'
import { symbolStyles } from '../../../../data/symbolStyles';
const Truth = ({text, header}) => {
   
  return (
     <>
         
            <section className="truthSection" key={Math.random()}>
               <h2>
                  {header}
               </h2>

               {text}

            </section>
      </>
  )
}

export { Truth };