import Category from "./Category.js";

QUnit.module("Category");

QUnit.test("Category properties government", assert => {
  // Setup.
  const key = "government";

  // Run.
  const category = Category[key];

  // Verify.
  assert.equal(category.name, "Government");
  assert.equal(category.key, key);
});

QUnit.test("Category keys", assert => {
  // Setup.
  const length = 10;

  // Run.
  const keys = Object.keys(Category);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = Category[keys[0]];
  assert.equal(category0.name, "Amenity");
  assert.equal(category0.key, "amenity");

  const categoryLast = Category[keys[length - 1]];
  assert.equal(categoryLast.name, "Unity");
  assert.equal(categoryLast.key, "unity");
});

const CategoryTest = {};
export default CategoryTest;
