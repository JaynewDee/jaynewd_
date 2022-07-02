import React, { useState, useEffect } from "react";

const Track = ({ track }) => {
  return (
    <div className="track" key={track}>
      <h3>{track.name}</h3>

      <audio autoPlay={false} controls={true} src={track.src}></audio>
    </div>
  );
};

export default Track;
