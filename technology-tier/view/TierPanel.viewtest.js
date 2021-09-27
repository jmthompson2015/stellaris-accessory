/* eslint no-console: ["error", { allow: ["log"] }] */

import TU from "../model/TechnologyUtilities.js";

import TierPanel from "./TierPanel.js";

const myOnChange = (tier) => {
  console.log(`myOnChange() tier = ${tier}`);
};

const techAreaKey1 = "physics";
const tier1 = 1;
const goalKeys1 = ["tech_reactor_boosters_2", "tech_auxiliary_fire_control"];
const techKeys1 = TU.techKeysByAreaTier(techAreaKey1, tier1);
const element1 = React.createElement(TierPanel, {
  goalKeys: goalKeys1,
  initialValue: tier1,
  onChange: myOnChange,
  techAreaKey: techAreaKey1,
  techKeys: techKeys1,
});
ReactDOM.render(element1, document.getElementById(`${techAreaKey1}Panel`));

const techAreaKey2 = "society";
const tier2 = 2;
const goalKeys2 = [
  "tech_adaptive_combat_algorithms",
  "tech_arcane_deciphering",
];
const techKeys2 = TU.techKeysByAreaTier(techAreaKey2, tier2);
const element2 = React.createElement(TierPanel, {
  goalKeys: goalKeys2,
  initialValue: tier2,
  onChange: myOnChange,
  techAreaKey: techAreaKey2,
  techKeys: techKeys2,
});
ReactDOM.render(element2, document.getElementById(`${techAreaKey2}Panel`));

const techAreaKey3 = "engineering";
const tier3 = 3;
const goalKeys3 = ["tech_destroyer_hull_2", "tech_mass_drivers_4"];
const techKeys3 = TU.techKeysByAreaTier(techAreaKey3, tier3);
const element3 = React.createElement(TierPanel, {
  goalKeys: goalKeys3,
  initialValue: tier3,
  onChange: myOnChange,
  techAreaKey: techAreaKey3,
  techKeys: techKeys3,
});
ReactDOM.render(element3, document.getElementById(`${techAreaKey3}Panel`));
