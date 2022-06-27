export class User {
  constructor(role) {
    this.id = faker.datatype.uuid();
    this.name = faker.name.firstName();
    this.role = role;
  }
}
