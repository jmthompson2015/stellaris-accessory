/* eslint no-console: ["error", { allow: ["log"] }] */

import TechAreaChooser from "./TechAreaChooser.js";

const applyOnClick = (selected) => {
  console.log(`applyOnClick() selected = ${selected}`);
};

const element = React.createElement(TechAreaChooser, {
  applyOnClick,
});

ReactDOM.render(element, document.getElementById("panel"));
