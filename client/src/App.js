import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Portal from "./pages/Portal";
import { UserContextProvider } from "./context/UserContext";
import { handleOver, handleEnter, handleDrop } from "./utils/dragNdrop";

const App = () => {
  const [device, setDevice] = useState({
    type: "Desktop"
  });
  const [navLocation, setNavLocation] = useState({
    top: "0rem",
    left: "15%"
  });

  return (
    <BrowserRouter>
      <UserContextProvider>
        <div
          style={
            device.type == "Mobile"
              ? { marginBottom: "300px" }
              : { marginBottom: "0" }
          }
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

export default React.memo(App);
