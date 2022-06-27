import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Portal from "./pages/Portal";
import { UserContextProvider } from "./context/UserContext";
import { handleOver, handleEnter, handleDrop } from "./utils/dragNdrop";

const App = () => {
  console.log(`App rendered`);
  const [navLocation, setNavLocation] = useState({
    top: "0rem",
    left: "15%",
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
          <Portal navLocation={navLocation} />
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
