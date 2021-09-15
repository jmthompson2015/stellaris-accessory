import Technology from "../../artifact/Technology.js";

import TechnologyComparator from "./TechnologyComparator.js";

const TechnologyUtilities = {};

TechnologyUtilities.techByAreaTier = (techAreaKey, tier) => {
  const areaTierFilter = (item) =>
    item.area === techAreaKey && item.tier === tier;

  const answer = R.filter(areaTierFilter, Object.values(Technology));

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.techKeysByAreaTier = (techAreaKey, tier) => {
  const techs = TechnologyUtilities.techByAreaTier(techAreaKey, tier);
  const reduceFunction = (accum, tech) => R.append(tech.key, accum);
  const answer = R.reduce(reduceFunction, [], techs);

  return answer.sort();
};

TechnologyUtilities.tiersByArea = (techAreaKey) => {
  const areaFilter = (item) => item.area === techAreaKey;
  const techs = R.filter(areaFilter, Object.values(Technology));
  const reduceFunction = (accum, tech) => R.append(tech.tier, accum);
  const tiers = R.reduce(reduceFunction, [], techs);

  return R.uniq(tiers).sort();
};

TechnologyUtilities.technology = (key) => Technology[key];

TechnologyUtilities.technologies = (keys) =>
  R.map((key) => Technology[key], keys);

export default TechnologyUtilities;
