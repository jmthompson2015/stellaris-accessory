/* eslint no-console: ["error", { allow: ["log"] }] */

import RU from "../model/ResearchUtilities.js";

import ResearchSelect from "./ResearchSelect.js";

const myOnChange = researchKey => {
  console.log(`myOnChange() researchKey = ${researchKey}`);
};

const element1 = React.createElement(ResearchSelect, { onChange: myOnChange });
ReactDOM.render(element1, document.getElementById("panel1"));

const researches2 = RU.researchesByArea("engineering");
const element2 = React.createElement(ResearchSelect, {
  onChange: myOnChange,
  myKey: "2",
  researches: researches2
});
ReactDOM.render(element2, document.getElementById("panel2"));

const researches3 = RU.researchesByArea("physics");
const element3 = React.createElement(ResearchSelect, {
  onChange: myOnChange,
  myKey: "3",
  researches: researches3
});
ReactDOM.render(element3, document.getElementById("panel3"));

const researches4 = RU.researchesByArea("society");
const element4 = React.createElement(ResearchSelect, {
  onChange: myOnChange,
  myKey: "4",
  researches: researches4
});
ReactDOM.render(element4, document.getElementById("panel4"));
