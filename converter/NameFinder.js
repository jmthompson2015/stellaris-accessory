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

        if (parts[i].indexOf("$") < 0 && myLength > 0 && myLength < length) {
          length = myLength;
          index = i;
        }
      }

      const name = parts[index];
      const description = parts[index + 1];

      if (isVerbose) {
        console.log(`index = ${index}`);
        console.log(`name = :${name}:`);
        console.log(`description = :${description}:`);
      }

      const suffix1 = "_desc$";

      if (description.startsWith("$") && description.toLowerCase().endsWith(suffix1)) {
        const newDesc = description.substring(1, description.length - suffix1.length);
        NameFinder.find(newDesc).then(nameDesc => {
          resolve({ name, description: nameDesc.description });
        });
      } else if (description.startsWith("$") && description.endsWith("$")) {
        const newDesc = description.substring(1, description.length - 1);
        NameFinder.find(newDesc).then(nameDesc => {
          resolve({ name, description: nameDesc.description });
        });
      } else {
        resolve({ name, description });
      }
    });
  });

module.exports.find = NameFinder.find;
