import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TU from "../model/TechnologyUtilities.js";

import TierPanelContainer from "../container/TierPanelContainer.js";

const { TitledElement } = ReactComponent;

const store = Redux.createStore(Reducer.root);
const tier = 1;
store.dispatch(ActionCreator.setPhysicsTier(tier));
store.dispatch(
  ActionCreator.setPhysicsTechKeys(TU.techKeysByAreaTier("physics", tier))
);
store.dispatch(ActionCreator.setSocietyTier(tier));
store.dispatch(
  ActionCreator.setSocietyTechKeys(TU.techKeysByAreaTier("society", tier))
);
store.dispatch(ActionCreator.setEngineeringTier(tier));
store.dispatch(
  ActionCreator.setEngineeringTechKeys(
    TU.techKeysByAreaTier("engineering", tier)
  )
);

const elementClass = "pa1 v-mid";
const titleClass = "b bg-white f5 ph1 pt1 tc";

// /////////////////////////////////////////////////////////////////////////////
const container1 = React.createElement(TierPanelContainer, {
  techAreaKey: "physics",
});
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
const panel1 = React.createElement(TitledElement, {
  element: element1,
  title: "Physics",
  elementClass,
  titleClass: `${titleClass} color-physics`,
});
ReactDOM.render(panel1, document.getElementById("physicsPanel"));

// /////////////////////////////////////////////////////////////////////////////
const container2 = React.createElement(TierPanelContainer, {
  techAreaKey: "society",
});
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
const panel2 = React.createElement(TitledElement, {
  element: element2,
  title: "Society",
  elementClass,
  titleClass: `${titleClass} color-society`,
});
ReactDOM.render(panel2, document.getElementById("societyPanel"));

// /////////////////////////////////////////////////////////////////////////////
const container3 = React.createElement(TierPanelContainer, {
  techAreaKey: "engineering",
});
const element3 = React.createElement(
  ReactRedux.Provider,
  { store },
  container3
);
const panel3 = React.createElement(TitledElement, {
  element: element3,
  title: "Engineering",
  elementClass,
  titleClass: `${titleClass} color-engineering`,
});
ReactDOM.render(panel3, document.getElementById("engineeringPanel"));
