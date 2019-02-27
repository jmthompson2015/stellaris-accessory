/* eslint no-console: ["error", { allow: ["log"] }] */

const R = require("ramda");

const FileLoader = require("../converter/FileLoader.js");
const FileWriter = require("../converter/FileWriter.js");
const Lexer = require("../converter/Lexer.js");
const Parser = require("../converter/Parser.js");

const JsonConverter = {};

const STEAMAPPS =
  "/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps";
const TECHNOLOGY = `${STEAMAPPS}/common/Stellaris/common/technology`;
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
  "00_phys_tech.txt",
  "00_phys_tech_repeatable.txt",
  "00_phys_weapon_tech.txt",
  "00_repeatable.txt",
  "00_soc_tech.txt",
  "00_soc_tech_repeatable.txt",
  "00_soc_weapon_tech.txt",
  "00_strategic_resources_tech.txt",
  "00_synthetic_dawn_tech.txt"
];
const OUTPUT_FILE = "./technology.json";

const parseFile = (n, answerIn) =>
  new Promise(resolve => {
    const answer = answerIn || {};

    if (n < INPUT_FILES.length) {
      console.log(`parsing file ${INPUT_FILES[n]}`);
      FileLoader.loadLocalFile(`${TECHNOLOGY}/${INPUT_FILES[n]}`).then(data => {
        const data2 = Lexer.lex(data);

        // Parse.
        const result = Parser.parse(data2);
        const myAnswer = R.merge(answer, result);

        // Next file.
        const myN = n + 1;
        parseFile(myN, myAnswer).then(answer2 => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

JsonConverter.convert = () =>
  new Promise(resolve => {
    const start = Date.now();
    console.log("JsonConverter.convert() start");
    parseFile(0).then(technologies => {
      FileWriter.writeFile(OUTPUT_FILE, JSON.stringify(technologies, null, 2));

      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
      resolve();
    });
  });

module.exports = JsonConverter;
