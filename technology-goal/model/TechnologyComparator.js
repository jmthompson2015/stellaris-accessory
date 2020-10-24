const TechnologyComparator = {};

TechnologyComparator.area = R.comparator((a, b) => a.area < b.area);

TechnologyComparator.name = R.comparator((a, b) => a.name < b.name);

TechnologyComparator.areaName = (a, b) =>
  TechnologyComparator.area(a, b) || TechnologyComparator.name(a, b);

export default TechnologyComparator;
