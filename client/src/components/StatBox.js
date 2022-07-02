import React from "react";

const StatBox = ({ lang, date, license }) => {
  return (
    <>
      <p className="stat">
        Primary Language: <span>{lang}</span>
      </p>
      <p className="stat">
        Date Created:{" "}
        <span>
          {new Date(date).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }) || "Loading..."}
        </span>
      </p>
      <p className="stat">
        License: <span>{license}</span>
      </p>
    </>
  );
};

export default React.memo(StatBox);
