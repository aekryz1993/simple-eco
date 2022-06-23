import { useCallback, useReducer, useRef } from "react";
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

  const onChange = () => ({
    ...state,
    pos:
      action.index === 0
        ? (action.numItems as number) - 1
        : (action.index as number) - 1,
  });

  const actions = {
    PREV: prevAction,
    NEXT: nextAction,
    STOP: stopAction,
    ON_CHANGE: onChange,
    DEFAULT: () => state,
  };

  return (actions[action.type] || actions["DEFAULT"])();
}

export const useSlide = (
  numItems: number,
  slider?: boolean,
  split?: number
) => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState(slider && !split ? numItems - 1 : 0)
  );
  const timerId = useRef<NodeJS.Timeout>();

  const slide = useCallback(
    (dir: Dir, index?: number) => {
      if (index !== undefined && index >= 0)
        dispatch({ type: dir, index, numItems });
      else dispatch({ type: dir, numItems });
      timerId.current = setTimeout(() => {
        dispatch({ type: Dir.STOP });
      }, 50);
    },
    [numItems]
  );

  return {
    slide,
    state,
    timerId,
  };
};
