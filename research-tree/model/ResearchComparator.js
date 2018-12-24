const ResearchComparator = {};

ResearchComparator.area = R.comparator((a, b) => a.area < b.area);

ResearchComparator.name = R.comparator((a, b) => a.name < b.name);

ResearchComparator.areaName = (a, b) =>
  ResearchComparator.area(a, b) || ResearchComparator.name(a, b);

export default ResearchComparator;
