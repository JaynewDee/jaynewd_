import React, { useState, useMemo, useEffect } from "react";
import {
  fetchSentence,
  fetchDino,
  fetchHipsum,
  getOneSentence,
  getDictionary
} from "../api/fetch";
import { scrambleWords } from "../utils/scramble";
import { withSpaces } from "../utils/withSpaces";
import { Main } from "./Main";
import StatusBar from "./StatusBar/StatusBar";
import { Menu } from "./Menu/Menu";
import { useScoreReducer } from "../utils/reducers";

const publicUrl = `https://api.hatchways.io/assessment/sentences/`;

const dictionaryArray = [
  "rapture",
  "solidarity",
  "belong",
  "vision",
  "courage",
  "marmalade",
  "autumn",
  "terrain",
  "subterfuge",
  "apoptosis"
];

const Window = () => {
  const [round, setRound] = useState(0);
  const [mode, setMode] = useState("default");
  const [score, scoreDispatch] = useScoreReducer({ score: 0 });
  const [sentence, setSentence] = useState({
    solution: "",
    scrambled: "",
    loading: true,
    words: []
  });

  const minimize = (string) => {
    const noSpecials = string.replace(/[^a-zA-Z0-9 ]/g, "");
    const array = noSpecials.split(" ");
    const shortenedArray = array.slice(0, 10);
    return shortenedArray;
  };

  const fetchByMode = (mode) => {
    const modeSettings = {
      default: fetchSentence(publicUrl, round),
      dictionary: getDictionary(dictionaryArray[round]),
      dinosaur: fetchDino(),
      hipster: fetchHipsum(),
      mongo: getOneSentence().then((response) => response[0].sentence)
    };
    return modeSettings[mode];
  };

  getDictionary("melancholy");

  useMemo(() => {
    const getSentence = () => {
      if (round > 0 && round < 11) {
        fetchByMode(mode).then((sentence) => {
          let scrambled = scrambleWords(sentence);
          const solution = minimize(sentence);
          let formatted = withSpaces(solution);
          setSentence({
            solution: sentence,
            scrambled: scrambled,
            loading: false,
            words: formatted
          });
        });
      }
    };
    getSentence();
  }, [round]);

  useEffect(() => {
    setTimeout(() => {
      let focusField = document.getElementById(`0,0`);
      focusField?.focus();
      if (round === 11) {
        setRound(0);
        window.addEventListener("keydown", (e) => {});
      }
    }, 500);
  }, [round]);

  return (
    <div className="board-box">
      {round > 0 && round < 11 ? (
        <>
          <StatusBar setRound={setRound} score={score} />
          <Main
            sentence={sentence}
            round={round}
            setRound={setRound}
            scoreDispatch={scoreDispatch}
          />
        </>
      ) : (
        <>
          <h5 className="mode-label">
            Mode: <span className="mode-name">{mode.toUpperCase()}</span>
          </h5>
          <Menu setRound={setRound} mode={mode} setMode={setMode} />
        </>
      )}
    </div>
  );
};

export default Window;
