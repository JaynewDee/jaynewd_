import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Portal from "./pages/Portal";
import { useUserContext, UserContextProvider } from "./context/UserContext";
import { handleOver, handleEnter, handleDrop } from "./utils/dragNdrop";

const handleLogChange = () => {};

const App = () => {
  const [navLocation, setNavLocation] = useState({
    top: "2rem",
    right: ".36rem",
  });

  return (
    <BrowserRouter>
      <UserContextProvider>
        <div
          className="App"
          onDragOver={(e) => handleOver(e)}
          onDragEnter={(e) => handleEnter(e)}
          onDrop={(e) => handleDrop(e, setNavLocation)}
        >
          <Portal navLocation={navLocation}/>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
