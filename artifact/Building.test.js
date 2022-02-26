import Building from "./Building.js";

QUnit.module("Building");

QUnit.test("Building properties building_colony_shelter", (assert) => {
  // Setup.
  const key = "building_colony_shelter";

  // Run.
  const building = Building[key];

  // Verify.
  assert.equal(building.name, "Reassembled Ship Shelter");
  assert.equal(
    building.description,
    "The remains of a Colony Ship, reassembled for planetside form and function."
  );
  assert.equal(building.category, "government");
  assert.equal(building.key, key);

  const length = 6;
  assert.equal(building.convert_to.length, length);
  assert.equal(building.convert_to[0], "building_hive_capital");
  assert.equal(building.convert_to[length - 1], "building_ancient_palace");

  assert.ok(building.planet_modifier);
  assert.equal(building.planet_modifier.planet_housing_add, 3);
  assert.equal(building.planet_modifier.planet_amenities_add, 3);
});

QUnit.test("Building keys", (assert) => {
  // Setup.

  // Run.
  const keys = Object.keys(Building);

  // Verify.
  assert.equal(keys.length, 189);

  const building0 = Building[R.head(keys)];
  assert.equal(building0.name, undefined);
  assert.equal(building0.key, "@buildings_t1");

  const buildingLast = Building[R.last(keys)];
  assert.equal(buildingLast.name, "Alien Zoo");
  assert.equal(buildingLast.key, "building_xeno_zoo");
});

const BuildingTest = {};
export default BuildingTest;
