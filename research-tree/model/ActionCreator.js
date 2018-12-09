import ActionType from "./ActionType.js";

const ActionCreator = {};

// See https://redux.js.org/recipes/reducing-boilerplate
const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

ActionCreator.setArea = makeActionCreator(ActionType.SET_AREA, "areaKey");

ActionCreator.setCategory = makeActionCreator(ActionType.SET_CATEGORY, "categoryKey");

ActionCreator.setResearch = makeActionCreator(ActionType.SET_RESEARCH, "researchKey");

Object.freeze(ActionCreator);

export default ActionCreator;
