import ActionCreator from "../state/ActionCreator.js";
import Preferences from "../state/Preferences.js";
import Reducer from "../state/Reducer.js";

import TechChooserContainer from "../container/TechChooserContainer.js";
import TechListContainer from "../container/TechListContainer.js";

const { TitledElement } = ReactComponent;

const store = Redux.createStore(Reducer.root);
const { appName } = store.getState();

const goalKeys = Preferences.getGoalKeys(appName);
store.dispatch(ActionCreator.setSelectedItems(goalKeys));

const elementClass = "pa1 v-mid";
const titleClass = "b bg-white f5 ph1 pt1 tc";

// /////////////////////////////////////////////////////////////////////////////
const container0 = React.createElement(TechListContainer, {
  areaKey: "physics",
});
const element0 = React.createElement(
  ReactRedux.Provider,
  { store },
  container0
);
const panel0 = React.createElement(TitledElement, {
  element: element0,
  title: "Physics",
  elementClass,
  titleClass,
});
ReactDOM.render(panel0, document.getElementById("physicsTechList"));

// /////////////////////////////////////////////////////////////////////////////
const container1 = React.createElement(TechListContainer, {
  areaKey: "society",
});
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
const panel1 = React.createElement(TitledElement, {
  element: element1,
  title: "Society",
  elementClass,
  titleClass,
});
ReactDOM.render(panel1, document.getElementById("societyTechList"));

// /////////////////////////////////////////////////////////////////////////////
const container2 = React.createElement(TechListContainer, {
  areaKey: "engineering",
});
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
const panel2 = React.createElement(TitledElement, {
  element: element2,
  title: "Engineering",
  elementClass,
  titleClass,
});
ReactDOM.render(panel2, document.getElementById("engineeringTechList"));

// /////////////////////////////////////////////////////////////////////////////
const container3 = React.createElement(TechChooserContainer, { appName });
const element3 = React.createElement(
  ReactRedux.Provider,
  { store },
  container3
);
const panel3 = React.createElement(TitledElement, {
  element: element3,
  title: "Technologies",
  elementClass,
  titleClass,
});
ReactDOM.render(panel3, document.getElementById("techChooserPanel"));
