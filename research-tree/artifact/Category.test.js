import Category from "./Category.js";

QUnit.module("Category");

QUnit.test("Category properties Biology", assert => {
  // Setup.
  const key = "Biology";

  // Run.
  const category = Category[key];

  // Verify.
  assert.equal(category.name, "Biology");
  assert.equal(category.area, "society");
  assert.equal(category.key, key);
});

QUnit.test("Category keys", assert => {
  // Setup.
  const length = 12;

  // Run.
  const keys = Object.keys(Category);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = Category[keys[0]];
  assert.equal(category0.name, "Biology");
  assert.equal(category0.key, "Biology");

  const categoryLast = Category[keys[length - 1]];
  assert.equal(categoryLast.name, "Voidcraft");
  assert.equal(categoryLast.key, "Voidcraft");
});

const CategoryTest = {};
export default CategoryTest;
