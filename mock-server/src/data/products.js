import { faker } from "@faker-js/faker";
import axios from "axios";
import { generateFromEnum } from "../helper";

export class Product {
  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.commerce.productName();
    this.price = faker.commerce.price(1500, 2000, 2, "DZD ");
    this.description = faker.lorem.sentences(2);
    this.full_description = faker.lorem.paragraph();
    this.size = generateFromEnum(["S", "M", "L", "XL", "XXL"])();
  }

  async fetchRandomImg() {
    const response = await axios.get(
      "https://source.unsplash.com/random/2000x1000/?woman&clothing"
    );
    return response.request.res.responseUrl;
  }

  productInfo() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      full_description: this.full_description,
      size: this.size,
    };
  }
}

export const getProductItems = async () => {
  const products = [...new Array(20)];
  for (let idx in products) {
    const product = new Product();
    const main_image = await product.fetchRandomImg();
    const images_list = [...new Array(4)].map(
      async () => await product.fetchRandomImg()
    );
    products[idx] = {
      ...product.productInfo(),
      main_image,
      images_list,
    };
  }
  return products;
};

export const getProductItem = (products) => (id) => {
  return products.find((product) => product.id === id);
};
