import TechnologyArea from "./TechnologyArea.js";

QUnit.module("TechnologyArea");

QUnit.test("TechnologyArea properties engineering", assert => {
  // Setup.
  const key = "engineering";

  // Run.
  const category = TechnologyArea[key];

  // Verify.
  assert.equal(category.name, "Engineering");
  assert.equal(category.key, key);
});

QUnit.test("TechnologyArea keys", assert => {
  // Setup.
  const length = 3;

  // Run.
  const keys = Object.keys(TechnologyArea);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = TechnologyArea[keys[0]];
  assert.equal(category0.name, "Engineering");
  assert.equal(category0.key, "engineering");

  const categoryLast = TechnologyArea[keys[length - 1]];
  assert.equal(categoryLast.name, "Society");
  assert.equal(categoryLast.key, "society");
});

const TechnologyAreaTest = {};
export default TechnologyAreaTest;
