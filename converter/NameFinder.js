/* eslint no-console: ["error", { allow: ["log"] }] */

const { exec } = require("child_process");

const NameFinder = {};

const isVerbose = false;

NameFinder.find = buildingKey =>
  new Promise(resolve => {
    exec(`sh ../converter/nameDescription.sh ${buildingKey}`, (error, stdout) => {
      const parts = stdout.split("\n");

      if (isVerbose) {
        console.log(`NameFinder.find() parts:`);

        for (let i = 0; i < parts.length; i += 1) {
          console.log(`${i} ${parts[i]}`);
        }
      }

      let length = Number.POSITIVE_INFINITY;
      let index = -1;

      for (let i = 0; i < parts.length; i += 1) {
        const myLength = parts[i].length;
        if (isVerbose) {
          console.log(`${i} myLength = ${myLength} length = ${length}`);
        }

        if (myLength > 0 && myLength < length) {
          length = myLength;
          index = i;
        }
      }

      if (isVerbose) {
        console.log(`index = ${index}`);
      }
      resolve({ name: parts[index], description: parts[index + 1] });
    });
  });

module.exports.find = NameFinder.find;
