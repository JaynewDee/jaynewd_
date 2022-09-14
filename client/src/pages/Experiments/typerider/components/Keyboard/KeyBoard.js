import React from "react";
import { Row } from "./Row";

const KeyBoard = ({ sentence, setRound, round, scoreDispatch }) => {
  return (
    <>
      <form key={sentence.words.at(0)} className="keyboard">
        {sentence.words.map((word, idx) => {
          return (
            <Row
              round={round}
              setRound={setRound}
              rowIdx={idx}
              fieldIdx={word}
              id={word}
              key={idx + 50}
              word={[...word]}
              scoreDispatch={scoreDispatch}
            />
          );
        })}
      </form>
    </>
  );
};

export default React.memo(KeyBoard);
