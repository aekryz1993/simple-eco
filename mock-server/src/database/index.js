import fs from "fs";
const util = require("util");
const path = require("path");

const readFile = util.promisify(fs.readFile);
const accessFile = util.promisify(fs.access);

export function writeToJsonFile({ filename, data }) {
  const file = path.resolve(__dirname, filename);
  fs.writeFile(file, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(`${filename} written to file`);
  });
}

export async function readJsonFile(filename) {
  const file = path.resolve(__dirname, filename);
  const data = await readFile(file);
  return JSON.parse(data);
}

export async function checkexistFile(filename) {
  try {
    const file = path.resolve(__dirname, filename);
    const error = await accessFile(file, fs.F_OK);
    if (!error) return true;
  } catch (error) {
    return false;
  }
}
