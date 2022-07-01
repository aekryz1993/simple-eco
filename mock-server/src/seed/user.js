import { faker } from "@faker-js/faker";

export class User {
  constructor(role, isActive) {
    this.id = faker.datatype.uuid();
    this.username = "username";
    this.role = role;
    this.isActive = isActive;
  }
}

export const initaiteUserItems = async (prisma) => {
  try {
    const users = await prisma.user.findMany();
    if (users.length > 0) return users;
    const user = new User("Seller", true);
    return await prisma.user.create({
      data: { ...user },
    });
  } catch (error) {
    throw new Error(error);
  }
};
