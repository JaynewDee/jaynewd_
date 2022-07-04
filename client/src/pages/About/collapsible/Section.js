import React from "react";

const Section = ({ className, headerText, bodyText }) => {
  return (
    <section key={Math.floor(Math.random() * 100)} className={className}>
      <h3 className="section-header" key={Math.floor(Math.random() * 1000)}>
        {headerText}
      </h3>
      <p className="section-text" key={Math.floor(Math.random() * 1000)}>
        {bodyText}
      </p>
    </section>
  );
};

export default Section;
