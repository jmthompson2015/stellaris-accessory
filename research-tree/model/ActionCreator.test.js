import ActionCreator from "./ActionCreator.js";
import ActionType from "./ActionType.js";

QUnit.module("ActionCreator");

QUnit.test("all action types", assert => {
  // Setup.
  const actionTypeKeys = Object.getOwnPropertyNames(ActionType);
  assert.equal(actionTypeKeys.length, 5);

  // Run / Verify.
  actionTypeKeys.forEach(key => {
    assert.ok(ActionCreator[ActionType[key]], `actionType = ${key} ${ActionType[key]}`);
  });
});

QUnit.test("back()", assert => {
  // Run.
  const result = ActionCreator.back();

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.BACK);
});

QUnit.test("forward()", assert => {
  // Run.
  const result = ActionCreator.forward();

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.FORWARD);
});

QUnit.test("setArea()", assert => {
  // Setup.
  const areaKey = 2;

  // Run.
  const result = ActionCreator.setArea(areaKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.SET_AREA);
  assert.equal(result.areaKey, areaKey);
});

QUnit.test("setCategory()", assert => {
  // Setup.
  const categoryKey = 3;

  // Run.
  const result = ActionCreator.setCategory(categoryKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.SET_CATEGORY);
  assert.equal(result.categoryKey, categoryKey);
});

QUnit.test("setResearch()", assert => {
  // Setup.
  const researchKey = 4;

  // Run.
  const result = ActionCreator.setResearch(researchKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.SET_RESEARCH);
  assert.equal(result.researchKey, researchKey);
});

const ActionCreatorTest = {};
export default ActionCreatorTest;
