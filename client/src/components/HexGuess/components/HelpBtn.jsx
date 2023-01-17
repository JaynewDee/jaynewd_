import React, { Dispatch, SetStateAction } from "react";

const HelpBtn = ({ setModal }) => {
  return (
    <button className="help-btn" onClick={() => setModal((prev) => !prev)}>
      ?
    </button>
  );
};

export default HelpBtn;
