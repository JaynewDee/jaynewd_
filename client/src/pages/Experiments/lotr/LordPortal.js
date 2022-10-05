import React, { useState, useEffect } from "react";
import { getKey } from "./api/fetch";
const LordPortal = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    getKey()
      .then((res) => {
        res.text();
      })
      .then((data) => {
        console.log(data);
        setKey(data);
      });
  }, []);

  return <div>LordPortal</div>;
};

export default LordPortal;
