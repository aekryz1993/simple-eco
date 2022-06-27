import Carousel from "components/carousel";
import {
  LinkCard,
  Price,
  ProductName,
  TextContainer,
} from "components/product-card/style";
import Image from "next/image";
import { ProductType } from "types";
import { ImageContainer, TitleHead, TitleHeadText } from "./styles";

const NewArrivals = ({
  products,
}: {
  products: Pick<ProductType, "id" | "name" | "price" | "main_image">[];
}) => {
  return (
    <div className="h-auto flex flex-col gap-10">
      <TitleHead ml={3}>
        <TitleHeadText>New Arrivals</TitleHeadText>
        <div className="w-[30%] border z" />
      </TitleHead>
      <Carousel slider split={3} xMargin={3}>
        {products.map((product) => (
          <LinkCard href={`/products/${product.id}`}>
            <div className="bg-white cursor-pointer hover:opacity-80 h-auto">
              <ImageContainer>
                <Image
                  key={product.id}
                  loader={({ src }) => src}
                  src={product.main_image}
                  layout="fill"
                  alt={product.main_image}
                />
              </ImageContainer>
              <TextContainer>
                <ProductName>{product.name}</ProductName>
                <Price>{product.price}</Price>
              </TextContainer>
            </div>
          </LinkCard>
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrivals;
