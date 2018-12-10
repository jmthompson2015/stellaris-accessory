/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import RU from "./ResearchUtilities.js";

const Reducer = {};

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newAreaKey;
  let newCategories;
  let newCategory;
  let newCategoryKey;
  let newResearch;
  let newResearches;
  let newResearchKey;

  switch (action.type) {
    case ActionType.SET_AREA:
      console.log(`Reducer SET_AREA ${action.areaKey}`);
      if (action.areaKey === "-all-") {
        newCategories = undefined;
        newCategoryKey = undefined;
        newResearches = undefined;
        newResearchKey = undefined;
      } else {
        newCategories = RU.categoriesByArea(action.areaKey);
        newCategoryKey = newCategories[0].key;
        newResearches = RU.researchesByArea(action.areaKey);
        newResearchKey = newResearches[0].key;
      }
      return R.pipe(
        R.assoc("areaKey", action.areaKey),
        R.assoc("categories", newCategories),
        R.assoc("categoryKey", newCategoryKey),
        R.assoc("researches", newResearches),
        R.assoc("researchKey", newResearchKey)
      )(state);
    case ActionType.SET_CATEGORY:
      console.log(`Reducer SET_CATEGORY ${action.categoryKey}`);
      if (action.categoryKey === "-all-") {
        newAreaKey = state.areaKey;
        newCategories = undefined;
        newResearches = undefined;
        newResearchKey = undefined;
      } else {
        newCategory = Category[action.categoryKey];
        newAreaKey = newCategory.area;
        newCategories = RU.categoriesByArea(newAreaKey);
        newResearches = RU.researchesByCategory(action.categoryKey);
        newResearchKey = newResearches[0].key;
      }
      return R.pipe(
        R.assoc("areaKey", newAreaKey),
        R.assoc("categories", newCategories),
        R.assoc("categoryKey", action.categoryKey),
        R.assoc("researches", newResearches),
        R.assoc("researchKey", newResearchKey)
      )(state);
    case ActionType.SET_RESEARCH:
      console.log(`Reducer SET_RESEARCH ${action.researchKey}`);
      newResearch = Research[action.researchKey];
      newAreaKey = newResearch.area;
      newCategories = RU.categoriesByArea(newAreaKey);
      newCategoryKey = newResearch.category.toUpperCase();
      newResearches = RU.researchesByCategory(newCategoryKey);
      return R.pipe(
        R.assoc("areaKey", newAreaKey),
        R.assoc("categories", newCategories),
        R.assoc("categoryKey", newCategoryKey),
        R.assoc("researches", newResearches),
        R.assoc("researchKey", action.researchKey)
      )(state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
