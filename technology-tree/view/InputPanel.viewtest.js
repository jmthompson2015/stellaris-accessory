/* eslint no-console: ["error", { allow: ["log"] }] */

import InputPanel from "./InputPanel.js";

const myOnAreaChange = areaKey => {
  console.log(`myOnAreaChange() areaKey = ${areaKey}`);
};
const myOnCategoryChange = categoryKey => {
  console.log(`myOnCategoryChange() categoryKey = ${categoryKey}`);
};
const myOnTechnologyChange = technologyKey => {
  console.log(`myOnTechnologyChange() technologyKey = ${technologyKey}`);
};

const element = React.createElement(InputPanel, {
  onAreaChange: myOnAreaChange,
  onCategoryChange: myOnCategoryChange,
  onTechnologyChange: myOnTechnologyChange
});
ReactDOM.render(element, document.getElementById("panel"));
