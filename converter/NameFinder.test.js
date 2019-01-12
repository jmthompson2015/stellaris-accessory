/* eslint max-len: ["error", { "ignoreStrings": true }] */
/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const NameFinder = require("./NameFinder.js");

NameFinder.find("building_affluence_center").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Affluence Center", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "Any material desire can be met here, no matter how outlandish.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 1: passed");
});

NameFinder.find("building_artist_patron").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Ministry of Culture", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "A fashionable headquarters for the Ministry of Culture, helping to spread knowledge, entertainment and art to the masses.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 2: passed");
});

NameFinder.find("building_colony_shelter").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Reassembled Ship Shelter", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "The remains of a Colony Ship, reassembled for planetside form and function.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 3: passed");
});
