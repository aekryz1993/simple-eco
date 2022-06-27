import { gql } from "@apollo/client";
import Layout from "components/layout";
import client from "apollo-client";
import { GetStaticPaths, GetStaticProps } from "next";
import { Fragment } from "react";
import ProductItem from "components/product";
import { ProductType } from "types";

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

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Fragment>
      <Layout title={product.name} fullWidth>
        <main className="w-full max-w-7xl mx-auto my-10 px-2">
          <ProductItem product={product} />
        </main>
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
