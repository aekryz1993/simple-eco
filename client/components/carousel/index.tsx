import { Children, useEffect } from "react";
import AutoSlide from "./auto-slide";
import { useSlide } from "./reducer";
import Slider from "./slider";
import SliderWithNav from "./slider-with-nav";

const Carousel = ({
  children,
  slider,
  nav,
}: {
  children?: React.ReactNode;
  slider?: boolean;
  nav?: boolean;
}) => {
  const numItems = Children.count(children);
  const { slide, state, timerId } = useSlide(numItems);

  useEffect(() => {
    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  if (nav)
    return (
      <SliderWithNav slide={slide} state={state} numItems={numItems}>
        {children}
      </SliderWithNav>
    );

  if (!slider)
    return (
      <AutoSlide slide={slide} state={state} numItems={numItems}>
        {children}
      </AutoSlide>
    );

  return (
    <Slider slider slide={slide} state={state} numItems={numItems}>
      {children}
    </Slider>
  );
};

export default Carousel;
