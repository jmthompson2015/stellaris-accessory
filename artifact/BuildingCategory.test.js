import BuildingCategory from "./BuildingCategory.js";

QUnit.module("BuildingCategory");

QUnit.test("BuildingCategory properties government", assert => {
  // Setup.
  const key = "government";

  // Run.
  const category = BuildingCategory[key];

  // Verify.
  assert.equal(category.name, "Government");
  assert.equal(category.key, key);
});

QUnit.test("BuildingCategory keys", assert => {
  // Setup.
  const length = 10;

  // Run.
  const keys = Object.keys(BuildingCategory);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = BuildingCategory[keys[0]];
  assert.equal(category0.name, "Amenity");
  assert.equal(category0.key, "amenity");

  const categoryLast = BuildingCategory[keys[length - 1]];
  assert.equal(categoryLast.name, "Unity");
  assert.equal(categoryLast.key, "unity");
});

const BuildingCategoryTest = {};
export default BuildingCategoryTest;
