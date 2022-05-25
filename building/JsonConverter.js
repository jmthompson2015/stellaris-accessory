/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import Lexer from "../converter/Lexer.js";
import Parser from "../converter/Parser.js";

const JsonConverter = {};

const STEAMAPPS =
  "/Users/jmthompson/Library/Application Support/Steam/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/buildings`;
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
];
const OUTPUT_FILE = "./building.json";

const parseFile = (n, answerIn) =>
  new Promise((resolve) => {
    const answer = answerIn || {};

    if (n < INPUT_FILES.length) {
      // console.log(`parsing file ${INPUT_FILES[n]}`);
      FileLoader.loadLocalFile(`${BUILDING}/${INPUT_FILES[n]}`).then((data) => {
        const data2 = Lexer.lex(data);

        // Parse.
        const result = Parser.parse(data2);
        const myAnswer = R.merge(answer, result);

        // Next file.
        const myN = n + 1;
        parseFile(myN, myAnswer).then((answer2) => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

JsonConverter.convert = () =>
  new Promise((resolve) => {
    const start = Date.now();
    console.log("JsonConverter.convert() start");
    parseFile(0).then((buildings) => {
      FileWriter.writeFile(OUTPUT_FILE, JSON.stringify(buildings, null, 2));

      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
      resolve();
    });
  });

export default JsonConverter;
