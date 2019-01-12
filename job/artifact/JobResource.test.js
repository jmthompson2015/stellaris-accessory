import JobResource from "./JobResource.js";

QUnit.module("JobResource");

QUnit.test("JobResource properties energy", assert => {
  // Setup.
  const key = "energy";

  // Run.
  const resource = JobResource[key];

  // Verify.
  assert.equal(resource.name, "Energy");
  assert.equal(resource.key, key);
});

QUnit.test("JobResource keys", assert => {
  // Setup.
  const length = 14;

  // Run.
  const keys = Object.keys(JobResource);

  // Verify.
  assert.equal(keys.length, length);

  const resource0 = JobResource[keys[0]];
  assert.equal(resource0.name, "Alloys");
  assert.equal(resource0.key, "alloys");

  const resourceLast = JobResource[keys[length - 1]];
  assert.equal(resourceLast.name, "Volatile Motes");
  assert.equal(resourceLast.key, "volatile_motes");
});

const JobResourceTest = {};
export default JobResourceTest;
