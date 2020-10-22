/* eslint no-console: ["error", { allow: ["log"] }] */

import TechChooser from "./TechChooser.js";

const applyOnClick = (itemToChecked) => {
  console.log(
    `applyOnClick() itemToChecked = ${JSON.stringify(itemToChecked)}`
  );
};
const areaKey = "physics";

const element = React.createElement(TechChooser, {
  applyOnClick,
  areaKey,
});

ReactDOM.render(element, document.getElementById("panel"));
