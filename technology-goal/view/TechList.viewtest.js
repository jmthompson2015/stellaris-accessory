/* eslint no-console: ["error", { allow: ["log"] }] */

import TechList from "./TechList.js";

const techKeys = ["tech_destroyers", "tech_cruisers", "tech_battleships"];

const element = React.createElement(TechList, { techKeys });

ReactDOM.render(element, document.getElementById("panel"));
