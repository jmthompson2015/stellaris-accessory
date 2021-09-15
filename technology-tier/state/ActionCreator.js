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

ActionCreator.setEngineeringTechKeys = makeActionCreator(
  ActionType.SET_ENGINEERING_TECH_KEYS,
  "techKeys"
);

ActionCreator.setEngineeringTier = makeActionCreator(
  ActionType.SET_ENGINEERING_TIER,
  "tier"
);

ActionCreator.setPhysicsTechKeys = makeActionCreator(
  ActionType.SET_PHYSICS_TECH_KEYS,
  "techKeys"
);

ActionCreator.setPhysicsTier = makeActionCreator(
  ActionType.SET_PHYSICS_TIER,
  "tier"
);

ActionCreator.setSocietyTechKeys = makeActionCreator(
  ActionType.SET_SOCIETY_TECH_KEYS,
  "techKeys"
);

ActionCreator.setSocietyTier = makeActionCreator(
  ActionType.SET_SOCIETY_TIER,
  "tier"
);

ActionCreator.setVerbose = makeActionCreator(
  ActionType.SET_VERBOSE,
  "isVerbose"
);

Object.freeze(ActionCreator);

export default ActionCreator;
