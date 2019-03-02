/* eslint no-console: ["error", { allow: ["log"] }] */

import Technology from "../../artifact/Technology.js";

import TechnologyTable from "./TechnologyTable.js";

const myOnClick = technology => {
  console.log(`myOnClick() technology = ${technology.key} ${technology.name}`);
};

const technology = Technology.tech_battleships;

const element = React.createElement(TechnologyTable, { technology, onClick: myOnClick });
ReactDOM.render(element, document.getElementById("panel"));
