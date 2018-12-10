import Area from "./Area.js";

QUnit.module("Area");

QUnit.test("Area properties engineering", assert => {
  // Setup.
  const key = "engineering";

  // Run.
  const category = Area[key];

  // Verify.
  assert.equal(category.name, "Engineering");
  assert.equal(category.key, key);
});

QUnit.test("Area keys", assert => {
  // Setup.
  const length = 3;

  // Run.
  const keys = Object.keys(Area);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = Area[keys[0]];
  assert.equal(category0.name, "Engineering");
  assert.equal(category0.key, "engineering");

  const categoryLast = Area[keys[length - 1]];
  assert.equal(categoryLast.name, "Society");
  assert.equal(categoryLast.key, "society");
});

const AreaTest = {};
export default AreaTest;
