import React from "react";

const Name = () => {
  return (
    <>
      <div className="headerBox">
        <h1
          onClick={() => {
            window.location.reload();
          }}
        >
          {" "}
          <div className="nameBox" style={{ marginTop: "1rem" }}>
            <data id="firstName">
              <em>Joshua</em>
            </data>
            <data id="lastName">
              <em>Diehl</em>
            </data>
            <ul className="traitList">
              <span>{"-------"}</span>
              <li>Developer</li>
              <span>{"-----"}</span>
              <li>Explorer</li>
              <span>{"---"}</span>
              <li>Artist</li>
            </ul>
          </div>
        </h1>
      </div>
      <div className="divider"></div>
    </>
  );
};
export default Name;
