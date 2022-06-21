import Carousel from "components/carousel";
import Image from "next/image";
import { Container, ImagesNavigator, MainImage } from "./style";

const SlideProduct = ({ imagesList }: { imagesList: string[] }) => {
  return (
    <Container>
      <ImagesNavigator></ImagesNavigator>
      <MainImage>
        <Carousel slider>
          {imagesList.map((item, index) => (
            <Image
              key={index}
              loader={({ src }) => src}
              src={item}
              layout="fill"
              alt={item}
            />
          ))}
        </Carousel>
      </MainImage>
    </Container>
  );
};

export default SlideProduct;
