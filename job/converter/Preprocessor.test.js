/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const FileLoader = require("./FileLoader.js");
const Preprocessor = require("./Preprocessor.js");

const STEAMAPPS =
  "/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps";
const BUILDING = `${STEAMAPPS}/common/Stellaris/common/buildings`;

FileLoader.loadLocalFile(`${BUILDING}/03_resource_buildings.txt`).then(data => {
  const result = Preprocessor.process(data);
  assert(result !== undefined, "not undefined");
  assert.equal(result.length, 10106, `result.length = ${result.length}`);
  console.log("Preprocessor Test 1: passed");
});
