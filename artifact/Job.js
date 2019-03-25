/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Job = {
  "administrator": {
    "name": "Administrator",
    "category": "ruler",
    "building_icon": "building_capital",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true
    },
    "resources": {
      "category": "planet_administrators",
      "produces": {
        "unity": 3
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 8
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1.6
      }
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "administrator"
  },
  "agri_drone": {
    "name": "Agri-Drone",
    "category": "simple_drone",
    "building_icon": "building_food_processing_facility",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 6
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "agri_drone"
  },
  "alloy_drone": {
    "name": "Foundry Drone",
    "category": "complex_drone",
    "building_icon": "building_foundry_1",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_metallurgists",
      "produces": {
        "alloys": 3
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight"
    },
    "key": "alloy_drone"
  },
  "artisan": {
    "name": "Artisan",
    "category": "specialist",
    "building_icon": "building_factory_1",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_artisans",
      "produces": {
        "consumer_goods": 6
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "artisan"
      }
    },
    "key": "artisan"
  },
  "artisan_drone": {
    "name": "Artisan Drone",
    "category": "complex_drone",
    "building_icon": "building_organic_sanctuary",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_artisans",
      "produces": {
        "consumer_goods": 6
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "artisan_drone"
  },
  "bio_trophy": {
    "name": "Bio-Trophy",
    "category": "bio_trophy",
    "building_icon": "building_organic_sanctuary",
    "clothes_texture_index": 1,
    "possible": {
      "has_citizenship_type": {
        "type": "citizenship_organic_trophy"
      }
    },
    "resources": {
      "category": "planet_bio_trophies",
      "produces": {
        "unity": 2
      }
    },
    "weight": {
      "weight": "@special_job_weight"
    },
    "key": "bio_trophy"
  },
  "brain_drone": {
    "name": "Brain Drone",
    "category": "complex_drone",
    "building_icon": "building_research_lab_1",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "physics_research": 4,
        "engineering_research": 4,
        "society_research": 4
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "brain_drone"
  },
  "calculator": {
    "name": "Calculator",
    "category": "complex_drone",
    "building_icon": "building_research_lab_1",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "physics_research": 4,
        "engineering_research": 4,
        "society_research": 4
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "calculator"
  },
  "chemist": {
    "name": "Chemist",
    "category": "specialist",
    "building_icon": "building_chemical_plant",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_chemists",
      "produces": {
        "volatile_motes": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "chemist"
      }
    },
    "key": "chemist"
  },
  "chemist_drone": {
    "name": "Chem-Drone",
    "category": "complex_drone",
    "building_icon": "building_chemical_plant",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "volatile_motes": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "chemist_drone"
  },
  "clerk": {
    "name": "Clerk",
    "category": "worker",
    "building_icon": "building_residence",
    "clothes_texture_index": 2,
    "possible": {
      "complex_worker_job_check_trigger": true,
      "owner": {
        "is_fallen_empire": false
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 2,
      "trade_value_add": 2
    },
    "triggered_planet_modifier": {
      "potential": {
        "OR": {
          "has_trait": "trait_nuumismatic_administration"
        }
      },
      "modifier": {
        "trade_value_add": 0.5
      }
    },
    "weight": {
      "weight": "@clerk_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "clerk"
  },
  "colonist": {
    "name": "Colonist",
    "category": "specialist",
    "building_icon": "building_colony_shelter",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "food": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@colonist_job_weight",
      "modifier": {
        "factor": 0.65,
        "has_trait": "trait_repugnant"
      }
    },
    "key": "colonist"
  },
  "coordinator": {
    "name": "Coordinator",
    "category": "complex_drone",
    "building_icon": "building_machine_capital",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 3,
        "society_research": 3
      },
      "upkeep": {
        "energy": 3
      }
    },
    "weight": {
      "weight": "@synapse_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "coordinator"
  },
  "corrupt_drone": {
    "name": "Corrupt Drone",
    "category": "corrupt_drone",
    "is_capped_by_modifier": true,
    "clothes_texture_index": 2,
    "possible": {
      "exists": "planet",
      "planet": {
        "has_modifier": "drone_corruption"
      }
    },
    "resources": {
      "category": "planet_jobs",
      "upkeep": {
        "energy": 1
      }
    },
    "weight": {
      "weight": "@criminal_job_weight"
    },
    "key": "corrupt_drone"
  },
  "criminal": {
    "name": "Criminal",
    "category": "criminal",
    "is_capped_by_modifier": true,
    "building_icon": "building_residence",
    "clothes_texture_index": 2,
    "possible": {
      "exists": "owner",
      "NOT": {
        "has_citizenship_type": {
          "country": "owner",
          "type": "citizenship_robot_servitude"
        }
      },
      "owner": {
        "is_gestalt": false
      }
    },
    "planet_modifier": {
      "trade_value_add": -1
    },
    "weight": {
      "weight": "@criminal_job_weight"
    },
    "key": "criminal"
  },
  "crystal_miner": {
    "name": "Crystal Miner",
    "category": "worker",
    "building_icon": "building_crystal_mines",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "worker_job_check_trigger": true,
      "owner": {
        "is_gestalt": false
      }
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "rare_crystals": 2
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "crystal_miner"
  },
  "crystal_mining_drone": {
    "name": "Crystal Mining Drone",
    "category": "simple_drone",
    "building_icon": "building_crystal_mines",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "rare_crystals": 2
      },
      "upkeep": {
        "energy": 1
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "crystal_mining_drone"
  },
  "culture_worker": {
    "name": "Culture Worker",
    "category": "specialist",
    "building_icon": "building_autochthon_monument",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_culture_workers",
      "produces": {
        "unity": 3,
        "society_research": 3
      },
      "upkeep": {
        "consumer_goods": 2
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "culture_worker"
      }
    },
    "key": "culture_worker"
  },
  "deviant_drone": {
    "name": "Deviant Drone",
    "category": "deviant_drone",
    "is_capped_by_modifier": true,
    "clothes_texture_index": 2,
    "possible": {
      "exists": "planet",
      "planet": {
        "has_modifier": "drone_deviancy"
      }
    },
    "resources": {
      "category": "planet_jobs",
      "upkeep": {
        "energy": 1
      }
    },
    "weight": {
      "weight": "@criminal_job_weight"
    },
    "key": "deviant_drone"
  },
  "dimensional_portal_researcher": {
    "name": "Dimensional Portal Drone",
    "category": "specialist",
    "building_icon": "building_research_lab_1",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "trigger": {
          "planet": {
            "has_planet_flag": "dportal_void2"
          }
        },
        "sr_dark_matter": 1
      },
      "upkeep": {
        "trigger": {
          "planet": {
            "has_planet_flag": "dportal_hell"
          }
        },
        "consumer_goods": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "dportal_trade_crisis"
        }
      },
      "modifier": {
        "planet_amenities_add": 2,
        "trade_value_add": 1
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 0.1,
        "can_take_servant_job": true
      }
    },
    "key": "dimensional_portal_researcher"
  },
  "dimensional_portal_researcher_gestalt": {
    "name": "Dimensional Portal Drone",
    "category": "complex_drone",
    "building_icon": "building_research_lab_1",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "trigger": {
          "planet": {
            "has_planet_flag": "dportal_void"
          }
        },
        "sr_dark_matter": 0.2
      },
      "upkeep": {
        "trigger": {
          "owner": {
            "is_gestalt": false
          },
          "planet": {
            "has_planet_flag": "dportal_hell"
          }
        },
        "consumer_goods": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "dportal_trade_crisis"
        }
      },
      "modifier": {
        "planet_amenities_add": 2
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.1,
        "can_take_servant_job": true
      }
    },
    "key": "dimensional_portal_researcher_gestalt"
  },
  "enforcer": {
    "name": "Enforcer",
    "category": "specialist",
    "building_icon": "building_precinct_house",
    "clothes_texture_index": 5,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_enforcers",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_police_state"
          }
        },
        "unity": 1
      },
      "upkeep": {
        "trigger": {
          "planet": {
            "has_modifier": "anticrime_campaign"
          }
        },
        "energy": 2
      }
    },
    "planet_modifier": {
      "planet_crime_add": -25
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "anticrime_campaign"
        }
      },
      "modifier": {
        "planet_crime_add": -10
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "enforcer"
      }
    },
    "key": "enforcer"
  },
  "entertainer": {
    "name": "Entertainer",
    "category": "specialist",
    "building_icon": "building_holo_theatres",
    "clothes_texture_index": 3,
    "possible": {
      "entertainer_job_check_trigger": true
    },
    "resources": {
      "category": "planet_entertainers",
      "produces": {
        "unity": 2
      },
      "upkeep": {
        "consumer_goods": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 10
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -2
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "entertainer"
      }
    },
    "key": "entertainer"
  },
  "event_purge": {
    "name": "Purging",
    "category": "purge",
    "is_capped_by_modifier": false,
    "possible": {
      "has_pop_flag": "event_purge"
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_hive_devouring_swarm"
          }
        },
        "society_research": 2
      }
    },
    "weight": {
      "weight": 999999
    },
    "key": "event_purge"
  },
  "executive": {
    "name": "Executive",
    "category": "ruler",
    "building_icon": "building_capital",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true
    },
    "resources": {
      "category": "planet_executives",
      "produces": {
        "unity": 2
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5,
      "trade_value_add": 4
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_nuumismatic_administration"
      },
      "modifier": {
        "trade_value_add": 1
      }
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        },
        "OR": {
          "NOT": {
            "exists": "event_target:custodian_bot"
          },
          "AND": {
            "exists": "event_target:custodian_bot",
            "NOT": {
              "species": {
                "is_same_value": "event_target:custodian_bot"
              }
            }
          }
        }
      }
    },
    "key": "executive"
  },
  "fabricator": {
    "name": "Fabricator",
    "category": "complex_drone",
    "building_icon": "building_foundry_1",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_metallurgists",
      "produces": {
        "alloys": 3
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "fabricator"
  },
  "farmer": {
    "name": "Farmer",
    "category": "worker",
    "building_icon": "building_food_processing_facility",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "worker_job_check_trigger": true,
      "owner": {
        "is_gestalt": false,
        "is_fallen_empire_spiritualist": false
      }
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 6
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "has_valid_civic": "civic_agrarian_idyll"
        },
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -0.4
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "farmer"
  },
  "fe_acolyte_artisan": {
    "name": "Acolyte of the Workshop",
    "category": "precursor",
    "is_capped_by_modifier": false,
    "building_icon": "building_empyrean_shrine",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "consumer_goods": 3
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 3
    },
    "weight": {
      "weight": 1000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_acolyte_artisan"
  },
  "fe_acolyte_farm": {
    "name": "Acolyte of the Plow",
    "category": "precursor",
    "building_icon": "building_food_processing_facility",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 8
      }
    },
    "weight": {
      "weight": 15000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_acolyte_farm"
  },
  "fe_acolyte_generator": {
    "name": "Acolyte of the Hyperspanner",
    "category": "precursor",
    "building_icon": "building_power_plant",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_technician",
      "produces": {
        "energy": 6
      }
    },
    "weight": {
      "weight": 15000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_acolyte_generator"
  },
  "fe_acolyte_mine": {
    "name": "Acolyte of the Hammer",
    "category": "precursor",
    "building_icon": "building_crystal_mines",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": 15000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_acolyte_mine"
  },
  "fe_archivist": {
    "name": "Archivist",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_master_archive",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true,
        "has_country_flag": "fallen_empire_1"
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "society_research": 5,
        "physics_research": 5,
        "engineering_research": 5
      }
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_archivist"
  },
  "fe_augur": {
    "name": "Augur of the Shroud",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_citadel_of_faith",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 10
      }
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_augur"
  },
  "fe_guardian_bot": {
    "name": "Guardian",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_maintenance_depot",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_machine_empire": true
      },
      "OR": {
        "has_trait": "trait_machine_unit"
      }
    },
    "planet_modifier": {
      "planet_crime_add": -25
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_guardian_bot"
  },
  "fe_hedonist": {
    "name": "Hedonist",
    "category": "precursor",
    "is_capped_by_modifier": false,
    "building_icon": "building_hyper_entertainment_forum",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true,
        "is_fallen_empire_spiritualist": false,
        "is_fallen_machine_empire": false
      },
      "is_same_species": "owner",
      "NOR": {
        "has_trait": "trait_machine_unit"
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 2
      }
    },
    "weight": {
      "weight": 1000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_hedonist"
  },
  "fe_maintenance_bot": {
    "name": "Caretaker",
    "category": "precursor",
    "is_capped_by_modifier": false,
    "building_icon": "building_maintenance_depot",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_machine_empire": true
      },
      "OR": {
        "has_trait": "trait_machine_unit"
      }
    },
    "resources": {
      "category": "planet_jobs"
    },
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "weight": {
      "weight": 1000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_maintenance_bot"
  },
  "fe_overseer": {
    "name": "Overseer",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_palace",
    "clothes_texture_index": 1,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true
      },
      "is_same_species": "owner"
    },
    "planet_modifier": {
      "planet_amenities_add": 10,
      "planet_stability_add": 5
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_overseer"
  },
  "fe_protector": {
    "name": "Protector",
    "category": "precursor",
    "building_icon": "building_fortress",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true
      },
      "is_same_species": "owner"
    },
    "resources": [],
    "planet_modifier": {
      "planet_crime_add": -25
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_protector"
  },
  "fe_sky_cardinal": {
    "name": "Sky Cardinal",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_palace",
    "clothes_texture_index": 1,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire_spiritualist": true
      },
      "is_same_species": "owner"
    },
    "planet_modifier": {
      "planet_amenities_add": 10,
      "planet_stability_add": 5
    },
    "weight": {
      "weight": 30000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_sky_cardinal"
  },
  "fe_xeno_keeper": {
    "name": "Xeno-Keeper",
    "category": "precursor",
    "is_capped_by_modifier": true,
    "building_icon": "building_fe_xeno_zoo",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true
      },
      "is_same_species": "owner"
    },
    "planet_modifier": {
      "planet_amenities_add": 10,
      "planet_crime_add": -20
    },
    "weight": {
      "weight": 20000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_xeno_keeper"
  },
  "fe_xeno_ward": {
    "name": "Xeno-Ward",
    "category": "xeno_ward",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_fallen_empire": true,
        "is_xenophile": true
      },
      "NOT": {
        "is_same_species": "owner"
      },
      "is_robot_pop": false,
      "planet": {
        "has_building": "building_fe_xeno_zoo"
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 2
      }
    },
    "weight": {
      "weight": 10000,
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "fe_xeno_ward"
  },
  "foundry": {
    "name": "Forge World",
    "category": "specialist",
    "building_icon": "building_foundry_1",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_metallurgists",
      "produces": {
        "alloys": 3
      },
      "upkeep": {
        "minerals": 6
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "foundry"
      }
    },
    "key": "foundry"
  },
  "gas_extraction_drone": {
    "name": "Gas Extraction Drone",
    "category": "simple_drone",
    "building_icon": "building_gas_extractors",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "exotic_gases": 2
      },
      "upkeep": {
        "energy": 1
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "gas_extraction_drone"
  },
  "gas_extractor": {
    "name": "Gas Extractor",
    "category": "worker",
    "building_icon": "building_gas_mine",
    "clothes_texture_index": 2,
    "possible": {
      "worker_job_check_trigger": true
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "exotic_gases": 2
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "gas_extractor"
  },
  "gas_refiner": {
    "name": "Gas Refiner",
    "category": "specialist",
    "building_icon": "building_refinery",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_refiners",
      "produces": {
        "exotic_gases": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "gas_refiner"
      }
    },
    "key": "gas_refiner"
  },
  "gas_refiner_drone": {
    "name": "Refinery Drone",
    "category": "complex_drone",
    "building_icon": "building_refinery",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "exotic_gases": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "gas_refiner_drone"
  },
  "head_researcher": {
    "name": "Science Director",
    "category": "ruler",
    "building_icon": "building_institute",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "physics_research": 5,
        "engineering_research": 5,
        "society_research": 5
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 5,
        "has_job": "head_researcher"
      }
    },
    "key": "head_researcher"
  },
  "healthcare": {
    "name": "Medical Worker",
    "category": "specialist",
    "building_icon": "building_clinic",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_doctors",
      "upkeep": {
        "consumer_goods": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5,
      "pop_growth_speed": 0.05
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "healthcare"
      }
    },
    "key": "healthcare"
  },
  "high_priest": {
    "name": "High Priest",
    "category": "ruler",
    "building_icon": "building_citadel_of_faith",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true,
      "NOT": {
        "has_ethic": "ethic_materialist"
      }
    },
    "resources": {
      "category": "planet_priests",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_exalted_priesthood"
          }
        },
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "high_priest"
  },
  "hunter_gatherer": {
    "name": "Hunter-Gatherer",
    "category": "worker",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "has_country_flag": "stone_age"
      }
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 1
    },
    "weight": {
      "weight": "@worker_job_weight"
    },
    "key": "hunter_gatherer"
  },
  "livestock": {
    "name": "Livestock",
    "category": "worker",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "has_citizenship_type": {
        "type": "citizenship_slavery"
      },
      "has_slavery_type": {
        "type": "slavery_livestock"
      }
    },
    "resources": {
      "category": "planet_livestock",
      "produces": {
        "food": 4
      }
    },
    "weight": {
      "weight": "@special_job_weight"
    },
    "key": "livestock"
  },
  "maintenance_drone": {
    "name": "Maintenance Drone",
    "category": "simple_drone",
    "building_icon": "building_maintenance_depot",
    "possible": {
      "drone_job_check_trigger": true
    },
    "planet_modifier": {
      "planet_amenities_no_happiness_add": 4
    },
    "triggered_planet_modifier": {
      "potential": {
        "OR": {
          "has_trait": "trait_repugnant"
        }
      },
      "modifier": {
        "planet_amenities_no_happiness_add": -0.8
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "maintenance_drone"
  },
  "manager": {
    "name": "Manager",
    "category": "specialist",
    "building_icon": "building_autochthon_monument",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_managers",
      "produces": {
        "unity": 3,
        "society_research": 2
      },
      "upkeep": {
        "consumer_goods": 2
      }
    },
    "planet_modifier": {
      "trade_value_add": 2
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_nuumismatic_administration"
      },
      "modifier": {
        "trade_value_add": 0.5
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "manager"
      }
    },
    "key": "manager"
  },
  "merchant": {
    "name": "Merchant",
    "category": "ruler",
    "building_icon": "building_galactic_stock_exchange",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true
    },
    "resources": {
      "category": "planet_merchants",
      "produces": {
        "trigger": {
          "owner": {
            "has_civic": "civic_merchant_guilds"
          }
        },
        "unity": 2
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5,
      "trade_value_add": 8
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        },
        "OR": {
          "NOT": {
            "exists": "event_target:custodian_bot"
          },
          "AND": {
            "exists": "event_target:custodian_bot",
            "NOT": {
              "species": {
                "is_same_value": "event_target:custodian_bot"
              }
            }
          }
        }
      }
    },
    "key": "merchant"
  },
  "miner": {
    "name": "Miner",
    "category": "worker",
    "building_icon": "building_crystal_mines",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "worker_job_check_trigger": true,
      "owner": {
        "is_gestalt": false,
        "is_fallen_empire_spiritualist": false
      }
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "minerals": 4
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "miner"
  },
  "mining_drone": {
    "name": "Mining Drone",
    "category": "simple_drone",
    "building_icon": "building_crystal_mines",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "minerals": 4
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "mining_drone"
  },
  "mote_harvester": {
    "name": "Mote Harvester",
    "category": "worker",
    "building_icon": "building_gas_mine",
    "clothes_texture_index": 2,
    "possible": {
      "worker_job_check_trigger": true
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "volatile_motes": 2
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "mote_harvester"
  },
  "mote_harvesting_drone": {
    "name": "Mote Harvesting Drone",
    "category": "simple_drone",
    "building_icon": "building_mote_harvesters",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "volatile_motes": 2
      },
      "upkeep": {
        "energy": 1
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "mote_harvesting_drone"
  },
  "noble": {
    "name": "Noble",
    "category": "ruler",
    "building_icon": "building_palace",
    "clothes_texture_index": 1,
    "possible": {
      "ruler_job_check_trigger": true
    },
    "resources": {
      "category": "planet_nobles"
    },
    "planet_modifier": {
      "planet_stability_add": 5,
      "planet_amenities_add": 5
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@ruler_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        },
        "OR": {
          "NOT": {
            "exists": "event_target:custodian_bot"
          },
          "AND": {
            "exists": "event_target:custodian_bot",
            "NOT": {
              "species": {
                "is_same_value": "event_target:custodian_bot"
              }
            }
          }
        }
      }
    },
    "key": "noble"
  },
  "odd_factory_worker": {
    "name": "Odd Factory Worker",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_factory",
    "possible": {
      "worker_job_check_trigger": true
    },
    "resources": {
      "category": "planet_metallurgists",
      "produces": {
        "alloys": 4
      }
    },
    "weight": {
      "weight": 999999,
      "modifier": {
        "factor": 0,
        "owner": {
          "has_country_flag": "odd_factory_pause"
        }
      }
    },
    "key": "odd_factory_worker"
  },
  "organic_battery": {
    "name": "Grid Amalgamated",
    "category": "worker",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "has_citizenship_type": {
        "type": "citizenship_slavery"
      },
      "has_slavery_type": {
        "type": "slavery_matrix"
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "energy": 4
      }
    },
    "weight": {
      "weight": "@special_job_weight"
    },
    "key": "organic_battery"
  },
  "patrol_drone": {
    "name": "Hunter-Seeker Drone",
    "category": "complex_drone",
    "building_icon": "building_stronghold",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_crime_no_happiness_add": -20
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "patrol_drone"
  },
  "peasant": {
    "name": "Peasant",
    "category": "worker",
    "is_capped_by_modifier": false,
    "building_icon": "building_primitive_farm",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 2
      }
    },
    "weight": {
      "weight": "@worker_job_weight"
    },
    "key": "peasant"
  },
  "pre_sapient": {
    "name": "Hunted",
    "category": "pre_sapients",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "is_sapient": false
    },
    "resources": {
      "category": "planet_farmers"
    },
    "planet_modifier": [],
    "weight": {
      "weight": 9000
    },
    "key": "pre_sapient"
  },
  "preacher": {
    "name": "Fertility Preacher",
    "category": "worker",
    "building_icon": "building_temple_of_prosperity",
    "clothes_texture_index": 3,
    "possible": {
      "complex_worker_job_check_trigger": true
    },
    "resources": {
      "category": "planet_priests",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 3,
      "trade_value_add": 3
    },
    "triggered_planet_modifier": {
      "potential": {
        "OR": {
          "has_trait": "trait_nuumismatic_administration"
        }
      },
      "modifier": {
        "trade_value_add": 0.6
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "preacher"
  },
  "priest": {
    "name": "Priest",
    "category": "specialist",
    "building_icon": "building_temple",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_priests",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_exalted_priesthood"
          }
        },
        "unity": 1
      },
      "upkeep": {
        "consumer_goods": 2
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "priest"
      }
    },
    "key": "priest"
  },
  "primitive_bureaucrat": {
    "name": "Bureaucrat",
    "category": "ruler",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_capital",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_administrators",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 3
    },
    "weight": {
      "weight": "@ruler_job_weight"
    },
    "key": "primitive_bureaucrat"
  },
  "primitive_farmer": {
    "name": "Farmer",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_farm",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 3
      }
    },
    "weight": {
      "weight": "@worker_job_weight"
    },
    "key": "primitive_farmer"
  },
  "primitive_laborer": {
    "name": "Laborer",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_factory",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_artisans",
      "produces": {
        "consumer_goods": 2
      },
      "upkeep": {
        "minerals": 2
      }
    },
    "weight": {
      "weight": 2
    },
    "key": "primitive_laborer"
  },
  "primitive_miner": {
    "name": "Dangerous and sometimes lethal work in the dark bowels of the planet.",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_mine",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_miners",
      "produces": {
        "minerals": 3
      }
    },
    "weight": {
      "weight": 2
    },
    "key": "primitive_miner"
  },
  "primitive_noble": {
    "name": "Feudal Noble",
    "category": "ruler",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_capital",
    "clothes_texture_index": 1,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "resources": {
      "category": "planet_administrators",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 3
    },
    "weight": {
      "weight": "@ruler_job_weight"
    },
    "key": "primitive_noble"
  },
  "primitive_priest": {
    "name": "Cleric",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_temple",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 2
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_materialist": true
      }
    },
    "key": "primitive_priest"
  },
  "primitive_priest_2": {
    "name": "Priest",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_temple",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 1
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 2
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_materialist": true
      }
    },
    "key": "primitive_priest_2"
  },
  "primitive_researcher": {
    "name": "Scholar",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_labs",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "physics_research": 1,
        "engineering_research": 1,
        "society_research": 1
      }
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_spiritualist": true
      }
    },
    "key": "primitive_researcher"
  },
  "primitive_researcher_2": {
    "name": "Researcher",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_labs",
    "clothes_texture_index": 3,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "physics_research": 1,
        "engineering_research": 1,
        "society_research": 1
      }
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_spiritualist": true
      }
    },
    "key": "primitive_researcher_2"
  },
  "primitive_technician": {
    "name": "These technicians shuffle coal or maintain primitive nuclear generators.",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_power_plant",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "resources": {
      "category": "planet_technician",
      "produces": {
        "energy": 1
      }
    },
    "weight": {
      "weight": 2
    },
    "key": "primitive_technician"
  },
  "primitive_warrior": {
    "name": "Warrior",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_primitive_dwellings",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_pacifist": true
      }
    },
    "key": "primitive_warrior"
  },
  "primitive_warrior_2": {
    "name": "Soldier",
    "category": "specialist",
    "is_capped_by_modifier": true,
    "building_icon": "building_residence",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "weight": {
      "weight": 2,
      "modifier": {
        "factor": 0,
        "is_pacifist": true
      }
    },
    "key": "primitive_warrior_2"
  },
  "purge": {
    "name": "Purge",
    "category": "purge",
    "is_capped_by_modifier": false,
    "clothes_texture_index": 2,
    "possible": {
      "OR": {
        "has_citizenship_type": {
          "type": "citizenship_purge"
        },
        "has_pop_flag": "event_purge",
        "AND": {
          "exists": "planet",
          "planet": {
            "exists": "controller"
          },
          "planet.controller": {
            "OR": {
              "is_country_type": "ai_empire"
            }
          },
          "OR": {
            "NOT": {
              "exists": "event_target:custodian_bot"
            },
            "AND": {
              "exists": "event_target:custodian_bot",
              "NOT": {
                "species": {
                  "is_same_value": "event_target:custodian_bot"
                }
              }
            }
          }
        }
      }
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "trigger": {
          "has_purge_type": {
            "type": "purge_labor_camps"
          }
        },
        "food": 3,
        "minerals": 3
      }
    },
    "weight": {
      "weight": "@special_job_weight",
      "modifier": {
        "factor": 9999,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "purge"
  },
  "ratling_scavenger": {
    "name": "Scavenger",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_junkheap",
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "owner": {
        "is_country_type": "ratlings"
      }
    },
    "resources": {
      "category": "planet_farmers",
      "produces": {
        "food": 1,
        "minerals": 1,
        "consumer_goods": 1
      }
    },
    "weight": {
      "weight": "@worker_job_weight"
    },
    "key": "ratling_scavenger"
  },
  "replicator": {
    "name": "Replicator",
    "category": "complex_drone",
    "building_icon": "building_robot_assembly_plant",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_pop_assemblers",
      "upkeep": {
        "minerals": 3
      }
    },
    "planet_modifier": {
      "planet_pop_assembly_add": 1,
      "planet_amenities_no_happiness_add": 5
    },
    "weight": {
      "weight": "@spawner_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "OR": {
          "has_trait": "trait_robot_uncanny"
        }
      }
    },
    "key": "replicator"
  },
  "researcher": {
    "name": "Scholar",
    "category": "specialist",
    "building_icon": "building_research_lab_1",
    "clothes_texture_index": 3,
    "possible": {
      "complex_specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_researchers",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_technocracy"
          }
        },
        "unity": 1
      },
      "upkeep": {
        "consumer_goods": 2
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "researcher"
      }
    },
    "key": "researcher"
  },
  "roboticist": {
    "name": "Roboticist",
    "category": "specialist",
    "building_icon": "building_robot_assembly_plant",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_pop_assemblers",
      "upkeep": {
        "minerals": 6
      }
    },
    "planet_modifier": {
      "planet_pop_assembly_add": 2
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5
      }
    },
    "key": "roboticist"
  },
  "servant": {
    "name": "Servant",
    "category": "worker",
    "is_capped_by_modifier": false,
    "building_icon": "building_luxury_residence",
    "clothes_texture_index": 2,
    "possible": {
      "can_take_servant_job": true
    },
    "resources": [],
    "triggered_pop_modifier": {
      "potential": {
        "is_organic_species": true
      },
      "pop_housing_usage_add": -0.5
    },
    "planet_modifier": {
      "planet_amenities_add": 4
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -1
      }
    },
    "weight": {
      "weight": "@special_job_weight"
    },
    "key": "servant"
  },
  "slave_overseer": {
    "name": "Overseer",
    "category": "worker",
    "is_capped_by_modifier": true,
    "building_icon": "building_crude_huts",
    "clothes_texture_index": 3,
    "possible": {
      "is_enslaved": true,
      "exists": "planet",
      "planet": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_enforcers",
      "upkeep": {
        "trigger": {
          "planet": {
            "has_modifier": "anticrime_campaign"
          }
        },
        "energy": 2
      }
    },
    "planet_modifier": {
      "planet_crime_add": -25
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "anticrime_campaign"
        }
      },
      "modifier": {
        "planet_crime_add": -10
      }
    },
    "weight": {
      "weight": "@worker_job_weight"
    },
    "key": "slave_overseer"
  },
  "slave_toiler": {
    "name": "Toiler",
    "category": "worker",
    "is_capped_by_modifier": false,
    "building_icon": "building_crude_huts",
    "clothes_texture_index": 3,
    "possible": {
      "is_enslaved": true,
      "exists": "planet",
      "planet": {
        "has_modifier": "slave_colony"
      }
    },
    "planet_modifier": {
      "planet_amenities_add": 2
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_add": -0.5
      }
    },
    "weight": {
      "weight": "@special_job_weight"
    },
    "key": "slave_toiler"
  },
  "soldier": {
    "name": "Soldier",
    "category": "worker",
    "building_icon": "building_stronghold",
    "clothes_texture_index": 4,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "worker_job_check_trigger": true,
      "owner": {
        "is_gestalt": false
      }
    },
    "resources": {
      "category": "planet_soldiers",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_citizen_service"
          }
        },
        "unity": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "martial_law"
        }
      },
      "modifier": {
        "planet_stability_add": 5
      }
    },
    "weight": {
      "weight": "@soldier_job_weight",
      "modifier": {
        "factor": 0.1,
        "can_take_servant_job": true
      }
    },
    "key": "soldier"
  },
  "spawning_drone": {
    "name": "Spawning Drone",
    "category": "complex_drone",
    "building_icon": "building_spawning_pool",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "upkeep": {
        "food": 5
      }
    },
    "planet_modifier": {
      "planet_amenities_no_happiness_add": 5,
      "pop_growth_speed": 0.25
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant"
      },
      "modifier": {
        "planet_amenities_no_happiness_add": -1
      }
    },
    "weight": {
      "weight": "@spawner_drone_job_weight",
      "modifier": {
        "factor": 0.01,
        "planet.controller": {
          "OR": {
            "is_country_type": "ai_empire"
          }
        }
      }
    },
    "key": "spawning_drone"
  },
  "synapse_drone": {
    "name": "Synapse Drone",
    "category": "complex_drone",
    "building_icon": "building_hive_capital",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "unity": 3,
        "society_research": 3
      },
      "upkeep": {
        "food": 2,
        "energy": 2
      }
    },
    "weight": {
      "weight": "@synapse_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "synapse_drone"
  },
  "technician": {
    "name": "Tech-Drone",
    "category": "worker",
    "building_icon": "building_power_plant",
    "clothes_texture_index": 2,
    "possible": {
      "hidden_trigger": {
        "exists": "owner"
      },
      "complex_worker_job_check_trigger": true,
      "owner": {
        "is_gestalt": false,
        "is_fallen_empire_spiritualist": false
      }
    },
    "resources": {
      "category": "planet_technician",
      "produces": {
        "energy": 4
      }
    },
    "weight": {
      "weight": "@worker_job_weight",
      "modifier": {
        "factor": 0.9,
        "has_trait": "trait_weak"
      }
    },
    "key": "technician"
  },
  "technician_drone": {
    "name": "Tech-Drone",
    "category": "simple_drone",
    "building_icon": "building_power_plant",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_technician",
      "produces": {
        "energy": 4
      }
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 1.1,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "technician_drone"
  },
  "telepath": {
    "name": "Telepath",
    "category": "specialist",
    "building_icon": "building_psi_corps",
    "clothes_texture_index": 5,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_telepaths",
      "produces": {
        "trigger": {
          "owner": {
            "has_valid_civic": "civic_police_state"
          }
        },
        "unity": 1
      },
      "upkeep": {
        "trigger": {
          "planet": {
            "has_modifier": "anticrime_campaign"
          }
        },
        "energy": 2
      }
    },
    "planet_modifier": {
      "planet_crime_add": -35
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "has_modifier": "anticrime_campaign"
        }
      },
      "modifier": {
        "planet_crime_add": -10
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "telepath"
      }
    },
    "key": "telepath"
  },
  "translucer": {
    "name": "Translucer",
    "category": "specialist",
    "building_icon": "building_crystal_plant",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "resources": {
      "category": "planet_translucers",
      "produces": {
        "rare_crystals": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 1.5,
        "has_job": "translucer"
      }
    },
    "key": "translucer"
  },
  "translucer_drone": {
    "name": "Lensing Drone",
    "category": "complex_drone",
    "building_icon": "building_crystal_plant",
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "rare_crystals": 2
      },
      "upkeep": {
        "minerals": 10
      }
    },
    "weight": {
      "weight": "@complex_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "translucer_drone"
  },
  "underground_contact_drone": {
    "name": "Subterranean Contact Drone",
    "category": "simple_drone",
    "building_icon": "building_holo_theatres",
    "clothes_texture_index": 3,
    "possible": {
      "drone_job_check_trigger": true
    },
    "resources": {
      "category": "planet_jobs",
      "produces": {
        "trigger": {
          "owner": {
            "is_machine_empire": true
          }
        },
        "energy": 6
      }
    },
    "triggered_pop_modifier": {
      "pop_housing_usage_add": -1
    },
    "planet_modifier": {
      "planet_amenities_add": 3
    },
    "weight": {
      "weight": "@simple_drone_job_weight",
      "modifier": {
        "factor": 2,
        "has_trait": "trait_charismatic"
      }
    },
    "key": "underground_contact_drone"
  },
  "underground_trade_worker": {
    "name": "Subterranean Liaison Officer",
    "category": "specialist",
    "building_icon": "building_holo_theatres",
    "clothes_texture_index": 3,
    "possible": {
      "specialist_job_check_trigger": true
    },
    "triggered_pop_modifier": {
      "pop_housing_usage_add": -1
    },
    "planet_modifier": {
      "planet_amenities_add": 3,
      "trade_value_add": 5
    },
    "triggered_planet_modifier": {
      "potential": {
        "has_trait": "trait_repugnant",
        "has_ethic": "ethic_fanatic_xenophile"
      },
      "modifier": {
        "planet_amenities_add": -1,
        "trade_value_add": -2
      }
    },
    "weight": {
      "weight": "@specialist_job_weight",
      "modifier": {
        "factor": 2,
        "has_trait": "trait_charismatic"
      }
    },
    "key": "underground_trade_worker"
  },
  "warrior_drone": {
    "name": "Warrior Drone",
    "category": "simple_drone",
    "building_icon": "building_stronghold",
    "possible": {
      "drone_job_check_trigger": true
    },
    "triggered_planet_modifier": {
      "potential": {
        "planet": {
          "OR": {
            "has_modifier": "hunter_killer_drones"
          }
        }
      },
      "modifier": {
        "planet_stability_add": 5
      }
    },
    "weight": {
      "weight": "@warrior_drone_job_weight",
      "modifier": {
        "factor": 0.9,
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_machine_assimilator"
        },
        "has_trait": "trait_cybernetic"
      }
    },
    "key": "warrior_drone"
  }
}

Object.freeze(Job);

export default Job;