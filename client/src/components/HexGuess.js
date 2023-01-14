import React from "react";

const HexGuess = () => {
  return (
    <iframe
      id="hex-guess-iframe"
      style={{ width: "100vw", height: "150%", overflow: "visible" }}
      src="http://hex-guess-app-bucketf.s3-website.us-east-2.amazonaws.com/"
    ></iframe>
  );
};

export default HexGuess;
