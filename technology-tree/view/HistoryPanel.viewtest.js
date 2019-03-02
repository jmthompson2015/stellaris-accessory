/* eslint no-console: ["error", { allow: ["log"] }] */

import HistoryPanel from "./HistoryPanel.js";

const myOnBack = () => {
  console.log(`myOnBack()`);
};
const myOnForward = () => {
  console.log(`myOnForward()`);
};

const element = React.createElement(HistoryPanel, {
  onBack: myOnBack,
  onForward: myOnForward
});
ReactDOM.render(element, document.getElementById("panel"));
