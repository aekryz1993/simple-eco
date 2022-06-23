import Carousel from "components/carousel";
import Image from "next/image";
import { Children } from "react";

const SlideProduct = ({ imagesList }: { imagesList: string[] }) => {
  return (
    <Carousel slider nav>
      {Children.map(imagesList, (item) => (
        <Image loader={({ src }) => src} src={item} layout="fill" alt={item} />
      ))}
    </Carousel>
  );
};

export default SlideProduct;
