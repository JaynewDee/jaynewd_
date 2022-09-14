import React, { useState } from "react";
import Form from "./Form";
import HistorySection from "./HistorySection";

const Portal = () => {
  // Current, or previous, prompt/response pair that was passed
  const [currentExchange, setCurrent] = useState([{}]);

  return (
    <div id="portal-box">
      <Form setCurrent={setCurrent} />
      <HistorySection data={currentExchange} />
    </div>
  );
};

export default Portal;
