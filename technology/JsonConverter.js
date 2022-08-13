/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import Lexer from "../converter/Lexer.js";
import Parser from "../converter/Parser.js";

const JsonConverter = {};

const STEAMAPPS =
  "/Users/jmthompson/Library/Application Support/Steam/steamapps";
const INPUT_DIR = `${STEAMAPPS}/common/Stellaris/common/technology`;
const INPUT_FILES = [
  "00_apocalypse_tech.txt",
  "00_distant_stars_tech.txt",
  "00_eng_tech.txt",
  "00_eng_tech_repeatable.txt",
  "00_eng_weapon_tech.txt",
  "00_fallen_empire_tech.txt",
  "00_horizonsignal_tech.txt",
  "00_leviathans_tech.txt",
  "00_megacorp_tech.txt",
  "00_megastructures.txt",
  "00_overlord_tech.txt",
  "00_phys_tech.txt",
  "00_phys_tech_repeatable.txt",
  "00_phys_weapon_tech.txt",
  "00_repeatable.txt",
  "00_soc_tech.txt",
  "00_soc_tech_repeatable.txt",
  "00_soc_weapon_tech.txt",
  "00_strategic_resources_tech.txt",
  "00_synthetic_dawn_tech.txt",
];

// Gigastructural Engineering mod
const GIGA_MOD = `${STEAMAPPS}/workshop/content/281990/1121692237/common/technology`;
const GIGA_FILES = [
  "giga_01_physics.txt",
  "giga_02_society.txt",
  "giga_03_engineering.txt",
  "giga_04_repeatables.txt",
  "giga_05_weightless.txt",
  "giga_06_special_project_tech.txt",
  "giga_07_repeatables_megastructures.txt",
  "giga_08_components.txt",
  "giga_09_ehof.txt",
  "giga_10_katzen.txt",
  "giga_11_aeternum.txt",
  "giga_12_asteroid_artillery.txt",
  "giga_13_blokkat.txt",
  "giga_14_defense_nexus_repeatables.txt",
  "giga_15_maginot.txt",
  "giga_16_frameworld.txt",
  "giga_17_alternative_mega_build.txt",
];
const INPUT_PATHS = R.map((f) => `${INPUT_DIR}/${f}`, INPUT_FILES);
const GIGA_PATHS = R.map((f) => `${GIGA_MOD}/${f}`, GIGA_FILES);
const OUTPUT_FILE = "./technology.json";

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
