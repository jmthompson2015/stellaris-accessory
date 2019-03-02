/* eslint no-console: ["error", { allow: ["log"] }] */

import Technology from "../../artifact/Technology.js";

import TechnologyCell from "./TechnologyCell.js";

const myOnClick = technology => {
  console.log(`myOnClick() technology = ${technology.key} ${technology.name}`);
};

const technology1 = Technology.tech_synchronized_defences;
const element1 = React.createElement(TechnologyCell, {
  onClick: myOnClick,
  technology: technology1
});
ReactDOM.render(element1, document.getElementById("panel1"));

const technology2 = Technology.tech_combat_training;
const element2 = React.createElement(TechnologyCell, {
  onClick: myOnClick,
  technology: technology2
});
ReactDOM.render(element2, document.getElementById("panel2"));

const technology3 = Technology.tech_starbase_5;
const element3 = React.createElement(TechnologyCell, {
  onClick: myOnClick,
  technology: technology3
});
ReactDOM.render(element3, document.getElementById("panel3"));
