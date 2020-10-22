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

QUnit.test("setItems()", (assert) => {
  // Setup.
  const state = AppState.create();
  const itemKeys = ["key0", "key1", "key2"];
  const action = ActionCreator.setItems(itemKeys);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.ok(result.itemKeys, `result.itemKeys = ${result.itemKeys}`);
  assert.equal(result.itemKeys.length, itemKeys.length);
  assert.equal(R.head(result.itemKeys), R.head(itemKeys));
  assert.equal(R.last(result.itemKeys), R.last(itemKeys));
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

QUnit.test("setTechArea()", (assert) => {
  // Setup.
  const state = AppState.create();
  const techAreaKey = "engineering";
  const action = ActionCreator.setTechArea(techAreaKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.techAreaKey, techAreaKey);
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
