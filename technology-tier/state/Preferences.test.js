import Preferences from "./Preferences.js";

QUnit.module("Preferences");

const createGoalKeys1 = () => ["tech_1", "tech_2"];

const createGoalKeys2 = () => ["tech_3", "tech_4"];

QUnit.test("getEngineeringGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);
  Preferences.setEngineeringGoalKeys(appName, goalKeys1);

  // Run.
  const result = Preferences.getEngineeringGoalKeys(appName);

  // Verify.
  assert.ok(result);
  assert.equal(Array.isArray(result), true, "result is an Array");
  assert.equal(JSON.stringify(result), JSON.stringify(goalKeys1));
});

QUnit.test("getEngineeringTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);
  Preferences.setEngineeringTier(appName, tier1);

  // Run.
  const result = Preferences.getEngineeringTier(appName);

  // Verify.
  assert.ok(result);
  assert.equal(result, tier1);
});

QUnit.test("getPhysicsGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);
  Preferences.setPhysicsGoalKeys(appName, goalKeys1);

  // Run.
  const result = Preferences.getPhysicsGoalKeys(appName);

  // Verify.
  assert.ok(result);
  assert.equal(Array.isArray(result), true, "result is an Array");
  assert.equal(JSON.stringify(result), JSON.stringify(goalKeys1));
});

QUnit.test("getPhysicsTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);
  Preferences.setPhysicsTier(appName, tier1);

  // Run.
  const result = Preferences.getPhysicsTier(appName);

  // Verify.
  assert.ok(result);
  assert.equal(result, tier1);
});

QUnit.test("getSocietyGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);
  Preferences.setSocietyGoalKeys(appName, goalKeys1);

  // Run.
  const result = Preferences.getSocietyGoalKeys(appName);

  // Verify.
  assert.ok(result);
  assert.equal(Array.isArray(result), true, "result is an Array");
  assert.equal(JSON.stringify(result), JSON.stringify(goalKeys1));
});

QUnit.test("getSocietyTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);
  Preferences.setSocietyTier(appName, tier1);

  // Run.
  const result = Preferences.getSocietyTier(appName);

  // Verify.
  assert.ok(result);
  assert.equal(result, tier1);
});

QUnit.test("setEngineeringGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);

  // Run.
  Preferences.setEngineeringGoalKeys(appName, goalKeys1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).engineeringGoalKeys;
  assert.equal(Array.isArray(newItem1), true, "newItem1 is an Array");
  assert.equal(JSON.stringify(newItem1), JSON.stringify(goalKeys1));

  // Setup.
  const goalKeys2 = createGoalKeys2();

  // Run.
  Preferences.setEngineeringGoalKeys(appName, goalKeys2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).engineeringGoalKeys;
  assert.equal(Array.isArray(newItem2), true, "newItem2 is an Array");
  assert.equal(JSON.stringify(newItem2), JSON.stringify(goalKeys2));
});

QUnit.test("setEngineeringTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);

  // Run.
  Preferences.setEngineeringTier(appName, tier1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).engineeringTier;
  assert.equal(newItem1, tier1);

  // Setup.
  const tier2 = 3;

  // Run.
  Preferences.setEngineeringTier(appName, tier2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).engineeringTier;
  assert.equal(newItem2, tier2);
});

QUnit.test("setPhysicsGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);

  // Run.
  Preferences.setPhysicsGoalKeys(appName, goalKeys1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).physicsGoalKeys;
  assert.equal(Array.isArray(newItem1), true, "newItem1 is an Array");
  assert.equal(JSON.stringify(newItem1), JSON.stringify(goalKeys1));

  // Setup.
  const goalKeys2 = createGoalKeys2();

  // Run.
  Preferences.setPhysicsGoalKeys(appName, goalKeys2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).physicsGoalKeys;
  assert.equal(Array.isArray(newItem2), true, "newItem2 is an Array");
  assert.equal(JSON.stringify(newItem2), JSON.stringify(goalKeys2));
});

QUnit.test("setPhysicsTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);

  // Run.
  Preferences.setPhysicsTier(appName, tier1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).physicsTier;
  assert.equal(newItem1, tier1);

  // Setup.
  const tier2 = 3;

  // Run.
  Preferences.setPhysicsTier(appName, tier2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).physicsTier;
  assert.equal(newItem2, tier2);
});

QUnit.test("setSocietyGoalKeys()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const goalKeys1 = createGoalKeys1();
  localStorage.removeItem(appName);

  // Run.
  Preferences.setSocietyGoalKeys(appName, goalKeys1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).societyGoalKeys;
  assert.equal(Array.isArray(newItem1), true, "newItem1 is an Array");
  assert.equal(JSON.stringify(newItem1), JSON.stringify(goalKeys1));

  // Setup.
  const goalKeys2 = createGoalKeys2();

  // Run.
  Preferences.setSocietyGoalKeys(appName, goalKeys2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).societyGoalKeys;
  assert.equal(Array.isArray(newItem2), true, "newItem2 is an Array");
  assert.equal(JSON.stringify(newItem2), JSON.stringify(goalKeys2));
});

QUnit.test("setSocietyTier()", (assert) => {
  // Setup.
  const appName = "testAppName";
  const tier1 = 2;
  localStorage.removeItem(appName);

  // Run.
  Preferences.setSocietyTier(appName, tier1);
  const result1 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result1);
  const newItem1 = JSON.parse(result1).societyTier;
  assert.equal(newItem1, tier1);

  // Setup.
  const tier2 = 3;

  // Run.
  Preferences.setSocietyTier(appName, tier2);
  const result2 = localStorage.getItem(appName);

  // Verify.
  assert.ok(result2);
  const newItem2 = JSON.parse(result2).societyTier;
  assert.equal(newItem2, tier2);
});

const PreferencesTest = {};
export default PreferencesTest;
