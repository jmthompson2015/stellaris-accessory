/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import NameFinder from "../converter/NameFinder.js";
import NameFinderGiga from "../converter/NameFinderGiga.js";

const TechConverter = {};

const INPUT_FILE = "technology.json";
const OUTPUT_FILE = "../artifact/Technology.js";
const HEADER = `/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Technology = `;
const FOOTER = `

Object.freeze(Technology);

export default Technology;`;

const parseTechnology = (data, key, data0) =>
  new Promise((resolve) => {
    const nameFinder = data[key].isGE ? NameFinderGiga : NameFinder;
    nameFinder.find(key).then((nameDesc) => {
      const category =
        data0.category.length === 1 ? data0.category[0] : data0.category;
      const cost =
        typeof data0.cost === "string" ? data[data0.cost] : data0.cost;

      let answer = {
        name: nameDesc.name,
        description: nameDesc.description,
        area: data0.area,
        category,
        cost,
        feature_flags: data0.feature_flags,
        is_dangerous: data0.is_dangerous,
        is_rare: data0.is_rare,
        start_tech: data0.start_tech,
        prerequisites: data0.prerequisites,
        tier: data0.tier,
        key,
      };

      if (data0.isGE) {
        answer = R.assoc("isGE", data0.isGE, answer);
      }

      resolve(answer);
    });
  });

const parse = (data, indexIn, answerIn) =>
  new Promise((resolve) => {
    const index = indexIn;
    const answer = answerIn || {};

    const key = Object.keys(data)[index];
    const data0 = data[key];

    if (data0) {
      if (key.startsWith("@")) {
        // Skip it.
        const myIndex = index + 1;
        parse(data, myIndex, answer).then((answer2) => resolve(answer2));
      } else {
        parseTechnology(data, key, data0).then((tech) => {
          const myIndex = index + 1;
          const myAnswer = R.assoc(tech.key, tech, answer);
          parse(data, myIndex, myAnswer).then((answer2) => resolve(answer2));
        });
      }
    } else {
      resolve(answer);
    }
  });

TechConverter.convert = () => {
  const start = Date.now();
  console.log("TechConverter.convert() start");
  console.log(`parsing file ${INPUT_FILE}`);
  FileLoader.loadLocalFileJson(`${INPUT_FILE}`).then((data) => {
    parse(data, 0).then((details0) => {
      const keys = Object.keys(details0);
      keys.sort();
      const reduceFunction = (accum, key) => R.assoc(key, details0[key], accum);
      const details = R.reduce(reduceFunction, {}, keys);
      const content2 = `${HEADER}${JSON.stringify(details, null, 2)}${FOOTER}`;
      FileWriter.writeFile(OUTPUT_FILE, content2);
      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
    });
  });
};

TechConverter.convert();
