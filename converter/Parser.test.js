/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
/* eslint no-console: ["error", { allow: ["log"] }] */

import R from "ramda";
import UnitJS from "unit.js";

import Lexer from "./Lexer.js";
import Parser from "./Parser.js";

const { assert } = UnitJS;

const isVerbose = false;

const testExpected = (input, expected) => {
  const result = Parser.parse(input);
  assert(result !== undefined);

  if (isVerbose) {
    console.log(`result   = ${JSON.stringify(result, null, 2)}`);
    console.log(`expected = ${JSON.stringify(expected, null, 2)}`);
  }

  assert(R.equals(result, expected));

  return result;
};

const TEST1 = Lexer.lex(
  "tech_solar_panel_network = {\n" +
    "	area = engineering\n" +
    "	tier = 0\n" +
    "	category = { voidcraft }\n" +
    '	prerequisites = { "tech_starbase_2" }\n' +
    "	start_tech = yes\n" +
    "	potential = {\n" +
    "		is_gestalt = yes\n" +
    "	}\n" +
    "}\n" +
    ""
);
testExpected(TEST1, {
  tech_solar_panel_network: {
    area: "engineering",
    tier: 0,
    category: ["voidcraft"],
    prerequisites: ["tech_starbase_2"],
    start_tech: true,
    potential: {
      is_gestalt: true,
    },
  },
});
console.log("Parser Test 1: passed");

const TEST2 = Lexer.lex(
  "tech_space_exploration = {\n" +
    "	cost = 0\n" +
    "	area = engineering	\n" +
    "	start_tech = yes\n" +
    "	category = { voidcraft }\n" +
    '	prerequisites = { "tech_basic_science_lab_1" }\n' +
    "	tier = 0\n" +
    "	prereqfor_desc = {\n" +
    "		ship = {\n" +
    '			title = "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_TITLE"\n' +
    '			desc = "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_DESC"\n' +
    "		}\n" +
    "	}	\n" +
    "}\n" +
    ""
);
testExpected(TEST2, {
  tech_space_exploration: {
    cost: 0,
    area: "engineering",
    start_tech: true,
    category: ["voidcraft"],
    prerequisites: ["tech_basic_science_lab_1"],
    tier: 0,
    prereqfor_desc: {
      ship: {
        title: "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_TITLE",
        desc: "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_DESC",
      },
    },
  },
});
console.log("Parser Test 2: passed");
