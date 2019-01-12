/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Job = {
  "administrator": {
    "name": "administrator",
    "category": "ruler",
    "produces": {
      "unity": 3
    },
    "key": "administrator"
  },
  "agri_drone": {
    "name": "agri_drone",
    "category": "simple_drone",
    "produces": {
      "food": 6
    },
    "key": "agri_drone"
  },
  "alloy_drone": {
    "name": "alloy_drone",
    "category": "complex_drone",
    "produces": {
      "alloys": 3
    },
    "key": "alloy_drone"
  },
  "artisan": {
    "name": "artisan",
    "category": "specialist",
    "produces": {
      "consumer_goods": 6
    },
    "key": "artisan"
  },
  "artisan_drone": {
    "name": "artisan_drone",
    "category": "complex_drone",
    "produces": {
      "consumer_goods": 6
    },
    "key": "artisan_drone"
  },
  "bio_trophy": {
    "name": "bio_trophy",
    "category": "bio_trophy",
    "produces": {
      "unity": 2
    },
    "key": "bio_trophy"
  },
  "brain_drone": {
    "name": "brain_drone",
    "category": "complex_drone",
    "produces": {
      "physics_research": 4,
      "engineering_research": 4,
      "society_research": 4
    },
    "key": "brain_drone"
  },
  "calculator": {
    "name": "calculator",
    "category": "complex_drone",
    "produces": {
      "physics_research": 4,
      "engineering_research": 4,
      "society_research": 4
    },
    "key": "calculator"
  },
  "chemist": {
    "name": "chemist",
    "category": "specialist",
    "produces": {
      "volatile_motes": 2
    },
    "key": "chemist"
  },
  "chemist_drone": {
    "name": "chemist_drone",
    "category": "complex_drone",
    "produces": {
      "volatile_motes": 2
    },
    "key": "chemist_drone"
  },
  "clerk": {
    "name": "clerk",
    "category": "worker",
    "key": "clerk"
  },
  "colonist": {
    "name": "colonist",
    "category": "specialist",
    "produces": {
      "food": 1
    },
    "key": "colonist"
  },
  "coordinator": {
    "name": "coordinator",
    "category": "complex_drone",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "coordinator"
  },
  "corrupt_drone": {
    "name": "corrupt_drone",
    "category": "corrupt_drone",
    "key": "corrupt_drone"
  },
  "criminal": {
    "name": "criminal",
    "category": "criminal",
    "key": "criminal"
  },
  "crystal_miner": {
    "name": "crystal_miner",
    "category": "worker",
    "produces": {
      "rare_crystals": 2
    },
    "key": "crystal_miner"
  },
  "crystal_mining_drone": {
    "name": "crystal_mining_drone",
    "category": "simple_drone",
    "produces": {
      "rare_crystals": 2
    },
    "key": "crystal_mining_drone"
  },
  "culture_worker": {
    "name": "culture_worker",
    "category": "specialist",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "culture_worker"
  },
  "deviant_drone": {
    "name": "deviant_drone",
    "category": "deviant_drone",
    "key": "deviant_drone"
  },
  "dimensional_portal_researcher": {
    "name": "dimensional_portal_researcher",
    "category": "specialist",
    "produces": {
      "trigger": {
        "planet": {
          "has_planet_flag": "dportal_void2"
        }
      },
      "sr_dark_matter": 1
    },
    "key": "dimensional_portal_researcher"
  },
  "dimensional_portal_researcher_gestalt": {
    "name": "dimensional_portal_researcher_gestalt",
    "category": "complex_drone",
    "produces": {
      "trigger": {
        "planet": {
          "has_planet_flag": "dportal_void"
        }
      },
      "sr_dark_matter": 0.2
    },
    "key": "dimensional_portal_researcher_gestalt"
  },
  "enforcer": {
    "name": "enforcer",
    "category": "specialist",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_police_state"
        }
      },
      "unity": 1
    },
    "key": "enforcer"
  },
  "entertainer": {
    "name": "entertainer",
    "category": "specialist",
    "produces": {
      "unity": 2
    },
    "key": "entertainer"
  },
  "event_purge": {
    "name": "event_purge",
    "category": "purge",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_hive_devouring_swarm"
        }
      },
      "society_research": 2
    },
    "key": "event_purge"
  },
  "executive": {
    "name": "executive",
    "category": "ruler",
    "produces": {
      "unity": 2
    },
    "key": "executive"
  },
  "fabricator": {
    "name": "fabricator",
    "category": "complex_drone",
    "produces": {
      "alloys": 3
    },
    "key": "fabricator"
  },
  "farmer": {
    "name": "farmer",
    "category": "worker",
    "produces": {
      "food": 6
    },
    "key": "farmer"
  },
  "fe_acolyte_artisan": {
    "name": "fe_acolyte_artisan",
    "category": "precursor",
    "produces": {
      "consumer_goods": 3
    },
    "key": "fe_acolyte_artisan"
  },
  "fe_acolyte_farm": {
    "name": "fe_acolyte_farm",
    "category": "precursor",
    "produces": {
      "food": 8
    },
    "key": "fe_acolyte_farm"
  },
  "fe_acolyte_generator": {
    "name": "fe_acolyte_generator",
    "category": "precursor",
    "produces": {
      "energy": 6
    },
    "key": "fe_acolyte_generator"
  },
  "fe_acolyte_mine": {
    "name": "fe_acolyte_mine",
    "category": "precursor",
    "produces": {
      "minerals": 6
    },
    "key": "fe_acolyte_mine"
  },
  "fe_archivist": {
    "name": "fe_archivist",
    "category": "precursor",
    "produces": {
      "society_research": 5,
      "physics_research": 5,
      "engineering_research": 5
    },
    "key": "fe_archivist"
  },
  "fe_augur": {
    "name": "fe_augur",
    "category": "precursor",
    "produces": {
      "unity": 10
    },
    "key": "fe_augur"
  },
  "fe_guardian_bot": {
    "name": "fe_guardian_bot",
    "category": "precursor",
    "key": "fe_guardian_bot"
  },
  "fe_hedonist": {
    "name": "fe_hedonist",
    "category": "precursor",
    "produces": {
      "unity": 2
    },
    "key": "fe_hedonist"
  },
  "fe_maintenance_bot": {
    "name": "fe_maintenance_bot",
    "category": "precursor",
    "key": "fe_maintenance_bot"
  },
  "fe_overseer": {
    "name": "fe_overseer",
    "category": "precursor",
    "key": "fe_overseer"
  },
  "fe_protector": {
    "name": "fe_protector",
    "category": "precursor",
    "key": "fe_protector"
  },
  "fe_sky_cardinal": {
    "name": "fe_sky_cardinal",
    "category": "precursor",
    "key": "fe_sky_cardinal"
  },
  "fe_xeno_keeper": {
    "name": "fe_xeno_keeper",
    "category": "precursor",
    "key": "fe_xeno_keeper"
  },
  "fe_xeno_ward": {
    "name": "fe_xeno_ward",
    "category": "xeno_ward",
    "produces": {
      "unity": 2
    },
    "key": "fe_xeno_ward"
  },
  "foundry": {
    "name": "foundry",
    "category": "specialist",
    "produces": {
      "alloys": 3
    },
    "key": "foundry"
  },
  "gas_extraction_drone": {
    "name": "gas_extraction_drone",
    "category": "simple_drone",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_extraction_drone"
  },
  "gas_extractor": {
    "name": "gas_extractor",
    "category": "worker",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_extractor"
  },
  "gas_refiner": {
    "name": "gas_refiner",
    "category": "specialist",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_refiner"
  },
  "gas_refiner_drone": {
    "name": "gas_refiner_drone",
    "category": "complex_drone",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_refiner_drone"
  },
  "head_researcher": {
    "name": "head_researcher",
    "category": "ruler",
    "produces": {
      "physics_research": 5,
      "engineering_research": 5,
      "society_research": 5
    },
    "key": "head_researcher"
  },
  "healthcare": {
    "name": "healthcare",
    "category": "specialist",
    "key": "healthcare"
  },
  "high_priest": {
    "name": "high_priest",
    "category": "ruler",
    "produces": {
      "unity": 5
    },
    "key": "high_priest"
  },
  "hunter_gatherer": {
    "name": "hunter_gatherer",
    "category": "worker",
    "produces": {
      "food": 1
    },
    "key": "hunter_gatherer"
  },
  "livestock": {
    "name": "livestock",
    "category": "worker",
    "produces": {
      "food": 4
    },
    "key": "livestock"
  },
  "maintenance_drone": {
    "name": "maintenance_drone",
    "category": "simple_drone",
    "key": "maintenance_drone"
  },
  "manager": {
    "name": "manager",
    "category": "specialist",
    "produces": {
      "unity": 3,
      "society_research": 2
    },
    "key": "manager"
  },
  "merchant": {
    "name": "merchant",
    "category": "ruler",
    "produces": {
      "trigger": {
        "owner": {
          "has_civic": "civic_merchant_guilds"
        }
      },
      "unity": 2
    },
    "key": "merchant"
  },
  "miner": {
    "name": "miner",
    "category": "worker",
    "produces": {
      "minerals": 4
    },
    "key": "miner"
  },
  "mining_drone": {
    "name": "mining_drone",
    "category": "simple_drone",
    "produces": {
      "minerals": 4
    },
    "key": "mining_drone"
  },
  "mote_harvester": {
    "name": "mote_harvester",
    "category": "worker",
    "produces": {
      "volatile_motes": 2
    },
    "key": "mote_harvester"
  },
  "mote_harvesting_drone": {
    "name": "mote_harvesting_drone",
    "category": "simple_drone",
    "produces": {
      "volatile_motes": 2
    },
    "key": "mote_harvesting_drone"
  },
  "noble": {
    "name": "noble",
    "category": "ruler",
    "key": "noble"
  },
  "odd_factory_worker": {
    "name": "odd_factory_worker",
    "category": "worker",
    "produces": {
      "alloys": 4
    },
    "key": "odd_factory_worker"
  },
  "organic_battery": {
    "name": "organic_battery",
    "category": "worker",
    "produces": {
      "energy": 4
    },
    "key": "organic_battery"
  },
  "patrol_drone": {
    "name": "patrol_drone",
    "category": "complex_drone",
    "produces": {
      "unity": 1
    },
    "key": "patrol_drone"
  },
  "peasant": {
    "name": "peasant",
    "category": "worker",
    "produces": {
      "food": 2
    },
    "key": "peasant"
  },
  "pre_sapient": {
    "name": "pre_sapient",
    "category": "pre_sapients",
    "key": "pre_sapient"
  },
  "preacher": {
    "name": "preacher",
    "category": "worker",
    "produces": {
      "unity": 1
    },
    "key": "preacher"
  },
  "priest": {
    "name": "priest",
    "category": "specialist",
    "produces": {
      "unity": 3,
      "society_research": 2
    },
    "key": "priest"
  },
  "primitive_bureaucrat": {
    "name": "primitive_bureaucrat",
    "category": "ruler",
    "produces": {
      "unity": 1
    },
    "key": "primitive_bureaucrat"
  },
  "primitive_farmer": {
    "name": "primitive_farmer",
    "category": "worker",
    "produces": {
      "food": 3
    },
    "key": "primitive_farmer"
  },
  "primitive_laborer": {
    "name": "primitive_laborer",
    "category": "worker",
    "produces": {
      "consumer_goods": 2
    },
    "key": "primitive_laborer"
  },
  "primitive_miner": {
    "name": "primitive_miner",
    "category": "worker",
    "produces": {
      "minerals": 3
    },
    "key": "primitive_miner"
  },
  "primitive_noble": {
    "name": "primitive_noble",
    "category": "ruler",
    "produces": {
      "unity": 1
    },
    "key": "primitive_noble"
  },
  "primitive_priest": {
    "name": "primitive_priest",
    "category": "specialist",
    "produces": {
      "unity": 1
    },
    "key": "primitive_priest"
  },
  "primitive_priest_2": {
    "name": "primitive_priest_2",
    "category": "specialist",
    "produces": {
      "unity": 1
    },
    "key": "primitive_priest_2"
  },
  "primitive_researcher": {
    "name": "primitive_researcher",
    "category": "specialist",
    "produces": {
      "physics_research": 1,
      "engineering_research": 1,
      "society_research": 1
    },
    "key": "primitive_researcher"
  },
  "primitive_researcher_2": {
    "name": "primitive_researcher_2",
    "category": "specialist",
    "produces": {
      "physics_research": 1,
      "engineering_research": 1,
      "society_research": 1
    },
    "key": "primitive_researcher_2"
  },
  "primitive_technician": {
    "name": "primitive_technician",
    "category": "worker",
    "produces": {
      "energy": 1
    },
    "key": "primitive_technician"
  },
  "primitive_warrior": {
    "name": "primitive_warrior",
    "category": "specialist",
    "key": "primitive_warrior"
  },
  "primitive_warrior_2": {
    "name": "primitive_warrior_2",
    "category": "specialist",
    "key": "primitive_warrior_2"
  },
  "purge": {
    "name": "purge",
    "category": "purge",
    "produces": {
      "trigger": {
        "has_purge_type": {
          "type": "purge_labor_camps"
        }
      },
      "food": 3,
      "minerals": 3
    },
    "key": "purge"
  },
  "ratling_scavenger": {
    "name": "ratling_scavenger",
    "category": "worker",
    "produces": {
      "food": 1,
      "minerals": 1,
      "consumer_goods": 1
    },
    "key": "ratling_scavenger"
  },
  "replicator": {
    "name": "replicator",
    "category": "complex_drone",
    "key": "replicator"
  },
  "researcher": {
    "name": "researcher",
    "category": "specialist",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_technocracy"
        }
      },
      "unity": 1
    },
    "key": "researcher"
  },
  "roboticist": {
    "name": "roboticist",
    "category": "specialist",
    "key": "roboticist"
  },
  "servant": {
    "name": "servant",
    "category": "worker",
    "key": "servant"
  },
  "slave_overseer": {
    "name": "slave_overseer",
    "category": "worker",
    "key": "slave_overseer"
  },
  "slave_toiler": {
    "name": "slave_toiler",
    "category": "worker",
    "key": "slave_toiler"
  },
  "soldier": {
    "name": "soldier",
    "category": "worker",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_citizen_service"
        }
      },
      "unity": 1
    },
    "key": "soldier"
  },
  "spawning_drone": {
    "name": "spawning_drone",
    "category": "complex_drone",
    "key": "spawning_drone"
  },
  "synapse_drone": {
    "name": "synapse_drone",
    "category": "complex_drone",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "synapse_drone"
  },
  "technician": {
    "name": "technician",
    "category": "worker",
    "produces": {
      "energy": 4
    },
    "key": "technician"
  },
  "technician_drone": {
    "name": "technician_drone",
    "category": "simple_drone",
    "produces": {
      "energy": 4
    },
    "key": "technician_drone"
  },
  "telepath": {
    "name": "telepath",
    "category": "specialist",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_police_state"
        }
      },
      "unity": 1
    },
    "key": "telepath"
  },
  "translucer": {
    "name": "translucer",
    "category": "specialist",
    "produces": {
      "rare_crystals": 2
    },
    "key": "translucer"
  },
  "translucer_drone": {
    "name": "translucer_drone",
    "category": "complex_drone",
    "produces": {
      "rare_crystals": 2
    },
    "key": "translucer_drone"
  },
  "underground_trade_worker": {
    "name": "underground_trade_worker",
    "category": "specialist",
    "key": "underground_trade_worker"
  },
  "warrior_drone": {
    "name": "warrior_drone",
    "category": "simple_drone",
    "key": "warrior_drone"
  }
}

Object.freeze(Job);

export default Job;