import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TechListContainer from "./TechListContainer.js";

const techKeys = [
  "tech_zero_point_power",
  "tech_antimatter_power",
  "tech_cold_fusion_power",
  "tech_fusion_power", // physics
  "tech_climate_restoration",
  "tech_terrestrial_sculpting", // society
  "tech_battleships",
  "tech_cruisers",
  "tech_destroyers", // engineering
];
const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setPrerequisiteItems(techKeys));

// /////////////////////////////////////////////////////////////////////////////
const container0 = React.createElement(TechListContainer, {
  areaKey: "physics",
});
const element0 = React.createElement(
  ReactRedux.Provider,
  { store },
  container0
);
ReactDOM.render(element0, document.getElementById("panel0"));

// /////////////////////////////////////////////////////////////////////////////
const container1 = React.createElement(TechListContainer, {
  areaKey: "society",
});
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
ReactDOM.render(element1, document.getElementById("panel1"));

// /////////////////////////////////////////////////////////////////////////////
const container2 = React.createElement(TechListContainer, {
  areaKey: "engineering",
});
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
ReactDOM.render(element2, document.getElementById("panel2"));

// /////////////////////////////////////////////////////////////////////////////
const container3 = React.createElement(TechListContainer);
const element3 = React.createElement(
  ReactRedux.Provider,
  { store },
  container3
);
ReactDOM.render(element3, document.getElementById("panel3"));
