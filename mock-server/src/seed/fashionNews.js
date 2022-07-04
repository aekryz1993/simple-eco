import { faker } from "@faker-js/faker";
import axios from "axios";

export class FashionNewsItem {
  constructor() {
    this.id = faker.datatype.uuid();
  }

  async fetchRandomImg() {
    const response = await axios.get(
      "https://source.unsplash.com/random/2000x1000/?clothing-fashion"
    );
    return response.request.res.responseUrl;
  }

  fashionNewsItemInfo() {
    return {
      id: this.id,
    };
  }
}

export const initaiteFashionNewsItems = async (prisma) => {
  try {
    const fashionNews = await prisma.fashionNewsItem.findMany();
    if (fashionNews.length > 0) return fashionNews;
    return [...new Array(3)].map(async () => {
      const fashionNewsItem = new FashionNewsItem();
      const imgUrl = await fashionNewsItem.fetchRandomImg();
      return await prisma.fashionNewsItem.create({
        data: {
          ...fashionNewsItem.fashionNewsItemInfo(),
          img: { create: { url: imgUrl } },
        },
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};
