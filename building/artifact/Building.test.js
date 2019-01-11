import Building from "./Building.js";

QUnit.module("Building");

QUnit.test("Building properties building_colony_shelter", assert => {
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

  const length = 4;
  assert.equal(building.childKeys.length, length);
  assert.equal(building.childKeys[0], "building_hive_capital");
  assert.equal(building.childKeys[length - 1], "building_slave_capital");

  assert.ok(building.planetModifiers);
  assert.equal(building.planetModifiers.planet_housing_add, 3);
  assert.equal(building.planetModifiers.planet_amenities_add, 3);
});

QUnit.test("Building keys", assert => {
  // Setup.
  const length = 150;

  // Run.
  const keys = Object.keys(Building);

  // Verify.
  assert.equal(keys.length, length);

  const building0 = Building[keys[0]];
  assert.equal(building0.name, "Affluence Center");
  assert.equal(building0.key, "building_affluence_center");

  const buildingLast = Building[keys[length - 1]];
  assert.equal(buildingLast.name, "Alien Zoo");
  assert.equal(buildingLast.key, "building_xeno_zoo");
});

const BuildingTest = {};
export default BuildingTest;
