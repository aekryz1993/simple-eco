import Image from "next/image";
import { CardContainer, ImageContainer, Price, Title } from "./style";

const Card = ({ product }: { product: any }) => (
  <CardContainer>
    <ImageContainer>
      <Image
        loader={({ src }) => src}
        src={product.main_image}
        layout="fill"
        alt={product.main_image}
      />
    </ImageContainer>
    <Title>{product.name}</Title>
    <Price>{product.price}</Price>
  </CardContainer>
);

export default Card;
