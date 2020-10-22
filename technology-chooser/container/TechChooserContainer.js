import ActionCreator from "../state/ActionCreator.js";

import TechChooser from "../view/TechChooser.js";

const mapStateToProps = (state) => {
  const areaKey = state.techAreaKey;

  return { areaKey };
};

const mapDispatchToProps = (dispatch) => ({
  applyOnClick: (itemToChecked) => {
    const itemKeys = Object.keys(itemToChecked);
    const filterFunction = (itemKey) => itemToChecked[itemKey];
    const selectedItems = R.filter(filterFunction, itemKeys);

    dispatch(ActionCreator.setSelectedItems(selectedItems));
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechChooser);
