import TechnologyCategory from "../../artifact/TechnologyCategory.js";
import Technology from "../../artifact/Technology.js";

import TechnologyComparator from "./TechnologyComparator.js";

const TechnologyUtilities = {};

const technologiesByParent = key =>
  R.filter(
    technology => technology.prerequisites && technology.prerequisites.includes(key),
    Object.values(Technology)
  );

TechnologyUtilities.categoriesByArea = areaKey =>
  R.filter(c => c.area === areaKey, Object.values(TechnologyCategory));

TechnologyUtilities.childrenForTechnologies = technologies => {
  let childKeys;

  if (Array.isArray(technologies)) {
    const reduceFunction = (accum, technology) =>
      R.concat(accum, technologiesByParent(technology.key));
    const children0 = R.reduce(reduceFunction, [], technologies);
    childKeys = R.uniq(R.map(r => r.key, children0));
  } else {
    const children0 = technologiesByParent(technologies.key);
    childKeys = R.map(r => r.key, children0);
  }

  const answer = TechnologyUtilities.technologies(childKeys);

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.dangerousByArea = areaKey => {
  const filterFunction = r => r.isDangerous && r.area === areaKey;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.name, technologies);
};

TechnologyUtilities.parentsForTechnologies = technologies => {
  let parentKeys;

  if (Array.isArray(technologies)) {
    const reduceFunction = (accum, technology) => {
      const prerequisites = technology && technology.prerequisites ? technology.prerequisites : [];
      return R.concat(accum, prerequisites);
    };
    const parentKeys0 = R.reduce(reduceFunction, [], technologies);
    parentKeys = R.uniq(parentKeys0);
  } else {
    const technology = TechnologyUtilities.technology(technologies.key);
    parentKeys = technology && technology.prerequisites ? technology.prerequisites : [];
  }

  const answer = TechnologyUtilities.technologies(parentKeys);

  return R.sort(TechnologyComparator.areaName, answer);
};

TechnologyUtilities.rareTechnologies = () => {
  const filterFunction = r => r.isRare;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.areaName, technologies);
};

TechnologyUtilities.raresByArea = areaKey => {
  const filterFunction = r => r.isRare && r.area === areaKey;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.name, technologies);
};

TechnologyUtilities.technology = key => Technology[key];

TechnologyUtilities.technologies = keys => R.map(key => Technology[key], keys);

TechnologyUtilities.technologiesByAreaCategory = (areaKey, categoryKey) => {
  const filterFunction = r => r.area === areaKey && r.category === categoryKey;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.name, technologies);
};

TechnologyUtilities.starterTechnologies = () => {
  const filterFunction = r => r.isStartTech;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.areaName, technologies);
};

TechnologyUtilities.startersByArea = areaKey => {
  const filterFunction = r => r.isStartTech && r.area === areaKey;
  const technologies = R.filter(filterFunction, Object.values(Technology));

  return R.sort(TechnologyComparator.name, technologies);
};

export default TechnologyUtilities;
