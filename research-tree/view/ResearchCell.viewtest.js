import Research from "../artifact/Research.js";

import ResearchCell from "./ResearchCell.js";

const research1 = Research.tech_synchronized_defences;
const element1 = React.createElement(ResearchCell, { research: research1 });
ReactDOM.render(element1, document.getElementById("panel1"));

const research2 = Research.tech_combat_training;
const element2 = React.createElement(ResearchCell, { research: research2 });
ReactDOM.render(element2, document.getElementById("panel2"));

const research3 = Research.tech_starbase_5;
const element3 = React.createElement(ResearchCell, { research: research3 });
ReactDOM.render(element3, document.getElementById("panel3"));
