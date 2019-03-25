import Building from "../artifact/Building.js";
import BuildingCategory from "../artifact/BuildingCategory.js";
import Technology from "../artifact/Technology.js";

import Formatter from "./Formatter.js";

const buildingName = buildingKey => {
  const building = Building[buildingKey];

  return building ? building.name : buildingKey;
};

const technologyName = technologyKey => {
  const technology = Technology[technologyKey];

  return technology ? technology.name : technologyKey;
};

const TableColumns = [
  {
    key: "name",
    label: "Name",
    className: "tl"
  },
  {
    key: "description",
    label: "Description",
    className: "tl"
  },
  {
    key: "allow",
    label: "Allow",
    className: "tl",
    convertFunction: row => Formatter.format(row.allow)
  },
  {
    key: "base_buildtime",
    label: "base_buildtime",
    type: "number",
    className: "tr"
  },
  {
    key: "can_build",
    label: "can_build",
    type: "boolean"
  },
  {
    key: "category",
    label: "Category",
    className: "tl",
    convertFunction: row =>
      BuildingCategory[row.category] ? BuildingCategory[row.category].name : undefined
  },
  {
    key: "convert_to",
    label: "convert_to",
    className: "tl",
    convertFunction: row => {
      if (Array.isArray(row.convert_to) && row.convert_to.length > 0) {
        const mapFunction = convertToKey => buildingName(convertToKey);
        return Formatter.formatArray(R.map(mapFunction, row.convert_to));
      }
      return undefined;
    }
  },
  {
    key: "planet_modifier",
    label: "Planet Modifiers",
    className: "tl",
    convertFunction: row => Formatter.format(row.planet_modifier)
  },
  {
    key: "potential",
    label: "Potential",
    className: "tl",
    convertFunction: row => Formatter.format(row.potential)
  },
  {
    key: "prerequisites",
    label: "Prerequisites",
    className: "tl",
    convertFunction: row => {
      if (Array.isArray(row.prerequisites) && row.prerequisites.length > 0) {
        const mapFunction = prerequisiteKey => technologyName(prerequisiteKey);
        return Formatter.formatArray(R.map(mapFunction, row.prerequisites));
      }
      return undefined;
    }
  },
  {
    key: "resources",
    label: "Resources",
    className: "tl",
    convertFunction: row => Formatter.formatObject(row.resources)
  },
  {
    key: "triggered_planet_modifier",
    label: "Triggered Planet Modifier",
    className: "tl",
    convertFunction: row => Formatter.formatObject(row.triggered_planet_modifier)
  },
  {
    key: "upgrades",
    label: "Upgrades",
    className: "tl",
    convertFunction: row => {
      if (Array.isArray(row.upgrades) && row.upgrades.length > 0) {
        const mapFunction = upgradeKey => buildingName(upgradeKey);
        return Formatter.formatArray(R.map(mapFunction, row.upgrades));
      }
      return undefined;
    }
  }
];

export default TableColumns;
