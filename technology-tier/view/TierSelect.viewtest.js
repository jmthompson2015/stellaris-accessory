/* eslint no-console: ["error", { allow: ["log"] }] */

import TierSelect from "./TierSelect.js";

const myOnChange = (tier) => {
  console.log(`myOnChange() tier = ${tier}`);
};

const element1 = React.createElement(TierSelect, {
  onChange: myOnChange,
  initialValue: 1,
  techAreaKey: "physics",
});
ReactDOM.render(element1, document.getElementById("physicsPanel"));

const element2 = React.createElement(TierSelect, {
  onChange: myOnChange,
  initialValue: 2,
  techAreaKey: "society",
});
ReactDOM.render(element2, document.getElementById("societyPanel"));

const element3 = React.createElement(TierSelect, {
  onChange: myOnChange,
  initialValue: 3,
  techAreaKey: "engineering",
});
ReactDOM.render(element3, document.getElementById("engineeringPanel"));
