import { Children } from "react";
import AutoSlide from "./auto-slide";
import { useSlide } from "./reducer";
import Slider from "./slider";

const Carousel = ({
  children,
  slider,
}: {
  children?: React.ReactNode;
  slider?: boolean;
}) => {
  const numItems = Children.count(children);
  const { slide, state } = useSlide(numItems);

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
