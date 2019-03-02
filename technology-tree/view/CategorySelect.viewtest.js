/* eslint no-console: ["error", { allow: ["log"] }] */

import TU from "../model/TechnologyUtilities.js";

import CategorySelect from "./CategorySelect.js";

const myOnChange = categoryKey => {
  console.log(`myOnChange() categoryKey = ${categoryKey}`);
};

const element1 = React.createElement(CategorySelect, { onChange: myOnChange });
ReactDOM.render(element1, document.getElementById("panel1"));

const categories2 = TU.categoriesByArea("engineering");
const element2 = React.createElement(CategorySelect, {
  onChange: myOnChange,
  categories: categories2,
  myKey: "2"
});
ReactDOM.render(element2, document.getElementById("panel2"));

const categories3 = TU.categoriesByArea("physics");
const element3 = React.createElement(CategorySelect, {
  onChange: myOnChange,
  categories: categories3,
  myKey: "3"
});
ReactDOM.render(element3, document.getElementById("panel3"));

const categories4 = TU.categoriesByArea("society");
const element4 = React.createElement(CategorySelect, {
  onChange: myOnChange,
  categories: categories4,
  myKey: "4"
});
ReactDOM.render(element4, document.getElementById("panel4"));
