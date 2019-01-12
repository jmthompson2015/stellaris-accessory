/* eslint no-console: ["error", { allow: ["log"] }] */

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");
const Parser = require("./Parser.js");
const Postprocessor = require("./Postprocessor.js");
const Preprocessor = require("./Preprocessor.js");

const JsonConverter = {};

const STEAMAPPS =
  "/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/pop_jobs`;
const INPUT_FILES = [
  "00_other_jobs.txt",
  "01_ruler_jobs.txt",
  "02_specialist_jobs.txt",
  "03_worker_jobs.txt",
  "04_gestalt_jobs.txt",
  "05_primitive_jobs.txt",
  "06_event_jobs.txt",
  "07_fallen_empire_jobs.txt"
];
const OUTPUT_FILE = "./job.json";
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
