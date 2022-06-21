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
      <div className="flex flex-col gap-8 max-w-md">
        <div className="leading-loose">
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
        </div>
        <div className="leading-relaxed max-w-md">
          <Description>{product.description}</Description>
        </div>
        <div className="flex flex-col gap-6">
          <ProductSize sizes={product.size} />
          <div className="flex gap-8">
            <QuantityProduct />
            <OrderButton>
              <TextButton>Order Now</TextButton>
            </OrderButton>
          </div>
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
