import ResearchUtils from "./ResearchUtilities.js";

QUnit.module("ResearchUtilities");

QUnit.test("allChildren() tech_cruisers", assert => {
  // Setup.
  const key = "tech_cruisers";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allChildren(research);

  // Verify.
  assert.ok(result);
  const length = 24;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_arc_emitter_1");
  assert.equal(result[length - 1].key, "tech_titans");
});

QUnit.test("allChildren() tech_lasers_1", assert => {
  // Setup.
  const key = "tech_lasers_1";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allChildren(research);

  // Verify.
  assert.ok(result);
  const length = 18;
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

QUnit.test("allChildren() tech_pk_shielder", assert => {
  // Setup.
  const key = "tech_pk_shielder";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allChildren(research);

  // Verify.
  assert.ok(result);
  const length = 0;
  assert.equal(result.length, length);
});

QUnit.test("allParents() tech_arc_emitter_2", assert => {
  // Setup.
  const key = "tech_arc_emitter_2";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allParents(research);

  // Verify.
  assert.ok(result);
  const length = 10;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_arc_emitter_1");
  assert.equal(result[length - 1].key, "tech_lasers_2");
});

QUnit.test("allParents() tech_lasers_2", assert => {
  // Setup.
  const key = "tech_lasers_2";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allParents(research);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 1);
  assert.equal(result[0].key, "tech_lasers_1");
});

QUnit.test("allParents() tech_lasers_4", assert => {
  // Setup.
  const key = "tech_lasers_4";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allParents(research);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_lasers_1");
  assert.equal(result[length - 1].key, "tech_lasers_3");
});

QUnit.test("allParents() tech_pk_shielder", assert => {
  // Setup.
  const key = "tech_pk_shielder";
  const research = ResearchUtils.research(key);

  // Run.
  const result = ResearchUtils.allParents(research);

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
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "Industry");
  assert.equal(result[length - 1].key, "Voidcraft");
});

QUnit.test("categoriesByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = ResearchUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 5;
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

QUnit.test("dangerousByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = ResearchUtils.dangerousByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 1;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_synthetic_workers");
});

QUnit.test("dangerousByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = ResearchUtils.dangerousByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_jump_drive_1");
  assert.equal(result[length - 1].key, "tech_combat_computers_3");
});

QUnit.test("dangerousByArea() society", assert => {
  // Setup.
  const areaKey = "society";

  // Run.
  const result = ResearchUtils.dangerousByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 1;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_psi_jump_drive_1");
});

QUnit.test("parentsByResearch() tech_nanite_assemblers", assert => {
  // Setup.
  const itemKey = "tech_nanite_assemblers";

  // Run.
  const result = ResearchUtils.parentsByResearch(itemKey);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0], "tech_binary_motivators");
  assert.equal(result[length - 1], "tech_galactic_administration");
});

QUnit.test("parentsForResearches()", assert => {
  // Setup.
  const key0 = "tech_nanite_assemblers";
  const item0 = ResearchUtils.research(key0);
  const items = R.map(key => ResearchUtils.research(key), item0.prerequisites);

  // Run.
  const result = ResearchUtils.parentsForResearches(items);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0], "tech_colonial_centralization");
  assert.equal(result[length - 1], "tech_robomodding_m");
});

QUnit.test("rareResearches()", assert => {
  // Setup.

  // Run.
  const result = ResearchUtils.rareResearches();

  // Verify.
  assert.ok(result);
  const length = 77;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleship_hull_2");
  assert.equal(result[length - 1].key, "tech_mine_zro");
});

QUnit.test("raresByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = ResearchUtils.raresByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 24;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleship_hull_2");
  assert.equal(result[length - 1].key, "tech_synthetic_workers");
});

QUnit.test("raresByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = ResearchUtils.raresByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 23;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_combat_computers_autonomous");
  assert.equal(result[length - 1].key, "tech_wormhole_stabilization");
});

QUnit.test("raresByArea() society", assert => {
  // Setup.
  const areaKey = "society";

  // Run.
  const result = ResearchUtils.raresByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 30;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_ascension_theory");
  assert.equal(result[length - 1].key, "tech_mine_zro");
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
  const length = 44;
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

QUnit.test("researchesByParent() tech_cruisers", assert => {
  // Setup.
  const itemKey = "tech_cruisers";

  // Run.
  const result = ResearchUtils.researchesByParent(itemKey);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_cruiser_build_speed");
  assert.equal(result[length - 1].key, "tech_battleships");
});

QUnit.test("starterResearches()", assert => {
  // Setup.

  // Run.
  const result = ResearchUtils.starterResearches();

  // Verify.
  assert.ok(result);
  const length = 32;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_pd_tracking_1");
  assert.equal(result[length - 1].key, "tech_hive_node");
});

QUnit.test("startersByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = ResearchUtils.startersByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 15;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_thrusters_1");
  assert.equal(result[length - 1].key, "tech_starbase_2");
});

QUnit.test("startersByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = ResearchUtils.startersByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 9;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_pd_tracking_1");
  assert.equal(result[length - 1].key, "tech_basic_science_lab_1");
});

QUnit.test("startersByArea() society", assert => {
  // Setup.
  const areaKey = "society";

  // Run.
  const result = ResearchUtils.startersByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 8;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_holo_entertainment");
  assert.equal(result[length - 1].key, "tech_hive_node");
});

const ResearchUtilitiesTest = {};
export default ResearchUtilitiesTest;
