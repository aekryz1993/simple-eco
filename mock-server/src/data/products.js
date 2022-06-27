import { faker } from "@faker-js/faker";
import axios from "axios";
import { checkexistFile, readJsonFile, writeToJsonFile } from "../database";
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

export const createProductItems = async () => {
  try {
    await checkexistFile("fashionNews.json");
  } catch (error) {
    const products = [...new Array(20)];
    for (let idx in products) {
      const product = new Product();
      const main_image = await product.fetchRandomImg();
      let images_list = [...new Array(4)];
      for (let index in images_list) {
        const image = await product.fetchRandomImg();
        images_list[index] = image;
      }
      products[idx] = {
        ...product.productInfo(),
        main_image,
        images_list,
      };
    }
    writeToJsonFile({
      filename: "products.json",
      data: products,
    });

    return products;
  }
};

export const getProductsItems = async () => {
  const products = await readJsonFile("products.json");
  return products;
};

export const getProductItem = async (id) => {
  const products = await readJsonFile("products.json");
  return products.find((product) => product.id === id);
};
