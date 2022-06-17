import { useCallback } from "react";
import { useEffect } from "react";
import { Children, FC, useReducer } from "react";
import { getInitialState, getOrder } from "./helper";
import { reducer } from "./reducer";
import { CarouselContainer, CarouselSlot, Main, SlideButton } from "./style";
import { Dir } from "./types";

const Carousel = ({ children }: { children?: React.ReactNode }) => {
  const numItems = Children.count(children);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      slide(Dir.NEXT);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [slide]);

  return (
    <CarouselContainer>
      <SlideButton position="left" onClick={() => slide(Dir.PREV)} />
      <SlideButton position="right" onClick={() => slide(Dir.NEXT)} />
      <Main>
        {Children.map(children, (child, index) => (
          <CarouselSlot pos={state.pos} index={index}>
            {child}
          </CarouselSlot>
        ))}
      </Main>
    </CarouselContainer>
  );
};

export default Carousel;
