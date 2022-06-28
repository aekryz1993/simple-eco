import { faker } from "@faker-js/faker";
import { checkexistFile, readJsonFile, writeToJsonFile } from "../database";

export class User {
  constructor(role, isActive) {
    this.id = faker.datatype.uuid();
    this.username = faker.name.firstName();
    this.role = role;
    this.isActive = isActive;
  }
}

export const createJSONUsersFile = async () => {
  const filename = "users.json";
  try {
    await checkexistFile(filename);
  } catch (error) {
    const user = new User("seller", true);
    await writeToJsonFile({
      filename,
      data: [user],
    });
  }
};

export const login = async (userId) => {
  const users = await readJsonFile("users.json");
  const user = users.find((item) => item.id === userId);
  if (!user) throw new Error("User doesn't exist");
  return user;
};
