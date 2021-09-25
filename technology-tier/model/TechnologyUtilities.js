import Technology from "../../artifact/Technology.js";

import TechnologyComparator from "./TechnologyComparator.js";

const TechnologyUtilities = {};

TechnologyUtilities.parentsForTechnologies = (technologies) => {
  let parentKeys;

  if (Array.isArray(technologies)) {
    const reduceFunction = (accum, technology) => {
      const prerequisites =
        technology && technology.prerequisites ? technology.prerequisites : [];
      return R.concat(accum, prerequisites);
    };
    const parentKeys0 = R.reduce(reduceFunction, [], technologies);
    parentKeys = R.uniq(parentKeys0);
  } else {
    const technology = TechnologyUtilities.technology(technologies.key);
    parentKeys =
      technology && technology.prerequisites ? technology.prerequisites : [];
  }

  const answer = TechnologyUtilities.technologies(parentKeys);

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.prerequisites = (technology) => {
  let answer = [];
  let parents = [technology];

  while (parents.length > 0) {
    parents = TechnologyUtilities.parentsForTechnologies(parents);
    const answer0 = R.concat(answer, parents);
    answer = R.uniqBy((t) => t.key, answer0);
  }

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.prerequisitesForTechnologies = (technologies) => {
  const reduceFunction = (accum, technology) => {
    const prerequisites = TechnologyUtilities.prerequisites(technology);
    return R.concat(accum, prerequisites);
  };
  const answer0 = R.reduce(reduceFunction, [], technologies);
  const answer = R.uniqBy((t) => t.key, answer0);

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.techByArea = (techAreaKey) => {
  const areaFilter = (item) => item.area === techAreaKey;

  const answer = R.filter(areaFilter, Object.values(Technology));

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.techByAreaTier = (techAreaKey, tier) => {
  const areaTierFilter = (item) =>
    item.area === techAreaKey && item.tier === tier;

  const answer = R.filter(areaTierFilter, Object.values(Technology));

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.techKeysByArea = (techAreaKey) => {
  const techs = TechnologyUtilities.techByArea(techAreaKey);
  const reduceFunction = (accum, tech) => R.append(tech.key, accum);
  const answer = R.reduce(reduceFunction, [], techs);

  return answer.sort();
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
