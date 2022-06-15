import React from "react";

const StatBox = ({language, created, updated, license}) => {
  return (
    <>
      <p className="stat">
        Primary Language: <span>{language || "Loading..."}</span>
      </p>
      <p className="stat">
        Date Created:{" "}
        <span>
          {new Date(created).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }) || "Loading..."}
        </span>
      </p>
      <p className="stat">
        Last Updated:{" "}
        <span>
          {new Date(updated).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }) || "Loading..."}
        </span>
      </p>
      <p className="stat">
        License: <span>{license ? license.spdx_id : "Unknown"}</span>
      </p>
    </>
  );
};

export default StatBox;
