import { Dispatch, Size } from "types";

export enum ActionType {
  SET_SIZE = "SET_SIZE",
  DECREMENT = "DECREMENT",
  INCREMENT = "INCREMENT",
  FOCUS = "FOCUS",
  INPUT = "INPUT",
}

export interface ProductOrderState {
  size: Size | undefined;
  quantity: number | string;
}

export interface ProductOrderAction {
  type: ActionType;
  size?: Size;
  quantity?: number | string;
  oldQuantity?: number;
}

export type ProductOrderContextType =
  | {
      state: ProductOrderState;
      setSize: Dispatch;
      decementQuantity: Dispatch;
      incementQuantity: Dispatch;
      onFocus: Dispatch;
      onInput: Dispatch;
    }
  | undefined;
