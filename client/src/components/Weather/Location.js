import React from "react";

const Location = ({ location }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "3rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid rgba(0,121,145, .8)",
      }}
    >
      <h3>
        {location.name}, {location.region}
      </h3>
      <p>{location.country}</p>
      <p>{location.localtime}</p>
    </div>
  );
};

export default Location;

// name, region, country, lat, lon, localtime
