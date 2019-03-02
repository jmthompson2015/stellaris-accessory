import ActionCreator from "../model/ActionCreator.js";

import InputPanel from "../view/InputPanel.js";

const mapStateToProps = state => {
  const {
    areaKey,
    categories,
    categoryKey,
    rareTechnologies,
    technologies,
    technologyKey,
    startingTechnologies
  } = state;

  return {
    areaKey,
    categories,
    categoryKey,
    rareTechnologies,
    technologies,
    technologyKey,
    startingTechnologies
  };
};

const mapDispatchToProps = dispatch => ({
  onAreaChange: areaKey => {
    dispatch(ActionCreator.setArea(areaKey));
  },
  onCategoryChange: categoryKey => {
    dispatch(ActionCreator.setCategory(categoryKey));
  },
  onTechnologyChange: technologyKey => {
    dispatch(ActionCreator.setTechnology(technologyKey));
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPanel);
