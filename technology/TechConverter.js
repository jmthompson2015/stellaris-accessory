/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const R = require("ramda");

const FileLoader = require("../converter/FileLoader.js");
const FileWriter = require("../converter/FileWriter.js");
const NameFinder = require("../converter/NameFinder.js");

const TechConverter = {};

const INPUT_FILE = "technology.json";
const OUTPUT_FILE = "../artifact/Technology.js";
const HEADER = `/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Technology = `;
const FOOTER = `

Object.freeze(Technology);

export default Technology;`;

const parseTechnology = (key, tech0) =>
  new Promise(resolve => {
    NameFinder.find(key).then(nameDesc => {
      resolve({
        name: nameDesc.name,
        description: nameDesc.description,
        area: tech0.area,
        category: tech0.category,
        cost: tech0.cost,
        featureFlags: tech0.feature_flags,
        isRare: tech0.is_rare,
        prerequisites: tech0.prerequisites,
        tier: tech0.tier,
        key
      });
    });
  });

const parse = (techs, indexIn, answerIn) =>
  new Promise(resolve => {
    const index = indexIn;
    const answer = answerIn || {};

    const key = Object.keys(techs)[index];
    const tech0 = techs[key];

    if (tech0) {
      parseTechnology(key, tech0).then(tech => {
        const myIndex = index + 1;
        const myAnswer = R.assoc(tech.key, tech, answer);
        parse(techs, myIndex, myAnswer).then(answer2 => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

TechConverter.convert = () => {
  const start = Date.now();
  console.log("TechConverter.convert() start");
  console.log(`parsing file ${INPUT_FILE}`);
  FileLoader.loadLocalFileJson(`${INPUT_FILE}`).then(techs => {
    parse(techs, 0).then(techDetails0 => {
      const techKeys = Object.keys(techDetails0);
      techKeys.sort();
      const reduceFunction = (accum, key) => R.assoc(key, techDetails0[key], accum);
      const techDetails = R.reduce(reduceFunction, {}, techKeys);
      const content2 = `${HEADER}${JSON.stringify(techDetails, null, "  ")}${FOOTER}`;
      FileWriter.writeFile(OUTPUT_FILE, content2);
      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
    });
  });
};

TechConverter.convert();