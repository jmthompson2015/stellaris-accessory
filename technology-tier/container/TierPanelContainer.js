import ActionCreator from "../state/ActionCreator.js";

import TU from "../model/TechnologyUtilities.js";

import TierPanel from "../view/TierPanel.js";

const mapStateToProps = (state, ownProps) => {
  const { techAreaKey } = ownProps;
  const initialValue = state[`${techAreaKey}Tier`];
  const techKeys = state[`${techAreaKey}TechKeys`];

  return { techAreaKey, techKeys, initialValue };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (tier0) => {
    const tier1 = parseInt(tier0, 10);
    const tier = Number.isInteger(tier1) ? tier1 : tier0;
    const { techAreaKey } = ownProps;
    const techKeys = TU.techKeysByAreaTier(techAreaKey, tier);

    switch (techAreaKey) {
      case "physics":
        dispatch(ActionCreator.setPhysicsTier(tier));
        dispatch(ActionCreator.setPhysicsTechKeys(techKeys));
        break;
      case "society":
        dispatch(ActionCreator.setSocietyTier(tier));
        dispatch(ActionCreator.setSocietyTechKeys(techKeys));
        break;
      case "engineering":
        dispatch(ActionCreator.setEngineeringTier(tier));
        dispatch(ActionCreator.setEngineeringTechKeys(techKeys));
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
