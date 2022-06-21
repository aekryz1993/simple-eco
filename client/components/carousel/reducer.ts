import { useCallback, useReducer } from "react";
import { getInitialState } from "./helper";
import { CarouselAction, CarouselState, Dir } from "./types";

export function reducer(
  state: CarouselState,
  action: CarouselAction
): CarouselState {
  const nextAction = () => ({
    ...state,
    dir: Dir.NEXT,
    sliding: true,
    pos: (state.pos + 1) % (action.numItems as number),
  });

  const prevAction = () => ({
    ...state,
    dir: Dir.PREV,
    sliding: true,
    pos: state.pos === 0 ? (action.numItems as number) - 1 : state.pos - 1,
  });

  const stopAction = () => ({
    ...state,
    sliding: false,
  });

  const actions = {
    PREV: prevAction,
    NEXT: nextAction,
    STOP: stopAction,
    DEFAULT: () => state,
  };

  return (actions[action.type] || actions["DEFAULT"])();
}

export const useSlide = (numItems: number) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  const slide = useCallback(
    (dir: Dir) => {
      dispatch({ type: dir, numItems });
      setTimeout(() => {
        dispatch({ type: Dir.STOP });
      }, 50);
    },
    [numItems]
  );

  return {
    slide,
    state,
  };
};
