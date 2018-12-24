import Research from "../artifact/Research.js";

import ResearchComparator from "./ResearchComparator.js";

QUnit.module("ResearchComparator");

QUnit.test("area()", assert => {
  // Setup.
  const research1 = Research.tech_lasers_1; // physics, Red Lasers
  const research2 = Research.tech_hive_node; // society, Synaptic Structures
  const research3 = Research.tech_space_exploration; // engineering, Space Exploration
  const research4 = Research.tech_lasers_4; // physics, X-Ray Lasers

  // Run / Verify.
  assert.equal(ResearchComparator.area(research1, research1), 0);
  assert.equal(ResearchComparator.area(research1, research2), -1);
  assert.equal(ResearchComparator.area(research1, research3), 1);
  assert.equal(ResearchComparator.area(research1, research4), 0);

  assert.equal(ResearchComparator.area(research2, research1), 1);
  assert.equal(ResearchComparator.area(research2, research2), 0);
  assert.equal(ResearchComparator.area(research2, research3), 1);
  assert.equal(ResearchComparator.area(research2, research4), 1);
});

QUnit.test("areaName()", assert => {
  // Setup.
  const research1 = Research.tech_lasers_1; // physics, Red Lasers
  const research2 = Research.tech_hive_node; // society, Synaptic Structures
  const research3 = Research.tech_space_exploration; // engineering, Space Exploration
  const research4 = Research.tech_lasers_4; // physics, X-Ray Lasers

  // Run / Verify.
  assert.equal(ResearchComparator.areaName(research1, research1), 0);
  assert.equal(ResearchComparator.areaName(research1, research2), -1);
  assert.equal(ResearchComparator.areaName(research1, research3), 1);
  assert.equal(ResearchComparator.areaName(research1, research4), -1);

  assert.equal(ResearchComparator.areaName(research2, research1), 1);
  assert.equal(ResearchComparator.areaName(research2, research2), 0);
  assert.equal(ResearchComparator.areaName(research2, research3), 1);
  assert.equal(ResearchComparator.areaName(research2, research4), 1);
});

QUnit.test("name()", assert => {
  // Setup.
  const research1 = Research.tech_lasers_1; // Red Lasers
  const research2 = Research.tech_lasers_2; // Blue Lasers
  const research3 = Research.tech_lasers_3; // UV Lasers
  const research4 = Research.tech_lasers_4; // X-Ray Lasers

  // Run / Verify.
  assert.equal(ResearchComparator.name(research1, research1), 0);
  assert.equal(ResearchComparator.name(research1, research2), 1);
  assert.equal(ResearchComparator.name(research1, research3), -1);
  assert.equal(ResearchComparator.name(research1, research4), -1);

  assert.equal(ResearchComparator.name(research2, research1), -1);
  assert.equal(ResearchComparator.name(research2, research2), 0);
  assert.equal(ResearchComparator.name(research2, research3), -1);
  assert.equal(ResearchComparator.name(research2, research4), -1);
});

const ResearchComparatorTest = {};
export default ResearchComparatorTest;
