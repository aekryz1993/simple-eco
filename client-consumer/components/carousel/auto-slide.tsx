import { Children, useEffect, useRef } from "react";
import Slider from "./slider";
import { CarouselState, Dir } from "./types";

const AutoSlide = ({
  children,
  slide,
  state,
  numItems,
}: {
  children?: React.ReactNode;
  slide: (dir: Dir) => void;
  state: CarouselState;
  numItems: number;
}) => {
  const slideRef = useRef(slide);
  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRef.current(Dir.NEXT);
    }, 3000);
    if (state.sliding) clearInterval(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [slideRef, state.sliding]);

  return (
    <Slider slide={slide} state={state} numItems={numItems}>
      {children}
    </Slider>
  );
};

export default AutoSlide;
