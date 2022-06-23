import type { NextPage } from "next";
import Layout from "components/layout";
import Carousel from "components/carousel";
import FashionNewsItem from "components/fashion-news-item";
import { gql } from "@apollo/client";
import client from "apollo-client";
import Card from "components/product-card";
import PageContainer from "components/layout/page-container";
import { Fragment } from "react";
import { ProductType } from "types";
import NewArrivals from "components/new-arrivals";

interface FashionNewsType {
  id: number | string;
  img: string;
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
  products: Pick<ProductType, "id" | "name" | "price" | "main_image">[];
}> = ({ fashionNews, products }) => {
  return (
    <Fragment>
      <Layout title="Demo Eco" fullWidth>
        <section className="w-full mx-auto h-80">
          <Carousel>
            {fashionNews.map((item) => (
              <FashionNewsItem key={item.id} item={item} />
            ))}
          </Carousel>
        </section>
        <section className="w-[90%] max-w-screen-xl mx-auto h-96 my-16">
          <NewArrivals products={products} />
        </section>
        {/* <section className="w-[90%] max-w-screen-xl m-auto">
          <PageContainer grid fullWidth>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </PageContainer>
        </section> */}
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
      products: productsResponse.data.products.slice(0, 7),
    },
  };
}

export default Home;
