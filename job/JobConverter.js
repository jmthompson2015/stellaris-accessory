/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const R = require("ramda");

const FileLoader = require("../converter/FileLoader.js");
const FileWriter = require("../converter/FileWriter.js");
const NameFinder = require("../converter/NameFinder.js");

const JobConverter = {};

const INPUT_FILE = "job.json";
const OUTPUT_FILE = "../artifact/Job.js";
const HEADER = `/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Job = `;
const FOOTER = `

Object.freeze(Job);

export default Job;`;

const parseJob = (key, job0) =>
  new Promise(resolve => {
    NameFinder.find(key).then(nameDesc => {
      resolve({
        name: nameDesc.name,
        category: job0.category,
        is_capped_by_modifier: job0.is_capped_by_modifier,
        building_icon: job0.building_icon,
        clothes_texture_index: job0.clothes_texture_index,
        possible: job0.possible,
        resources: job0.resources,
        triggered_pop_modifier: job0.triggered_pop_modifier,
        planet_modifier: job0.planet_modifier,
        triggered_planet_modifier: job0.triggered_planet_modifier,
        weight: job0.weight,
        key
      });
    });
  });

const parse = (jobs, indexIn, answerIn) =>
  new Promise(resolve => {
    const index = indexIn;
    const answer = answerIn || {};

    const key = Object.keys(jobs)[index];
    const job0 = jobs[key];

    if (job0) {
      parseJob(key, job0).then(job => {
        const myIndex = index + 1;
        const myAnswer = R.assoc(job.key, job, answer);
        parse(jobs, myIndex, myAnswer).then(answer2 => resolve(answer2));
      });
    } else {
      resolve(answer);
    }
  });

JobConverter.convert = () => {
  const start = Date.now();
  console.log("JobConverter.convert() start");
  console.log(`parsing file ${INPUT_FILE}`);
  FileLoader.loadLocalFileJson(`${INPUT_FILE}`).then(jobs => {
    parse(jobs, 0).then(jobDetails0 => {
      const jobKeys = Object.keys(jobDetails0);
      jobKeys.sort();
      const reduceFunction = (accum, key) => R.assoc(key, jobDetails0[key], accum);
      const jobDetails = R.reduce(reduceFunction, {}, jobKeys);
      const content2 = `${HEADER}${JSON.stringify(jobDetails, null, "  ")}${FOOTER}`;
      FileWriter.writeFile(OUTPUT_FILE, content2);
      const end = Date.now();
      console.log(`elapsed: ${end - start} ms`);
    });
  });
};

JobConverter.convert();
