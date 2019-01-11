/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const R = require("ramda");

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");

const ResourceGenerator = {};

const INPUT_FILE = "building.json";
const OUTPUT_FILE = "../artifact/Resource.js";
const HEADER = `/* GENERATED FILE Do not edit. */

const Resource = `;
const FOOTER = `

Object.freeze(Resource);

export default Resource;`;

const createName = key => {
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

ResourceGenerator.generate = () => {
  const start = Date.now();
  console.log("ResourceGenerator.generate() start");
  FileLoader.loadLocalFileJson(INPUT_FILE).then(buildings => {
    const reduceFunction1 = property => (accum, building) => {
      if (building.resources && building.resources[property]) {
        const keys = Object.keys(building.resources[property]);
        return R.concat(accum, keys);
      }
      return accum;
    };
    const allKeys0 = R.reduce(reduceFunction1("cost"), [], Object.values(buildings));
    const allKeys1 = R.reduce(reduceFunction1("upkeep"), [], Object.values(buildings));
    const allKeys2 = R.concat(allKeys0, allKeys1);
    const allKeys = R.uniq(allKeys2);
    allKeys.sort();

    const reduceFunction2 = (accum, key) => {
      const newEntry = {
        name: createName(key),
        key
      };
      return R.assoc(key, newEntry, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allKeys);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

ResourceGenerator.generate();
