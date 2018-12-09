const AppState = {};

AppState.create = ({ areaKey, categories, categoryKey, researches, researchKey } = {}) =>
  Immutable({
    areaKey,
    categories,
    categoryKey,
    researches,
    researchKey
  });

Object.freeze(AppState);

export default AppState;
