const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Query {
    "Get fashionNews array for homepage slider"
    fashionNews: [FashionNewsItem!]!
    "Get products array"
    products: [Product!]!
    "Get Orders"
    orders: [Order!]!
    "Get product"
    product(id: ID!): Product!
  }

  type Mutation {
    addOrder(
      consumer: String!
      phone: String!
      orderList: [InputOrderListItem!]!
    ): Order!
    login(username: String): String
  }

  type Subscription {
    orderAdded: Order!
  }

  enum Size {
    S
    M
    L
    XL
    XXL
  }

  input InputOrderListItem {
    productId: ID!
    quantity: Int!
    size: Size!
  }

  type OrderListItem {
    productId: ID!
    quantity: Int!
    size: Size!
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

  type Order {
    id: ID!
    consumer: String!
    phone: String!
    confirmed: Boolean!
    received: Boolean!
    createdAt: Date!
    orderList: [OrderListItem!]!
  }

  enum Role {
    seller
    consumer
  }

  interface User {
    id: ID!
    username: String!
    role: Role!
  }

  type Seller implements User {
    id: ID!
    username: String!
    isActive: Boolean!
    role: Role!
  }
`;

module.exports = typeDefs;
