/* eslint no-console: ["error", { allow: ["log", "error"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import NameFinder from "../converter/NameFinder.js";
import NameFinderGiga from "../converter/NameFinderGiga.js";

const BuildingConverter = {};

const INPUT_FILE = "building.json";
const OUTPUT_FILE = "../artifact/Building.js";
const HEADER = `/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Building = `;
const FOOTER = `

Object.freeze(Building);

export default Building;`;

const parseBuilding = (data, key, data0) =>
  new Promise((resolve) => {
    const nameFinder = data[key].isGE ? NameFinderGiga : NameFinder;
    nameFinder.find(key).then((nameDesc) => {
      let answer = {
        name: nameDesc.name,
        description: nameDesc.description,
        allow: data0.allow,
        base_buildtime: data0.base_buildtime,
        can_build: data0.can_build,
        category: data0.category,
        convert_to: data0.convert_to,
        planet_modifier: data0.planet_modifier,
        potential: data0.potential,
        prerequisites: data0.prerequisites,
        resources: data0.resources,
        triggered_planet_modifier: data0.triggered_planet_modifier,
        upgrades: data0.upgrades,
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
      parseBuilding(data, key, data0).then((building) => {
        const myIndex = index + 1;
        const myAnswer = R.assoc(building.key, building, answer);
        parse(data, myIndex, myAnswer).then((answer2) => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

BuildingConverter.convert = () => {
  const start = Date.now();
  console.log("BuildingConverter.convert() start");
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

BuildingConverter.convert();
