import ActionCreator from "../state/ActionCreator.js";

import TechChooser from "../view/TechChooser.js";

const mapStateToProps = (state) => {
  const areaKey = state.techAreaKey;

  return { areaKey };
};

const mapDispatchToProps = (dispatch) => ({
  applyOnClick: (selectedItems) => {
    const mapFunction = (item) => item.key;
    const selectedKeys = R.map(mapFunction, selectedItems);
    dispatch(ActionCreator.setSelectedItems(selectedKeys));
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechChooser);
