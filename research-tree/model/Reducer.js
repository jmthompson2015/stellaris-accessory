/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import RU from "./ResearchUtilities.js";

const Reducer = {};

const pipeFunction = (
  areaKey,
  backList,
  categories,
  categoryKey,
  forwardList,
  rareResearches,
  researches,
  researchKey,
  startingResearches
) =>
  R.pipe(
    R.assoc("areaKey", areaKey),
    R.assoc("backList", backList),
    R.assoc("categories", categories),
    R.assoc("categoryKey", categoryKey),
    R.assoc("forwardList", forwardList),
    R.assoc("rareResearches", rareResearches),
    R.assoc("researches", researches),
    R.assoc("researchKey", researchKey),
    R.assoc("startingResearches", startingResearches)
  );

const setResearch1 = (researchKey, backList, forwardList, state) => {
  const newResearch = Research[researchKey];
  const newAreaKey = newResearch.area;
  const newCategories = RU.categoriesByArea(newAreaKey);
  const newCategoryKey = newResearch.category;
  const newResearches = RU.researchesByAreaCategory(newAreaKey, newCategoryKey);
  const newRareResearches = RU.raresByArea(newAreaKey);
  const newStarterResearches = RU.startersByArea(newAreaKey);

  return pipeFunction(
    newAreaKey,
    backList,
    newCategories,
    newCategoryKey,
    forwardList,
    newRareResearches,
    newResearches,
    researchKey,
    newStarterResearches
  )(state);
};

const setResearch2 = (researchKey, state) => {
  const newBackList =
    state.researchKey && state.researchKey !== researchKey
      ? R.append(state.researchKey, state.backList)
      : state.backList;
  const newForwardList = [];

  return setResearch1(researchKey, newBackList, newForwardList, state);
};

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newAreaKey;
  let newBackList;
  let newCategories;
  let newCategory;
  let newCategoryKey;
  let newForwardList;
  let newResearches;
  let newResearchKey;

  switch (action.type) {
    case ActionType.BACK:
      console.log(`Reducer BACK`);
      if (state.backList.length > 0) {
        newResearchKey = R.last(state.backList);
        newBackList = R.slice(0, state.backList.length - 1, state.backList);
        newForwardList = R.prepend(state.researchKey, state.forwardList);
        return setResearch1(newResearchKey, newBackList, newForwardList, state);
      }
      return state;
    case ActionType.FORWARD:
      console.log(`Reducer FORWARD`);
      if (state.forwardList.length > 0) {
        newResearchKey = R.head(state.forwardList);
        newBackList = R.append(state.researchKey, state.backList);
        newForwardList = R.tail(state.forwardList);
        return setResearch1(newResearchKey, newBackList, newForwardList, state);
      }
      return state;
    case ActionType.SET_AREA:
      console.log(`Reducer SET_AREA ${action.areaKey}`);
      newCategories = RU.categoriesByArea(action.areaKey);
      newCategoryKey = newCategories[0].key;
      newResearches = RU.researchesByAreaCategory(action.areaKey, newCategoryKey);
      newResearchKey = newResearches[0].key;
      return setResearch2(newResearchKey, state);
    case ActionType.SET_CATEGORY:
      console.log(`Reducer SET_CATEGORY ${action.categoryKey}`);
      newCategory = Category[action.categoryKey];
      newAreaKey = state.areaKey || newCategory.areas[0];
      newResearches = RU.researchesByAreaCategory(newAreaKey, action.categoryKey);
      newResearchKey = newResearches[0].key;
      return setResearch2(newResearchKey, state);
    case ActionType.SET_RESEARCH:
      console.log(`Reducer SET_RESEARCH ${action.researchKey}`);
      return setResearch2(action.researchKey, state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
