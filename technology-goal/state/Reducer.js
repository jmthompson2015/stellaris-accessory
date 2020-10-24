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
    case ActionType.CLEAR_SELECTED_ITEMS:
      log(`Reducer CLEAR_SELECTED_ITEMS`, state);
      return R.assoc("selectedKeys", [], state);
    case ActionType.SET_GOAL_ITEMS:
      log(`Reducer SET_GOAL_ITEMS goalKeys = ${action.goalKeys}`, state);
      return { ...state, goalKeys: action.goalKeys };
    case ActionType.SET_PREREQUISITE_ITEMS:
      log(
        `Reducer SET_PREREQUISITE_ITEMS prerequisiteKeys = ${action.prerequisiteKeys}`,
        state
      );
      return {
        ...state,
        prerequisiteKeys: Immutable([...action.prerequisiteKeys]),
      };
    case ActionType.SET_SELECTED_ITEMS:
      log(
        `Reducer SET_SELECTED_ITEMS selectedKeys = ${action.selectedKeys}`,
        state
      );
      return R.assoc("selectedKeys", action.selectedKeys, state);
    case ActionType.SET_VERBOSE:
      log(`Reducer SET_VERBOSE isVerbose ? ${action.isVerbose}`, state);
      return { ...state, isVerbose: action.isVerbose };
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
