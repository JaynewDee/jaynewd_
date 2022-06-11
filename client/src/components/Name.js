import React from "react";

const Name = () => {
  return (
    <div className="headerBox">
      <h1
        onClick={() => {
          window.location.reload();
        }}
      >
        {" "}
        <div className="nameBox">
          <data id="firstName">
            <em>Joshua</em>
          </data>
          <data id="lastName">
            <em>Diehl</em>
          </data>
          <ul className="traitList">
          <span>{"-------"}</span>
            <li>Engineer</li>
            <span>{"-----"}</span>
            <li>Explorer</li>
            <span>{"---"}</span>

            <li>Optimist</li>
          </ul>
        </div>
      </h1>
    </div>
  );
};

export default Name;
