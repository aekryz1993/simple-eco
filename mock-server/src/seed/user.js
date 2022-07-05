import { faker } from "@faker-js/faker";

export class User {
  constructor(role, isActive, username) {
    this.id = faker.datatype.uuid();
    this.username = username;
    this.role = role;
    this.isActive = isActive;
  }
}

export const initaiteUserItems = async (prisma) => {
  try {
    const users = await prisma.user.findMany();
    if (users.length > 0) return users;
    const user1 = new User("Seller", true, "seller");
    const user2 = new User("Consumer", true, "consumer");
    await prisma.user.create({
      data: user1,
    });
    await prisma.user.create({
      data: { ...user2, phone: "0778888888", bag: { create: {} } },
    });
  } catch (error) {
    throw new Error(error);
  }
};
