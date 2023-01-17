import { failMessage, winMessage } from "../data/message";
const getRandomIdx = (length) => Math.floor(Math.random() * length);

const messageSwitch = (type) => {
  if (type === "win") return winMessage[getRandomIdx(winMessage.length)];
  else if (type === "fail")
    return failMessage[getRandomIdx(failMessage.length)];
  else return "---";
};

const Feedback = ({ type }) => {
  return <div className="feedback-box">{messageSwitch(type)}</div>;
};

export default Feedback;
