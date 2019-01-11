/* eslint no-console: ["error", { allow: ["log"] }] */

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");
const Parser = require("./Parser.js");
const Postprocessor = require("./Postprocessor.js");
const Preprocessor = require("./Preprocessor.js");

const JsonConverter = {};

const STEAMAPPS =
  "/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/buildings`;
const INPUT_FILES = [
  "00_capital_buildings.txt",
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
  "14_branch_office_buildings.txt"
];
const OUTPUT_FILE = "./building.json";
const HEADER = `{
`;
const FOOTER = `
}
`;

const parseFile = (n, answerIn) =>
  new Promise(resolve => {
    const answer = answerIn || "";

    if (n < INPUT_FILES.length) {
      console.log(`parsing file ${INPUT_FILES[n]}`);
      FileLoader.loadLocalFile(`${BUILDING}/${INPUT_FILES[n]}`).then(data => {
        const data2 = Preprocessor.process(data);

        // Parse.
        const result = Parser.parse(data2);
        const myAnswer = `${answer}
${result}`;

        // Next file.
        const myN = n + 1;
        parseFile(myN, myAnswer).then(answer2 => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

const isFormatted = false;

JsonConverter.convert = () =>
  new Promise(resolve => {
    const start = Date.now();
    console.log("JsonConverter.convert() start");
    parseFile(0).then(buildingLines => {
      const content0 = `${HEADER}${buildingLines}${FOOTER}`;

      if (isFormatted) {
        // Lose properties with the same name.
        const content1 = Postprocessor.process(content0);
        const contentObj = JSON.parse(content1);
        FileWriter.writeFile(OUTPUT_FILE, JSON.stringify(contentObj, null, 2));
      } else {
        const content = Postprocessor.process(content0);
        FileWriter.writeFile(OUTPUT_FILE, content);
      }

      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
      resolve();
    });
  });

module.exports = JsonConverter;
