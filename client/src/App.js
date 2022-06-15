import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Portal from "./pages/Portal";

const App = () => {
  const [navLocation, setNavLocation] = useState({ top: "2rem", left: "80vw" });

  const handleDrop = (e) => {
    setNavLocation({ left: `${e.clientX}px`, top: `${e.clientY}px` });
  };
  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <BrowserRouter>
      <div
        className="App"
        onDragOver={(e) => handleOver(e)}
        onDragEnter={(e) => handleEnter(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <Portal location={navLocation} />
      </div>
    </BrowserRouter>
  );
};

export default App;
