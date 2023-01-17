import { Dispatch, SetStateAction, useMemo, useState } from "react";
import ColorBtn from "./ColorBtn";
import Feedback from "./Feedback";

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomIdx = () => Math.floor(Math.random() * 3);

const animations = {
  none: "none",
  wrong: "flash-wrong 1s infinite",
  correct: "glow-correct 1s"
};

const ColorBox = ({ messageType, setMessageType, setStreakState }) => {
  const [correctColor, setCorrectColor] = useState("");
  const [colors, setColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor()
  ]);
  const [animateState, setAnimateState] = useState(animations["none"]);

  const animate = (type) => {
    if (type === "wrong") {
      setAnimateState(animations["wrong"]);
      setStreakState(0);
    } else if (type === "correct") {
      setAnimateState(animations["correct"]);
      setStreakState((prev) => (prev += 1));
    }
    const animationDuration = 1000;
    setTimeout(() => {
      setAnimateState(animations["none"]);
    }, animationDuration);
  };

  const respond = (type) => {
    if (type === "wrong") {
      animate("wrong");
      setMessageType("fail");
    } else if (type === "correct") {
      animate("correct");
      setMessageType("win");
    }
  };

  useMemo(() => {
    setCorrectColor(colors[getRandomIdx()]);
  }, [colors]);

  const checkGuess = (e) => {
    if (e.target.innerText === correctColor) {
      respond("correct");
      setColors([getRandomColor(), getRandomColor(), getRandomColor()]);
    } else {
      respond("wrong");
    }
  };
  return (
    <div
      style={{ backgroundColor: correctColor, animation: animateState }}
      className="color-box"
    >
      <div className="button-box">
        {Object.values(colors).map((color) => {
          return <ColorBtn onClick={checkGuess} text={color} />;
        })}
      </div>
      <Feedback type={messageType} />
    </div>
  );
};

export default ColorBox;
