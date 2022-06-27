import { faker } from "@faker-js/faker";
import { readJsonFile, writeToJsonFile } from "../database";
import { getProductsItems } from "./products";

export class Order {
  constructor({ consumer, phone, orderList }) {
    this.id = faker.datatype.uuid();
    this.consumer = consumer;
    this.phone = phone;
    this.orderList = orderList;
    this.confirmed = false;
    this.received = false;
    this.createdAt = new Date(Date.now());
  }

  confirmOrder() {
    this.confirmed = true;
  }

  receiveOrder() {
    this.received = true;
  }
}

export const createJSONOrderFile = async () => {
  const filename = "orders.json";
  try {
    await checkexistFile(filename);
  } catch (error) {
    writeToJsonFile({
      filename,
      data: [],
    });
  }
};

export const getOrders = async () => {
  const orders = await readJsonFile("orders.json");
  return orders;
};

export const addOrder = async (newOrder) => {
  const orders = await getOrders();
  const extendedOrders = [newOrder, ...orders];
  writeToJsonFile({
    filename: "orders.json",
    data: extendedOrders,
  });
};

export const createOrder = async ({ consumer, phone, orderList }) => {
  const order = new Order({
    consumer,
    phone,
    orderList,
  });
  await addOrder(order);
  return order;
};
