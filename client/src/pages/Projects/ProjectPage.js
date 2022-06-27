import React from "react";
import LinkBox from "../../components/LinkBox";
import StatBox from "../../components/StatBox";
const ProjectPage = ({ data, readme }) => {
  return (
    <>
      {!data ? (
        <div>Loading, please wait ...</div>
      ) : (
        <>
          <h3 id={data.id}>| {data.name || "Fetching data..."} |</h3>

          <LinkBox htmlUrl={data.html_url} cloneUrl={data.clone_url} />
          <StatBox
            language={data.language}
            created={data.created_at}
            updated={data.updated_at}
            license={data.license}
          />

          <section>{readme}</section>
        </>
      )}
    </>
  );
};

export default ProjectPage;
