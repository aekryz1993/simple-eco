import { CarouselState, Dir } from "./types";

export const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const getInitialState = (): CarouselState => ({
  pos: 0,
  sliding: false,
  dir: Dir.STOP,
});
