import Image from "next/image";
import { ProductType } from "types";
import {
  CardContainer,
  ImageContainer,
  LinkCard,
  Price,
  TextContainer,
  ProductName,
} from "./style";

const Card = ({
  product,
}: {
  product: Pick<ProductType, "id" | "name" | "price" | "main_image">;
}) => (
  <LinkCard href={`/products/${product.id}`}>
    <CardContainer>
      <ImageContainer>
        <Image
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
    </CardContainer>
  </LinkCard>
);

export default Card;
