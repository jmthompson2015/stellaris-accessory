import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

const ResearchUtilities = {};

ResearchUtilities.allChildren = research => {
  let children = ResearchUtilities.researchesByParent(research.key);
  const mapFunction = r => r.key;
  let childKeys = R.map(mapFunction, children);
  let keys0 = childKeys;
  const reduceFunction = (accum, key) => R.concat(accum, ResearchUtilities.researchesByParent(key));

  do {
    children = R.reduce(reduceFunction, [], childKeys);
    childKeys = R.map(mapFunction, children);
    keys0 = R.concat(keys0, childKeys);
  } while (childKeys.length > 0);

  const keys = R.uniq(keys0);
  keys.sort();

  return ResearchUtilities.researches(keys);
};

ResearchUtilities.allParents = research => {
  let preKeys = ResearchUtilities.parentsByResearch(research.key);
  let keys0 = preKeys;

  do {
    preKeys = ResearchUtilities.parentsForResearches(ResearchUtilities.researches(preKeys));
    keys0 = R.concat(keys0, preKeys);
  } while (preKeys.length > 0);

  const keys = R.uniq(keys0);
  keys.sort();

  return ResearchUtilities.researches(keys);
};

ResearchUtilities.categoriesByArea = areaKey =>
  R.filter(c => c.areas.includes(areaKey), Object.values(Category));

ResearchUtilities.dangerousByArea = areaKey => {
  const filterFunction = r => r.is_dangerous && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.parentsByResearch = researchKey => {
  const research = ResearchUtilities.research(researchKey);

  return research ? research.prerequisites : [];
};

ResearchUtilities.parentsForResearches = researches => {
  const reduceFunction = (accum, research) => R.concat(accum, research.prerequisites);
  const prerequisites0 = R.reduce(reduceFunction, [], researches);
  const prerequisites = R.uniq(prerequisites0);
  prerequisites.sort();

  return prerequisites;
};

ResearchUtilities.rareResearches = () => {
  const filterFunction = r => r.is_rare;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.raresByArea = areaKey => {
  const filterFunction = r => r.is_rare && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.research = key => Research[key];

ResearchUtilities.researches = keys => R.map(key => Research[key], keys);

ResearchUtilities.researchesByAreaCategory = (areaKey, categoryKey) => {
  const filterFunction = r => r.area === areaKey && r.category === categoryKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.researchesByParent = key =>
  R.filter(research => research.prerequisites.includes(key), Object.values(Research));

ResearchUtilities.starterResearches = () => {
  const filterFunction = r => r.is_start_tech;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.startersByArea = areaKey => {
  const filterFunction = r => r.is_start_tech && r.area === areaKey;
  const researches = R.filter(filterFunction, Object.values(Research));

  return R.sortBy(R.prop("name"), researches);
};

export default ResearchUtilities;
