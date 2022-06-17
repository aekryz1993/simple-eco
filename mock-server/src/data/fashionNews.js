import { faker } from "@faker-js/faker";
import axios from "axios";

export class FashionNewsItem {
  constructor() {
    this.id = faker.datatype.uuid();
  }

  async fetchRandomImg() {
    const response = await axios.get(
      "https://loremflickr.com/p/900/400/fashion,girl,pink,clothing/all"
    );
    return response.request.res.responseUrl;
  }

  fashionNewsItemInfo() {
    return {
      id: this.id,
    };
  }
}

export const getFashionNewsItems = async () => {
  const fashionNews = [...new Array(3)];
  for (let idx in fashionNews) {
    const fashionNewsItem = new FashionNewsItem();
    const img = await fashionNewsItem.fetchRandomImg();
    fashionNews[idx] = { ...fashionNewsItem.fashionNewsItemInfo(), img };
  }
  return fashionNews;
};
