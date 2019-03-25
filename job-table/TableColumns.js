import JobCategory from "../artifact/JobCategory.js";

import Formatter from "./Formatter.js";

const TableColumns = [
  {
    key: "name",
    label: "Name",
    className: "tl"
  },
  {
    key: "category",
    label: "Category",
    className: "tl",
    convertFunction: row => (JobCategory[row.category] ? JobCategory[row.category].name : undefined)
  },
  {
    key: "is_capped_by_modifier",
    label: "is_capped_by_modifier",
    type: "boolean"
  },
  {
    key: "building_icon",
    label: "building_icon",
    className: "tl"
  },
  {
    key: "clothes_texture_index",
    label: "clothes_texture_index",
    type: "number",
    className: "tr"
  },
  {
    key: "possible",
    label: "possible",
    className: "tl",
    convertFunction: row => Formatter.format(row.possible)
  },
  {
    key: "resources",
    label: "resources",
    className: "tl",
    convertFunction: row => Formatter.format(row.resources)
  },
  {
    key: "triggered_pop_modifier",
    label: "triggered_pop_modifier",
    className: "tl",
    convertFunction: row => Formatter.format(row.triggered_pop_modifier)
  },
  {
    key: "planet_modifier",
    label: "planet_modifier",
    className: "tl",
    convertFunction: row => Formatter.format(row.planet_modifier)
  },
  {
    key: "triggered_planet_modifier",
    label: "triggered_planet_modifier",
    className: "tl",
    convertFunction: row => Formatter.format(row.triggered_planet_modifier)
  },
  {
    key: "weight",
    label: "weight",
    className: "tl",
    convertFunction: row => Formatter.format(row.weight)
  }
];

export default TableColumns;
