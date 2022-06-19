const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Query {
    "Get fashionNews array for homepage slider"
    fashionNews: [FashionNewsItem!]!
    "Get products array"
    products: [Product!]!
    "Get product"
    product(id: ID!): Product!
  }

  enum Size {
    S
    M
    L
    XL
    XXL
  }

  type FashionNewsItem {
    id: ID!
    #title: String!
    img: String!
    #info: String
  }

  type Product {
    id: ID!
    name: String!
    price: String!
    #old_price: Float
    #new_price: Float
    description: String
    full_description: String
    #characteristics: [String]
    #reviews: [Revies]
    main_image: String!
    images_list: [String!]!
    size: [Size!]!
    #created_at: Date!
  }
`;
module.exports = typeDefs;
