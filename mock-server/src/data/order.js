import { faker } from "@faker-js/faker";
import {
  appendItemToJsonFile,
  checkexistFile,
  readJsonFile,
  writeToJsonFile,
} from "../database";

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
  try {
    await checkexistFile("orders.json");
  } catch (error) {
    await writeToJsonFile({
      filename: "orders.json",
      data: [],
    });

    return;
  }
};

export const getOrders = async () => {
  const orders = await readJsonFile("orders.json");
  return orders;
};

export const createOrder = async ({ consumer, phone, orderList }) => {
  const newOrder = new Order({
    consumer,
    phone,
    orderList,
  });
  appendItemToJsonFile("orders", newOrder);
  return newOrder;
};
