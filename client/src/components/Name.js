import React from 'react'

const Name = () => {
  return (
    <div><h1
    onClick={() => {
      window.location.reload();
    }}
  >
    {" "}
    <div className="nameBox">
      <data id="firstName">
        <em>Joshua</em>
      </data>
      <data id="middleName">
        <em>Newell</em>
      </data>
      <data id="lastName">
        <em>Diehl</em>
      </data>
    </div>
  </h1></div>
  )
}

export default Name;