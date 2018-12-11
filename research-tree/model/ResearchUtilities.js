import Category from "../artifact/Category.js";
import Research from "../artifact/Research.js";

const ResearchUtilities = {};

ResearchUtilities.allChildren = research => {
  const children0 = ResearchUtilities.researchesByPrerequisite(research.key);
  const childKeys0 = R.map(c => c.key, children0);
  const children1 = R.reduce(
    (accum, key) => R.concat(accum, ResearchUtilities.researchesByPrerequisite(key)),
    [],
    childKeys0
  );
  const childKeys1 = R.map(c => c.key, children1);
  const children2 = R.reduce(
    (accum, key) => R.concat(accum, ResearchUtilities.researchesByPrerequisite(key)),
    [],
    childKeys1
  );
  const childKeys2 = R.map(c => c.key, children2);
  const children3 = R.reduce(
    (accum, key) => R.concat(accum, ResearchUtilities.researchesByPrerequisite(key)),
    [],
    childKeys2
  );
  const childKeys3 = R.map(c => c.key, children3);
  const children4 = R.reduce(
    (accum, key) => R.concat(accum, ResearchUtilities.researchesByPrerequisite(key)),
    [],
    childKeys3
  );
  const childKeys4 = R.map(c => c.key, children4);
  const children5 = R.reduce(
    (accum, key) => R.concat(accum, ResearchUtilities.researchesByPrerequisite(key)),
    [],
    childKeys4
  );
  const childKeys5 = R.map(c => c.key, children5);

  const keys0 = R.flatten([childKeys0, childKeys1, childKeys2, childKeys3, childKeys4, childKeys5]);
  const keys = R.uniq(keys0);
  keys.sort();

  return ResearchUtilities.researches(keys);
};

ResearchUtilities.allPrerequisites = research => {
  const preKeys0 = ResearchUtilities.prerequisitesByResearch(research.key);
  const preKeys1 = ResearchUtilities.prerequisitesForResearches(
    ResearchUtilities.researches(preKeys0)
  );
  const preKeys2 = ResearchUtilities.prerequisitesForResearches(
    ResearchUtilities.researches(preKeys1)
  );
  const preKeys3 = ResearchUtilities.prerequisitesForResearches(
    ResearchUtilities.researches(preKeys2)
  );
  const preKeys4 = ResearchUtilities.prerequisitesForResearches(
    ResearchUtilities.researches(preKeys3)
  );
  const preKeys5 = ResearchUtilities.prerequisitesForResearches(
    ResearchUtilities.researches(preKeys4)
  );

  const keys0 = R.flatten([preKeys0, preKeys1, preKeys2, preKeys3, preKeys4, preKeys5]);
  const keys = R.uniq(keys0);
  keys.sort();

  return ResearchUtilities.researches(keys);
};

ResearchUtilities.categoriesByArea = areaKey =>
  R.filter(c => c.area === areaKey, Object.values(Category));

ResearchUtilities.prerequisitesByResearch = researchKey => {
  const research = ResearchUtilities.research(researchKey);

  return research ? research.prerequisites : [];
};

ResearchUtilities.prerequisitesForResearches = researches => {
  const prerequisites0 = R.reduce(
    (accum, research) => R.concat(accum, research.prerequisites),
    [],
    researches
  );
  const prerequisites = R.uniq(prerequisites0);
  prerequisites.sort();

  return prerequisites;
};

ResearchUtilities.research = key => Research[key];

ResearchUtilities.researches = keys => R.map(key => Research[key], keys);

ResearchUtilities.researchesByAreaCategory = (areaKey, categoryKey) => {
  const researches = R.filter(
    r => r.area === areaKey && r.category === categoryKey,
    Object.values(Research)
  );

  return R.sortBy(R.prop("name"), researches);
};

ResearchUtilities.researchesByPrerequisite = key =>
  R.filter(research => research.prerequisites.includes(key), Object.values(Research));

export default ResearchUtilities;
