import React from "react";
import LinkBox from "../../components/LinkBox";
import StatBox from "../../components/StatBox";
const ProjectPage = ({ data }) => {
  return (
    <>
      {!data ? (
        <div>Loading, please wait ... </div>
      ) : (
        <>
          <h2>{data.name}</h2>

          <LinkBox urls={data?.urls} />
          <StatBox
            lang={data.lang}
            date={data.created}
            license={data.license}
            className="statbox"
          />

          <section className="project-body">{data.body}</section>
        </>
      )}
    </>
  );
};

export default ProjectPage;
