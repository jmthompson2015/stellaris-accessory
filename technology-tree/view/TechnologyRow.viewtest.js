/* eslint no-console: ["error", { allow: ["log"] }] */

import Technology from "../../artifact/Technology.js";

import TechnologyRow from "./TechnologyRow.js";

const myOnClick = technology => {
  console.log(`myOnClick() technology = ${technology.key} ${technology.name}`);
};

const technology1 = Technology.tech_cryostasis_1;
const technology2 = Technology[technology1.prerequisites[0]];
const technology3 = Technology[technology1.prerequisites[1]];
const technology4 = Technology[technology2.prerequisites[0]];

const technologies = [technology1, technology2, technology3, technology4];

const element = React.createElement(TechnologyRow, { technologies, onClick: myOnClick });
ReactDOM.render(element, document.getElementById("panel"));
