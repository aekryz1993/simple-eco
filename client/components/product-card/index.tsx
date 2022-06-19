import Image from "next/image";
import { ProductType } from "pages";
import {
  CardContainer,
  ImageContainer,
  LinkCard,
  Price,
  TextContainer,
  Title,
} from "./style";

const Card = ({ product }: { product: ProductType }) => (
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
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
      </TextContainer>
    </CardContainer>
  </LinkCard>
);

export default Card;
