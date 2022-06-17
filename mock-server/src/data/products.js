import { faker } from "@faker-js/faker";
import axios from "axios";

// {
//   max: 15000,
//   min: 2000,
//   symbol: "DZD",
// }
export class Product {
  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.commerce.productName();
    this.price = faker.commerce.price(1500, 2000, 2, "DZD ");
  }

  async fetchRandomImg() {
    const response = await axios.get(
      "https://loremflickr.com/p/900/400/fashion,girl,pink,clothing/all"
    );
    return response.request.res.responseUrl;
  }

  productInfo() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }
}

export const getProductItems = async () => {
  const products = [...new Array(20)];
  for (let idx in products) {
    const product = new Product();
    const main_image = await product.fetchRandomImg();
    products[idx] = {
      ...product.productInfo(),
      main_image,
    };
  }
  return products;
};
