import TechnologyCategory from "./TechnologyCategory.js";

QUnit.module("TechnologyCategory");

QUnit.test("TechnologyCategory properties biology", assert => {
  // Setup.
  const key = "biology";

  // Run.
  const category = TechnologyCategory[key];

  // Verify.
  assert.equal(category.name, "Biology");
  assert.equal(category.area, "society");
  assert.equal(category.key, key);
});

QUnit.test("TechnologyCategory keys", assert => {
  // Setup.
  const length = 12;

  // Run.
  const keys = Object.keys(TechnologyCategory);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = TechnologyCategory[keys[0]];
  assert.equal(category0.name, "Biology");
  assert.equal(category0.area, "society");
  assert.equal(category0.key, "biology");

  const categoryLast = TechnologyCategory[keys[length - 1]];
  assert.equal(categoryLast.name, "Voidcraft");
  assert.equal(categoryLast.area, "engineering");
  assert.equal(categoryLast.key, "voidcraft");
});

const TechnologyCategoryTest = {};
export default TechnologyCategoryTest;
