import React, { useState } from "react";
const Menu = ({ text, header }) => {
  return (
    <>
      <section className="collapseMenu" key={Math.floor(Math.random() * 1000)}>
        <h2>{header}</h2>
        <p>{text}</p>
      </section>
    </>
  );
};

export { Menu };
