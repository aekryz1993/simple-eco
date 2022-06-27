export enum Dir {
  PREV = "PREV",
  NEXT = "NEXT",
  STOP = "STOP",
  ON_CHANGE = "ON_CHANGE",
}

export interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Dir;
}

export interface CarouselAction {
  type: Dir;
  numItems?: number;
  index?: number;
}
