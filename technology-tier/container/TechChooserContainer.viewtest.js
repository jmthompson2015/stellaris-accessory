import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TU from "../model/TechnologyUtilities.js";

import TechChooserContainer from "./TechChooserContainer.js";

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

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    techAreaKey: "physics",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  ReactDOM.render(element, document.getElementById("physicsPanel"));
}

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    techAreaKey: "society",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  ReactDOM.render(element, document.getElementById("societyPanel"));
}

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    techAreaKey: "engineering",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  ReactDOM.render(element, document.getElementById("engineeringPanel"));
}
