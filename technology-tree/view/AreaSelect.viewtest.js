/* eslint no-console: ["error", { allow: ["log"] }] */

import AreaSelect from "./AreaSelect.js";

const myOnChange = areaKey => {
  console.log(`myOnChange() areaKey = ${areaKey}`);
};

const element = React.createElement(AreaSelect, {
  onChange: myOnChange
});
ReactDOM.render(element, document.getElementById("panel"));
