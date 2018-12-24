import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

import ResearchComparator from "./ResearchComparator.js";

const ResearchUtilities = {};

const researchesByParent = key =>
  R.filter(research => research.prerequisites.includes(key), Object.values(Research));

ResearchUtilities.categoriesByArea = areaKey =>
  R.filter(c => c.areas.includes(areaKey), Object.values(Category));

ResearchUtilities.childrenForResearches = researches => {
  let childKeys;

  if (Array.isArray(researches)) {
    const reduceFunction = (accum, research) => R.concat(accum, researchesByParent(research.key));
    const children0 = R.reduce(reduceFunction, [], researches);
    childKeys = R.uniq(R.map(r => r.key, children0));
  } else {
    const children0 = researchesByParent(researches.key);
    childKeys = R.map(r => r.key, children0);
  }

  const answer = ResearchUtilities.researches(childKeys);

  return R.sort(ResearchComparator.areaName, answer);
};

ResearchUtilities.dangerousByArea = areaKey => {
  const filterFunction = r => r.is_dangerous && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.name, researches);
};

ResearchUtilities.parentsForResearches = researches => {
  let parentKeys;

  if (Array.isArray(researches)) {
    const reduceFunction = (accum, research) => R.concat(accum, research.prerequisites);
    const parentKeys0 = R.reduce(reduceFunction, [], researches);
    parentKeys = R.uniq(parentKeys0);
  } else {
    const research = ResearchUtilities.research(researches.key);
    parentKeys = research ? research.prerequisites : [];
  }

  const answer = ResearchUtilities.researches(parentKeys);

  return R.sort(ResearchComparator.areaName, answer);
};

ResearchUtilities.rareResearches = () => {
  const filterFunction = r => r.is_rare;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.areaName, researches);
};

ResearchUtilities.raresByArea = areaKey => {
  const filterFunction = r => r.is_rare && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.name, researches);
};

ResearchUtilities.research = key => Research[key];

ResearchUtilities.researches = keys => R.map(key => Research[key], keys);

ResearchUtilities.researchesByAreaCategory = (areaKey, categoryKey) => {
  const filterFunction = r => r.area === areaKey && r.category === categoryKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.name, researches);
};

ResearchUtilities.starterResearches = () => {
  const filterFunction = r => r.is_start_tech;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.areaName, researches);
};

ResearchUtilities.startersByArea = areaKey => {
  const filterFunction = r => r.is_start_tech && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sort(ResearchComparator.name, researches);
};

export default ResearchUtilities;
