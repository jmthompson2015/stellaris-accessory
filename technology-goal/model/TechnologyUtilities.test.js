import TechnologyUtils from "./TechnologyUtilities.js";

QUnit.module("TechnologyUtilities");

QUnit.test("parentsForTechnologies() tech_nanite_assemblers", (assert) => {
  // Setup.
  const technology = TechnologyUtils.technology("tech_nanite_assemblers");

  // Run.
  const result = TechnologyUtils.parentsForTechnologies(technology);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_binary_motivators");
  assert.equal(result[length - 1].key, "tech_galactic_administration");
});

QUnit.test("parentsForTechnologies()", (assert) => {
  // Setup.
  const key0 = "tech_nanite_assemblers";
  const technology0 = TechnologyUtils.technology(key0);
  const technologies = R.map(
    (key) => TechnologyUtils.technology(key),
    technology0.prerequisites
  );

  // Run.
  const result = TechnologyUtils.parentsForTechnologies(technologies);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_robomodding_m");
  assert.equal(result[length - 1].key, "tech_colonial_centralization");
});

QUnit.test("prerequisites()", (assert) => {
  // Setup.
  const key0 = "tech_battleships";
  const technology0 = TechnologyUtils.technology(key0);

  // Run.
  const result = TechnologyUtils.prerequisites(technology0);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 6);
  assert.equal(R.head(result).key, "tech_corvettes");
  assert.equal(R.last(result).key, "tech_starbase_2");
});

QUnit.test("prerequisitesForTechnologies()", (assert) => {
  // Setup.
  const keys = ["tech_battleships", "tech_starbase_5", "tech_zero_point_power"];
  const technologies = TechnologyUtils.technologies(keys);

  // Run.
  const result = TechnologyUtils.prerequisitesForTechnologies(technologies);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 12);
  assert.equal(R.head(result).key, "tech_corvettes");
  assert.equal(R.last(result).key, "tech_fusion_power");
});

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
