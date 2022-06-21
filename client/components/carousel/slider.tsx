import { Children } from "react";
import { useSwipeable } from "react-swipeable";
import { getOrder } from "./helper";
import { CarouselSlot, Main, SlideButton } from "./style";
import { CarouselState, Dir } from "./types";

const Slider = ({
  children,
  slider,
  slide,
  state,
  numItems,
}: {
  children?: React.ReactNode;
  slider?: boolean;
  slide: (dir: Dir) => void;
  state: CarouselState;
  numItems: number;
}) => {
  const handlers = slider
    ? useSwipeable({
        onSwipedLeft: () => slide(Dir.NEXT),
        onSwipedRight: () => slide(Dir.PREV),
        // preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      })
    : {};

  return (
    <div
      className={`${
        slider ? "flex h-full" : "w-full h-full"
      } relative overflow-hidden`}
      {...handlers}
    >
      <SlideButton position="left" onClick={() => slide(Dir.PREV)} />
      <SlideButton position="right" onClick={() => slide(Dir.NEXT)} />
      <Main
        sliding={state.sliding ? state.sliding.toString() : undefined}
        dir={state.dir}
        slider={slider ? slider.toString() : undefined}
      >
        {Children.map(children, (child, index) => (
          <CarouselSlot
            pos={state.pos}
            index={index}
            order={slider ? getOrder(index, state.pos, numItems) : undefined}
            slider={slider ? slider.toString() : undefined}
          >
            {child}
          </CarouselSlot>
        ))}
      </Main>
    </div>
  );
};

export default Slider;
