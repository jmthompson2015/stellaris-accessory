/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const R = require("ramda");

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");

const JobResourceGenerator = {};

const INPUT_FILE = "job.json";
const OUTPUT_FILE = "../artifact/JobResource.js";
const HEADER = `/* GENERATED FILE Do not edit. */

const JobResource = `;
const FOOTER = `

Object.freeze(JobResource);

export default JobResource;`;

const createName = key => {
  let answer;

  if (key) {
    answer = key.charAt(0).toUpperCase() + key.substring(1);
    let index = answer.indexOf("_");

    while (index >= 0) {
      const prefix = answer.substring(0, index);
      let suffix = answer.substring(index + 1);
      suffix = suffix.charAt(0).toUpperCase() + suffix.substring(1);
      answer = `${prefix} ${suffix}`;
      index = answer.indexOf("_", index + 1);
    }
  }

  return answer;
};

JobResourceGenerator.generate = () => {
  const start = Date.now();
  console.log("JobResourceGenerator.generate() start");
  FileLoader.loadLocalFileJson(INPUT_FILE).then(jobs => {
    const reduceFunction1 = property => (accum, job) => {
      if (job.resources && job.resources[property]) {
        const keys = Object.keys(job.resources[property]);
        return R.concat(accum, keys);
      }
      return accum;
    };
    const allKeys0 = R.reduce(reduceFunction1("produces"), [], Object.values(jobs));
    const allKeys = R.uniq(allKeys0);
    allKeys.sort();

    const reduceFunction2 = (accum, key) => {
      const newEntry = {
        name: createName(key),
        key
      };
      return R.assoc(key, newEntry, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allKeys);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

JobResourceGenerator.generate();
