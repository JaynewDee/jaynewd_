import React, { Dispatch, ReactElement, SetStateAction } from "react";

import { Loading } from "./Loading";
import { HeaderMemo } from "./Header/Header";
import KeyBoard from "./Keyboard/KeyBoard";

const Switch = (sentence, round, setRound, scoreDispatch) => {
  if (sentence.loading) {
    return <Loading />;
  } else {
    if (round > 0 && round < 11) {
      return (
        <>
          <div className="play-field">
            <HeaderMemo sentence={sentence} />
            <KeyBoard
              sentence={sentence}
              setRound={setRound}
              round={round}
              scoreDispatch={scoreDispatch}
            />
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  }
};

const Main = ({ sentence, round, scoreDispatch, setRound }) => {
  return Switch(sentence, round, setRound, scoreDispatch);
};

export { Main };
