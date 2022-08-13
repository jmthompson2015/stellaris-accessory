/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";

import FileLoader from "./FileLoader.js";
import FileWriter from "./FileWriter.js";

const NameFinderGiga = {};

const isVerbose = false;

const STEAMAPPS =
  "/Users/jmthompson/Library/Application Support/Steam/steamapps";
const GIGA_MOD = `${STEAMAPPS}/workshop/content/281990/1121692237/localisation/english`;
const MOD_FILES = [
  "frameworld_l_english.yml",
  "giga_ai_savings_l_english.yml",
  "giga_alternate_mega_build_l_english.yml",
  "giga_ehof_functions_l_english.yml",
  "giga_l_english.yml",
  "giga_modifiers_l_english.yml",
  "giga_names_l_english.yml",
  "megalist_l_english.yml",
];
const INPUT_FILES = MOD_FILES.map((f) => `${GIGA_MOD}/${f}`);
const OUTPUT_FILE0 = "./englishGiga.txt";
const OUTPUT_FILE1 = "./englishGiga.json";

const loadFile = (n, answerIn) =>
  new Promise((resolve) => {
    const answer = answerIn || "";

    if (n < INPUT_FILES.length) {
      FileLoader.loadLocalFile(INPUT_FILES[n]).then((data) => {
        const myAnswer = `${answer}\n${data}`;

        // Next file.
        const myN = n + 1;
        loadFile(myN, myAnswer).then((answer2) => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

const between = (string, key1, key2) => {
  let answer = string;

  if (string && key1 && key2) {
    const index0 = string.indexOf(key1);

    if (index0 >= 0) {
      const index1 = string.indexOf(key2, index0 + 1);

      if (index1 >= 0) {
        answer = string.substring(index0 + 1, index1);
      }
    }
  }

  return answer;
};

const betweenDollarSigns = (string) => between(string, "$", "$");

const betweenQuotes = (string) => between(string, '"', '"');

const countChar = (string, char) => {
  let answer = 0;

  if (string && char) {
    const tokenToCount = R.countBy(R.identity, Array.from(string));
    answer = tokenToCount[char];
  }

  return answer;
};

const reduceFunction = (accum, line) => {
  const parts = line.split(":");
  const key = R.head(parts).trim();
  let value = betweenQuotes(R.last(parts).trim());
  value = R.replace(/\n/g, " ", value);
  value = R.replace(/£/g, "$", value);
  value = R.replace(/§!/g, "", value);
  value = R.replace(/§B/g, "", value);
  value = R.replace(/§E/g, "", value);
  value = R.replace(/§H/g, "", value);
  value = R.replace(/§Y/g, "", value);

  return R.assoc(key, value, accum);
};

let CONTENT;
const loadFiles = () =>
  new Promise((resolve) => {
    if (CONTENT) {
      resolve(CONTENT);
    } else {
      const start = Date.now();
      loadFile(0).then((technologies) => {
        FileWriter.writeFile(OUTPUT_FILE0, technologies);
        const lines = technologies.split("\n");
        CONTENT = R.reduce(reduceFunction, {}, lines);
        FileWriter.writeFile(OUTPUT_FILE1, JSON.stringify(CONTENT, null, 2));

        const end = Date.now();
        console.log(`NameFinderGiga.loadFiles() elapsed: ${end - start} ms`);
        resolve(CONTENT);
      });
    }
  });

const replaceTokens = (string) => {
  let answer = string;

  while (countChar(answer, "$") > 1) {
    const key = betweenDollarSigns(answer);
    const value = CONTENT[key] || key;

    const index0 = answer.indexOf("$");
    const index1 = answer.indexOf("$", index0 + 1);
    const newAnswer =
      answer.substring(0, index0) + value.trim() + answer.substring(index1 + 1);
    if (isVerbose) {
      console.log(`answer = :${answer}: newAnswer = :${newAnswer}:`);
    }
    answer = newAnswer;
  }

  return answer;
};

NameFinderGiga.find = (buildingKey) =>
  new Promise((resolve) => {
    loadFiles().then((technologies) => {
      let name = technologies[buildingKey] || buildingKey;
      const buildingKeyDesc = `${buildingKey}_desc`;
      let description = technologies[buildingKeyDesc] || buildingKey;

      name = replaceTokens(name);
      description = replaceTokens(description);

      resolve({ name, description });
    });
  });

export default NameFinderGiga;
