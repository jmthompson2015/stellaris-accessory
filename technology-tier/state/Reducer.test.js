import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("setEngineeringGoalKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setEngineeringGoalKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.engineeringGoalKeys.length, techKeys.length);
  assert.equal(R.head(result.engineeringGoalKeys), R.head(techKeys));
  assert.equal(R.last(result.engineeringGoalKeys), R.last(techKeys));
});

QUnit.test("setEngineeringTechKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setEngineeringTechKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.engineeringTechKeys.length, techKeys.length);
  assert.equal(R.head(result.engineeringTechKeys), R.head(techKeys));
  assert.equal(R.last(result.engineeringTechKeys), R.last(techKeys));
});

QUnit.test("setPhysicsGoalKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setPhysicsGoalKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.physicsGoalKeys.length, techKeys.length);
  assert.equal(R.head(result.physicsGoalKeys), R.head(techKeys));
  assert.equal(R.last(result.physicsGoalKeys), R.last(techKeys));
});

QUnit.test("setPhysicsTechKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setPhysicsTechKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.physicsTechKeys.length, techKeys.length);
  assert.equal(R.head(result.physicsTechKeys), R.head(techKeys));
  assert.equal(R.last(result.physicsTechKeys), R.last(techKeys));
});

QUnit.test("setSocietyGoalKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setSocietyGoalKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.societyGoalKeys.length, techKeys.length);
  assert.equal(R.head(result.societyGoalKeys), R.head(techKeys));
  assert.equal(R.last(result.societyGoalKeys), R.last(techKeys));
});

QUnit.test("setSocietyTechKeys()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techKeys = ["tech1", "tech2", "tech3"];
  const action = ActionCreator.setSocietyTechKeys(techKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.societyTechKeys.length, techKeys.length);
  assert.equal(R.head(result.societyTechKeys), R.head(techKeys));
  assert.equal(R.last(result.societyTechKeys), R.last(techKeys));
});

QUnit.test("setVerbose()", (assert) => {
  // Setup.
  const state = AppState.create();
  const isVerbose = false;
  const action = ActionCreator.setVerbose(isVerbose);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.isVerbose, isVerbose);
});

const ReducerTest = {};
export default ReducerTest;
