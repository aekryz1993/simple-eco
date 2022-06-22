import ProductSize from "components/product-size";
import QuantityProduct from "components/quantity-product";
import { ProductType } from "types";
import ProductOrderProvider from "./context";
import { Description, OrderButton, Price, TextButton, Title } from "./style";

type ProductProps = Omit<ProductType, "main_image" | "images_list">;

const LayoutSideProduct: React.FC<{ product: ProductProps }> = ({
  product,
}) => {
  return (
    <ProductOrderProvider>
      <div className="flex flex-col gap-y-10 max-w-md">
        <div className="leading-loose">
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
        </div>
        <div className="leading-relaxed max-w-md flex flex-col gap-4">
          <Description>{product.description}</Description>
          <ProductSize sizes={product.size} />
        </div>
        <div className="flex gap-8">
          <QuantityProduct />
          <OrderButton>
            <TextButton>Order Now</TextButton>
          </OrderButton>
        </div>
      </div>
    </ProductOrderProvider>
  );
};

export default LayoutSideProduct;

// name
// Price

// description

// size
// quantity
// buy
