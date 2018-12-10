import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("setArea()", assert => {
  // Setup.
  const state = AppState.create();
  const areaKey = "engineering";
  const action = ActionCreator.setArea(areaKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, areaKey);
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, "INDUSTRY");
  assert.equal(result.researches.length, 116);
  assert.equal(result.researchKey, "tech_afterburners_2");
});

QUnit.test("setCategory()", assert => {
  // Setup.
  const state = AppState.create();
  const categoryKey = "COMPUTING";
  const action = ActionCreator.setCategory(categoryKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, categoryKey);
  assert.equal(result.researches.length, 30);
  assert.equal(result.researchKey, "tech_cryostasis_1");
});

QUnit.test("setResearch()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey = "tech_lasers_1";
  const action = ActionCreator.setResearch(researchKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "PARTICLES");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey);
});

const ReducerTest = {};
export default ReducerTest;
