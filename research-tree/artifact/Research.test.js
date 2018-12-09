import Research from "./Research.js";

QUnit.module("Research");

QUnit.test("Research properties Red Lasers", assert => {
  // Setup.
  const key = "tech_lasers_1";

  // Run.
  const research = Research[key];

  // Verify.
  assert.equal(research.name, "Red Lasers");
  assert.equal(research.key, key);
});

QUnit.test("Research keys", assert => {
  // Setup.
  const length = 332;

  // Run.
  const keys = Object.keys(Research);

  // Verify.
  assert.equal(keys.length, length);

  const research0 = Research[keys[0]];
  assert.equal(research0.name, "Red Lasers");
  assert.equal(research0.key, "tech_lasers_1");

  const researchLast = Research[keys[length - 1]];
  assert.equal(researchLast.name, "Atmospheric Nanobot Dispersal");
  assert.equal(researchLast.key, "tech_pk_nanobots");
});

const ResearchTest = {};
export default ResearchTest;
