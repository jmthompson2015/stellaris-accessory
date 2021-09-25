/* eslint no-console: ["error", { allow: ["log"] }] */

import TU from "../model/TechnologyUtilities.js";

import TechList from "./TechList.js";

const goalKeys1 = ["tech_reactor_boosters_2", "tech_auxiliary_fire_control"];
const techKeys1 = TU.techKeysByAreaTier("physics", 1);
const element1 = React.createElement(TechList, {
  goalKeys: goalKeys1,
  techKeys: techKeys1,
});
ReactDOM.render(element1, document.getElementById("physicsPanel"));

const goalKeys2 = [
  "tech_adaptive_combat_algorithms",
  "tech_arcane_deciphering",
];
const techKeys2 = TU.techKeysByAreaTier("society", 2);
const element2 = React.createElement(TechList, {
  goalKeys: goalKeys2,
  techKeys: techKeys2,
});
ReactDOM.render(element2, document.getElementById("societyPanel"));

const goalKeys3 = ["tech_destroyer_hull_2", "tech_mass_drivers_4"];
const techKeys3 = TU.techKeysByAreaTier("engineering", 3);
const element3 = React.createElement(TechList, {
  goalKeys: goalKeys3,
  techKeys: techKeys3,
});
ReactDOM.render(element3, document.getElementById("engineeringPanel"));
