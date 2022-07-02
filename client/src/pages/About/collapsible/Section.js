import React from "react";

const Section = ({ className, headerText, bodyText }) => {
  return (
    <section key={Math.floor(Math.random() * 100)} className={className}>
      <h2 key={Math.floor(Math.random() * 1000)}>{headerText}</h2>
      <p className="about-text" key={Math.floor(Math.random() * 1000)}>
        {bodyText}
      </p>
    </section>
  );
};

export default Section;
