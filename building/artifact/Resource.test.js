import Resource from "./Resource.js";

QUnit.module("Resource");

QUnit.test("Resource properties alloys", assert => {
  // Setup.
  const key = "alloys";

  // Run.
  const category = Resource[key];

  // Verify.
  assert.equal(category.name, "Alloys");
  assert.equal(category.key, key);
});

QUnit.test("Resource keys", assert => {
  // Setup.
  const length = 8;

  // Run.
  const keys = Object.keys(Resource);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = Resource[keys[0]];
  assert.equal(category0.name, "Alloys");
  assert.equal(category0.key, "alloys");

  const categoryLast = Resource[keys[length - 1]];
  assert.equal(categoryLast.name, "Volatile Motes");
  assert.equal(categoryLast.key, "volatile_motes");
});

const ResourceTest = {};
export default ResourceTest;
