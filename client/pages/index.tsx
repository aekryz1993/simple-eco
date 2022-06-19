import type { NextPage } from "next";
import Layout from "components/layout";
import Carousel from "components/carousel";
import FashionNewsItem from "components/fashion-news-item";
import { gql } from "@apollo/client";
import client from "apollo-client";
import Card from "components/product-card";
import PageContainer from "components/layout/page-container";
import { Fragment } from "react";

interface FashionNewsType {
  id: number | string;
  img: string;
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  main_image: string;
}

export const FASHION_NEWS = gql`
  query GetFashionNews {
    fashionNews {
      id
      img
    }
  }
`;

export const PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      main_image
    }
  }
`;

const Home: NextPage<{
  fashionNews: FashionNewsType[];
  products: ProductType[];
}> = ({ fashionNews, products }) => {
  return (
    <Fragment>
      <Layout title="Demo Eco" fullWidth>
        <section className="max-w-[90%] h-1/2 m-auto mt-10">
          <Carousel>
            {fashionNews.map((item) => (
              <FashionNewsItem key={item.id} item={item} />
            ))}
          </Carousel>
        </section>
        <section className="w-[80%] m-auto mt-32">
          <PageContainer grid fullWidth>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </PageContainer>
        </section>
      </Layout>
    </Fragment>
  );
};

export async function getStaticProps() {
  const fashionNewsResponse = await client.query({
    query: FASHION_NEWS,
  });
  const productsResponse = await client.query({
    query: PRODUCTS,
  });

  return {
    props: {
      fashionNews: fashionNewsResponse.data.fashionNews,
      products: productsResponse.data.products.slice(0, 8),
    },
  };
}

export default Home;
