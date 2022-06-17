const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get fashionNews array for homepage grid"
    fashionNews: [OneFashionNews!]!
    products: [Product!]!
  }

  type OneFashionNews {
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
    #description: String
    #full_description: String
    #characteristics: [String]
    #reviews: [Revies]
    main_image: String!
    #images_list: [String!]!
  }
`;
module.exports = typeDefs;
