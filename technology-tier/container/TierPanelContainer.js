import ActionCreator from "../state/ActionCreator.js";
import Preferences from "../state/Preferences.js";

import TU from "../model/TechnologyUtilities.js";

import TierPanel from "../view/TierPanel.js";

const mapStateToProps = (state, ownProps) => {
  const { techAreaKey } = ownProps;
  const initialValue = state[`${techAreaKey}Tier`];
  const keys1 = state.physicsGoalKeys;
  const keys2 = state.societyGoalKeys;
  const keys3 = state.engineeringGoalKeys;
  const goalKeys = R.uniq(R.concat(keys1, R.concat(keys2, keys3)));
  const techKeys = state[`${techAreaKey}TechKeys`];

  return { goalKeys, techAreaKey, techKeys, initialValue };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (tier0) => {
    const tier1 = parseInt(tier0, 10);
    const tier = Number.isInteger(tier1) ? tier1 : tier0;
    const { appName, techAreaKey } = ownProps;
    const techKeys = TU.techKeysByAreaTier(techAreaKey, tier);

    switch (techAreaKey) {
      case "physics":
        dispatch(ActionCreator.setPhysicsTier(tier));
        dispatch(ActionCreator.setPhysicsTechKeys(techKeys));
        Preferences.setPhysicsTier(appName, tier);
        break;
      case "society":
        dispatch(ActionCreator.setSocietyTier(tier));
        dispatch(ActionCreator.setSocietyTechKeys(techKeys));
        Preferences.setSocietyTier(appName, tier);
        break;
      case "engineering":
        dispatch(ActionCreator.setEngineeringTier(tier));
        dispatch(ActionCreator.setEngineeringTechKeys(techKeys));
        Preferences.setEngineeringTier(appName, tier);
        break;
      default:
        throw new Error(`Unknown techAreaKey: ${techAreaKey}`);
    }
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TierPanel);
