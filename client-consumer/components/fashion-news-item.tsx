import Image from "next/image";

const FashionNewsItem = ({ item }: { item: any }) => (
  <div className="hover:opacity-80">
    <Image
      loader={({ src }) => src}
      key={item.id}
      src={item.img}
      layout="fill"
      alt={item.img}
    />
  </div>
);

export default FashionNewsItem;
