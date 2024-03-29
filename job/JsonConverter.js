/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";
import Lexer from "../converter/Lexer.js";
import Parser from "../converter/Parser.js";

const JsonConverter = {};

const STEAMAPPS =
  "/Users/jmthompson/Library/Application Support/Steam/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/pop_jobs`;
const INPUT_FILES = [
  "00_other_jobs.txt",
  "01_ruler_jobs.txt",
  "02_specialist_jobs.txt",
  "03_worker_jobs.txt",
  "04_gestalt_jobs.txt",
  "05_primitive_jobs.txt",
  "06_event_jobs.txt",
  "07_fallen_empire_jobs.txt",
];
const OUTPUT_FILE = "./job.json";

const parseFile = (n, answerIn) =>
  new Promise((resolve) => {
    const answer = answerIn || "";

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
    parseFile(0).then((jobs) => {
      FileWriter.writeFile(OUTPUT_FILE, JSON.stringify(jobs, null, 2));

      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
      resolve();
    });
  });

export default JsonConverter;
