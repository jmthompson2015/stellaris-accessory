/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import Lexer from "../converter/Lexer.js";
import Parser from "../converter/Parser.js";

const JsonConverter = {};

const STEAMAPPS =
  "/Users/jmthompson/Library/Application Support/Steam/steamapps";
const INPUT_DIR = `${STEAMAPPS}/common/Stellaris/common/buildings`;
const INPUT_FILES = [
  "00_capital_buildings.txt",
  "00_example.txt",
  "01_pop_assembly_buildings.txt",
  "02_government_buildings.txt",
  "03_resource_buildings.txt",
  "04_manufacturing_buildings.txt",
  "05_research_buildings.txt",
  "06_trade_buildings.txt",
  "07_amenity_buildings.txt",
  "08_unity_buildings.txt",
  "09_army_buildings.txt",
  "10_deposit_buildings.txt",
  "11_primitive_buildings.txt",
  "12_event_buildings.txt",
  "13_fallen_empire_buildings.txt",
  "14_branch_office_buildings.txt",
  "15_overlord_holdings.txt",
];

// Gigastructural Engineering mod
const GIGA_MOD = `${STEAMAPPS}/workshop/content/281990/1121692237/common/buildings`;
const GIGA_FILES = [
  "giga_aeternum_buildings.txt",
  "giga_amb_buildings.txt",
  "giga_blokkat_buildings.txt",
  "giga_buildings.txt",
  "giga_corrona_buildings.txt",
  "giga_fallen_empire_buildings.txt",
  "giga_flusion_buildings.txt",
  "giga_frameworld_buildings.txt",
  "giga_gas_giant_habitat_buildings.txt",
  "giga_maginot_buildings.txt",
];
const INPUT_PATHS = R.map((f) => `${INPUT_DIR}/${f}`, INPUT_FILES);
const GIGA_PATHS = R.map((f) => `${GIGA_MOD}/${f}`, GIGA_FILES);
const OUTPUT_FILE = "./building.json";

const parseFile = (inputFiles, n, answerIn) =>
  new Promise((resolve) => {
    const answer = answerIn || {};

    if (n < inputFiles.length) {
      // console.log(`parsing file ${inputFiles[n]}`);
      FileLoader.loadLocalFile(inputFiles[n]).then((data) => {
        const data2 = Lexer.lex(data);

        // Parse.
        const result = Parser.parse(data2);
        const myAnswer = R.mergeRight(answer, result);

        // Next file.
        const myN = n + 1;
        parseFile(inputFiles, myN, myAnswer).then((answer2) =>
          resolve(answer2)
        );
      });
    } else {
      resolve(answer);
    }
  });

JsonConverter.convert = () =>
  new Promise((resolve) => {
    const start = Date.now();
    console.log("JsonConverter.convert() start");
    parseFile(INPUT_PATHS, 0).then((data) => {
      parseFile(GIGA_PATHS, 0).then((dataGiga0) => {
        const keys = Object.keys(dataGiga0);
        const reduceFunction = (accum, key) => {
          const oldValue = dataGiga0[key];
          const newValue = R.assoc("isGE", true, oldValue);
          return R.assoc(key, newValue, accum);
        };
        const dataGiga = R.reduce(reduceFunction, {}, keys);
        const result = R.mergeRight(data, dataGiga);
        FileWriter.writeFile(OUTPUT_FILE, JSON.stringify(result, null, 2));

        const end = Date.now();
        console.log(`elapsed: ${end - start} ms`);
        resolve();
      });
    });
  });

export default JsonConverter;
