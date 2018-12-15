/* eslint no-console: ["error", { allow: ["log"] }] */

import InputPanel from "./InputPanel.js";

const myOnAreaChange = areaKey => {
  console.log(`myOnAreaChange() areaKey = ${areaKey}`);
};
const myOnCategoryChange = categoryKey => {
  console.log(`myOnCategoryChange() categoryKey = ${categoryKey}`);
};
const myOnResearchChange = researchKey => {
  console.log(`myOnResearchChange() researchKey = ${researchKey}`);
};

const element = React.createElement(InputPanel, {
  onAreaChange: myOnAreaChange,
  onCategoryChange: myOnCategoryChange,
  onResearchChange: myOnResearchChange
});
ReactDOM.render(element, document.getElementById("panel"));
