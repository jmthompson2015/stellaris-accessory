const { exec } = require("child_process");

const NameFinder = {};

NameFinder.find = buildingKey =>
  new Promise(resolve => {
    exec(`./nameDescription.sh ${buildingKey}`, (error, stdout) => {
      const parts = stdout.split("\n");
      resolve({ name: parts[0], description: parts[1] });
    });
  });

module.exports.find = NameFinder.find;
