/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import TechnologyCategory from "../../artifact/TechnologyCategory.js";
import Technology from "../../artifact/Technology.js";

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import TU from "./TechnologyUtilities.js";

const Reducer = {};

const pipeFunction = (
  areaKey,
  backList,
  categories,
  categoryKey,
  forwardList,
  rareTechnologies,
  technologies,
  technologyKey,
  startingTechnologies
) =>
  R.pipe(
    R.assoc("areaKey", areaKey),
    R.assoc("backList", backList),
    R.assoc("categories", categories),
    R.assoc("categoryKey", categoryKey),
    R.assoc("forwardList", forwardList),
    R.assoc("rareTechnologies", rareTechnologies),
    R.assoc("technologies", technologies),
    R.assoc("technologyKey", technologyKey),
    R.assoc("startingTechnologies", startingTechnologies)
  );

const setTechnology1 = (technologyKey, backList, forwardList, state) => {
  const newTechnology = Technology[technologyKey];
  const newAreaKey = newTechnology.area;
  const newCategories = TU.categoriesByArea(newAreaKey);
  const newCategoryKey = newTechnology.category;
  const newTechnologies = TU.technologiesByAreaCategory(newAreaKey, newCategoryKey);
  const newRareTechnologies = TU.raresByArea(newAreaKey);
  const newStarterTechnologies = TU.startersByArea(newAreaKey);

  return pipeFunction(
    newAreaKey,
    backList,
    newCategories,
    newCategoryKey,
    forwardList,
    newRareTechnologies,
    newTechnologies,
    technologyKey,
    newStarterTechnologies
  )(state);
};

const setTechnology2 = (technologyKey, state) => {
  const newBackList =
    state.technologyKey && state.technologyKey !== technologyKey
      ? R.append(state.technologyKey, state.backList)
      : state.backList;
  const newForwardList = [];

  return setTechnology1(technologyKey, newBackList, newForwardList, state);
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
  let newTechnologies;
  let newTechnologyKey;

  switch (action.type) {
    case ActionType.BACK:
      console.log(`Reducer BACK`);
      if (state.backList.length > 0) {
        newTechnologyKey = R.last(state.backList);
        newBackList = R.slice(0, state.backList.length - 1, state.backList);
        newForwardList = R.prepend(state.technologyKey, state.forwardList);
        return setTechnology1(newTechnologyKey, newBackList, newForwardList, state);
      }
      return state;
    case ActionType.FORWARD:
      console.log(`Reducer FORWARD`);
      if (state.forwardList.length > 0) {
        newTechnologyKey = R.head(state.forwardList);
        newBackList = R.append(state.technologyKey, state.backList);
        newForwardList = R.tail(state.forwardList);
        return setTechnology1(newTechnologyKey, newBackList, newForwardList, state);
      }
      return state;
    case ActionType.SET_AREA:
      console.log(`Reducer SET_AREA ${action.areaKey}`);
      newCategories = TU.categoriesByArea(action.areaKey);
      newCategoryKey = newCategories[0].key;
      newTechnologies = TU.technologiesByAreaCategory(action.areaKey, newCategoryKey);
      newTechnologyKey = newTechnologies[0].key;
      return setTechnology2(newTechnologyKey, state);
    case ActionType.SET_CATEGORY:
      console.log(`Reducer SET_CATEGORY ${action.categoryKey}`);
      newCategory = TechnologyCategory[action.categoryKey];
      newAreaKey = state.areaKey || newCategory.area;
      newTechnologies = TU.technologiesByAreaCategory(newAreaKey, action.categoryKey);
      newTechnologyKey = newTechnologies[0].key;
      return setTechnology2(newTechnologyKey, state);
    case ActionType.SET_TECHNOLOGY:
      console.log(`Reducer SET_TECHNOLOGY ${action.technologyKey}`);
      return setTechnology2(action.technologyKey, state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
