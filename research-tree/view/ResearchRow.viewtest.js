/* eslint no-console: ["error", { allow: ["log"] }] */

import Research from "../artifact/Research.js";

import ResearchRow from "./ResearchRow.js";

const myOnClick = research => {
  console.log(`myOnClick() research = ${research.key} ${research.name}`);
};

const research1 = Research.tech_cryostasis_1;
const research2 = Research[research1.prerequisites[0]];
const research3 = Research[research1.prerequisites[1]];
const research4 = Research[research2.prerequisites[0]];

const researches = [research1, research2, research3, research4];

const element = React.createElement(ResearchRow, { researches, onClick: myOnClick });
ReactDOM.render(element, document.getElementById("panel"));
