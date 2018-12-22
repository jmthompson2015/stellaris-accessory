import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("back()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setResearch(researchKey1);
  const researchKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setResearch(researchKey2);
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, "Particles", "categoryKey");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey1, "researchKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(result.forwardList[0], researchKey2);
});

QUnit.test("back() from setArea()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setResearch(researchKey1);
  const action2 = ActionCreator.setArea("engineering");
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, "Particles", "categoryKey");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey1, "researchKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(result.forwardList[0], "tech_mineral_purification_2");
});

QUnit.test("back() from setCategory()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setResearch(researchKey1);
  const action2 = ActionCreator.setCategory("Computing");
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, "Particles", "categoryKey");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey1, "researchKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(result.forwardList[0], "tech_cryostasis_1");
});

QUnit.test("forward()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setResearch(researchKey1);
  const researchKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setResearch(researchKey2);
  const action3 = ActionCreator.back();
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const state3 = Reducer.root(state2, action3);
  const action = ActionCreator.forward();

  // Run.
  const result = Reducer.root(state3, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "engineering", "areaKey");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "Industry", "categoryKey");
  assert.equal(result.researches.length, 35);
  assert.equal(result.researchKey, researchKey2, "researchKey");
  assert.equal(result.backList.length, 1);
  assert.equal(result.backList[0], researchKey1);
  assert.equal(result.forwardList.length, 0);
});

QUnit.test("setArea()", assert => {
  // Setup.
  const state = AppState.create();
  const areaKey = "engineering";
  const action = ActionCreator.setArea(areaKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, areaKey, "areaKey");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "Industry", "categoryKey");
  assert.equal(result.rareResearches.length, 24);
  assert.equal(result.researches.length, 35);
  assert.equal(result.researchKey, "tech_mineral_purification_2", "researchKey");
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
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, categoryKey, "categoryKey");
  assert.equal(result.researches.length, 36);
  assert.equal(result.researchKey, "tech_cryostasis_1", "researchKey");
});

QUnit.test("setResearch()", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey = "tech_lasers_1";
  const action = ActionCreator.setResearch(researchKey);
  const researchKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setResearch(researchKey2);

  // Run.
  let result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 5);
  assert.equal(result.categoryKey, "Particles", "categoryKey");
  assert.equal(result.researches.length, 43);
  assert.equal(result.researchKey, researchKey, "researchKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 0);

  // Run.
  result = Reducer.root(result, action2);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "engineering", "areaKey");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "Industry", "categoryKey");
  assert.equal(result.researches.length, 35);
  assert.equal(result.researchKey, researchKey2, "researchKey");
  assert.equal(result.backList.length, 1);
  assert.equal(result.backList[0], researchKey);
  assert.equal(result.forwardList.length, 0);
});

QUnit.test("setResearch() and back and forwardList", assert => {
  // Setup.
  const state = AppState.create();
  const researchKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setResearch(researchKey1);
  const researchKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setResearch(researchKey2);
  const researchKey3 = "tech_cryostasis_1";
  const action3 = ActionCreator.setResearch(researchKey3);
  const action4 = ActionCreator.back();
  const action5 = ActionCreator.back();

  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const state3 = Reducer.root(state2, action3);
  const state4 = Reducer.root(state3, action4);
  const state5 = Reducer.root(state4, action5);

  assert.equal(state5.areaKey, "physics", "areaKey");
  assert.equal(state5.categoryKey, "Particles", "categoryKey");
  assert.equal(state5.researchKey, researchKey1, "researchKey");
  assert.equal(state5.backList.length, 0, "backList.length");
  assert.equal(state5.forwardList.length, 2, "forwardList.length");

  const researchKey6 = "tech_mega_engineering";
  const action = ActionCreator.setResearch(researchKey6);

  // Run.
  const result = Reducer.root(state5, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "engineering", "areaKey");
  assert.equal(result.categoryKey, "Voidcraft", "categoryKey");
  assert.equal(result.researchKey, researchKey6, "researchKey");
  assert.equal(result.backList.length, 1, "backList.length");
  assert.equal(result.forwardList.length, 0, "forwardList.length");
});

const ReducerTest = {};
export default ReducerTest;
