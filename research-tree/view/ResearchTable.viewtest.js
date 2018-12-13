import Research from "../artifact/Research.js";

import ResearchTable from "./ResearchTable.js";

const research = Research.tech_battleships;

const element = React.createElement(ResearchTable, { research });
ReactDOM.render(element, document.getElementById("panel"));
