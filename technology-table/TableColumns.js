import Technology from "../artifact/Technology.js";
import TechnologyArea from "../artifact/TechnologyArea.js";
import TechnologyCategory from "../artifact/TechnologyCategory.js";

import Formatter from "./Formatter.js";

const technologyName = (technologyKey) => {
  const technology = Technology[technologyKey];

  return technology ? technology.name : technologyKey;
};

const TableColumns = [
  {
    key: "name",
    label: "Name",
    className: "tl",
  },
  {
    key: "description",
    label: "Description",
    className: "tl",
  },
  {
    key: "area",
    label: "Area",
    className: "tl",
    convertFunction: (row) =>
      TechnologyArea[row.area] ? TechnologyArea[row.area].name : undefined,
  },
  {
    key: "category",
    label: "Category",
    className: "tl",
    convertFunction: (row) =>
      TechnologyCategory[row.category]
        ? TechnologyCategory[row.category].name
        : undefined,
  },
  {
    key: "cost",
    label: "cost",
    type: "number",
    className: "tr",
  },
  {
    key: "feature_flags",
    label: "feature_flags",
    className: "tl",
    convertFunction: (row) => Formatter.formatArray(row.feature_flags),
  },
  {
    key: "is_dangerous",
    label: "is_dangerous",
    type: "boolean",
  },
  {
    key: "is_rare",
    label: "is_rare",
    type: "boolean",
  },
  {
    key: "isGE",
    label: "isGE",
    type: "boolean",
  },
  {
    key: "start_tech",
    label: "start_tech",
    type: "boolean",
  },
  {
    key: "prerequisites",
    label: "Prerequisites",
    className: "tl",
    convertFunction: (row) => {
      if (Array.isArray(row.prerequisites) && row.prerequisites.length > 0) {
        const mapFunction = (prerequisiteKey) =>
          technologyName(prerequisiteKey);
        return Formatter.formatArray(R.map(mapFunction, row.prerequisites));
      }
      return undefined;
    },
  },
  {
    key: "tier",
    label: "tier",
    type: "number",
    className: "tr",
  },
];

export default TableColumns;
