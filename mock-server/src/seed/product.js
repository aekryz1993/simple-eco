import { faker } from "@faker-js/faker";
import axios from "axios";
import { generateFromEnum } from "../helper";

export class Product {
  constructor(gender, category) {
    this.id = faker.datatype.uuid();
    this.name = faker.commerce.productName();
    this.price = parseFloat(faker.commerce.price(1500, 2000));
    this.description = faker.lorem.sentences(2);
    this.fullDescription = faker.lorem.paragraph();
    this.gender = gender;
    this.category = category;
    this.size = generateFromEnum(["S", "M", "L", "XL", "XXL"])();
  }

  async fetchRandomImg(query) {
    const response = await axios.get(
      `https://source.unsplash.com/random/2000x1000/?${query}`
    );
    return response.request.res.responseUrl;
  }

  productInfo() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      fullDescription: this.fullDescription,
      size: this.size,
      gender: this.gender,
    };
  }
}

export const initaiteProductItems = async (prisma) => {
  try {
    const products = await prisma.product.findMany();
    if (products.length > 0) return products;
    const queries = [
      "shirt-male",
      "shirt-female",
      "shoe-male",
      "shoe-female",
      "pant-male",
      "jean-male",
      "pant-female",
      "robe-female",
    ];
    for (let query of queries) {
      const categoryName =
        query.split("-")[0].charAt(0).toUpperCase() +
        query.split("-")[0].slice(1);
      const gender =
        query.split("-")[1].charAt(0).toUpperCase() +
        query.split("-")[1].slice(1);
      [...new Array(5)].forEach(async () => {
        const product = new Product(gender, categoryName);
        const mainImageUrl = await product.fetchRandomImg(query);
        let imagesList = [...new Array(4)];
        for (let index in imagesList) {
          const url = await product.fetchRandomImg(query);
          imagesList[index] = { url };
        }
        await prisma.product.create({
          data: {
            ...product.productInfo(),
            mainImage: {
              create: {
                url: mainImageUrl,
              },
            },
            category: {
              connectOrCreate: {
                where: { name: categoryName },
                create: { name: categoryName },
              },
            },
            imagesList: {
              createMany: {
                data: imagesList,
              },
            },
          },
          include: {
            mainImage: true,
            category: true,
            imagesList: true,
          },
        });
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
