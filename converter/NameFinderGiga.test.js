/* eslint max-len: ["error", { "ignoreStrings": true }] */
/* eslint no-console: ["error", { allow: ["log"] }] */

import UnitJS from "unit.js";

import NameFinderGiga from "./NameFinderGiga.js";

const { assert } = UnitJS;

NameFinderGiga.find("giga_tech_crystal_megabore").then((nameDesc1) => {
  assert(nameDesc1 !== undefined, "not undefined");
  assert.equal(
    nameDesc1.name,
    "Core Crystal Harvesting",
    `nameDesc.name = ${nameDesc1.name}`
  );
  assert.equal(
    nameDesc1.description,
    "Rare crystals are formed when extreme pressures meet extreme temperatures within the interior of celestial bodies. It's then up to random chance to bring them up to the surface, where they can be harvested by us. However, this luck factor can be eliminated by boring straight into a world's core, and directly harvesting the precious crystals from there!",
    `nameDesc.description = ${nameDesc1.description}`
  );
  console.log("NameFinderGiga Test 1: passed");

  NameFinderGiga.find("giga_tech_planetary_matter_harvesting").then(
    (nameDesc2) => {
      assert(nameDesc2 !== undefined, "not undefined");
      assert.equal(
        nameDesc2.name,
        "Hyperefficient Telluric Dismantling",
        `nameDesc.name = ${nameDesc2.name}`
      );
      assert.equal(
        nameDesc2.description,
        "In order to assemble our own celestial warships, we will require humongous amounts of raw planetary matters. Using cheap and quickly-built orbital gravitic tractor beams, we can quite literally dismantle an entire planet within mere months. As there is no need to refine the matter, the process is extremely fast and the planet can simply be broken up into asteroids that are then shipped to wherever we may need them.",
        `nameDesc.description = ${nameDesc2.description}`
      );
      console.log("NameFinderGiga Test 2: passed");

      NameFinderGiga.find("tech_sm_megastructure").then((nameDesc3) => {
        assert(nameDesc3 !== undefined, "not undefined");
        assert.equal(
          nameDesc3.name,
          "Sentient Metal Forge",
          `nameDesc.name = ${nameDesc3.name}`
        );
        assert.equal(
          nameDesc3.description,
          "The Sentient Metal Forge siphons from The Everchanging and self-replicates, creating Sentient Metal Sentient Metal and Negative Mass Negative Mass.",
          `nameDesc.description = ${nameDesc3.description}`
        );
        console.log("NameFinderGiga Test 3: passed");

        NameFinderGiga.find("district_giga_frameworld_sentient_metal").then(
          (nameDesc4) => {
            assert(nameDesc4 !== undefined, "not undefined");
            assert.equal(
              nameDesc4.name,
              "Sentient Metal Foundry District",
              `nameDesc.name = ${nameDesc4.name}`
            );
            assert.equal(
              nameDesc4.description,
              "The Sentient Metal Foundry is a specialized and advanced installation, that serves the sole purpose of feeding alloys alloys and energy energy to an accumulation of Sentient Metal Sentient Metal in order to create more Sentient Metal Sentient Metal.",
              `nameDesc.description = ${nameDesc4.description}`
            );
            console.log("NameFinderGiga Test 4: passed");
          }
        ); // Test 4
      }); // Test 3
    }
  ); // Test 2
}); // Test 1
