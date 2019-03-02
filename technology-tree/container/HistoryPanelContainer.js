import ActionCreator from "../model/ActionCreator.js";

import HistoryPanel from "../view/HistoryPanel.js";

const mapStateToProps = state => {
  const isBackDisabled = state.backList.length <= 0;
  const isForwardDisabled = state.forwardList.length <= 0;

  return { isBackDisabled, isForwardDisabled };
};

const mapDispatchToProps = dispatch => ({
  onBack: () => {
    dispatch(ActionCreator.back());
  },
  onForward: () => {
    dispatch(ActionCreator.forward());
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPanel);
