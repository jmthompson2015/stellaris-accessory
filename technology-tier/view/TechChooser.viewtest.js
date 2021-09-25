/* eslint no-console: ["error", { allow: ["log"] }] */

import TechChooser from "./TechChooser.js";

const myOnClick = (techAreaKey) => (selectedItems) => {
  console.log(
    `myOnClick() techAreaKey = ${techAreaKey} selectedItems = ${JSON.stringify(
      selectedItems
    )}`
  );
};

const element1 = React.createElement(TechChooser, {
  applyOnClick: myOnClick("physics"),
  techAreaKey: "physics",
});
ReactDOM.render(element1, document.getElementById("physicsPanel"));

const element2 = React.createElement(TechChooser, {
  applyOnClick: myOnClick("society"),
  techAreaKey: "society",
});
ReactDOM.render(element2, document.getElementById("societyPanel"));

const element3 = React.createElement(TechChooser, {
  applyOnClick: myOnClick("engineering"),
  techAreaKey: "engineering",
});
ReactDOM.render(element3, document.getElementById("engineeringPanel"));
