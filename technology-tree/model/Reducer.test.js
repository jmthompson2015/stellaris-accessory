import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("back()", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setTechnology(technologyKey1);
  const technologyKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setTechnology(technologyKey2);
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, "particles", "categoryKey");
  assert.equal(result.technologies.length, 97);
  assert.equal(result.technologyKey, technologyKey1, "technologyKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(result.forwardList[0], technologyKey2);
});

QUnit.test("back() from setArea()", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setTechnology(technologyKey1);
  const action2 = ActionCreator.setArea("engineering");
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, "particles", "categoryKey");
  assert.equal(result.technologies.length, 97);
  assert.equal(result.technologyKey, technologyKey1, "technologyKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(result.forwardList[0], "tech_mineral_purification_2");
});

QUnit.test("back() from setCategory()", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setTechnology(technologyKey1);
  const action2 = ActionCreator.setCategory("particles");
  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const action = ActionCreator.back();

  // Run.
  const result = Reducer.root(state2, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, "particles", "categoryKey");
  assert.equal(result.technologies.length, 97);
  assert.equal(result.technologyKey, technologyKey1, "technologyKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 1);
  assert.equal(R.head(result.forwardList), "tech_abstract_1");
});

QUnit.test("forward()", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setTechnology(technologyKey1);
  const technologyKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setTechnology(technologyKey2);
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
  assert.equal(result.categoryKey, "industry", "categoryKey");
  assert.equal(result.technologies.length, 57);
  assert.equal(result.technologyKey, technologyKey2, "technologyKey");
  assert.equal(result.backList.length, 1);
  assert.equal(R.head(result.backList), technologyKey1);
  assert.equal(result.forwardList.length, 0);
});

QUnit.test("setArea()", (assert) => {
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
  assert.equal(result.categoryKey, "industry", "categoryKey");
  assert.equal(result.rareTechnologies.length, 104);
  assert.equal(result.technologies.length, 57);
  assert.equal(
    result.technologyKey,
    "tech_mineral_purification_2",
    "technologyKey"
  );
  assert.equal(result.startingTechnologies.length, 15);
});

QUnit.test("setCategory()", (assert) => {
  // Setup.
  const state0 = AppState.create();
  const areaKey = "physics";
  const action0 = ActionCreator.setArea(areaKey);
  const state = Reducer.root(state0, action0);
  const categoryKey = "particles";
  const action = ActionCreator.setCategory(categoryKey);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, categoryKey, "categoryKey");
  assert.equal(result.technologies.length, 97);
  assert.equal(result.technologyKey, "tech_abstract_1", "technologyKey");
});

QUnit.test("setTechnology()", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey = "tech_lasers_1";
  const action = ActionCreator.setTechnology(technologyKey);
  const technologyKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setTechnology(technologyKey2);

  // Run.
  let result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "physics", "areaKey");
  assert.equal(result.categories.length, 3);
  assert.equal(result.categoryKey, "particles", "categoryKey");
  assert.equal(result.technologies.length, 97);
  assert.equal(result.technologyKey, technologyKey, "technologyKey");
  assert.equal(result.backList.length, 0);
  assert.equal(result.forwardList.length, 0);

  // Run.
  result = Reducer.root(result, action2);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "engineering", "areaKey");
  assert.equal(result.categories.length, 4);
  assert.equal(result.categoryKey, "industry", "categoryKey");
  assert.equal(result.technologies.length, 57);
  assert.equal(result.technologyKey, technologyKey2, "technologyKey");
  assert.equal(result.backList.length, 1);
  assert.equal(result.backList[0], technologyKey);
  assert.equal(result.forwardList.length, 0);
});

QUnit.test("setTechnology() and back and forwardList", (assert) => {
  // Setup.
  const state = AppState.create();
  const technologyKey1 = "tech_lasers_1";
  const action1 = ActionCreator.setTechnology(technologyKey1);
  const technologyKey2 = "tech_mineral_purification_2";
  const action2 = ActionCreator.setTechnology(technologyKey2);
  const technologyKey3 = "tech_cryostasis_1";
  const action3 = ActionCreator.setTechnology(technologyKey3);
  const action4 = ActionCreator.back();
  const action5 = ActionCreator.back();

  const state1 = Reducer.root(state, action1);
  const state2 = Reducer.root(state1, action2);
  const state3 = Reducer.root(state2, action3);
  const state4 = Reducer.root(state3, action4);
  const state5 = Reducer.root(state4, action5);

  assert.equal(state5.areaKey, "physics", "areaKey");
  assert.equal(state5.categoryKey, "particles", "categoryKey");
  assert.equal(state5.technologyKey, technologyKey1, "technologyKey");
  assert.equal(state5.backList.length, 0, "backList.length");
  assert.equal(state5.forwardList.length, 2, "forwardList.length");

  const technologyKey6 = "tech_mega_engineering";
  const action = ActionCreator.setTechnology(technologyKey6);

  // Run.
  const result = Reducer.root(state5, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.areaKey, "engineering", "areaKey");
  assert.equal(result.categoryKey, "voidcraft", "categoryKey");
  assert.equal(result.technologyKey, technologyKey6, "technologyKey");
  assert.equal(result.backList.length, 1, "backList.length");
  assert.equal(result.forwardList.length, 0, "forwardList.length");
});

const ReducerTest = {};
export default ReducerTest;
