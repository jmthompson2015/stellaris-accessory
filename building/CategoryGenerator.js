/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";

const CategoryGenerator = {};

const INPUT_FILE = "building.json";
const PROPERTY = "category";
const OUTPUT_FILE = "../artifact/BuildingCategory.js";
const HEADER = `/* GENERATED FILE Do not edit. */

const BuildingCategory = `;
const FOOTER = `

Object.freeze(BuildingCategory);

export default BuildingCategory;`;

const createName = (key) => {
  let answer;

  if (key) {
    answer = key.charAt(0).toUpperCase() + key.substring(1);
    let index = answer.indexOf("_");

    while (index >= 0) {
      const prefix = answer.substring(0, index);
      let suffix = answer.substring(index + 1);
      suffix = suffix.charAt(0).toUpperCase() + suffix.substring(1);
      answer = `${prefix} ${suffix}`;
      index = answer.indexOf("_", index + 1);
    }
  }

  return answer;
};

CategoryGenerator.generate = () => {
  const start = Date.now();
  console.log("CategoryGenerator.generate() start");
  FileLoader.loadLocalFileJson(INPUT_FILE).then((data) => {
    const reduceFunction1 = (accum, item) => {
      const obj0 = accum[item[PROPERTY]];
      if (obj0) {
        return accum;
      }
      const name = createName(item[PROPERTY]);
      return R.assoc(item[PROPERTY], { name, key: item[PROPERTY] }, accum);
    };
    const allItem0 = R.reduce(reduceFunction1, {}, Object.values(data));
    const allKeys = Object.keys(allItem0);
    allKeys.sort();
    const itemMap = R.reduce(
      (accum, key) => R.assoc(key, allItem0[key], accum),
      {},
      allKeys
    );

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

CategoryGenerator.generate();
