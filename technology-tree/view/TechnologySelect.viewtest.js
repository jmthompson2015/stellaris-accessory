/* eslint no-console: ["error", { allow: ["log"] }] */

import TU from "../model/TechnologyUtilities.js";

import TechnologySelect from "./TechnologySelect.js";

const myOnChange = technologyKey => {
  console.log(`myOnChange() technologyKey = ${technologyKey}`);
};

const element1 = React.createElement(TechnologySelect, { onChange: myOnChange });
ReactDOM.render(element1, document.getElementById("panel1"));

const technologies2 = TU.technologiesByAreaCategory("engineering", "Industry");
const element2 = React.createElement(TechnologySelect, {
  onChange: myOnChange,
  myKey: "2",
  technologies: technologies2
});
ReactDOM.render(element2, document.getElementById("panel2"));

const technologies3 = TU.technologiesByAreaCategory("physics", "Computing");
const element3 = React.createElement(TechnologySelect, {
  onChange: myOnChange,
  myKey: "3",
  technologies: technologies3
});
ReactDOM.render(element3, document.getElementById("panel3"));

const technologies4 = TU.technologiesByAreaCategory("society", "Biology");
const element4 = React.createElement(TechnologySelect, {
  onChange: myOnChange,
  myKey: "4",
  technologies: technologies4
});
ReactDOM.render(element4, document.getElementById("panel4"));
