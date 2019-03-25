/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const R = require("ramda");

const FileLoader = require("../converter/FileLoader.js");
const FileWriter = require("../converter/FileWriter.js");
const NameFinder = require("../converter/NameFinder.js");

const BuildingConverter = {};

const INPUT_FILE = "building.json";
const OUTPUT_FILE = "../artifact/Building.js";
const HEADER = `/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Building = `;
const FOOTER = `

Object.freeze(Building);

export default Building;`;

const parseBuilding = (key, building0) =>
  new Promise(resolve => {
    NameFinder.find(key).then(nameDesc => {
      resolve({
        name: nameDesc.name,
        description: nameDesc.description,
        allow: building0.allow,
        base_buildtime: building0.base_buildtime,
        can_build: building0.can_build,
        category: building0.category,
        convert_to: building0.convert_to,
        planet_modifier: building0.planet_modifier,
        potential: building0.potential,
        prerequisites: building0.prerequisites,
        resources: building0.resources,
        triggered_planet_modifier: building0.triggered_planet_modifier,
        upgrades: building0.upgrades,
        key
      });
    });
  });

const parse = (buildings, indexIn, answerIn) =>
  new Promise(resolve => {
    const index = indexIn;
    const answer = answerIn || {};

    const key = Object.keys(buildings)[index];
    const building0 = buildings[key];

    if (building0) {
      parseBuilding(key, building0).then(building => {
        const myIndex = index + 1;
        const myAnswer = R.assoc(building.key, building, answer);
        parse(buildings, myIndex, myAnswer).then(answer2 => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

BuildingConverter.convert = () => {
  const start = Date.now();
  console.log("BuildingConverter.convert() start");
  console.log(`parsing file ${INPUT_FILE}`);
  FileLoader.loadLocalFileJson(`${INPUT_FILE}`).then(buildings => {
    parse(buildings, 0).then(buildingDetails0 => {
      const buildingKeys = Object.keys(buildingDetails0);
      buildingKeys.sort();
      const reduceFunction = (accum, key) => R.assoc(key, buildingDetails0[key], accum);
      const buildingDetails = R.reduce(reduceFunction, {}, buildingKeys);
      const content2 = `${HEADER}${JSON.stringify(buildingDetails, null, "  ")}${FOOTER}`;
      FileWriter.writeFile(OUTPUT_FILE, content2);
      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
    });
  });
};

BuildingConverter.convert();
