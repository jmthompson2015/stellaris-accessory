import Preferences from "./Preferences.js";

QUnit.module("Preferences");

const createGoalKeys1 = () => ["tech_1", "tech_2"];

const createGoalKeys2 = () => ["tech_3", "tech_4"];

QUnit.test("getGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);
  Preferences.setGoalKeys(appName, goalKeys1);

  // Run.
  const result = Preferences.getGoalKeys(appName);

  // Verify.
  assert.ok(result);
  assert.equal(Array.isArray(result), true, "result is an Array");
  assert.equal(JSON.stringify(result), JSON.stringify(goalKeys1));
});

QUnit.test("setGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);

  // Run.
  Preferences.setGoalKeys(appName, goalKeys1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).goalKeys;
  assert.equal(Array.isArray(newItem1), true, "newItem1 is an Array");
  assert.equal(JSON.stringify(newItem1), JSON.stringify(goalKeys1));

  // Setup.
  const goalKeys2 = createGoalKeys2();

  // Run.
  Preferences.setGoalKeys(appName, goalKeys2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).goalKeys;
  assert.equal(Array.isArray(newItem2), true, "newItem2 is an Array");
  assert.equal(JSON.stringify(newItem2), JSON.stringify(goalKeys2));
});

const PreferencesTest = {};
export default PreferencesTest;
