import Job from "./Job.js";

QUnit.module("Job");

QUnit.test("Job properties clerk", assert => {
  // Setup.
  const key = "clerk";

  // Run.
  const job = Job[key];

  // Verify.
  assert.ok(job);
  assert.equal(job.name, "clerk");
  assert.equal(job.category, "worker");
  assert.equal(job.key, key);
});

QUnit.test("Job keys", assert => {
  // Setup.
  const length = 96;

  // Run.
  const keys = Object.keys(Job);

  // Verify.
  assert.equal(keys.length, length);

  const job0 = Job[keys[0]];
  assert.equal(job0.name, "administrator");
  assert.equal(job0.key, "administrator");

  const jobLast = Job[keys[length - 1]];
  assert.equal(jobLast.name, "warrior_drone");
  assert.equal(jobLast.key, "warrior_drone");
});

const JobTest = {};
export default JobTest;
