const AppState = {};

AppState.create = ({
  areaKey,
  backList = [],
  categories,
  categoryKey,
  forwardList = [],
  rareResearches,
  researches,
  researchKey,
  startingResearches
} = {}) =>
  Immutable({
    areaKey,
    backList,
    categories,
    categoryKey,
    forwardList,
    rareResearches,
    researches,
    researchKey,
    startingResearches
  });

Object.freeze(AppState);

export default AppState;
