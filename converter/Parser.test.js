/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const Parser = require("./Parser.js");

const { grammar, semantics } = Parser;
const isVerbose = false;

const parse = input => {
  const matchResult = grammar.match(input);
  if (matchResult.failed()) {
    return console.log(`input failed to match ${input} ${matchResult.message}`);
  }

  return semantics(matchResult).eval();
};

const testExpected = (input, expected) => {
  const result = parse(input);
  assert(result !== undefined);

  if (isVerbose) {
    console.log(`result =   :${result}:`);
    console.log(`expected = :${expected}:`);
  }

  assert.equal(result, expected);

  if (isVerbose) {
    console.log("success = ", result, expected);
  }

  return result;
};

const testLength = (input, expectedLength) => {
  const result = parse(input);
  assert(result !== undefined, "result !== undefined");
  assert.equal(typeof result, "string", `typeof result = ${typeof result}`);
  assert.equal(result.length, expectedLength, `result.length = ${result.length}`);

  if (isVerbose) {
    console.log("success = ", result.length, expectedLength);
  }

  return result;
};

const TEST1 = "base_buildtime = 360";
testExpected(
  TEST1,
  `"base_buildtime": 360,
`
);
console.log("Parser Test 1: passed");

const TEST2 = `building_hydroponics_farm = { base_buildtime = 360 category = resource }`;
testExpected(
  TEST2,
  `"building_hydroponics_farm": {
  "base_buildtime": 360,"category": "resource"
},
`
);
console.log("Parser Test 2: passed");

const TEST3 = `building_hydroponics_farm = {
	base_buildtime = 360
	category = resource
}`;
testExpected(
  TEST3,
  `"building_hydroponics_farm": {
  "base_buildtime": 360,"category": "resource"
},
`
);
console.log("Parser Test 3: passed");

const TEST4 = `building_hydroponics_farm = {
	base_buildtime = 360

	category = resource

	potential = {
		NOT = { is_planet_class = pc_machine }
		NOT = { has_modifier = resort_colony }
	}

	triggered_planet_modifier = {
		potential = {
			exists = owner
			owner = { is_regular_empire = yes }
		}
		modifier = {
			job_farmer_add = 2
		}
	}

	triggered_planet_modifier = {
		potential = {
			exists = owner
			owner = { is_gestalt = yes }
		}
		modifier = {
			job_agri_drone_add = 2
		}
	}

	resources = {
		category = planet_buildings
		cost = {
			minerals = 300
		}
		upkeep = {
			energy = 2
		}
	}

	triggered_desc = {
		trigger = {
			exists = owner
			owner = { is_gestalt = yes }
		}
		text = job_agri_drone_effect_desc
	}
	triggered_desc = {
		trigger = {
			exists = owner
			owner = { is_gestalt = no }
		}
		text = job_farmer_effect_desc
	}
}
`;
testLength(TEST4, 856);
console.log("Parser Test 4: passed");

const TEST5 = `building_hydroponics_farm = {
	prerequisites = {
		tech_hydroponics
	}
}
`;
testExpected(
  TEST5,
  `"building_hydroponics_farm": {
  "prerequisites": [
  "tech_hydroponics",
]
},
`
);
console.log("Parser Test 5: passed");

const TEST6 = `planet_modifier = {
  planet_jobs_slave_produces_mult = 0.05
  pop_cat_slave_political_power = -0.25
}`;
testExpected(
  TEST6,
  `"planet_modifier": {
  "planet_jobs_slave_produces_mult": 0.05,"pop_cat_slave_political_power": -0.25
},
`
);
console.log("Parser Test 6: passed");

const TEST7 = `convert_to = {
  building_hive_capital
  building_deployment_post
  building_resort_capital
  building_slave_capital
}`;
testExpected(
  TEST7,
  `"convert_to": [
  "building_hive_capital","building_deployment_post","building_resort_capital","building_slave_capital",
],
`
);
console.log("Parser Test 7: passed");
