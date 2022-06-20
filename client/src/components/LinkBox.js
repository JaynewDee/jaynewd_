import React from "react";

const LinkBox = ({htmlUrl, cloneUrl}) => {
    const redirect = (e) => {
        window.open(e.target.value, "_blank");
      };
  return (
    <section className="linkBox">
      <button value={htmlUrl} onClick={(e) => redirect(e)}>
        Git Repo
      </button>
      <button
        value={cloneUrl}
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(e.target.value).catch((err) => {
            console.error(err);
          });
        }}
      >
        Copy Clone URL
      </button>
      <button>Deployment</button>
    </section>
  );
};

export default React.memo(LinkBox);
