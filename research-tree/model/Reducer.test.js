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
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "Industry");
  assert.equal(result.rareResearches.length, 24);
  assert.equal(result.researches.length, 35);
  assert.equal(result.researchKey, "tech_mineral_purification_2");
  assert.equal(result.startingResearches.length, 15);
});

QUnit.test("setCategory()", assert => {
  // Setup.
  const state0 = AppState.create();
  const areaKey = "physics";
  const action0 = ActionCreator.setArea(areaKey);
  const state = Reducer.root(state0, action0);
  const categoryKey = "Computing";
  const action = ActionCreator.setCategory(categoryKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, categoryKey);
  assert.equal(result.researches.length, 36);
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
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, "Particles");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey);
});

const ReducerTest = {};
export default ReducerTest;
