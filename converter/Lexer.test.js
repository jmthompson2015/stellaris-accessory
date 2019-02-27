/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
/* eslint no-console: ["error", { allow: ["log"] }] */

const R = require("ramda");
const { assert } = require("unit.js");

const Lexer = require("./Lexer.js");

const isVerbose = false;

const testExpected = (input, expected) => {
  const result = Lexer.lex(input);
  assert(result !== undefined);

  if (isVerbose) {
    console.log(`result   = ${JSON.stringify(result, null, 2)}`);
    console.log(`expected = ${JSON.stringify(expected, null, 2)}`);
  }

  assert.equal(result.length, expected.length, `result.length = ${result.length}`);
  assert(R.equals(result, expected));

  return result;
};

const TEST1 =
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
  "";
testExpected(TEST1, [
  "tech_solar_panel_network",
  "=",
  "{",
  "area",
  "=",
  "engineering",
  "tier",
  "=",
  "0",
  "category",
  "=",
  "{",
  "voidcraft",
  "}",
  "prerequisites",
  "=",
  "{",
  "tech_starbase_2",
  "}",
  "start_tech",
  "=",
  "yes",
  "potential",
  "=",
  "{",
  "is_gestalt",
  "=",
  "yes",
  "}",
  "}"
]);
console.log("Lexer Test 1: passed");

const TEST2 =
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
  "";
testExpected(TEST2, [
  "tech_space_exploration",
  "=",
  "{",
  "cost",
  "=",
  "0",
  "area",
  "=",
  "engineering",
  "start_tech",
  "=",
  "yes",
  "category",
  "=",
  "{",
  "voidcraft",
  "}",
  "prerequisites",
  "=",
  "{",
  "tech_basic_science_lab_1",
  "}",
  "tier",
  "=",
  "0",
  "prereqfor_desc",
  "=",
  "{",
  "ship",
  "=",
  "{",
  "title",
  "=",
  "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_TITLE",
  "desc",
  "=",
  "TECH_UNLOCK_SCIENCE_SHIP_CONSTRUCTION_DESC",
  "}",
  "}",
  "}"
]);
console.log("Lexer Test 2: passed");

const TEST3 =
  "#Planetary Power Grid\n" +
  "tech_power_hub_2 = {\n" +
  "	cost = @tier2cost3\n" +
  "	area = physics\n" +
  "	tier = 2\n" +
  "	category = { field_manipulation }	\n" +
  '	prerequisites = { "tech_power_hub_1" "tech_colonial_centralization"}\n' +
  "	weight = @tier2weight3\n" +
  "		\n" +
  "	weight_modifier = {\n" +
  "		modifier = {\n" +
  "			factor = 0\n" +
  "			NOR = {\n" +
  "				has_technology = tech_mine_exotic_gases\n" +
  "				has_technology = tech_exotic_gases\n" +
  "				has_country_flag = has_market_access\n" +
  "			}\n" +
  "		}\n" +
  "		modifier = {\n" +
  "			factor = 2\n" +
  "			has_tradition = tr_prosperity_adopt\n" +
  "		}\n" +
  "		modifier = {\n" +
  "			factor = 1.25\n" +
  "			research_leader = {\n" +
  "				area = physics\n" +
  '				has_trait = "leader_trait_expertise_field_manipulation"\n' +
  "			}			\n" +
  "		}\n" +
  "	}\n" +
  "	\n" +
  "	ai_weight = {\n" +
  "		modifier = {\n" +
  "			factor = 1.25\n" +
  "			research_leader = {\n" +
  "				area = physics\n" +
  '				has_trait = "leader_trait_expertise_field_manipulation"\n' +
  "			}\n" +
  "		}\n" +
  "	}\n" +
  "}\n" +
  "";
testExpected(TEST3, [
  "tech_power_hub_2",
  "=",
  "{",
  "cost",
  "=",
  "@tier2cost3",
  "area",
  "=",
  "physics",
  "tier",
  "=",
  "2",
  "category",
  "=",
  "{",
  "field_manipulation",
  "}",
  "prerequisites",
  "=",
  "{",
  "tech_power_hub_1",
  "tech_colonial_centralization",
  "}",
  "weight",
  "=",
  "@tier2weight3",
  "weight_modifier",
  "=",
  "{",
  "modifier",
  "=",
  "{",
  "factor",
  "=",
  "0",
  "NOR",
  "=",
  "{",
  "has_technology",
  "=",
  "tech_mine_exotic_gases",
  "has_technology",
  "=",
  "tech_exotic_gases",
  "has_country_flag",
  "=",
  "has_market_access",
  "}",
  "}",
  "modifier",
  "=",
  "{",
  "factor",
  "=",
  "2",
  "has_tradition",
  "=",
  "tr_prosperity_adopt",
  "}",
  "modifier",
  "=",
  "{",
  "factor",
  "=",
  "1.25",
  "research_leader",
  "=",
  "{",
  "area",
  "=",
  "physics",
  "has_trait",
  "=",
  "leader_trait_expertise_field_manipulation",
  "}",
  "}",
  "}",
  "ai_weight",
  "=",
  "{",
  "modifier",
  "=",
  "{",
  "factor",
  "=",
  "1.25",
  "research_leader",
  "=",
  "{",
  "area",
  "=",
  "physics",
  "has_trait",
  "=",
  "leader_trait_expertise_field_manipulation",
  "}",
  "}",
  "}",
  "}"
]);
console.log("Lexer Test 3: passed");

const TEST4 =
  "tech_repeatable_improved_tile_energy_output = {\n" +
  "	area = physics\n" +
  "	cost = @repeatableTechBaseCost\n" +
  "	cost_per_level = @repeatableTechLevelCost\n" +
  "	tier = @repeatableTechTier\n" +
  "	category = { field_manipulation }\n" +
  "	levels = -1\n" +
  '	prerequisites = {"tech_power_plant_3"}\n' +
  "	weight = @repeatableTechWeight\n" +
  "	\n" +
  "	weight_modifier = {\n" +
  "		factor = @repatableTechFactor\n" +
  "	}\n" +
  "	\n" +
  "	ai_weight = {\n" +
  "		factor = 1.0\n" +
  "	}\n" +
  "	\n" +
  "	weight_groups = {\n" +
  "		repeatable\n" +
  "	}\n" +
  "	mod_weight_if_group_picked = {\n" +
  "		repeatable = 0.01\n" +
  "	}\n" +
  "	\n" +
  "	modifier = {\n" +
  "		planet_jobs_energy_produces_mult = 0.05\n" +
  "	}\n" +
  "}\n" +
  "";
testExpected(TEST4, [
  "tech_repeatable_improved_tile_energy_output",
  "=",
  "{",
  "area",
  "=",
  "physics",
  "cost",
  "=",
  "@repeatableTechBaseCost",
  "cost_per_level",
  "=",
  "@repeatableTechLevelCost",
  "tier",
  "=",
  "@repeatableTechTier",
  "category",
  "=",
  "{",
  "field_manipulation",
  "}",
  "levels",
  "=",
  "-1",
  "prerequisites",
  "=",
  "{",
  "tech_power_plant_3",
  "}",
  "weight",
  "=",
  "@repeatableTechWeight",
  "weight_modifier",
  "=",
  "{",
  "factor",
  "=",
  "@repatableTechFactor",
  "}",
  "ai_weight",
  "=",
  "{",
  "factor",
  "=",
  "1.0",
  "}",
  "weight_groups",
  "=",
  "{",
  "repeatable",
  "}",
  "mod_weight_if_group_picked",
  "=",
  "{",
  "repeatable",
  "=",
  "0.01",
  "}",
  "modifier",
  "=",
  "{",
  "planet_jobs_energy_produces_mult",
  "=",
  "0.05",
  "}",
  "}"
]);
console.log("Lexer Test 4: passed");
