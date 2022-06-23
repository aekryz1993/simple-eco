import { Children, useMemo } from "react";
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
  split,
  xMargin,
}: {
  children?: React.ReactNode;
  slider?: boolean;
  slide: (dir: Dir, index?: number) => void;
  state: CarouselState;
  numItems: number;
  split?: number;
  xMargin?: number;
}) => {
  const handlers = slider
    ? useSwipeable({
        onSwipedLeft: () => slide(Dir.NEXT),
        onSwipedRight: () => slide(Dir.PREV),
        // preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      })
    : {};

  const handleLeftBtn = () => {
    if (split) return state.pos > 0 && slide(Dir.PREV);
    return slide(Dir.PREV);
  };

  const handleRightBtn = () => {
    if (split)
      return state.pos < Math.floor((numItems - 1) / split) && slide(Dir.NEXT);
    slide(Dir.NEXT);
  };

  const restItems = split
    ? useMemo(() => numItems - Math.floor(numItems / split) * split, [])
    : 0;

  return (
    <div
      className={`${
        slider ? "flex h-full" : "w-full h-full"
      } relative overflow-hidden ml-[-${xMargin}rem]`}
      {...handlers}
    >
      <SlideButton position="left" xMargin={xMargin} onClick={handleLeftBtn} />
      <SlideButton
        position="right"
        xMargin={xMargin}
        onClick={handleRightBtn}
      />
      <Main
        sliding={state.sliding ? state.sliding.toString() : undefined}
        dir={state.dir}
        pos={state.pos}
        split={split}
        slider={slider ? slider.toString() : undefined}
        restItems={restItems}
        numItems={numItems}
        xMargin={xMargin}
      >
        {Children.map(children, (child, index) => (
          <CarouselSlot
            pos={state.pos}
            index={index}
            xMargin={xMargin}
            split={split}
            order={
              slider && !split
                ? getOrder(index, state.pos, numItems)
                : undefined
            }
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
