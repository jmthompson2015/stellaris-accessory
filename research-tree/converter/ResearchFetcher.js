/* eslint no-console: ["error", { allow: ["log"] }] */

const R = require("ramda");

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");

const GameSummaryFetcher = {};

// 2.0: const INPUT_FILE = "https://gitlab.com/bipedalshark/stellaris-tech-tree/raw/master/public/vanilla/techs.json";
// 2.2: const INPUT_FILE = "https://turanar.github.io/stellaris-tech-tree/vanilla/techs.json";
const INPUT_FILE = "techs.json";
const OUTPUT_FILE = "../artifact/Research.js";
const HEADER = `const Research = `;
const FOOTER = `

Object.freeze(Research);

export default Research;`;

GameSummaryFetcher.fetch = () =>
  new Promise((resolve, reject) => {
    const receiveData = data => {
      if (data === undefined) {
        reject(new Error(`Failed to load inputFile: ${INPUT_FILE}`));
      }

      const pipeFunction = R.pipe(
        R.dissoc("base_factor"),
        R.dissoc("base_weight"),
        R.dissoc("weight_modifiers")
      );
      const reduceFunction2 = (accum, item) => {
        const newItem = pipeFunction(item);
        return R.assoc(newItem.key, newItem, accum);
      };
      const itemMap = R.reduce(reduceFunction2, {}, data);

      resolve(itemMap);
    };

    FileLoader.loadLocalFileJson(INPUT_FILE).then(receiveData);
  });

const start = Date.now();
GameSummaryFetcher.fetch().then(content0 => {
  const content = `${HEADER}${JSON.stringify(content0, null, "  ")}${FOOTER}`;
  FileWriter.writeFile(OUTPUT_FILE, content);
  const end = Date.now();
  console.log(`elapsed: ${end - start} ms`);
});
