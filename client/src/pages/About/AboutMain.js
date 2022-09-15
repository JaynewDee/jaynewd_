import React from "react";

const AboutMain = () => {
  return (
    <>
      <h3 style={{ alignSelf: "flex-start", marginBottom: "3rem" }}>Hello!</h3>
      <section className="section">
        <h3 className="section-header">Projects</h3>
        <p>
          The demonstration of my love for programming by sharing, however
          flawed, the programs I have built or helped to build.
        </p>
        <h3 className="section-header">Ethos</h3>
        <p>
          The distillation and expression of a conceptual framework which
          provides meaning and warmth to my life.
        </p>
        <h3 className="section-header">etc.</h3>
        <p>
          Any of my creative endeavors which would fall clumsily into the
          Projects category.
        </p>
      </section>
      <p>
        If the eye is a portal between the phenomenal world and the human mind,
        may this site be a portal between your world and mine.
      </p>
      <p>Best always,</p>
      <br />
      <h4>
        <strong>
          <em>Joshua</em>
        </strong>
      </h4>
      <div className="footSpacer">---</div>
      <div className="footSpacer">-----</div>
      <div className="footSpacer">---</div>
    </>
  );
};

export default AboutMain;
