import TechnologyUtils from "./TechnologyUtilities.js";

QUnit.module("TechnologyUtilities");

QUnit.test("technology() tech_automated_exploration", (assert) => {
  // Setup.
  const key = "tech_automated_exploration";

  // Run.
  const result = TechnologyUtils.technology(key);

  // Verify.
  assert.ok(result);
  assert.equal(result.key, key);
});

QUnit.test("technologies()", (assert) => {
  // Setup.
  const keys = ["tech_automated_exploration", "tech_lasers_1", "tech_lasers_2"];

  // Run.
  const result = TechnologyUtils.technologies(keys);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, keys[0]);
  assert.equal(result[length - 1].key, keys[length - 1]);
});

const TechnologyUtilitiesTest = {};
export default TechnologyUtilitiesTest;
