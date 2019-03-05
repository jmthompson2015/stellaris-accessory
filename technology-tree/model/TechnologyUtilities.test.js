import TechnologyUtils from "./TechnologyUtilities.js";

QUnit.module("TechnologyUtilities");

QUnit.test("categoriesByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = TechnologyUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "industry");
  assert.equal(result[length - 1].key, "voidcraft");
});

QUnit.test("categoriesByArea() physics", assert => {
  // Setup.
  const areaKey = "physics";

  // Run.
  const result = TechnologyUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "computing");
  assert.equal(result[length - 1].key, "particles");
});

QUnit.test("categoriesByArea() society", assert => {
  // Setup.
  const areaKey = "society";

  // Run.
  const result = TechnologyUtils.categoriesByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 5;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "biology");
  assert.equal(result[length - 1].key, "statecraft");
});

QUnit.test("childrenForTechnologies() tech_cruisers", assert => {
  // Setup.
  const technology = TechnologyUtils.technology("tech_cruisers");

  // Run.
  const result = TechnologyUtils.childrenForTechnologies(technology);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleships");
  assert.equal(result[length - 1].key, "tech_cruiser_build_speed");
});

QUnit.test("childrenForTechnologies() tech_lasers_4", assert => {
  // Setup.
  const technology = TechnologyUtils.technology("tech_lasers_4");

  // Run.
  const result = TechnologyUtils.childrenForTechnologies(technology);

  // Verify.
  assert.ok(result);
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_repeatable_weapon_type_energy_damage");
  assert.equal(result[length - 1].key, "tech_energy_torpedoes_1");

  // Run.
  const result2 = TechnologyUtils.childrenForTechnologies(result);

  // Verify.
  assert.ok(result2);
  const length2 = 2;
  assert.equal(result2.length, length2);
  assert.equal(result2[0].key, "tech_energy_torpedoes_2");
  assert.equal(result2[length2 - 1].key, "tech_energy_lance_2");
});

QUnit.test("childrenForTechnologies()", assert => {
  // Setup.
  const key0 = "tech_nanite_assemblers";
  const technology0 = TechnologyUtils.technology(key0);
  const technologies = R.map(key => TechnologyUtils.technology(key), technology0.prerequisites);

  // Run.
  const result = TechnologyUtils.childrenForTechnologies(technologies);

  // Verify.
  assert.ok(result);
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_nanite_assemblers");
  assert.equal(result[length - 1].key, "tech_transcendent_faith");
});

QUnit.test("dangerousByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = TechnologyUtils.dangerousByArea(areaKey);

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
  const result = TechnologyUtils.dangerousByArea(areaKey);

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
  const result = TechnologyUtils.dangerousByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 1;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_psi_jump_drive_1");
});

QUnit.test("parentsForTechnologies() tech_nanite_assemblers", assert => {
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

QUnit.test("parentsForTechnologies()", assert => {
  // Setup.
  const key0 = "tech_nanite_assemblers";
  const technology0 = TechnologyUtils.technology(key0);
  const technologies = R.map(key => TechnologyUtils.technology(key), technology0.prerequisites);

  // Run.
  const result = TechnologyUtils.parentsForTechnologies(technologies);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_robomodding_m");
  assert.equal(result[length - 1].key, "tech_colonial_centralization");
});

QUnit.test("rareTechnologies()", assert => {
  // Setup.

  // Run.
  const result = TechnologyUtils.rareTechnologies();

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
  const result = TechnologyUtils.raresByArea(areaKey);

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
  const result = TechnologyUtils.raresByArea(areaKey);

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
  const result = TechnologyUtils.raresByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 30;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_ascension_theory");
  assert.equal(result[length - 1].key, "tech_mine_zro");
});

QUnit.test("technology() tech_automated_exploration", assert => {
  // Setup.
  const key = "tech_automated_exploration";

  // Run.
  const result = TechnologyUtils.technology(key);

  // Verify.
  assert.ok(result);
  assert.equal(result.key, key);
});

QUnit.test("technologies()", assert => {
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

QUnit.test("technologiesByAreaCategory() engineering voidcraft", assert => {
  // Setup.
  const areaKey = "engineering";
  const categoryKey = "voidcraft";

  // Run.
  const result = TechnologyUtils.technologiesByAreaCategory(areaKey, categoryKey);

  // Verify.
  assert.ok(result);
  const length = 44;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_battleship_hull_2");
  assert.equal(result[length - 1].key, "tech_titans");
});

QUnit.test("technologiesByAreaCategory() physics particles", assert => {
  // Setup.
  const areaKey = "physics";
  const categoryKey = "particles";

  // Run.
  const result = TechnologyUtils.technologiesByAreaCategory(areaKey, categoryKey);

  // Verify.
  assert.ok(result);
  const length = 46;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_reactor_boosters_3");
  assert.equal(result[length - 1].key, "tech_zero_point_power");
});

QUnit.test("starterTechnologies()", assert => {
  // Setup.

  // Run.
  const result = TechnologyUtils.starterTechnologies();

  // Verify.
  assert.ok(result);
  const length = 32;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_thrusters_1");
  assert.equal(result[length - 1].key, "tech_hive_node");
});

QUnit.test("startersByArea() engineering", assert => {
  // Setup.
  const areaKey = "engineering";

  // Run.
  const result = TechnologyUtils.startersByArea(areaKey);

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
  const result = TechnologyUtils.startersByArea(areaKey);

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
  const result = TechnologyUtils.startersByArea(areaKey);

  // Verify.
  assert.ok(result);
  const length = 8;
  assert.equal(result.length, length);
  assert.equal(result[0].key, "tech_holo_entertainment");
  assert.equal(result[length - 1].key, "tech_hive_node");
});

const TechnologyUtilitiesTest = {};
export default TechnologyUtilitiesTest;
