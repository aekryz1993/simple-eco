import { gql } from "@apollo/client";
import Layout from "components/layout";
import client from "apollo-client";
import { GetStaticPaths, GetStaticProps } from "next";
import { Fragment } from "react";
import { ProductType } from "..";
import { size } from "styles";

export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface FullProductType extends ProductType {
  description: string;
  full_description: string;
  images_list: string[];
  size: Size[];
}

export const PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
      description
      full_description
      main_image
      images_list
      size
    }
  }
`;

const Product = ({ product }: { product: FullProductType }) => {
  return (
    <Fragment>
      <Layout title={product.name} fullWidth>
        <main className={`w-full md:w-[80%] mx-auto my-10`}></main>
      </Layout>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productResponse = await client.query({
    query: PRODUCT,
    variables: {
      productId: params?.id,
    },
  });

  return {
    props: {
      product: productResponse.data.product,
    },
  };
};

export default Product;
