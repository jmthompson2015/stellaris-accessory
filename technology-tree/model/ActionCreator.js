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

ActionCreator.back = makeActionCreator(ActionType.BACK);

ActionCreator.forward = makeActionCreator(ActionType.FORWARD);

ActionCreator.setArea = makeActionCreator(ActionType.SET_AREA, "areaKey");

ActionCreator.setCategory = makeActionCreator(ActionType.SET_CATEGORY, "categoryKey");

ActionCreator.setTechnology = makeActionCreator(ActionType.SET_TECHNOLOGY, "technologyKey");

Object.freeze(ActionCreator);

export default ActionCreator;
