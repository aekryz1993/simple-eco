export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  main_image: string;
  description: string;
  full_description: string;
  images_list: string[];
  size: Size[];
}

export type Dispatch = (...args: any) => void;
