import ActionCreator from "../state/ActionCreator.js";

import TechAreaChooser from "../view/TechAreaChooser.js";

const mapStateToProps = (state) => {
  const selected = state.techAreaKey;

  return { selected };
};

const mapDispatchToProps = (dispatch) => ({
  applyOnClick: (selected) => {
    dispatch(ActionCreator.setTechArea(selected.key));
    dispatch(ActionCreator.clearSelectedItems());
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechAreaChooser);
