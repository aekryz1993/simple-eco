import { CarouselState, Dir } from "./types";

export const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const getInitialState = (lastItem?: number): CarouselState => ({
  pos: lastItem as number,
  sliding: false,
  dir: Dir.STOP,
});

export const lastMove = ({
  restItems,
  split,
  xMargin,
  pos,
}: {
  restItems: number;
  split: number;
  xMargin: number;
  pos: number;
}) => {
  const prevTranslateX = -100 * (pos - 1);
  const restItemsWidth = `calc((${100 / split}% - ${
    2 * xMargin
  }%) * ${restItems})`;
  const restMargins = `${xMargin * 2 * restItems}%`;
  return `calc(${prevTranslateX}% - (${restItemsWidth} + ${restMargins}))`;
};
