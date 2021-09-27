import ActionCreator from "../state/ActionCreator.js";
import Preferences from "../state/Preferences.js";
import Reducer from "../state/Reducer.js";

import TU from "../model/TechnologyUtilities.js";

import TechChooserContainer from "../container/TechChooserContainer.js";
import TierPanelContainer from "../container/TierPanelContainer.js";

const { TitledElement } = ReactComponent;

const store = Redux.createStore(Reducer.root);
const { appName } = store.getState();

// Initialize physics.
{
  const tier = Preferences.getPhysicsTier(appName);
  const goalKeys = Preferences.getPhysicsGoalKeys(appName);
  const techKeys = TU.techKeysByAreaTier("physics", tier);
  store.dispatch(ActionCreator.setPhysicsTier(tier));
  store.dispatch(ActionCreator.setPhysicsGoalKeys(goalKeys));
  store.dispatch(ActionCreator.setPhysicsTechKeys(techKeys));
}

// Initialize society.
{
  const tier = Preferences.getSocietyTier(appName);
  const goalKeys = Preferences.getSocietyGoalKeys(appName);
  const techKeys = TU.techKeysByAreaTier("society", tier);
  store.dispatch(ActionCreator.setSocietyTier(tier));
  store.dispatch(ActionCreator.setSocietyGoalKeys(goalKeys));
  store.dispatch(ActionCreator.setSocietyTechKeys(techKeys));
}

// Initialize engineering.
{
  const tier = Preferences.getEngineeringTier(appName);
  const goalKeys = Preferences.getEngineeringGoalKeys(appName);
  const techKeys = TU.techKeysByAreaTier("engineering", tier);
  store.dispatch(ActionCreator.setEngineeringTier(tier));
  store.dispatch(ActionCreator.setEngineeringGoalKeys(goalKeys));
  store.dispatch(ActionCreator.setEngineeringTechKeys(techKeys));
}

const elementClass = "pa1 v-mid";
const titleClass = "b bg-white f5 ph1 pt1 tc";

// /////////////////////////////////////////////////////////////////////////////
const container1 = React.createElement(TierPanelContainer, {
  appName: store.getState().appName,
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
  appName: store.getState().appName,
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
  appName: store.getState().appName,
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

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    appName,
    selectedKeys: store.getState().physicsGoalKeys,
    techAreaKey: "physics",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  const panel = React.createElement(TitledElement, {
    element,
    title: "Physics Goals",
    elementClass,
    titleClass: `${titleClass} color-physics`,
  });
  ReactDOM.render(panel, document.getElementById("physicsGoals"));
}

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    appName,
    selectedKeys: store.getState().societyGoalKeys,
    techAreaKey: "society",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  const panel = React.createElement(TitledElement, {
    element,
    title: "Society Goals",
    elementClass,
    titleClass: `${titleClass} color-society`,
  });
  ReactDOM.render(panel, document.getElementById("societyGoals"));
}

// /////////////////////////////////////////////////////////////////////////////
{
  const container = React.createElement(TechChooserContainer, {
    appName,
    selectedKeys: store.getState().engineeringGoalKeys,
    techAreaKey: "engineering",
  });
  const element = React.createElement(
    ReactRedux.Provider,
    { store },
    container
  );
  const panel = React.createElement(TitledElement, {
    element,
    title: "Engineering Goals",
    elementClass,
    titleClass: `${titleClass} color-engineering`,
  });
  ReactDOM.render(panel, document.getElementById("engineeringGoals"));
}
