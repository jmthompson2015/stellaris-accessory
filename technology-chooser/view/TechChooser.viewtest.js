/* eslint no-console: ["error", { allow: ["log"] }] */

import TechChooser from "./TechChooser.js";

const applyOnClick = (selectedItems) => {
  console.log(
    `applyOnClick() selectedItems = ${JSON.stringify(selectedItems)}`
  );
};
const areaKey = "physics";

const element = React.createElement(TechChooser, {
  applyOnClick,
  areaKey,
});

ReactDOM.render(element, document.getElementById("panel"));
