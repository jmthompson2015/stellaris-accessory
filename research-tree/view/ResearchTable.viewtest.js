import Research from "../artifact/Research.js";

import ResearchTable from "./ResearchTable.js";

const research = Research.tech_cryostasis_1;

const element1 = React.createElement(ResearchTable, { research });
ReactDOM.render(element1, document.getElementById("panel1"));

const element2 = React.createElement(ResearchTable, { research, isDescending: false });
ReactDOM.render(element2, document.getElementById("panel2"));
