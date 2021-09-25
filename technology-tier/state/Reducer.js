/* eslint no-console: ["error", { allow: ["error", "log", "warn"] }] */

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";

const Reducer = {};

const log = (message, state) => {
  if (state.isVerbose) {
    console.log(message);
  }
};

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  if (action.type.startsWith("@@redux/INIT")) {
    // Nothing to do.
    return state;
  }

  switch (action.type) {
    case ActionType.SET_VERBOSE:
      log(`Reducer SET_VERBOSE isVerbose ? ${action.isVerbose}`, state);
      return { ...state, isVerbose: action.isVerbose };
    case ActionType.SET_PHYSICS_GOAL_KEYS:
      log(`Reducer SET_PHYSICS_GOAL_KEYS techKeys = ${action.techKeys}`, state);
      return { ...state, physicsGoalKeys: action.techKeys };
    case ActionType.SET_PHYSICS_TECH_KEYS:
      log(`Reducer SET_PHYSICS_TECH_KEYS techKeys = ${action.techKeys}`, state);
      return { ...state, physicsTechKeys: action.techKeys };
    case ActionType.SET_PHYSICS_TIER:
      log(`Reducer SET_PHYSICS_TIER tier = ${action.tier}`, state);
      return { ...state, physicsTier: action.tier };
    case ActionType.SET_SOCIETY_GOAL_KEYS:
      log(`Reducer SET_SOCIETY_GOAL_KEYS techKeys = ${action.techKeys}`, state);
      return { ...state, societyGoalKeys: action.techKeys };
    case ActionType.SET_SOCIETY_TECH_KEYS:
      log(`Reducer SET_SOCIETY_TECH_KEYS techKeys = ${action.techKeys}`, state);
      return { ...state, societyTechKeys: action.techKeys };
    case ActionType.SET_SOCIETY_TIER:
      log(`Reducer SET_SOCIETY_TIER tier = ${action.tier}`, state);
      return { ...state, societyTier: action.tier };
    case ActionType.SET_ENGINEERING_GOAL_KEYS:
      log(
        `Reducer SET_ENGINEERING_GOAL_KEYS techKeys = ${action.techKeys}`,
        state
      );
      return { ...state, engineeringGoalKeys: action.techKeys };
    case ActionType.SET_ENGINEERING_TECH_KEYS:
      log(
        `Reducer SET_ENGINEERING_TECH_KEYS techKeys = ${action.techKeys}`,
        state
      );
      return { ...state, engineeringTechKeys: action.techKeys };
    case ActionType.SET_ENGINEERING_TIER:
      log(`Reducer SET_ENGINEERING_TIER tier = ${action.tier}`, state);
      return { ...state, engineeringTier: action.tier };
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
