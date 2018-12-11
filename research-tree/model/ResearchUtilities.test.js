import ResearchUtils from "./ResearchUtilities.js";

QUnit.module("ResearchUtilities");

QUnit.test("allChildren() tech_lasers_1", assert => {
  // Setup.
  const key = "tech_lasers_1";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allChildren(research);

  // Verify.
  assert.ok(result);
  const length = 21;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_arc_emitter_1");
  assert.equal(result[length - 1].key, "tech_repeatable_weapon_type_energy_fire_rate");
});

QUnit.test("allChildren() tech_lasers_4", assert => {
  // Setup.
  const key = "tech_lasers_4";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allChildren(research);

  // Verify.
  assert.ok(result);
  const length = 6;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_energy_lance_1");
  assert.equal(result[length - 1].key, "tech_repeatable_weapon_type_energy_damage");
});

QUnit.test("allPrerequisites() tech_arc_emitter_2", assert => {
  // Setup.
  const key = "tech_arc_emitter_2";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allPrerequisites(research);

  // Verify.
  assert.ok(result);
  const length = 11;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_arc_emitter_1");
  assert.equal(result[length - 1].key, "tech_starbase_2");
});

QUnit.test("allPrerequisites() tech_lasers_2", assert => {
  // Setup.
  const key = "tech_lasers_2";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allPrerequisites(research);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 1);
  assert.equal(result[0].key, "tech_lasers_1");
});

QUnit.test("allPrerequisites() tech_lasers_4", assert => {
  // Setup.
  const key = "tech_lasers_4";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allPrerequisites(research);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_lasers_1");
  assert.equal(result[length - 1].key, "tech_lasers_3");
});

QUnit.test("allPrerequisites() tech_pk_shielder", assert => {
  // Setup.
  const key = "tech_pk_shielder";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allPrerequisites(research);

  // Verify.
  assert.ok(result);
  const length = 6;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleships");
  assert.equal(result[length - 1].key, "tech_titans");
});

QUnit.test("categoriesByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = ResearchUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "Industry");
  assert.equal(result[length - 1].key, "Propulsion");
});

QUnit.test("categoriesByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = ResearchUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "Computing");
  assert.equal(result[length - 1].key, "Voidcraft");
});

QUnit.test("categoriesByArea() society", assert => {
  // Setup.
  const areaKey = "society";

  // Run.
  const result = ResearchUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 5;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "Biology");
  assert.equal(result[length - 1].key, "Statecraft");
});

QUnit.test("prerequisitesByResearch() tech_nanite_assemblers", assert => {
  // Setup.
  const itemKey = "tech_nanite_assemblers";

  // Run.
  const result = ResearchUtils.prerequisitesByResearch(itemKey);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0], "tech_binary_motivators");
  assert.equal(result[length - 1], "tech_galactic_administration");
});

QUnit.test("prerequisitesForResearches()", assert => {
  // Setup.
  const key0 = "tech_nanite_assemblers";
  const item0 = ResearchUtils.research(key0);
  const items = R.map(key => ResearchUtils.research(key), item0.prerequisites);

  // Run.
  const result = ResearchUtils.prerequisitesForResearches(items);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0], "tech_colonial_centralization");
  assert.equal(result[length - 1], "tech_robomodding_m");
});

QUnit.test("research() tech_automated_exploration", assert => {
  // Setup.
  const key = "tech_automated_exploration";

  // Run.
  const result = ResearchUtils.research(key);

  // Verify.
  assert.ok(result);
  assert.equal(result.key, key);
});

QUnit.test("researches()", assert => {
  // Setup.
  const keys = ["tech_automated_exploration", "tech_lasers_1", "tech_lasers_2"];

  // Run.
  const result = ResearchUtils.researches(keys);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, keys[0]);
  assert.equal(result[length - 1].key, keys[length - 1]);
});

QUnit.test("researchesByAreaCategory() engineering Voidcraft", assert => {
  // Setup.
  const areaKey = "engineering";
  const categoryKey = "Voidcraft";

  // Run.
  const result = ResearchUtils.researchesByAreaCategory(areaKey, categoryKey);

  // Verify.
  assert.ok(result);
  const length = 41;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleship_hull_2");
  assert.equal(result[length - 1].key, "tech_titans");
});

QUnit.test("researchesByAreaCategory() physics Particles", assert => {
  // Setup.
  const areaKey = "physics";
  const categoryKey = "Particles";

  // Run.
  const result = ResearchUtils.researchesByAreaCategory(areaKey, categoryKey);

  // Verify.
  assert.ok(result);
  const length = 43;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_reactor_boosters_3");
  assert.equal(result[length - 1].key, "tech_zero_point_power");
});

const ResearchUtilitiesTest = {};
export default ResearchUtilitiesTest;
