import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TU from "../model/TechnologyUtilities.js";

import TierPanelContainer from "./TierPanelContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setPhysicsTier(1));
store.dispatch(
  ActionCreator.setPhysicsTechKeys(TU.techKeysByAreaTier("physics", 1))
);
store.dispatch(ActionCreator.setSocietyTier(2));
store.dispatch(
  ActionCreator.setSocietyTechKeys(TU.techKeysByAreaTier("society", 2))
);
store.dispatch(ActionCreator.setEngineeringTier(3));
store.dispatch(
  ActionCreator.setEngineeringTechKeys(TU.techKeysByAreaTier("engineering", 3))
);

const container1 = React.createElement(TierPanelContainer, {
  techAreaKey: "physics",
});
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
ReactDOM.render(element1, document.getElementById("physicsPanel"));

const container2 = React.createElement(TierPanelContainer, {
  techAreaKey: "society",
});
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
ReactDOM.render(element2, document.getElementById("societyPanel"));

const container3 = React.createElement(TierPanelContainer, {
  techAreaKey: "engineering",
});
const element3 = React.createElement(
  ReactRedux.Provider,
  { store },
  container3
);
ReactDOM.render(element3, document.getElementById("engineeringPanel"));
