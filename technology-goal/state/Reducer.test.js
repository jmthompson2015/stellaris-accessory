// import Arc from "../artifact/Arc.js";

import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("clearSelectedItems()", (assert) => {
  // Setup.
  const state = AppState.create();
  const selectedKeys = ["key0", "key1", "key2"];
  const action0 = ActionCreator.setSelectedItems(selectedKeys);
  const action1 = ActionCreator.clearSelectedItems();
  const result1 = Reducer.root(state, action0);
  assert.ok(result1);
  assert.equal(result1.selectedKeys.length, selectedKeys.length);

  // Run.
  const result = Reducer.root(result1, action1);

  // Verify.
  assert.ok(result);
  assert.ok(
    result.selectedKeys,
    `result.selectedKeys = ${result.selectedKeys}`
  );
  assert.equal(result.selectedKeys.length, 0);
});

QUnit.test("setGoalItems()", (assert) => {
  // Setup.
  const state = AppState.create();
  const goalKeys = ["key0", "key1", "key2"];
  const action = ActionCreator.setGoalItems(goalKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.ok(result.goalKeys, `result.goalKeys = ${result.goalKeys}`);
  assert.equal(result.goalKeys.length, goalKeys.length);
  assert.equal(R.head(result.goalKeys), R.head(goalKeys));
  assert.equal(R.last(result.goalKeys), R.last(goalKeys));
});

QUnit.test("setPrerequisiteItems()", (assert) => {
  // Setup.
  const state = AppState.create();
  const prerequisiteKeys = ["key0", "key1", "key2"];
  const action = ActionCreator.setPrerequisiteItems(prerequisiteKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.ok(
    result.prerequisiteKeys,
    `result.prerequisiteKeys = ${result.prerequisiteKeys}`
  );
  assert.equal(result.prerequisiteKeys.length, prerequisiteKeys.length);
  assert.equal(R.head(result.prerequisiteKeys), R.head(prerequisiteKeys));
  assert.equal(R.last(result.prerequisiteKeys), R.last(prerequisiteKeys));
});

QUnit.test("setSelectedItems()", (assert) => {
  // Setup.
  const state = AppState.create();
  const selectedKeys = ["key0", "key1", "key2"];
  const action = ActionCreator.setSelectedItems(selectedKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.ok(
    result.selectedKeys,
    `result.selectedKeys = ${result.selectedKeys}`
  );
  assert.equal(result.selectedKeys.length, selectedKeys.length);
  assert.equal(R.head(result.selectedKeys), R.head(selectedKeys));
  assert.equal(R.last(result.selectedKeys), R.last(selectedKeys));
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
