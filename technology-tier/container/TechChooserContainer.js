import ActionCreator from "../state/ActionCreator.js";
import Preferences from "../state/Preferences.js";

import TechChooser from "../view/TechChooser.js";

const mapStateToProps = (state, ownProps) => {
  const { techAreaKey } = ownProps;
  const initialValue = state[`${techAreaKey}Tier`];
  const goalKeys = state[`${techAreaKey}GoalKeys`];
  const techKeys = state[`${techAreaKey}TechKeys`];

  return { goalKeys, techAreaKey, techKeys, initialValue };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  applyOnClick: (technologies) => {
    const { appName, techAreaKey } = ownProps;
    const techKeys = R.uniq(R.map(R.prop("key"), technologies));

    switch (techAreaKey) {
      case "physics":
        dispatch(ActionCreator.setPhysicsGoalKeys(techKeys));
        Preferences.setPhysicsGoalKeys(appName, techKeys);
        break;
      case "society":
        dispatch(ActionCreator.setSocietyGoalKeys(techKeys));
        Preferences.setSocietyGoalKeys(appName, techKeys);
        break;
      case "engineering":
        dispatch(ActionCreator.setEngineeringGoalKeys(techKeys));
        Preferences.setEngineeringGoalKeys(appName, techKeys);
        break;
      default:
        throw new Error(`Unknown techAreaKey: ${techAreaKey}`);
    }
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechChooser);
