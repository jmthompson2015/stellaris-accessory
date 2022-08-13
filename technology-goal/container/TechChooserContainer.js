import ActionCreator from "../state/ActionCreator.js";
import Preferences from "../state/Preferences.js";

import TechUtils from "../model/TechnologyUtilities.js";

import TechChooser from "../view/TechChooser.js";

const mapStateToProps = (state) => ({ selectedKeys: state.selectedKeys });

const mapDispatchToProps = (dispatch, ownProps) => ({
  applyOnClick: (selectedItems) => {
    const { appName } = ownProps;
    const mapFunction = (item) => item.key;
    const selectedKeys = R.map(mapFunction, selectedItems);

    dispatch(ActionCreator.setGoalItems(selectedKeys));
    Preferences.setGoalKeys(appName, selectedKeys);

    const prerequisites0 = TechUtils.prerequisitesForTechnologies(
      selectedItems
    );
    const filterFunction = (item) => item.start_tech !== true;
    const prerequisites = R.filter(filterFunction, prerequisites0);
    const prereqKeys = R.map(mapFunction, prerequisites);

    dispatch(ActionCreator.setPrerequisiteItems(prereqKeys));
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechChooser);
