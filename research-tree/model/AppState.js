const AppState = {};

AppState.create = ({
  areaKey,
  categories,
  categoryKey,
  rareResearches,
  researches,
  researchKey,
  startingResearches
} = {}) =>
  Immutable({
    areaKey,
    categories,
    categoryKey,
    rareResearches,
    researches,
    researchKey,
    startingResearches
  });

Object.freeze(AppState);

export default AppState;
