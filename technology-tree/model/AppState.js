const AppState = {};

AppState.create = ({
  areaKey,
  backList = [],
  categories,
  categoryKey,
  forwardList = [],
  rareTechnologies,
  technologies,
  technologyKey,
  startingTechnologies
} = {}) =>
  Immutable({
    areaKey,
    backList,
    categories,
    categoryKey,
    forwardList,
    rareTechnologies,
    technologies,
    technologyKey,
    startingTechnologies
  });

Object.freeze(AppState);

export default AppState;
