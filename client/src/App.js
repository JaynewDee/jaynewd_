import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Portal from "./pages/Portal";

const App = () => {
  const [navLocation, setNavLocation] = useState({ top: "2rem", right: '.36rem' });

  const handleDrop = (e) => {
    const y = e.clientY - 45;
    setNavLocation({ top: `${y}px`, right: `.36rem` });
  };
  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move'
  };

  return (
    <BrowserRouter>
      <div
        className="App"
        onDragOver={(e) => handleOver(e)}
        onDragEnter={(e) => handleEnter(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <Portal navLocation={navLocation} />
      </div>
    </BrowserRouter>
  );
};

export default App;
