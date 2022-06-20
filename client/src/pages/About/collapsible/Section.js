import React from 'react'

const Section = ({key, className, headerText, bodyText}) => {
  return (
    <section key={Math.floor(Math.random()*100)} className={className}>
    <h2>{headerText}</h2>
    <p>{bodyText}</p>
  </section>
  )
}

export default React.memo(Section);