import React, { useState } from "react";
import Track from "./Track";
import { tracks } from "./data";

const Audio = () => {
  const [playlist, setPlaylist] = useState(tracks);
  const [playing, setPlaying] = useState(false);

  return !playlist ? (
    <div>Loading playlist ...</div>
  ) : (
    <div className="playlist">
      {playlist.map((track, index) => {
        return (
          <div key={index}>
            <Track playing={playing} setPlaying={setPlaying} track={track} />
          </div>
        );
      })}
    </div>
  );
};

export default Audio;
