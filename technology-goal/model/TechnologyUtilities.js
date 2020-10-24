import Technology from "../../artifact/Technology.js";

import TechnologyComparator from "./TechnologyComparator.js";

const TechnologyUtilities = {};

const AREA_TO_COLOR = {
  physics: "hsl(195, 100%, 45%)",
  society: "green",
  engineering: "hsl(45, 100%, 40%)",
};

TechnologyUtilities.areaColor = (area) => AREA_TO_COLOR[area];

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

TechnologyUtilities.technology = (key) => Technology[key];

TechnologyUtilities.technologies = (keys) =>
  R.map((key) => Technology[key], keys);

export default TechnologyUtilities;
