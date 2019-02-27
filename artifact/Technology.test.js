/* eslint max-len: ["error", { "ignoreStrings": true }] */

import Technology from "./Technology.js";

QUnit.module("Technology");

QUnit.test("Technology properties tech_adaptive_bureaucracy", assert => {
  // Setup.
  const key = "tech_adaptive_bureaucracy";

  // Run.
  const building = Technology[key];

  // Verify.
  assert.equal(building.name, "Positronic CPUs");
  assert.equal(
    building.description,
    "Positronic CPUs are both cheaper and faster to produce than previous models, allowing us to press additional leader units into service."
  );
  assert.equal(building.area, "society");
  assert.equal(building.cost, "@tier1cost2");
  assert.equal(building.tier, 1);
  assert.equal(building.key, key);

  assert.equal(building.category.length, 1);
  assert.equal(building.category[0], "statecraft");

  assert.equal(building.prerequisites.length, 1);
  assert.equal(building.prerequisites[0], "tech_planetary_unification");
});

QUnit.test("Technology keys", assert => {
  // Setup.
  const length = 375;

  // Run.
  const keys = Object.keys(Technology);

  // Verify.
  assert.equal(keys.length, length);

  const building0 = Technology[keys[0]];
  assert.equal(building0.name, undefined);
  assert.equal(building0.key, "@tech_gene_expressions_POINTS");

  const buildingLast = Technology[keys[length - 1]];
  assert.equal(buildingLast.name, "Zero Point Power");
  assert.equal(buildingLast.key, "tech_zero_point_power");
});

const TechnologyTest = {};
export default TechnologyTest;
