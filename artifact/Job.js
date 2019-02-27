/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Job = {
  "administrator": {
    "name": "Administrator",
    "category": "ruler",
    "produces": {
      "unity": 3
    },
    "key": "administrator"
  },
  "agri_drone": {
    "name": "Agri-Drone",
    "category": "simple_drone",
    "produces": {
      "food": 6
    },
    "key": "agri_drone"
  },
  "alloy_drone": {
    "name": "Foundry Drone",
    "category": "complex_drone",
    "produces": {
      "alloys": 3
    },
    "key": "alloy_drone"
  },
  "artisan": {
    "name": "Artisan",
    "category": "specialist",
    "produces": {
      "consumer_goods": 6
    },
    "key": "artisan"
  },
  "artisan_drone": {
    "name": "Artisan Drone",
    "category": "complex_drone",
    "produces": {
      "consumer_goods": 6
    },
    "key": "artisan_drone"
  },
  "bio_trophy": {
    "name": "Bio-Trophy",
    "category": "bio_trophy",
    "produces": {
      "unity": 2
    },
    "key": "bio_trophy"
  },
  "brain_drone": {
    "name": "Brain Drone",
    "category": "complex_drone",
    "produces": {
      "physics_research": 4,
      "engineering_research": 4,
      "society_research": 4
    },
    "key": "brain_drone"
  },
  "calculator": {
    "name": "Calculator",
    "category": "complex_drone",
    "produces": {
      "physics_research": 4,
      "engineering_research": 4,
      "society_research": 4
    },
    "key": "calculator"
  },
  "chemist": {
    "name": "Chemist",
    "category": "specialist",
    "produces": {
      "volatile_motes": 2
    },
    "key": "chemist"
  },
  "chemist_drone": {
    "name": "Chem-Drone",
    "category": "complex_drone",
    "produces": {
      "volatile_motes": 2
    },
    "key": "chemist_drone"
  },
  "clerk": {
    "name": "Clerk",
    "category": "worker",
    "key": "clerk"
  },
  "colonist": {
    "name": "Colonist",
    "category": "specialist",
    "produces": {
      "food": 1
    },
    "key": "colonist"
  },
  "coordinator": {
    "name": "Coordinator",
    "category": "complex_drone",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "coordinator"
  },
  "corrupt_drone": {
    "name": "Corrupt Drone",
    "category": "corrupt_drone",
    "key": "corrupt_drone"
  },
  "criminal": {
    "name": "Criminal",
    "category": "criminal",
    "key": "criminal"
  },
  "crystal_miner": {
    "name": "Crystal Miner",
    "category": "worker",
    "produces": {
      "rare_crystals": 2
    },
    "key": "crystal_miner"
  },
  "crystal_mining_drone": {
    "name": "Crystal Mining Drone",
    "category": "simple_drone",
    "produces": {
      "rare_crystals": 2
    },
    "key": "crystal_mining_drone"
  },
  "culture_worker": {
    "name": "Culture Worker",
    "category": "specialist",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "culture_worker"
  },
  "deviant_drone": {
    "name": "Deviant Drone",
    "category": "deviant_drone",
    "key": "deviant_drone"
  },
  "dimensional_portal_researcher": {
    "name": "Dimensional Portal Drone",
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
    "name": "Dimensional Portal Drone",
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
    "name": "Enforcer",
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
    "name": "Entertainer",
    "category": "specialist",
    "produces": {
      "unity": 2
    },
    "key": "entertainer"
  },
  "event_purge": {
    "name": "$job_purge$",
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
    "name": "Executive",
    "category": "ruler",
    "produces": {
      "unity": 2
    },
    "key": "executive"
  },
  "fabricator": {
    "name": "Fabricator",
    "category": "complex_drone",
    "produces": {
      "alloys": 3
    },
    "key": "fabricator"
  },
  "farmer": {
    "name": "Farmer",
    "category": "worker",
    "produces": {
      "food": 6
    },
    "key": "farmer"
  },
  "fe_acolyte_artisan": {
    "name": "Acolyte of the Workshop",
    "category": "precursor",
    "produces": {
      "consumer_goods": 3
    },
    "key": "fe_acolyte_artisan"
  },
  "fe_acolyte_farm": {
    "name": "Acolyte of the Plow",
    "category": "precursor",
    "produces": {
      "food": 8
    },
    "key": "fe_acolyte_farm"
  },
  "fe_acolyte_generator": {
    "name": "Acolyte of the Hyperspanner",
    "category": "precursor",
    "produces": {
      "energy": 6
    },
    "key": "fe_acolyte_generator"
  },
  "fe_acolyte_mine": {
    "name": "Acolyte of the Hammer",
    "category": "precursor",
    "produces": {
      "minerals": 6
    },
    "key": "fe_acolyte_mine"
  },
  "fe_archivist": {
    "name": "Archivist",
    "category": "precursor",
    "produces": {
      "society_research": 5,
      "physics_research": 5,
      "engineering_research": 5
    },
    "key": "fe_archivist"
  },
  "fe_augur": {
    "name": "Augur of the Shroud",
    "category": "precursor",
    "produces": {
      "unity": 10
    },
    "key": "fe_augur"
  },
  "fe_guardian_bot": {
    "name": "Guardian",
    "category": "precursor",
    "key": "fe_guardian_bot"
  },
  "fe_hedonist": {
    "name": "Hedonist",
    "category": "precursor",
    "produces": {
      "unity": 2
    },
    "key": "fe_hedonist"
  },
  "fe_maintenance_bot": {
    "name": "Caretaker",
    "category": "precursor",
    "key": "fe_maintenance_bot"
  },
  "fe_overseer": {
    "name": "Overseer",
    "category": "precursor",
    "key": "fe_overseer"
  },
  "fe_protector": {
    "name": "Protector",
    "category": "precursor",
    "key": "fe_protector"
  },
  "fe_sky_cardinal": {
    "name": "Sky Cardinal",
    "category": "precursor",
    "key": "fe_sky_cardinal"
  },
  "fe_xeno_keeper": {
    "name": "Xeno-Keeper",
    "category": "precursor",
    "key": "fe_xeno_keeper"
  },
  "fe_xeno_ward": {
    "name": "Xeno-Ward",
    "category": "xeno_ward",
    "produces": {
      "unity": 2
    },
    "key": "fe_xeno_ward"
  },
  "foundry": {
    "name": "Forge World",
    "category": "specialist",
    "produces": {
      "alloys": 3
    },
    "key": "foundry"
  },
  "gas_extraction_drone": {
    "name": "Gas Extraction Drone",
    "category": "simple_drone",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_extraction_drone"
  },
  "gas_extractor": {
    "name": "Gas Extractor",
    "category": "worker",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_extractor"
  },
  "gas_refiner": {
    "name": "Gas Refiner",
    "category": "specialist",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_refiner"
  },
  "gas_refiner_drone": {
    "name": "Refinery Drone",
    "category": "complex_drone",
    "produces": {
      "exotic_gases": 2
    },
    "key": "gas_refiner_drone"
  },
  "head_researcher": {
    "name": "Science Director",
    "category": "ruler",
    "produces": {
      "physics_research": 5,
      "engineering_research": 5,
      "society_research": 5
    },
    "key": "head_researcher"
  },
  "healthcare": {
    "name": "Medical Worker",
    "category": "specialist",
    "key": "healthcare"
  },
  "high_priest": {
    "name": "High Priest",
    "category": "ruler",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_exalted_priesthood"
        }
      },
      "unity": 1
    },
    "key": "high_priest"
  },
  "hunter_gatherer": {
    "name": "Hunter-Gatherer",
    "category": "worker",
    "produces": {
      "food": 1
    },
    "key": "hunter_gatherer"
  },
  "livestock": {
    "name": "Livestock",
    "category": "worker",
    "produces": {
      "food": 4
    },
    "key": "livestock"
  },
  "maintenance_drone": {
    "name": "Maintenance Drone",
    "category": "simple_drone",
    "key": "maintenance_drone"
  },
  "manager": {
    "name": "Manager",
    "category": "specialist",
    "produces": {
      "unity": 3,
      "society_research": 2
    },
    "key": "manager"
  },
  "merchant": {
    "name": "Merchant",
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
    "name": "Miner",
    "category": "worker",
    "produces": {
      "minerals": 4
    },
    "key": "miner"
  },
  "mining_drone": {
    "name": "Mining Drone",
    "category": "simple_drone",
    "produces": {
      "minerals": 4
    },
    "key": "mining_drone"
  },
  "mote_harvester": {
    "name": "Mote Harvester",
    "category": "worker",
    "produces": {
      "volatile_motes": 2
    },
    "key": "mote_harvester"
  },
  "mote_harvesting_drone": {
    "name": "Mote Harvesting Drone",
    "category": "simple_drone",
    "produces": {
      "volatile_motes": 2
    },
    "key": "mote_harvesting_drone"
  },
  "noble": {
    "name": "Noble",
    "category": "ruler",
    "key": "noble"
  },
  "odd_factory_worker": {
    "name": "Odd Factory Worker",
    "category": "worker",
    "produces": {
      "alloys": 4
    },
    "key": "odd_factory_worker"
  },
  "organic_battery": {
    "name": "Grid Amalgamated",
    "category": "worker",
    "produces": {
      "energy": 4
    },
    "key": "organic_battery"
  },
  "patrol_drone": {
    "name": "Hunter-Seeker Drone",
    "category": "complex_drone",
    "produces": {
      "unity": 1
    },
    "key": "patrol_drone"
  },
  "peasant": {
    "name": "Peasant",
    "category": "worker",
    "produces": {
      "food": 2
    },
    "key": "peasant"
  },
  "pre_sapient": {
    "name": "Hunted",
    "category": "pre_sapients",
    "key": "pre_sapient"
  },
  "preacher": {
    "name": "Fertility Preacher",
    "category": "worker",
    "produces": {
      "unity": 1
    },
    "key": "preacher"
  },
  "priest": {
    "name": "Priest",
    "category": "specialist",
    "produces": {
      "trigger": {
        "owner": {
          "has_valid_civic": "civic_exalted_priesthood"
        }
      },
      "unity": 1
    },
    "key": "priest"
  },
  "primitive_bureaucrat": {
    "name": "Bureaucrat",
    "category": "ruler",
    "produces": {
      "unity": 1
    },
    "key": "primitive_bureaucrat"
  },
  "primitive_farmer": {
    "name": "Farmer",
    "category": "worker",
    "produces": {
      "food": 3
    },
    "key": "primitive_farmer"
  },
  "primitive_laborer": {
    "name": "Laborer",
    "category": "worker",
    "produces": {
      "consumer_goods": 2
    },
    "key": "primitive_laborer"
  },
  "primitive_miner": {
    "name": "$job_miner$",
    "category": "worker",
    "produces": {
      "minerals": 3
    },
    "key": "primitive_miner"
  },
  "primitive_noble": {
    "name": "Feudal Noble",
    "category": "ruler",
    "produces": {
      "unity": 1
    },
    "key": "primitive_noble"
  },
  "primitive_priest": {
    "name": "Cleric",
    "category": "specialist",
    "produces": {
      "unity": 1
    },
    "key": "primitive_priest"
  },
  "primitive_priest_2": {
    "name": "Priest",
    "category": "specialist",
    "produces": {
      "unity": 1
    },
    "key": "primitive_priest_2"
  },
  "primitive_researcher": {
    "name": "Scholar",
    "category": "specialist",
    "produces": {
      "physics_research": 1,
      "engineering_research": 1,
      "society_research": 1
    },
    "key": "primitive_researcher"
  },
  "primitive_researcher_2": {
    "name": "Researcher",
    "category": "specialist",
    "produces": {
      "physics_research": 1,
      "engineering_research": 1,
      "society_research": 1
    },
    "key": "primitive_researcher_2"
  },
  "primitive_technician": {
    "name": "$job_technician$",
    "category": "worker",
    "produces": {
      "energy": 1
    },
    "key": "primitive_technician"
  },
  "primitive_warrior": {
    "name": "Warrior",
    "category": "specialist",
    "key": "primitive_warrior"
  },
  "primitive_warrior_2": {
    "name": "Soldier",
    "category": "specialist",
    "key": "primitive_warrior_2"
  },
  "purge": {
    "name": "Purge",
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
    "name": "Scavenger",
    "category": "worker",
    "produces": {
      "food": 1,
      "minerals": 1,
      "consumer_goods": 1
    },
    "key": "ratling_scavenger"
  },
  "replicator": {
    "name": "Replicator",
    "category": "complex_drone",
    "key": "replicator"
  },
  "researcher": {
    "name": "Scholar",
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
    "name": "Roboticist",
    "category": "specialist",
    "key": "roboticist"
  },
  "servant": {
    "name": "Servant",
    "category": "worker",
    "key": "servant"
  },
  "slave_overseer": {
    "name": "Overseer",
    "category": "worker",
    "key": "slave_overseer"
  },
  "slave_toiler": {
    "name": "Toiler",
    "category": "worker",
    "key": "slave_toiler"
  },
  "soldier": {
    "name": "Soldier",
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
    "name": "Spawning Drone",
    "category": "complex_drone",
    "key": "spawning_drone"
  },
  "synapse_drone": {
    "name": "Synapse Drone",
    "category": "complex_drone",
    "produces": {
      "unity": 3,
      "society_research": 3
    },
    "key": "synapse_drone"
  },
  "technician": {
    "name": "Tech-Drone",
    "category": "worker",
    "produces": {
      "energy": 4
    },
    "key": "technician"
  },
  "technician_drone": {
    "name": "Tech-Drone",
    "category": "simple_drone",
    "produces": {
      "energy": 4
    },
    "key": "technician_drone"
  },
  "telepath": {
    "name": "Telepath",
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
    "name": "Translucer",
    "category": "specialist",
    "produces": {
      "rare_crystals": 2
    },
    "key": "translucer"
  },
  "translucer_drone": {
    "name": "Lensing Drone",
    "category": "complex_drone",
    "produces": {
      "rare_crystals": 2
    },
    "key": "translucer_drone"
  },
  "underground_contact_drone": {
    "name": "Subterranean Contact Drone",
    "category": "simple_drone",
    "produces": {
      "trigger": {
        "owner": {
          "is_machine_empire": "yes"
        }
      },
      "energy": 6
    },
    "key": "underground_contact_drone"
  },
  "underground_trade_worker": {
    "name": "Subterranean Liaison Officer",
    "category": "specialist",
    "key": "underground_trade_worker"
  },
  "warrior_drone": {
    "name": "Warrior Drone",
    "category": "simple_drone",
    "key": "warrior_drone"
  }
}

Object.freeze(Job);

export default Job;