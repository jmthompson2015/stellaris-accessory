/* eslint max-len: ["error", { "ignoreStrings": true }] */

import Technology from "./Technology.js";

QUnit.module("Technology");

QUnit.test("Technology category.length isArray", (assert) => {
  const keys = Object.keys(Technology);

  for (let i = 0; i < keys.length; i += 1) {
    const tech = Technology[keys[i]];
    assert.equal(
      Array.isArray(tech.category),
      false,
      `${tech.key} category isArray ? ${Array.isArray(tech.category)}`
    );
  }
});

QUnit.test("Technology properties tech_adaptive_bureaucracy", (assert) => {
  // Setup.
  const key = "tech_adaptive_bureaucracy";

  // Run.
  const tech = Technology[key];

  // Verify.
  assert.equal(tech.name, "Positronic CPUs");
  assert.equal(
    tech.description,
    "Positronic CPUs are both cheaper and faster to produce than previous models, allowing us to press additional leader units into service."
  );
  assert.equal(tech.area, "society");
  assert.equal(tech.category, "statecraft");
  assert.equal(tech.cost, 750);
  assert.equal(tech.tier, 1);
  assert.equal(tech.key, key);

  assert.equal(tech.prerequisites.length, 1);
  assert.equal(tech.prerequisites[0], "tech_planetary_unification");
});

QUnit.test("Technology keys", (assert) => {
  // Setup.

  // Run.
  const keys = Object.keys(Technology);

  // Verify.
  assert.equal(keys.length, 699);

  const tech0 = Technology[R.head(keys)];
  assert.equal(tech0.name, "Aeternite Loop-Quantum Defensive Matrix");
  assert.equal(tech0.key, "giga_tech_aeternite_armor");

  const techLast = Technology[R.last(keys)];
  assert.equal(techLast.name, "Zero Point Power");
  assert.equal(techLast.key, "tech_zero_point_power");
});

const TechnologyTest = {};
export default TechnologyTest;
