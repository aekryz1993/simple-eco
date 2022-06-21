import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { useProductOrder } from "components/layout-side-product/context";
import { useRef } from "react";
import { Container, LeftButton, QuantityInput, RightButton } from "./style";

const QuantityProduct = () => {
  const { state, decementQuantity, incementQuantity, onFocus, onInput } =
    useProductOrder();
  const oldQuantityRef = useRef<number | undefined>();

  const handleFocus = () => {
    oldQuantityRef.current = Number(state.quantity);
    onFocus();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    (Number(event.target.value) || event.target.value === "") &&
      onInput({ quantity: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!event.target.value) {
      onInput({ quantity: oldQuantityRef.current });
      oldQuantityRef.current = undefined;
      return;
    }
    onInput({ quantity: Number(event.target.value) });
    oldQuantityRef.current = undefined;
  };

  return (
    <Container>
      <LeftButton onClick={decementQuantity}>
        <MinusSmIcon className="text-primary" />
      </LeftButton>
      <QuantityInput
        value={state.quantity}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <RightButton onClick={incementQuantity}>
        <PlusSmIcon className="text-primary" />
      </RightButton>
    </Container>
  );
};

export default QuantityProduct;
