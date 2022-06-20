import React from "react";
import { v4 as uuidv4 } from "uuid";
const Serpent = () => {
  const renderCount = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
  ];

  return (
    <section key={uuidv4()} className="one-line">
      {renderCount.map((num, index) => (
        <>
          <span key={uuidv4()} className={`line-top line-${index}`}>
            &gt;
          </span>
          <span key={uuidv4()} className={`line-top line-${index}`}>
            -
          </span>
          <span key={uuidv4()} className={`line-top line-${index}`}>
            -
          </span>
          <span key={uuidv4()} className={`line-top line-${index}`}>
            &le;
          </span>
        </>
      ))}
    </section>
  );
};

export default Serpent;
