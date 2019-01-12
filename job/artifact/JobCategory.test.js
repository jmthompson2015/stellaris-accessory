import JobCategory from "./JobCategory.js";

QUnit.module("JobCategory");

QUnit.test("JobCategory properties worker", assert => {
  // Setup.
  const key = "worker";

  // Run.
  const category = JobCategory[key];

  // Verify.
  assert.equal(category.name, "Worker");
  assert.equal(category.key, key);
});

QUnit.test("JobCategory keys", assert => {
  // Setup.
  const length = 13;

  // Run.
  const keys = Object.keys(JobCategory);

  // Verify.
  assert.equal(keys.length, length);

  const category0 = JobCategory[keys[0]];
  assert.equal(category0.name, "Bio Trophy");
  assert.equal(category0.key, "bio_trophy");

  const categoryLast = JobCategory[keys[length - 1]];
  assert.equal(categoryLast.name, "Xeno Ward");
  assert.equal(categoryLast.key, "xeno_ward");
});

const JobCategoryTest = {};
export default JobCategoryTest;
