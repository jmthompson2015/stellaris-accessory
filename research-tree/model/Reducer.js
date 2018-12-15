/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import RU from "./ResearchUtilities.js";

const Reducer = {};

const pipeFunction = (
  areaKey,
  categories,
  categoryKey,
  rareResearches,
  researches,
  researchKey,
  startingResearches
) =>
  R.pipe(
    R.assoc("areaKey", areaKey),
    R.assoc("categories", categories),
    R.assoc("categoryKey", categoryKey),
    R.assoc("rareResearches", rareResearches),
    R.assoc("researches", researches),
    R.assoc("researchKey", researchKey),
    R.assoc("startingResearches", startingResearches)
  );

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newAreaKey;
  let newCategories;
  let newCategory;
  let newCategoryKey;
  let newRareResearches;
  let newResearch;
  let newResearches;
  let newResearchKey;
  let newStarterResearches;

  switch (action.type) {
    case ActionType.SET_AREA:
      console.log(`Reducer SET_AREA ${action.areaKey}`);
      newCategories = RU.categoriesByArea(action.areaKey);
      newCategoryKey = newCategories[0].key;
      newResearches = RU.researchesByAreaCategory(action.areaKey, newCategoryKey);
      newResearchKey = newResearches[0].key;
      newRareResearches = RU.raresByArea(action.areaKey);
      newStarterResearches = RU.startersByArea(action.areaKey);
      return pipeFunction(
        action.areaKey,
        newCategories,
        newCategoryKey,
        newRareResearches,
        newResearches,
        newResearchKey,
        newStarterResearches
      )(state);
    case ActionType.SET_CATEGORY:
      console.log(`Reducer SET_CATEGORY ${action.categoryKey}`);
      newCategory = Category[action.categoryKey];
      newAreaKey = state.areaKey || newCategory.areas[0];
      newCategories = RU.categoriesByArea(newAreaKey);
      newResearches = RU.researchesByAreaCategory(newAreaKey, action.categoryKey);
      newResearchKey = newResearches[0].key;
      newRareResearches = RU.raresByArea(newAreaKey);
      newStarterResearches = RU.startersByArea(newAreaKey);
      return pipeFunction(
        newAreaKey,
        newCategories,
        action.categoryKey,
        newRareResearches,
        newResearches,
        newResearchKey,
        newStarterResearches
      )(state);
    case ActionType.SET_RESEARCH:
      console.log(`Reducer SET_RESEARCH ${action.researchKey}`);
      newResearch = Research[action.researchKey];
      newAreaKey = newResearch.area;
      newCategories = RU.categoriesByArea(newAreaKey);
      newCategoryKey = newResearch.category;
      newResearches = RU.researchesByAreaCategory(newAreaKey, newCategoryKey);
      newRareResearches = RU.raresByArea(newAreaKey);
      newStarterResearches = RU.startersByArea(newAreaKey);
      return pipeFunction(
        newAreaKey,
        newCategories,
        newCategoryKey,
        newRareResearches,
        newResearches,
        action.researchKey,
        newStarterResearches
      )(state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
