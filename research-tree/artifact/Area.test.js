import Area from "./Area.js";

QUnit.module("Area");

QUnit.test("Area properties engineering", assert => {
  // Setup.
  const key = "ENGINEERING";

  // Run.
  const category = Area[key];

  // Verify.
  assert.equal(category.name, "engineering");
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
  assert.equal(category0.name, "engineering");
  assert.equal(category0.key, "ENGINEERING");

  const categoryLast = Area[keys[length - 1]];
  assert.equal(categoryLast.name, "society");
  assert.equal(categoryLast.key, "SOCIETY");
});

const AreaTest = {};
export default AreaTest;
