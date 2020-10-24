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

ActionCreator.clearSelectedItems = makeActionCreator(
  ActionType.CLEAR_SELECTED_ITEMS
);

ActionCreator.setGoalItems = makeActionCreator(
  ActionType.SET_GOAL_ITEMS,
  "goalKeys"
);

ActionCreator.setPrerequisiteItems = makeActionCreator(
  ActionType.SET_PREREQUISITE_ITEMS,
  "prerequisiteKeys"
);

ActionCreator.setSelectedItems = makeActionCreator(
  ActionType.SET_SELECTED_ITEMS,
  "selectedKeys"
);

ActionCreator.setVerbose = makeActionCreator(
  ActionType.SET_VERBOSE,
  "isVerbose"
);

Object.freeze(ActionCreator);

export default ActionCreator;
