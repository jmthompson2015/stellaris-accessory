/* eslint no-console: ["error", { allow: ["log"] }] */

import TU from "../model/TechnologyUtilities.js";

import TechList from "./TechList.js";

const techKeys1 = TU.techKeysByAreaTier("physics", 1);
const element1 = React.createElement(TechList, { techKeys: techKeys1 });
ReactDOM.render(element1, document.getElementById("physicsPanel"));

const techKeys2 = TU.techKeysByAreaTier("society", 1);
const element2 = React.createElement(TechList, { techKeys: techKeys2 });
ReactDOM.render(element2, document.getElementById("societyPanel"));

const techKeys3 = TU.techKeysByAreaTier("engineering", 1);
const element3 = React.createElement(TechList, { techKeys: techKeys3 });
ReactDOM.render(element3, document.getElementById("engineeringPanel"));
