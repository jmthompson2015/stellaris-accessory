/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const NameFinder = require("./NameFinder.js");

NameFinder.find("building_colony_shelter").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Reassembled Ship Shelter", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "The remains of a Colony Ship, reassembled for planetside form and function.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 1: passed");
});
