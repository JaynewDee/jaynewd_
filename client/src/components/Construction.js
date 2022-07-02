import React from "react";
import { IoIosConstruct } from "react-icons/io";

const Construction = () => {
  return (
    <div
      style={{
        marginTop: "4rem",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}
    >
      <h2>Under Construction</h2>
      <IoIosConstruct size={"8rem"} />
      <h4>Check back soon!</h4>
    </div>
  );
};

export default Construction;
