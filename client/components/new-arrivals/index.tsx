import Carousel from "components/carousel";
import Image from "next/image";
import { Children, Fragment } from "react";
import { ProductType } from "types";
import { TitleHead } from "./styles";

const NewArrivals = ({
  products,
}: {
  products: Pick<ProductType, "id" | "name" | "price" | "main_image">[];
}) => {
  return (
    <div className="h-full flex flex-col gap-10">
      <div className="w-96">
        <TitleHead>New Arrivals</TitleHead>
        <div className="w-[30%] border z" />
      </div>
      <Carousel slider split={3} xMargin={3}>
        {products.map((product) => (
          <Image
            key={product.id}
            loader={({ src }) => src}
            src={product.main_image}
            layout="fill"
            alt={product.main_image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrivals;
