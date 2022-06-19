const { faker } = require("@faker-js/faker");

export function generateFromEnum(array) {
  return function generate(newArray = [], length = array.length + 3) {
    const index = faker.mersenne.rand(array.length - 1, 0);
    if (length === 0 || newArray.length === array.length) return newArray;
    if (!newArray.includes(array[index])) {
      newArray.push(array[index]);
      return generate(newArray, length - 1);
    } else {
      return generate(newArray, length - 1);
    }
  };
}
