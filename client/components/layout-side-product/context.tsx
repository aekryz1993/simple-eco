import { createContext, useCallback, useContext, useReducer } from "react";
import { Size } from "types";
import {
  ProductOrderAction,
  ProductOrderState,
  ProductOrderContextType,
  ActionType,
} from "./types";

const initialState: () => ProductOrderState = () => ({
  size: undefined,
  quantity: 0,
});

const reducer = (state: ProductOrderState, action: ProductOrderAction) => {
  const setSize = () => ({ ...state, size: action.size });

  const decementQuantity = () => ({
    ...state,
    quantity: state.quantity > 0 ? (state.quantity as number) - 1 : 0,
  });

  const incementQuantity = () => ({
    ...state,
    quantity: (state.quantity as number) + 1,
  });

  const onFocus = () => ({ ...state, quantity: "" });

  const onInput = () => ({
    ...state,
    quantity: action.quantity as number,
  });

  const actions = {
    SET_SIZE: setSize,
    DECREMENT: decementQuantity,
    INCREMENT: incementQuantity,
    FOCUS: onFocus,
    INPUT: onInput,
    DEFAULT: () => state,
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

export const ProductOrderContext =
  createContext<ProductOrderContextType>(undefined);

const ProductOrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const setSize = useCallback((size: Size) => {
    dispatch({ type: ActionType.SET_SIZE, size });
  }, []);

  const decementQuantity = useCallback(() => {
    dispatch({ type: ActionType.DECREMENT });
  }, []);

  const incementQuantity = useCallback(() => {
    dispatch({ type: ActionType.INCREMENT });
  }, []);

  const onFocus = useCallback(() => {
    dispatch({ type: ActionType.FOCUS });
  }, []);

  const onInput = useCallback(({ quantity }: { quantity: string }) => {
    dispatch({ type: ActionType.INPUT, quantity });
  }, []);

  const value = {
    state: { ...state },
    setSize,
    decementQuantity,
    incementQuantity,
    onFocus,
    onInput,
  };

  return (
    <ProductOrderContext.Provider value={value}>
      {children}
    </ProductOrderContext.Provider>
  );
};

export const useProductOrder = () => {
  const context = useContext(ProductOrderContext);
  if (!context) {
    throw new Error("useSetProduct must be used within a ProductOrderProvider");
  }

  return context;
};

export default ProductOrderProvider;
