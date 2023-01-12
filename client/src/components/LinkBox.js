import React, { useState } from "react";

const LinkBox = ({ urls }) => {
  const [tooltip, setTooltip] = useState(false);

  const manageClipboard = (e) => {
    e.preventDefault();
    if (e.target.value === false) return;
    navigator.clipboard
      .writeText(e.target.value)
      .then(() => {
        setTooltip(true);
        setTimeout(() => {
          setTooltip(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  };
  const redirect = (e) => {
    window.open(e.target.value, "_blank");
  };
  console.log(urls.deployment);
  return (
    <>
      {!urls ? (
        <div>Loading ...</div>
      ) : (
        <section className="linkBox">
          <button
            disabled={!urls.deployment ? true : false}
            style={!urls.deployment ? { pointerEvents: "none" } : {}}
            value={urls.deployment}
            onClick={(e) => redirect(e)}
          >
            {"Deployment"}
          </button>

          <button
            data-tooltip={tooltip}
            value={urls.clone}
            onClick={(e) => {
              manageClipboard(e);
            }}
          >
            {!tooltip ? "Copy Clone URL" : "Nice!"}
          </button>
          <button value={urls.repo} onClick={(e) => redirect(e)}>
            Git Repo
          </button>
        </section>
      )}
    </>
  );
};

export default LinkBox;
