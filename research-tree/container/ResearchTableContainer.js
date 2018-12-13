import Research from "../artifact/Research.js";

import ActionCreator from "../model/ActionCreator.js";

import ResearchTable from "../view/ResearchTable.js";

const mapStateToProps = state => {
  const { researchKey } = state;
  const research = Research[researchKey];

  return { research };
};

const mapDispatchToProps = dispatch => ({
  onClick: research => {
    dispatch(ActionCreator.setResearch(research.key));
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(ResearchTable);
