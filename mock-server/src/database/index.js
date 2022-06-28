import fs from "fs";
import util from "util";
import path from "path";
import editJsonFile from "edit-json-file";

const readFile = util.promisify(fs.readFile);
const accessFile = util.promisify(fs.access);
const writeFile = util.promisify(fs.writeFile);

export async function writeToJsonFile({ filename, data }) {
  try {
    const file = path.resolve(__dirname, filename);
    await writeFile(file, JSON.stringify(data, null, 2));
  } catch (error) {
    throw error;
  }
}

export async function readJsonFile(filename) {
  const file = path.resolve(__dirname, filename);
  const data = await readFile(file);
  return JSON.parse(data);
}

export async function checkexistFile(filename) {
  try {
    const file = path.resolve(__dirname, filename);
    await accessFile(file, fs.F_OK);
    return true;
  } catch (error) {
    throw false;
  }
}

export function appendItemToJsonFile(filename, newItem) {
  try {
    const file = editJsonFile(`${__dirname}/${filename}.json`);
    file.append("", newItem);
    file.save();
  } catch (error) {
    throw error;
  }
}
