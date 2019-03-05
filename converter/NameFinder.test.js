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

NameFinder.find("building_planetary_shield_generator").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Planetary Shield Generator", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "Generating a strong energy shield within a planetary atmosphere is a greater challenge than in the vacuum of space, but it offers a potent defense against orbital bombardment.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 4: passed");
});

NameFinder.find("tech_dark_matter_propulsion").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Dark Matter Propulsion", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "These ship thrusters utilize Dark Matter technology to generate propulsion in a manner that appears to defy numerous laws of physics.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 5: passed");
});

NameFinder.find("tech_pk_nanobots").then(nameDesc => {
  assert(nameDesc !== undefined, "not undefined");
  assert.equal(nameDesc.name, "Atmospheric Nanobot Dispersal", `nameDesc.name = ${nameDesc.name}`);
  assert.equal(
    nameDesc.description,
    "Swarms of nanobots are dispersed in the atmosphere. They infect sapient beings and restructure themselves into cybernetic implants, turning their unwitting hosts into cyborgs slaved to the Machine Intelligence.",
    `nameDesc.description = ${nameDesc.description}`
  );
  console.log("NameFinder Test 6: passed");
});
