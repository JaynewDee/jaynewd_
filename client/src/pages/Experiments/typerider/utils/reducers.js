import { useReducer } from "react";
import { PENALTY, INCREASE, INCREMENT } from "./actions";

const scoreReducer = (state, { type, payload }) => {
  switch (type) {
    case PENALTY: {
      const newScore = state.score - payload;
      return {
        score: newScore,
      };
    }
    case INCREASE: {
      const newScore = state.score + payload;
      return {
        score: newScore,
      };
    }
  }
};

const timerReducer = (state, { type }) => {
  switch (type) {
    case INCREMENT: {
      const newTime = state.time + 1;
      return {
        time: newTime,
      };
    }
  }
};

export { timerReducer };
export function useScoreReducer(initialState) {
  return useReducer(scoreReducer, initialState);
}
