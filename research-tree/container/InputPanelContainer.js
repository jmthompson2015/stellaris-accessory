import ActionCreator from "../model/ActionCreator.js";

import InputPanel from "../view/InputPanel.js";

const mapStateToProps = state => {
  const { areaKey, categories, categoryKey, researches, researchKey } = state;

  return { areaKey, categories, categoryKey, researches, researchKey };
};

const mapDispatchToProps = dispatch => ({
  onAreaChange: areaKey => {
    dispatch(ActionCreator.setArea(areaKey));
  },
  onCategoryChange: categoryKey => {
    dispatch(ActionCreator.setCategory(categoryKey));
  },
  onResearchChange: researchKey => {
    dispatch(ActionCreator.setResearch(researchKey));
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPanel);
