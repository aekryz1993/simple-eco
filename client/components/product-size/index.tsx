import { useProductOrder } from "components/layout-side-product/context";
import { useCallback } from "react";
import { Size } from "types";
import { Container, SizeItem, Text } from "./style";

const ProductSize = ({ sizes }: { sizes: Size[] }) => {
  const { state, setSize } = useProductOrder();

  const changeHandler = useCallback((size: Size) => {
    setSize(size);
  }, []);

  return (
    <Container>
      {sizes.length &&
        sizes.map((size) => (
          <SizeItem
            key={size}
            onClick={() => changeHandler(size)}
            chosen={state.size === size ? size.toString() : undefined}
          >
            <Text chosen={state.size === size ? size.toString() : undefined}>
              {size}
            </Text>
          </SizeItem>
        ))}
    </Container>
  );
};

export default ProductSize;
