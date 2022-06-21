import { faker } from "@faker-js/faker";
import axios from "axios";

export class FashionNewsItem {
  constructor() {
    this.id = faker.datatype.uuid();
  }

  async fetchRandomImg() {
    const response = await axios.get(
      "https://source.unsplash.com/random/2000x1000/?women&clothing&fashion&background"
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
