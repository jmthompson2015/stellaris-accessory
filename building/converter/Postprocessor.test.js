/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const FileLoader = require("./FileLoader.js");
const Postprocessor = require("./Postprocessor.js");

const STEAMAPPS =
  "/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/buildings`;

FileLoader.loadLocalFile(`${BUILDING}/03_resource_buildings.txt`).then(data => {
  const result = Postprocessor.process(data);
  assert(result !== undefined, "not undefined");
  assert.equal(result.length, 11157, `result.length = ${result.length}`);
  console.log("Postprocessor Test 1: passed");
});
