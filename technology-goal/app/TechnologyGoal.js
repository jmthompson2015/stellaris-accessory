import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TechChooserContainer from "../container/TechChooserContainer.js";
import TechListContainer from "../container/TechListContainer.js";

const { TitledElement } = ReactComponent;

const store = Redux.createStore(Reducer.root);

const goalKeys = [
  "tech_colossus",
  "tech_droid_workers", // Droids
  "tech_dyson_sphere",
  "tech_energy_torpedoes_2", // Neutron Launchers
  "tech_exotic_gases", // Exotic Gas Refining
  "tech_galactic_bureaucracy",
  "tech_gateway_construction",
  "tech_habitat_1", // Orbital Habitats
  "tech_juggernaut",
  "tech_jump_drive_1",
  "tech_mass_accelerator_2", // Giga Cannon
  "tech_matter_decompressor",
  "tech_mine_exotic_gases", // Exotic Gas Extraction
  "tech_mine_rare_crystals", // Rare Crystal Mining
  "tech_mine_volatile_motes", // Mote Stabilization
  "tech_rare_crystals", // Rare Crystal Manufacturing
  "tech_shields_5", // Hyper Shields
  "tech_volatile_motes", // Volatile Material Plants
];
store.dispatch(ActionCreator.setSelectedItems(goalKeys));

// const elementClass = "ma0 v-mid";
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
const container3 = React.createElement(TechChooserContainer);
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
