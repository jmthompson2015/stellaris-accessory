/* eslint no-console: ["error", { allow: ["log"] }] */

import Research from "../artifact/Research.js";

import ResearchTable from "./ResearchTable.js";

const myOnClick = research => {
  console.log(`myOnClick() research = ${research.key} ${research.name}`);
};

const research = Research.tech_battleships;

const element = React.createElement(ResearchTable, { research, onClick: myOnClick });
ReactDOM.render(element, document.getElementById("panel"));
