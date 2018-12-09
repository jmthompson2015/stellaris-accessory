import Research from "../artifact/Research.js";

import ResearchRow from "./ResearchRow.js";

const research1 = Research.tech_cryostasis_1;
const research2 = Research[research1.prerequisites[0]];
const research3 = Research[research1.prerequisites[1]];
const research4 = Research[research2.prerequisites[0]];
const research5 = Research[research3.prerequisites[0]];

const researches = [research1, research2, research3, research4, research5];

const element = React.createElement(ResearchRow, { researches });
ReactDOM.render(element, document.getElementById("panel"));
