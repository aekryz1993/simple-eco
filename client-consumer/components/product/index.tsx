import LayoutSideProduct from "components/layout-side-product";
import SlideProduct from "components/slide-product";
import { ProductType } from "types";
import { CoreProduct, GalleryContent, LayoutSide } from "./style";

const ProductItem = ({ product }: { product: ProductType }) => {
  const { main_image, images_list, ...restProductProps } = product;
  return (
    <div>
      <CoreProduct>
        <GalleryContent>
          <SlideProduct imagesList={[main_image, ...images_list]} />
        </GalleryContent>
        <LayoutSide>
          <LayoutSideProduct product={restProductProps} />
        </LayoutSide>
      </CoreProduct>
    </div>
  );
};

export default ProductItem;
