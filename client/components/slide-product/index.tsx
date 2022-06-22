import Carousel from "components/carousel";
import Image from "next/image";

const SlideProduct = ({ imagesList }: { imagesList: string[] }) => {
  return (
    <Carousel slider nav>
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
  );
};

export default SlideProduct;
