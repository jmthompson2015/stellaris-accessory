import Technology from "../../artifact/Technology.js";

import TechnologyComparator from "./TechnologyComparator.js";

QUnit.module("TechnologyComparator");

QUnit.test("area()", assert => {
  // Setup.
  const technology1 = Technology.tech_lasers_1; // physics, Red Lasers
  const technology2 = Technology.tech_hive_node; // society, Synaptic Structures
  const technology3 = Technology.tech_space_exploration; // engineering, Space Exploration
  const technology4 = Technology.tech_lasers_4; // physics, X-Ray Lasers

  // Run / Verify.
  assert.equal(TechnologyComparator.area(technology1, technology1), 0);
  assert.equal(TechnologyComparator.area(technology1, technology2), -1);
  assert.equal(TechnologyComparator.area(technology1, technology3), 1);
  assert.equal(TechnologyComparator.area(technology1, technology4), 0);

  assert.equal(TechnologyComparator.area(technology2, technology1), 1);
  assert.equal(TechnologyComparator.area(technology2, technology2), 0);
  assert.equal(TechnologyComparator.area(technology2, technology3), 1);
  assert.equal(TechnologyComparator.area(technology2, technology4), 1);
});

QUnit.test("areaName()", assert => {
  // Setup.
  const technology1 = Technology.tech_lasers_1; // physics, Red Lasers
  const technology2 = Technology.tech_hive_node; // society, Synaptic Structures
  const technology3 = Technology.tech_space_exploration; // engineering, Space Exploration
  const technology4 = Technology.tech_lasers_4; // physics, X-Ray Lasers

  // Run / Verify.
  assert.equal(TechnologyComparator.areaName(technology1, technology1), 0);
  assert.equal(TechnologyComparator.areaName(technology1, technology2), -1);
  assert.equal(TechnologyComparator.areaName(technology1, technology3), 1);
  assert.equal(TechnologyComparator.areaName(technology1, technology4), -1);

  assert.equal(TechnologyComparator.areaName(technology2, technology1), 1);
  assert.equal(TechnologyComparator.areaName(technology2, technology2), 0);
  assert.equal(TechnologyComparator.areaName(technology2, technology3), 1);
  assert.equal(TechnologyComparator.areaName(technology2, technology4), 1);
});

QUnit.test("name()", assert => {
  // Setup.
  const technology1 = Technology.tech_lasers_1; // Red Lasers
  const technology2 = Technology.tech_lasers_2; // Blue Lasers
  const technology3 = Technology.tech_lasers_3; // UV Lasers
  const technology4 = Technology.tech_lasers_4; // X-Ray Lasers

  // Run / Verify.
  assert.equal(TechnologyComparator.name(technology1, technology1), 0);
  assert.equal(TechnologyComparator.name(technology1, technology2), 1);
  assert.equal(TechnologyComparator.name(technology1, technology3), -1);
  assert.equal(TechnologyComparator.name(technology1, technology4), -1);

  assert.equal(TechnologyComparator.name(technology2, technology1), -1);
  assert.equal(TechnologyComparator.name(technology2, technology2), 0);
  assert.equal(TechnologyComparator.name(technology2, technology3), -1);
  assert.equal(TechnologyComparator.name(technology2, technology4), -1);
});

const TechnologyComparatorTest = {};
export default TechnologyComparatorTest;
