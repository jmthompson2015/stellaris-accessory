/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import R from "ramda";

import FileLoader from "./FileLoader.js";
import FileWriter from "./FileWriter.js";

const ResourceGenerator = {};

const INPUT_FILES = ["../building/building.json", "../job/job.json"];
const OUTPUT_FILE = "../artifact/Resource.js";
const HEADER = `/* GENERATED FILE Do not edit. */

const Resource = `;
const FOOTER = `

Object.freeze(Resource);

export default Resource;`;

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

const parseFile = (n, answerIn) =>
  new Promise((resolve) => {
    const answer = answerIn || "";

    if (n < INPUT_FILES.length) {
      console.log(`parsing file ${INPUT_FILES[n]}`);
      FileLoader.loadLocalFileJson(INPUT_FILES[n]).then((data) => {
        const reduceFunction1 = (property) => (accum, building) => {
          if (building.resources && building.resources[property]) {
            const keys = Object.keys(building.resources[property]);
            return R.concat(accum, keys);
          }
          return accum;
        };
        let myAnswer = answerIn;
        if (INPUT_FILES[n].includes("building")) {
          const allKeys0 = R.reduce(
            reduceFunction1("cost"),
            [],
            Object.values(data)
          );
          const allKeys1 = R.reduce(
            reduceFunction1("upkeep"),
            [],
            Object.values(data)
          );
          myAnswer = R.concat(allKeys0, allKeys1);
        } else if (INPUT_FILES[n].includes("job")) {
          const allKeys0 = R.reduce(
            reduceFunction1("produces"),
            [],
            Object.values(data)
          );
          myAnswer = R.uniq(allKeys0);
        } else {
          throw new Error(`Unknown file: ${INPUT_FILES[n]}`);
        }

        // Next file.
        const myN = n + 1;
        parseFile(myN, myAnswer).then((answer2) => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

ResourceGenerator.generate = () => {
  const start = Date.now();
  console.log("ResourceGenerator.generate() start");
  parseFile(0, []).then((allKeys) => {
    allKeys.sort();

    const reduceFunction2 = (accum, key) => {
      const newEntry = {
        name: createName(key),
        key,
      };
      return R.assoc(key, newEntry, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allKeys);

    const content = `${HEADER}${JSON.stringify(itemMap, null, 2)}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

ResourceGenerator.generate();
