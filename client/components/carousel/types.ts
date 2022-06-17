export enum Dir {
  PREV = "PREV",
  NEXT = "NEXT",
  STOP = "STOP",
}

export interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Dir;
}

export type CarouselAction = { type: Dir; numItems?: number };