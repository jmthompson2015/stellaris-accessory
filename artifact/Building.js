/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Building = {
  "@buildings_t1": {
    "description": "",
    "key": "@buildings_t1"
  },
  "@buildings_t2": {
    "description": "",
    "key": "@buildings_t2"
  },
  "@buildings_t3": {
    "description": "",
    "key": "@buildings_t3"
  },
  "@buildings_t4": {
    "description": "",
    "key": "@buildings_t4"
  },
  "building_affluence_center": {
    "name": "Affluence Center",
    "description": "Any material desire can be met here, no matter how outlandish.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "affluence_center_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "consumer_goods": 50
      },
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "minerals": 25,
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_affluence_center"
  },
  "building_akx_worm_3": {
    "name": "Omega Alignment",
    "description": "The surface of this object angles space. The interior is not visible to any sensor or imaging technology available. But we all know what's in there.",
    "base_buildtime": 900,
    "potential": {
      "exists": "planet",
      "planet": {
        "is_capital": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_akx_worm_3"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      },
      "produces": {
        "physics_research": 16
      }
    },
    "key": "building_akx_worm_3"
  },
  "building_alpha_hub": {
    "name": "Alpha Hub",
    "description": "The nerve center of all intra-communication that occurs between the quintillions of semi-sapient systems that administers our empire.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "unity",
    "convert_to": [
      "building_autocurating_vault",
      "building_citadel_of_faith",
      "building_corporate_vault"
    ],
    "planet_modifier": {
      "planet_administrators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true
      }
    },
    "prerequisites": [
      "tech_autocurating_vault"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      },
      "produces": {
        "unity": 10
      }
    },
    "key": "building_alpha_hub"
  },
  "building_amusement_megaplex": {
    "name": "Amusement Megaplex",
    "description": "A magical place where dreams can become reality, this megaplex features wholesome, corporate-sanctioned fun for the entire family unit.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_amenities_add": 10
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "energy": 10
      }
    },
    "key": "building_amusement_megaplex"
  },
  "building_ancient_control_center": {
    "name": "Ancient Control Center",
    "description": "The ancient control center of this section of the ringworld is just barely kept functional by the tireless efforts of a legion of machine drones.",
    "base_buildtime": "@b3_time",
    "can_build": false,
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 12,
      "planet_amenities_add": 12,
      "job_fe_maintenance_bot_add": 4,
      "job_fe_guardian_bot_add": 5,
      "planet_max_buildings_add": 11
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_ancient_control_center"
  },
  "building_ancient_cryo_chamber": {
    "name": "Ancient Cryo-Chamber",
    "description": "Rows upon rows of cryo-pods line this massive structure, containing the long-expired remains of billions of alien specimens frozen long ago.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "planet_modifier": [],
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 20
      }
    },
    "upgrades": [],
    "key": "building_ancient_cryo_chamber"
  },
  "building_ancient_palace": {
    "name": "Ancient Palace",
    "description": "A massive palatial complex built in a different age. The decrepit and abandoned wings are not betrayed by its shining exterior.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_control_center"
    ],
    "planet_modifier": {
      "planet_housing_add": 12,
      "planet_amenities_add": 12,
      "planet_max_buildings_add": 11
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": true
        }
      },
      "modifier": {
        "job_fe_sky_cardinal_add": 2,
        "job_fe_protector_add": 2
      }
    },
    "upgrades": [],
    "key": "building_ancient_palace"
  },
  "building_artist_patron": {
    "name": "Ministry of Culture",
    "description": "A fashionable headquarters for the Ministry of Culture, helping to spread knowledge, entertainment and art to the masses.",
    "base_buildtime": "@b2_time",
    "potential": {
      "custom_tooltip": {
        "text": "EMPIRE_UNIQUE_BUILDING",
        "owner": {
          "has_country_flag": "artist_building_patron",
          "NOT": {
            "has_country_flag": "built_one_ministry"
          }
        }
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "planet_jobs_unity_produces_mult": 0.15,
      "job_evaluator_add": 3
    },
    "key": "building_artist_patron"
  },
  "building_autochthon_monument": {
    "name": "Autochthon Monument",
    "description": "A monument to the first pioneers to venture into space.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_corporate_monument",
      "building_simulation_1",
      "building_galactic_memorial_1",
      "building_sensorium_1"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "NOR": {
          "is_gestalt": true,
          "is_megacorp": true,
          "is_memorialist_empire": true
        }
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 1,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b1_minerals"
      }
    },
    "upgrades": [
      "building_heritage_site"
    ],
    "key": "building_autochthon_monument"
  },
  "building_autocurating_vault": {
    "name": "Auto-Curating Vault",
    "description": "A highly-specialized computerized network constantly acquires, analyzes, evaluates and puts on display everyday artifacts it deems of impending historical import, creating a living museum of the present and a window into the zeitgeist.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "unity",
    "convert_to": [
      "building_citadel_of_faith",
      "building_alpha_hub",
      "building_corporate_vault"
    ],
    "planet_modifier": {
      "planet_administrators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_machine_empire": false,
        "is_spiritualist": false,
        "is_megacorp": false
      }
    },
    "prerequisites": [
      "tech_autocurating_vault"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      },
      "produces": {
        "unity": 10
      }
    },
    "key": "building_autocurating_vault"
  },
  "building_betharian_power_plant": {
    "name": "Betharian Power Plant",
    "description": "Betharian Power Plants consume Betharian Stone to produce vast amounts of Energy Credits.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_mine_betharian"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "produces": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_technician_drone_add": 4
      }
    },
    "key": "building_betharian_power_plant"
  },
  "building_bio_reactor": {
    "name": "Bio-Reactor",
    "description": "A facility where organic matter is converted into energy at a highly efficient rate.",
    "base_buildtime": 240,
    "category": "resource",
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "owner": {
            "country_uses_food": false
          }
        }
      }
    },
    "prerequisites": [
      "tech_bio_reactor"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "produces": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "NOT": {
              "has_deficit": "food"
            }
          }
        },
        "energy": 20
      },
      "upkeep": {
        "food": 25
      }
    },
    "key": "building_bio_reactor"
  },
  "building_bio_reprocessing_facilities": {
    "name": "Bio-Reprocessing Plants",
    "description": "Underground facilities where disloyal employees and other forms of unsavory bio-matter are reprocessed into ready-to-eat food products.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": true
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "food": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_bio_reprocessing_facilities"
  },
  "building_bureaucratic_1": {
    "name": "Administrative Offices",
    "description": "A labyrinthine government complex of bureaucratic offices, sub-offices and sub-sub-offices.",
    "base_buildtime": "@b1_time",
    "category": "government",
    "convert_to": [
      "building_temple",
      "building_hive_node",
      "building_uplink_node"
    ],
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": false
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_bureaucratic_2"
    ],
    "key": "building_bureaucratic_1"
  },
  "building_bureaucratic_2": {
    "name": "Administrative Park",
    "description": "An area full of buildings dedicated to the glory of effective and meticulous paperwork.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_holotemple",
      "building_hive_cluster",
      "building_network_junction"
    ],
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": false
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": "@b2_jobs"
      }
    },
    "upgrades": [
      "building_bureaucratic_3"
    ],
    "key": "building_bureaucratic_2"
  },
  "building_bureaucratic_3": {
    "name": "Administrative Complex",
    "description": "A vast stretch of land covered in bureaucratic offices containing countless cubicles.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_sacred_nexus",
      "building_hive_confluence",
      "building_system_conflux"
    ],
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": false
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_galactic_bureaucracy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": "@b3_jobs"
      }
    },
    "key": "building_bureaucratic_3"
  },
  "building_capital": {
    "name": "Planetary Administration",
    "description": "Seat of the local ruling elite.",
    "allow": [
      "num_pops",
      ">=",
      "10"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_resort_capital",
      "building_slave_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "job_enforcer_add": 1,
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "planet_max_buildings_add": "@buildings_t2",
      "planet_max_branch_office_buildings_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "is_fallen_empire": false
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_major_capital"
    ],
    "key": "building_capital"
  },
  "building_chemical_plant": {
    "name": "Chemical Plants",
    "description": "The unpredictable and sometimes unstable Volatile Motes are produced here artificially. No open flames are permitted within a five kilometer radius of the plants.",
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_volatile_motes"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_chemist_drone_add": 1
      }
    },
    "key": "building_chemical_plant"
  },
  "building_citadel_of_faith": {
    "name": "Citadel of Faith",
    "description": "A massive complex offering refuge and seclusion from the material world, for all comers.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "unity",
    "convert_to": [
      "building_autocurating_vault",
      "building_alpha_hub",
      "building_corporate_vault"
    ],
    "planet_modifier": {
      "job_high_priest_add": 1,
      "pop_ethic_spiritualist_attraction_mult": 0.2,
      "planet_administrators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_transcendent_faith"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      },
      "produces": {
        "unity": 10
      }
    },
    "key": "building_citadel_of_faith"
  },
  "building_class_4_singularity": {
    "name": "Class-4 Singularity",
    "description": "Even after all this time, the containment fields remain stable. No one understands how.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": [],
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "class_4_singularity_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "energy": 250
      }
    },
    "upgrades": [],
    "key": "building_class_4_singularity"
  },
  "building_clinic": {
    "name": "Gene Clinics",
    "description": "Gene Clinics can offer advanced medical treatments, which statistically lead to a significantly healthier and longer-living population.",
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "planet_modifier": {
      "job_healthcare_add": 2
    },
    "potential": {
      "owner": {
        "is_regular_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_frontier_health"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "upgrades": [
      "building_hospital"
    ],
    "key": "building_clinic"
  },
  "building_clone_army_clone_vat": {
    "name": "Ancient Clone Vat",
    "description": "Lost technology left behind by the Creators. Can be taken apart and reassembled, but its inner components and workings are much too advanced to replicate.",
    "base_buildtime": 90,
    "category": "pop_assembly",
    "potential": {
      "exists": "owner",
      "owner": {
        "has_origin": "origin_clone_army",
        "NOT": {
          "has_country_flag": "clone_army_fertility_unlocked"
        }
      },
      "if": {
        "limit": {
          "owner": {
            "is_ai": true
          }
        },
        "NOR": {
          "has_building": "building_clone_army_clone_vat",
          "AND": {
            "exists": "assembling_species",
            "assembling_species": {
              "is_robotic_species": true
            }
          }
        }
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "can_assemble_clone_soldier_pop": true,
        "check_variable": {
          "which": "clone_pops_missing_per_vat"
        }
      },
      "modifier": {
        "planet_pop_assembly_organic_add": 5
      }
    },
    "upgrades": [],
    "key": "building_clone_army_clone_vat"
  },
  "building_clone_vats": {
    "name": "Clone Vats",
    "description": "Clone Vats break down simple materials to generate Organic Pop Assembly.",
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "planet_modifier": {
      "planet_pop_assembly_organic_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "has_ascension_perk": "ap_engineered_evolution"
      },
      "NOT": {
        "has_modifier": "resort_colony"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "NAND": {
          "free_district_slots": 0
        }
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "is_lithoid_empire": true
          }
        },
        "energy": 500
      },
      "upkeep": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "is_lithoid_empire": true
          }
        },
        "minerals": 30
      }
    },
    "key": "building_clone_vats"
  },
  "building_colony_shelter": {
    "name": "Reassembled Ship Shelter",
    "description": "The remains of a Colony Ship, reassembled for planetside form and function.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_deployment_post",
      "building_resort_capital",
      "building_slave_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 7,
      "planet_max_buildings_add": "@buildings_t1"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "is_fallen_empire": false
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_mechanical_empire": true
        }
      },
      "job_roboticist_add": 1,
      "job_colonist_add": 1
    },
    "upgrades": [
      "building_capital"
    ],
    "key": "building_colony_shelter"
  },
  "building_commercial_forum": {
    "name": "Commercial Forum",
    "description": "Movers and shakers, local economic leaders, and other important figures can meet with corporate representatives here in a relaxed, soothing environment ideal for the creation of new business deals.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "branch_office_value_mult": 0.25,
      "job_merchant_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_commercial_forum"
  },
  "building_commercial_megaplex": {
    "name": "Commerce Megaplexes",
    "description": "Great commercial spires and towers rising up towards the sky, blotting out the light.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "trade",
    "planet_modifier": {
      "job_clerk_add": 6,
      "job_merchant_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "has_building": "building_commercial_zone"
    },
    "prerequisites": [
      "tech_interstellar_economics"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_mercantile_commercial_enterprise"
        }
      },
      "modifier": {
        "job_merchant_add": 1
      }
    },
    "key": "building_commercial_megaplex"
  },
  "building_commercial_zone": {
    "name": "Commercial Zones",
    "description": "These commercial zones are home to towering office buildings and business complexes.",
    "base_buildtime": "@b1_time",
    "category": "trade",
    "planet_modifier": {
      "job_clerk_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_interplanetary_commerce"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_mercantile_commercial_enterprise"
        }
      },
      "modifier": {
        "job_merchant_add": 1
      }
    },
    "upgrades": [
      "building_commercial_megaplex"
    ],
    "key": "building_commercial_zone"
  },
  "building_communal_housing": {
    "name": "Communal Housing",
    "description": "A block of uniform housing, equal in every way.",
    "allow": {
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "convert_to": [
      "building_drone_storage",
      "building_hive_warren",
      "building_luxury_residence"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 3
    },
    "potential": {
      "OR": {
        "NOT": {
          "is_planet_class": "pc_habitat"
        },
        "has_planet_flag": "advanced_habitat"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "has_valid_civic": "civic_shared_burden"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "upgrades": [
      "building_communal_housing_large"
    ],
    "key": "building_communal_housing"
  },
  "building_communal_housing_large": {
    "name": "Utopian Communal Housing",
    "description": "An incredible feat of engineering that combines efficient, practical residences with carefully maintained idyllic landscapes.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "convert_to": [
      "building_drone_megastorage",
      "building_expanded_warren",
      "building_paradise_dome"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 6
    },
    "potential": {
      "has_building": "building_communal_housing",
      "OR": {
        "NOT": {
          "is_planet_class": "pc_habitat"
        },
        "AND": {
          "has_planet_flag": "advanced_habitat",
          "exists": "owner",
          "owner": {
            "has_ascension_perk": "ap_voidborn"
          }
        }
      }
    },
    "prerequisites": [
      "tech_paradise_dome"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_communal_housing_large"
  },
  "building_corporate_embassy": {
    "name": "Corporate Embassy",
    "description": "Diplomacy is just advertising to governments instead of to the customer. This office analyzes local customs and trends to more efficiently target our efforts.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "requires_building_major_capital",
        "OR": {
          "has_building": "building_imperial_capital"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "prerequisites": [
      "tech_xeno_diplomacy"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_corporate_embassy"
  },
  "building_corporate_forum": {
    "name": "Synergy Forum",
    "description": "A massive FTL communications forum capable of synergizing the corporate culture of millions of planetary corporate subdivisions.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_hypercomms_forum",
      "building_simulation_3",
      "building_galactic_memorial_3",
      "building_sensorium_3"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_megacorp": true
      }
    },
    "prerequisites": [
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 3,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b3_minerals"
      }
    },
    "key": "building_corporate_forum"
  },
  "building_corporate_monument": {
    "name": "Corporate Culture Site",
    "description": "A site dedicated to glorifying the unique corporate culture that permeates every business transaction conducted on the planet.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_autochthon_monument",
      "building_simulation_1",
      "building_galactic_memorial_1",
      "building_sensorium_1"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_megacorp": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 1,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b1_minerals"
      }
    },
    "upgrades": [
      "building_corporate_site"
    ],
    "key": "building_corporate_monument"
  },
  "building_corporate_site": {
    "name": "Business Management Nexus",
    "description": "A facility where crucial decisions concerning the business culture of the planet can by strategized and subconsciously focus-tested by sapient resource specialists.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_heritage_site",
      "building_galactic_memorial_2",
      "building_simulation_2",
      "building_sensorium_2"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_megacorp": true
      }
    },
    "prerequisites": [
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 2,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b2_minerals"
      }
    },
    "upgrades": [
      "building_corporate_forum"
    ],
    "key": "building_corporate_site"
  },
  "building_corporate_vault": {
    "name": "Vault of Acquisitions",
    "description": "An enormous underground vault that serves the dual purpose of business coordination site and public museum to the long and profitable history of the Megacorporation that built it.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "unity",
    "convert_to": [
      "building_citadel_of_faith",
      "building_autocurating_vault",
      "building_alpha_hub"
    ],
    "planet_modifier": {
      "planet_administrators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_megacorp": true,
        "is_spiritualist": false
      }
    },
    "prerequisites": [
      "tech_autocurating_vault"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      },
      "produces": {
        "unity": 10
      }
    },
    "key": "building_corporate_vault"
  },
  "building_crude_huts": {
    "name": "Crude Huts",
    "description": "Primitive shelters constructed out of stone, clay or whatever other materials were available.",
    "can_build": false,
    "planet_modifier": {
      "planet_amenities_add": 5,
      "planet_housing_add": 4,
      "planet_crime_add": -10
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "has_country_flag": "stone_age"
      }
    },
    "upgrades": [],
    "key": "building_crude_huts"
  },
  "building_crystal_mines": {
    "name": "Crystal Mines",
    "description": "Great care must be taken when excavating these mines to avoid damaging the crystals.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_mine_rare_crystals"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_crystal_mining_drone_add": 1
      }
    },
    "key": "building_crystal_mines"
  },
  "building_crystal_plant": {
    "name": "Kha'lanka Crystal Plant",
    "description": "The discovery of new crystal manufacturing techniques, far below the surface in the city of the Kha'lanka lithoids, has effectivized artificial crystal manufacturing through oxidation of rapidly growing silicon-based cell-clusters.",
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_rare_crystals"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_translucer_drone_add": 1
      }
    },
    "upgrades": [
      "building_crystal_plant_2"
    ],
    "key": "building_crystal_plant"
  },
  "building_crystal_plant_2": {
    "name": "Kha'lanka Crystal Plant",
    "description": "The discovery of new crystal manufacturing techniques, far below the surface in the city of the Kha'lanka lithoids, has effectivized artificial crystal manufacturing through oxidation of rapidly growing silicon-based cell-clusters.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 800,
    "can_build": false,
    "category": "manufacturing",
    "potential": {
      "owner": {
        "has_country_flag": "lithoid_crystal_plant"
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_rare_crystals"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_translucer_drone_add": 3
      }
    },
    "key": "building_crystal_plant_2"
  },
  "building_defense_nexus_capacity": {
    "name": "Auxiliary Hangars",
    "description": "Vast hangars housing Strike Corvettes to be deployed whenever the world is threatened by hostile vessels.",
    "allow": {
      "OR": {
        "has_modifier": "planetary_drive_yard_fortress_modifier_gestalt"
      }
    },
    "base_buildtime": 720,
    "can_build": true,
    "category": "army",
    "potential": {
      "OR": {
        "has_modifier": "planetary_drive_yard_fortress_modifier_gestalt"
      }
    },
    "prerequisites": [
      "giga_tech_planetary_drive_yard_defense"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "alloys": 1000,
        "minerals": 2000
      },
      "produces": {
        "engineering_research": 25
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": 2
      }
    },
    "key": "building_defense_nexus_capacity",
    "isGE": true
  },
  "building_defense_nexus_construction": {
    "name": "Planetary Shipyards",
    "description": "These large shipyards supplement the Planetary Defense Nexus's shipbuilding operations, enabling more Strike Corvettes to be built monthly.",
    "allow": {
      "OR": {
        "has_modifier": "planetary_drive_yard_fortress_modifier_gestalt"
      }
    },
    "base_buildtime": 720,
    "can_build": true,
    "category": "army",
    "potential": {
      "OR": {
        "has_modifier": "planetary_drive_yard_fortress_modifier_gestalt"
      }
    },
    "prerequisites": [
      "giga_tech_planetary_drive_yard_defense"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "alloys": 800,
        "minerals": 1000
      },
      "produces": {
        "engineering_research": 10
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": 2
      }
    },
    "key": "building_defense_nexus_construction",
    "isGE": true
  },
  "building_deployment_post": {
    "name": "Deployment Post",
    "description": "The initial deployment post from which we will expand on this world.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_colony_shelter",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 8,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 1,
      "job_maintenance_drone_add": 2,
      "planet_max_buildings_add": "@buildings_t1"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        },
        "is_fallen_empire": false
      }
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_civic": "civic_machine_assimilator"
        }
      },
      "modifier": {
        "job_replicator_add": -1
      }
    },
    "upgrades": [
      "building_machine_capital"
    ],
    "key": "building_deployment_post"
  },
  "building_dimensional_fabricator": {
    "name": "Dimensional Fabricator",
    "description": "This building uses little-understood dimensional technology to tunnel into other realities and siphon off their valuable resources.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": [],
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "dimensional_fabricator_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "is_fallen_empire": true
          }
        },
        "sr_zro": 2,
        "sr_dark_matter": 2,
        "sr_living_metal": 2
      },
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 20
      }
    },
    "upgrades": [],
    "key": "building_dimensional_fabricator"
  },
  "building_disinformation_center": {
    "name": "Disinformation Center",
    "description": "Through targeted advertisements and propaganda, we can control opinion and make the people agree with our version of the truth.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "requires_building_major_capital",
        "OR": {
          "has_building": "building_imperial_capital"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_crime_add": 40,
      "pop_government_ethic_attraction": -0.25,
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "prerequisites": [
      "tech_xeno_diplomacy"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_disinformation_center"
  },
  "building_dread_encampment": {
    "name": "Dread Encampment",
    "description": "It is best to shield the activities of the necromancers from the tender eyes of the public as they raise undead hordes to fight in our armies.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "army",
    "convert_to": [
      "building_military_academy"
    ],
    "planet_modifier": {
      "job_necromancer_add": 2
    },
    "potential": {
      "buildings_simple_allow": true,
      "exists": "owner",
      "owner": {
        "has_valid_civic": "civic_reanimated_armies"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "key": "building_dread_encampment"
  },
  "building_drone_megastorage": {
    "name": "Upgraded Drone Storage",
    "description": "With the latest upgrades, while undergoing maintenance a portion of Drones' power-generation can be re-directed to the grid.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "convert_to": [
      "building_paradise_dome",
      "building_expanded_warren",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "planet_housing_add": 8,
      "planet_amenities_add": 6
    },
    "potential": {
      "has_building": "building_drone_storage"
    },
    "prerequisites": [
      "tech_micro_replicators"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_drone_megastorage"
  },
  "building_drone_storage": {
    "name": "Drone Storage",
    "description": "A storage area for Drones to undergo maintenance.",
    "allow": {
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "convert_to": [
      "building_luxury_residence",
      "building_communal_housing",
      "building_hive_warren"
    ],
    "planet_modifier": {
      "planet_housing_add": 4,
      "planet_amenities_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "upgrades": [
      "building_drone_megastorage"
    ],
    "key": "building_drone_storage"
  },
  "building_ehof_sm_forge_1": {
    "name": "Sentient Metal Foundry",
    "description": "The Sentient Metal Foundry is a specialized and advanced installation, that serves the sole purpose of feeding alloys alloys and energy energy to an accumulation of Sentient Metal Sentient Metal in order to create more Sentient Metal Sentient Metal.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_ehof_sentient_tier_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true
        }
      },
      "modifier": {
        "job_ehof_cultivator_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_ehof_sm_forge_2"
    ],
    "key": "building_ehof_sm_forge_1",
    "isGE": true
  },
  "building_ehof_sm_forge_2": {
    "name": "Sentient Metal Foundry-Complex",
    "description": "The Sentient Metal Foundry-Complex is a larger and more efficient variant of the Sentient Metal Foundry. It makes use of our expanded knowledge of Sentient Metal Sentient Metal, to enhance the production process and create more Sentient Metal Sentient Metal in less time.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "manufacturing",
    "prerequisites": [
      "tech_ehof_sentient_tier_3"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true
        }
      },
      "modifier": {
        "job_ehof_cultivator_add": "@b2_jobs"
      }
    },
    "key": "building_ehof_sm_forge_2",
    "isGE": true
  },
  "building_embassy": {
    "name": "Embassy Complex",
    "description": "This building forms the heart of the Empire's diplomatic efforts.nnDue to the need to be close to the seat of government, it can only be built at our Capital.",
    "allow": {
      "has_upgraded_capital": true,
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b2_time",
    "category": "government",
    "potential": {
      "exists": "planet",
      "owner": {
        "is_regular_empire": true
      },
      "planet": {
        "is_capital": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_xeno_diplomacy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "upgrades": [
      "building_grand_embassy"
    ],
    "key": "building_embassy"
  },
  "building_empyrean_shrine": {
    "name": "Empyrean Shrine",
    "description": "The shrine itself vibrates somehow, making it appear slightly blurred from a distance.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_citadel_of_faith"
    ],
    "planet_modifier": {
      "job_fe_augur_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_empyrean_shrine"
  },
  "building_energy_grid": {
    "name": "Energy Grid",
    "description": "A carefully calibrated grid network maximizes the output of power generators.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 1
    },
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_any_generator_district_or_building": true
      }
    },
    "prerequisites": [
      "tech_power_hub_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 100,
        "alloys": 100
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_city"
        }
      },
      "modifier": {
        "district_generator_max": 2
      }
    },
    "upgrades": [
      "building_energy_nexus"
    ],
    "key": "building_energy_grid"
  },
  "building_energy_nexus": {
    "name": "Energy Nexus",
    "description": "This colossal facility centralizes all energy grids on the planet, improving their efficiency.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 2
    },
    "prerequisites": [
      "tech_power_hub_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 300,
        "alloys": 150
      },
      "upkeep": {
        "energy": 2,
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_city"
        }
      },
      "modifier": {
        "district_generator_max": 4
      }
    },
    "key": "building_energy_nexus"
  },
  "building_executive_retreat": {
    "name": "Executive Retreat",
    "description": "A luxurious resort complex for high ranking corporate officers. Here they can sample the local planetary culture in a high security environment.",
    "allow": [
      "num_pops",
      ">=",
      "25"
    ],
    "base_buildtime": "@b3_time",
    "planet_modifier": {
      "trade_value_mult": 0.05
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false
      }
    },
    "prerequisites": [
      "tech_executive_retreat"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 1000,
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "key": "building_executive_retreat"
  },
  "building_expanded_warren": {
    "name": "Expanded Warren",
    "description": "By expanding the warrens, still more Drone can shelter within.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "convert_to": [
      "building_paradise_dome",
      "building_drone_megastorage",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "planet_housing_add": 6,
      "planet_amenities_add": 10
    },
    "potential": {
      "has_building": "building_hive_warren"
    },
    "prerequisites": [
      "tech_housing_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_expanded_warren"
  },
  "building_factory_1": {
    "name": "Factory Build Speed",
    "description": "Civilian Industries",
    "base_buildtime": "@b1_time",
    "category": "manufacturing",
    "potential": {
      "exists": "owner",
      "owner": {
        "country_uses_consumer_goods": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_any_industry_district": true
      }
    },
    "prerequisites": [
      "tech_basic_industry"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_artisan_drone_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_factory_2"
    ],
    "key": "building_factory_1"
  },
  "building_factory_2": {
    "name": "Civilian Fabricators",
    "description": "Large industrial fabricators geared towards increasing the production of consumer goods on the planet.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_artisans_consumer_goods_produces_add": 1,
      "planet_artisans_minerals_upkeep_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "country_uses_consumer_goods": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_luxuries_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_artisan_drone_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_factory_3"
    ],
    "key": "building_factory_2"
  },
  "building_factory_3": {
    "name": "Civilian Repli-Complexes",
    "description": "Nearly anything can be replicated at the kiosks in these complexes.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_artisans_consumer_goods_produces_add": 2,
      "planet_artisans_minerals_upkeep_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "country_uses_consumer_goods": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_luxuries_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "rare_crystals": "@b4_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b4_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_artisan_drone_add": "@b1_jobs"
      }
    },
    "key": "building_factory_3"
  },
  "building_fe_dome": {
    "name": "Sky-Dome",
    "description": "A floating utopia maintained with extremely advanced anti-gravity technology.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": {
      "planet_housing_add": 20,
      "planet_amenities_add": 20
    },
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "skydome_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "key": "building_fe_dome"
  },
  "building_fe_stronghold": {
    "name": "Aegis Complex",
    "description": "A massive planetary defense complex housing a multitude of armories stocked to the brim with advanced precursor weaponry.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_fortress"
    ],
    "planet_modifier": {
      "job_fe_protector_add": 5
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "key": "building_fe_stronghold"
  },
  "building_fe_xeno_zoo": {
    "name": "Xeno Preserve",
    "description": "A highly sophisticated preserve that maintains the natural habitat of the ",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_capital"
    ],
    "planet_modifier": {
      "planet_amenities_add": 15,
      "job_fe_xeno_keeper_add": 2,
      "planet_housing_add": 30,
      "planet_max_buildings_add": 15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true,
        "is_xenophile": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_fe_xeno_zoo"
  },
  "building_food_conglomerate": {
    "name": "Fast Food Chain",
    "description": "Affordable, fast, and with a perfectly acceptable nutritional value. Zero toxins* and zero hassle!nn* Food may contain traces of potassium benzoate, nitric acid, dark matter, soylent green and liquid smoke.",
    "base_buildtime": "@b1_time",
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": false
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "food": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_anglers_empire": true,
          "PREV": {
            "planet": {
              "is_wet": true
            }
          }
        }
      },
      "modifier": {
        "job_angler_add": 1
      }
    },
    "key": "building_food_conglomerate"
  },
  "building_food_processing_center": {
    "name": "Food Processing Centers",
    "description": "Streamlined facilities where large amounts of food can be processed.",
    "allow": {
      "exists": "owner",
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_farmers_food_produces_add": 2
    },
    "prerequisites": [
      "tech_food_processing_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 2,
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true,
          "is_fallen_empire_spiritualist": false,
          "is_anglers_empire": true,
          "PREV": {
            "planet": {
              "is_wet": true
            }
          }
        }
      },
      "modifier": {
        "job_angler_add": 2
      }
    },
    "key": "building_food_processing_center"
  },
  "building_food_processing_facility": {
    "name": "Food Processing Facilities",
    "description": "Food that is processed at these facilities has its nutritional value greatly increased.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "planet_modifier": {
      "planet_farmers_food_produces_add": 1
    },
    "potential": {
      "exists": "owner",
      "NOR": {
        "is_planet_class": "pc_machine",
        "has_modifier": "resort_colony"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_any_farming_district_or_buildings": true
      }
    },
    "prerequisites": [
      "tech_food_processing_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true,
          "is_fallen_empire_spiritualist": false,
          "is_anglers_empire": true,
          "PREV": {
            "planet": {
              "is_wet": true
            }
          }
        }
      },
      "modifier": {
        "job_angler_add": 1
      }
    },
    "upgrades": [
      "building_food_processing_center"
    ],
    "key": "building_food_processing_facility"
  },
  "building_fortress": {
    "name": "Fortress",
    "description": "A massive fortress complex with an expanded garrison and training facilities for soldiers.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b1_time",
    "can_build": false,
    "category": "army",
    "prerequisites": [
      "tech_global_defense_grid"
    ],
    "resources": {
      "category": "planet_buildings_strongholds",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 1,
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": "@b2_jobs"
      }
    },
    "key": "building_fortress"
  },
  "building_foundry_1": {
    "name": "Alloy Foundries",
    "description": "The [Owner.GetAlloyProducerPlural] working in these foundries produce high-quality alloys.",
    "base_buildtime": "@b1_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_any_industry_district": true
      }
    },
    "prerequisites": [
      "tech_basic_industry"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true,
          "is_catalytic_empire": true
        }
      },
      "modifier": {
        "job_catalytic_technician_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_foundry_2"
    ],
    "key": "building_foundry_1"
  },
  "building_foundry_2": {
    "name": "Alloy Mega-Forges",
    "description": "These massive forges can assist the end-stage production of alloys in our industries across the planet.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_metallurgists_alloys_produces_add": 1
    },
    "prerequisites": [
      "tech_alloys_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "volatile_motes": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true,
          "is_catalytic_empire": true
        }
      },
      "modifier": {
        "planet_metallurgists_food_upkeep_add": 3,
        "job_catalytic_drone_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_foundry_3"
    ],
    "key": "building_foundry_2"
  },
  "building_foundry_3": {
    "name": "Alloy Nano-Plants",
    "description": "Large industrial fabricators geared towards increasing the production of alloys on the planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_metallurgists_alloys_produces_add": 2
    },
    "prerequisites": [
      "tech_alloys_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "volatile_motes": "@b4_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "volatile_motes": "@b4_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true,
          "is_catalytic_empire": true
        }
      },
      "modifier": {
        "planet_metallurgists_food_upkeep_add": 6,
        "job_catalytic_drone_add": "@b1_jobs"
      }
    },
    "key": "building_foundry_3"
  },
  "building_frameworld_outpost": {
    "name": "Planetary Relay",
    "description": "A surface relay node and deployment post for the ongoing expeditions on this planet.",
    "can_build": false,
    "category": "government",
    "planet_modifier": {
      "planet_amenities_add": 5
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_country_type": "frameworld_outpost_country_type"
      }
    },
    "key": "building_frameworld_outpost",
    "isGE": true
  },
  "building_gaiaseeders_1": {
    "description": "$building_gaiaseeders$ - Phase 1",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "government",
    "planet_modifier": {
      "pop_growth_speed": 0.1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_country_type": "default",
        "OR": {
          "has_valid_civic": "civic_hive_idyllic_bloom"
        }
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      },
      "is_artificial": false
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "energy": 1500
      },
      "upkeep": {
        "energy": 20,
        "multiplier": "value:gaiaseeder_upkeep"
      }
    },
    "upgrades": [
      "building_gaiaseeders_2"
    ],
    "key": "building_gaiaseeders_1"
  },
  "building_gaiaseeders_2": {
    "description": "$building_gaiaseeders$ - Phase 2",
    "allow": {
      "can_build_gaiaseeder": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "planet_modifier": {
      "pop_growth_speed": 0.05,
      "pop_environment_tolerance": 0.1
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "energy": 1500,
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 20,
        "exotic_gases": "@b2_rare_upkeep",
        "multiplier": "value:gaiaseeder_upkeep"
      }
    },
    "upgrades": [
      "building_gaiaseeders_3"
    ],
    "key": "building_gaiaseeders_2"
  },
  "building_gaiaseeders_3": {
    "description": "$building_gaiaseeders$ - Phase 3",
    "allow": {
      "can_build_gaiaseeder": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "planet_modifier": {
      "pop_environment_tolerance": 0.2
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "energy": 1500,
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": 20,
        "exotic_gases": "@b3_rare_upkeep",
        "multiplier": "value:gaiaseeder_upkeep"
      }
    },
    "upgrades": [
      "building_gaiaseeders_4"
    ],
    "key": "building_gaiaseeders_3"
  },
  "building_gaiaseeders_4": {
    "name": "Terraforms the planet into a §YGaia World§! on completion.",
    "description": "",
    "allow": {
      "can_build_gaiaseeder": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "energy": 1500,
        "exotic_gases": "@b4_rare_cost"
      }
    },
    "key": "building_gaiaseeders_4"
  },
  "building_galactic_memorial_1": {
    "name": "Sanctuary of Repose",
    "description": "This humble memorial focuses thoughts and study upon the multi-faceted nature of death and endings.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_autochthon_monument",
      "building_corporate_monument",
      "building_simulation_1",
      "building_sensorium_1"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_memorialist_empire": true
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 1,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "minerals": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        },
        "OR": {
          "is_planet_class": "pc_relic"
        }
      },
      "planet_crime_no_happiness_add": -20
    },
    "upgrades": [
      "building_galactic_memorial_2"
    ],
    "key": "building_galactic_memorial_1"
  },
  "building_galactic_memorial_2": {
    "name": "Pillar of Quietus",
    "description": "A solemn place dedicated to the contemplation of death, in which many an ending may be chronicled.",
    "allow": {
      "exists": "owner",
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_heritage_site",
      "building_corporate_site",
      "building_simulation_2",
      "building_sensorium_2"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_memorialist_empire": true
      }
    },
    "prerequisites": [
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 2,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "minerals": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        },
        "OR": {
          "is_planet_class": "pc_relic"
        }
      },
      "planet_crime_no_happiness_add": -20
    },
    "upgrades": [
      "building_galactic_memorial_3"
    ],
    "key": "building_galactic_memorial_2"
  },
  "building_galactic_memorial_3": {
    "name": "Galactic Memorial",
    "description": "A monumental library of all that may or may not be understood about endings, chronicled for unknowable future ages.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_hypercomms_forum",
      "building_corporate_forum",
      "building_simulation_3",
      "building_sensorium_3"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_memorialist_empire": true
      }
    },
    "prerequisites": [
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 3,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "minerals": "@b3_upkeep",
        "exotic_gases": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        },
        "OR": {
          "is_planet_class": "pc_relic"
        }
      },
      "planet_crime_no_happiness_add": -20
    },
    "key": "building_galactic_memorial_3"
  },
  "building_galactic_stock_exchange": {
    "name": "Galactic Stock Exchange",
    "description": "By engaging in free trade of goods and services we allow for a more specialized economy, where an individual can excel in a narrow field and trade for their needs.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "trade",
    "planet_modifier": {
      "job_merchant_add": 2,
      "trade_value_mult": 0.2
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_galactic_markets"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "key": "building_galactic_stock_exchange"
  },
  "building_gas_extractors": {
    "name": "Gas Extraction Wells",
    "description": "These hulking wells reach deep into the planet's mantle to access pockets of Exotic Gas.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_mine_exotic_gases"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_gas_extraction_drone_add": 1
      }
    },
    "key": "building_gas_extractors"
  },
  "building_giga_aeternum_birch_capital": {
    "name": "Aeternite Capital",
    "description": "A building which houses the centralized Aeternite government ruling over their Birch World and the rest of their empire. It is filled with various kinds of computers and machinery to help streamline governmental tasks.",
    "can_build": false,
    "planet_modifier": {
      "job_politician_add": 5,
      "planet_housing_add": 100,
      "planet_orbital_bombardment_damage": -0.1,
      "planet_stability_add": 25
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_aeternum_birch_capital",
    "isGE": true
  },
  "building_giga_aeternum_housing": {
    "name": "Aeternite Habitation Megaplexes",
    "description": "Vast habitation complexes built with Loop-Quantum Aeternite technology. Able to bend spacetime itself, these esoteric habitats can provide more internal space than their external volume suggests, and are capable of autonomously adjusting themselves to fit the need of their inhabitants.",
    "can_build": false,
    "planet_modifier": {
      "planet_housing_add": 100,
      "pop_happiness": 0.1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_aeternum_housing",
    "isGE": true
  },
  "building_giga_aeternum_leisure_center": {
    "name": "Aeternite Entertainment Megaplexes",
    "description": "Centers dedicated entirely to satisfying and entertaining Aeternite populations. They grant access to all Aeternite culture and entertainment, as well as a near-infinite amount of potential simulated worlds for their users.",
    "can_build": false,
    "planet_modifier": {
      "job_entertainer_add": 25,
      "planet_amenities_add": 100,
      "planet_amenities_mult": 0.1,
      "pop_happiness": 0.1
    },
    "potential": {
      "always": false
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "consumer_goods": 250
      }
    },
    "key": "building_giga_aeternum_leisure_center",
    "isGE": true
  },
  "building_giga_aeternum_psi_halls": {
    "name": "Aeternite Psikapacitor",
    "description": "A generator which casts a field of psionic energy into the skies of this world, bolstering Aeternite psionic abilities and ensuring the docility and compliance of local populations.",
    "can_build": false,
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "is_regular_birch_empire": true
        }
      },
      "job_telepath_add": 25,
      "job_researcher_add": 10,
      "planet_stability_add": 10,
      "planet_crime_mult": -0.3,
      "planet_crime_add": -25
    },
    "key": "building_giga_aeternum_psi_halls",
    "isGE": true
  },
  "building_giga_aeternum_quantum_reactor": {
    "name": "Aeternite Loop-Quantum Reactor",
    "description": "Humongous constructs that draw energy from esoteric Loop Quantum phenomena, and tasked with energizing and streamlining the complex processes which manage the Aeternite energy grid.",
    "can_build": false,
    "planet_modifier": {
      "planet_jobs_energy_produces_mult": 0.15,
      "planet_jobs_energy_upkeep_mult": -0.25
    },
    "potential": {
      "always": false
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "energy": 1000
      }
    },
    "key": "building_giga_aeternum_quantum_reactor",
    "isGE": true
  },
  "building_giga_aeternum_ruler_computer": {
    "name": "Aeternite Regal Computing Complex",
    "description": "This humongous networked complex serves as the Aeternite ruler's personal computer, and is used to coordinate and manage the empire whenever needed. Its vast databanks contain most of Aeternite scientific and cultural knowledge, and other secrets of invaluable value.",
    "can_build": false,
    "planet_modifier": {
      "planet_jobs_physics_research_produces_mult": 1,
      "planet_jobs_society_research_produces_mult": 1,
      "planet_jobs_engineering_research_produces_mult": 1
    },
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "is_machine_empire": true
        }
      },
      "job_calculator_add": 25
    },
    "key": "building_giga_aeternum_ruler_computer",
    "isGE": true
  },
  "building_giga_aeternum_synthetizer": {
    "name": "Aeternite Esoteric Synthesizer",
    "description": "A complex network of buildings that employ Loop-Quantum-based technologies to autonomously fabricate and assemble various advanced resources in order to sustain the Aeternite industry.",
    "can_build": false,
    "potential": {
      "always": false
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "rare_crystals": 50,
        "volatile_motes": 50,
        "exotic_gases": 50,
        "nanites": 25,
        "sr_zro": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "is_gestalt": true
        }
      },
      "job_translucer_drone_add": 10,
      "job_gas_refiner_drone_add": 10,
      "job_chemist_drone_add": 10
    },
    "key": "building_giga_aeternum_synthetizer",
    "isGE": true
  },
  "building_giga_aeternum_ultrafarm": {
    "name": "Aeternite Nutrition Center",
    "description": "Esoteric automated farms ran by an Aeternite artificial intelligence, that near-instantly synthesize vast amounts of nutrient-rich food tailored for consumption by local populations.",
    "can_build": false,
    "potential": {
      "always": false
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "food": 150
      }
    },
    "key": "building_giga_aeternum_ultrafarm",
    "isGE": true
  },
  "building_giga_ancient_palace": {
    "name": "building_ancient_palace",
    "description": "building_ancient_palace_desc",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_control_center"
    ],
    "planet_modifier": {
      "planet_housing_add": 12,
      "planet_amenities_add": 12,
      "planet_max_buildings_add": 11
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true,
        "has_country_flag": "giga_meopa_fe"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": false
        }
      },
      "modifier": {
        "job_giga_fe_overseer_add": 2,
        "job_giga_fe_protector_add": 2
      }
    },
    "upgrades": [],
    "key": "building_giga_ancient_palace",
    "isGE": true
  },
  "building_giga_blokkat_blokkwork_node": {
    "name": "building_giga_blokkat_blokkwork_node",
    "description": "building_giga_blokkat_blokkwork_node",
    "base_buildtime": 720,
    "category": "research",
    "planet_modifier": {
      "planet_jobs_produces_mult": 0.3,
      "planet_pops_energy_upkeep_mult": -0.3
    },
    "prerequisites": [
      "giga_tech_blokkat_blokkwork_power_node"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "alloys": 10000,
        "energy": 20000,
        "rare_crystals": 250,
        "volatile_motes": 250,
        "exotic_gases": 250
      },
      "upkeep": {
        "alloys": 100,
        "rare_crystals": 5,
        "volatile_motes": 5,
        "exotic_gases": 5
      },
      "produces": {
        "energy": 200
      }
    },
    "key": "building_giga_blokkat_blokkwork_node",
    "isGE": true
  },
  "building_giga_blokkat_energy_capacitor": {
    "name": "building_giga_blokkat_energy_capacitor",
    "description": "building_giga_blokkat_energy_capacitor",
    "base_buildtime": 720,
    "category": "resource",
    "prerequisites": [
      "giga_tech_blokkat_gigarelay_core"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "alloys": 5000,
        "energy": 50000,
        "rare_crystals": 200,
        "volatile_motes": 200,
        "exotic_gases": 200
      },
      "upkeep": {
        "alloys": 50,
        "rare_crystals": 5,
        "volatile_motes": 5,
        "exotic_gases": 5
      }
    },
    "key": "building_giga_blokkat_energy_capacitor",
    "isGE": true
  },
  "building_giga_blokkat_hyperdimensional_research": {
    "name": "building_giga_blokkat_hyperdimensional_research",
    "description": "building_giga_blokkat_hyperdimensional_research",
    "allow": {
      "owner": {
        "has_country_flag": "giga_blokkat_can_build_hyperdimensional_lab"
      }
    },
    "base_buildtime": 720,
    "category": "research",
    "potential": {
      "owner": {
        "has_country_flag": "giga_blokkat_can_build_hyperdimensional_lab"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "alloys": 1000
      },
      "upkeep": {
        "energy": 200,
        "physics_research": 400,
        "society_research": 400,
        "engineering_research": 400
      }
    },
    "key": "building_giga_blokkat_hyperdimensional_research",
    "isGE": true
  },
  "building_giga_corrona_capital": {
    "name": "Arcane Palaces",
    "description": "Large palaces which serve as the seat of Corrona's ruling elite. They are populated by a myriad of fantastical creatures which possess an array of seemingly magical abilities.",
    "can_build": false,
    "planet_modifier": {
      "planet_max_buildings_add": 12,
      "planet_housing_add": 5,
      "planet_amenities_add": 25,
      "job_politician_add": 2,
      "job_priest_add": 2,
      "job_miner_add": 2,
      "job_researcher_add": 2
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_corrona_capital",
    "isGE": true
  },
  "building_giga_corrona_homes": {
    "name": "Esoteric Urban Center",
    "description": "Although they appear to be simple medieval habitats at first glance, these cities are filled with various creatures employing some sort of ",
    "can_build": false,
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 5,
      "job_farmer_add": 1,
      "job_priest_add": 1,
      "job_researcher_add": 1,
      "job_miner_add": 1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_corrona_homes",
    "isGE": true
  },
  "building_giga_elysium_dust_sifter": {
    "name": "Space Dust Processing Facility",
    "description": "Space dust frequently passes through the Orbital Elysium. This sprawling facility can gather this dust and refine it into small amounts of something usable.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 350,
    "category": "manufacturing",
    "potential": {
      "planet": {
        "is_planet_class": "pc_gigaorbital_ring"
      }
    },
    "prerequisites": [
      "giga_tech_orbital_elysium"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600
      },
      "produces": {
        "volatile_motes": 1
      },
      "upkeep": {
        "energy": 3.5
      }
    },
    "key": "building_giga_elysium_dust_sifter",
    "isGE": true
  },
  "building_giga_energy_nexus_1": {
    "name": "Laser Conduction Energy Distributor",
    "description": "The huge complex uses powerful high-energy light conductors to transport energy between the planet it is located at and other planets in its solar system.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 2
    },
    "prerequisites": [
      "tech_l_conductor"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 100,
        "alloys": 100
      },
      "upkeep": {
        "energy": 6,
        "exotic_gases": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_city"
        }
      },
      "modifier": {
        "district_generator_max": 4
      }
    },
    "upgrades": [
      "building_giga_energy_nexus_2"
    ],
    "key": "building_giga_energy_nexus_1",
    "isGE": true
  },
  "building_giga_energy_nexus_2": {
    "name": "Hyperlane Power Transmitter",
    "description": "These ultra high capacity energy transmitters can transfer energy between solar systems and more efficently distribute the power within our empire.",
    "allow": {
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 3
    },
    "prerequisites": [
      "tech_hyperlane_p_t"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 300,
        "alloys": 150
      },
      "upkeep": {
        "energy": 8,
        "exotic_gases": "@b4_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_city"
        }
      },
      "modifier": {
        "district_generator_max": 4
      }
    },
    "upgrades": [
      "building_giga_energy_nexus_3"
    ],
    "key": "building_giga_energy_nexus_2",
    "isGE": true
  },
  "building_giga_energy_nexus_3": {
    "name": "Transstellar Field Entangler",
    "description": "This humongous construct allows for direct entanglement of different locations of quantum fields in the galaxy, which makes it possible for us to instantly transfer energy within our empire.",
    "base_buildtime": 1200,
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 4
    },
    "prerequisites": [
      "tech_field_e_e_t"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 500,
        "alloys": 200
      },
      "upkeep": {
        "energy": 8,
        "exotic_gases": "@b4_rare_upkeep",
        "ehof_sr_negative_mass": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_city"
        }
      },
      "modifier": {
        "district_generator_max": 6
      }
    },
    "upgrades": [
      "building_giga_energy_nexus_3"
    ],
    "key": "building_giga_energy_nexus_3",
    "isGE": true
  },
  "building_giga_ezic_capital": {
    "name": "Ezicanian Capital",
    "description": "A large and somewhat rustic city which serves as the ",
    "can_build": false,
    "planet_modifier": {
      "job_giga_ezic_hunter_add": 1,
      "planet_housing_add": 20,
      "planet_amenities_add": 20,
      "planet_crime_add": -100
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_ezic_capital",
    "isGE": true
  },
  "building_giga_fe_megaworkshop": {
    "name": "Nano-Foundry",
    "description": "Huge molecular synthesis arrays work in tandem with replicator bays to process raw minerals into materials for orbital construction.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "giga_fe_megaworkshop_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "or": {
            "not": {
              "exists": "owner"
            },
            "owner": {
              "is_fallen_empire_spiritualist": false
            }
          }
        },
        "alloys": 10,
        "giga_sr_amb_megaconstruction": 10
      },
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "trigger": {
          "or": {
            "not": {
              "exists": "owner"
            },
            "owner": {
              "is_fallen_empire_spiritualist": false
            }
          }
        },
        "minerals": 20
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": true
        }
      },
      "job_giga_amb_fe_celestial_architect_add": 1,
      "job_giga_amb_fe_acolyte_foundry_add": 2
    },
    "key": "building_giga_fe_megaworkshop",
    "isGE": true
  },
  "building_giga_fe_stronghold": {
    "name": "building_fe_stronghold",
    "description": "building_fe_stronghold_desc",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_fortress"
    ],
    "planet_modifier": {
      "job_giga_fe_protector_add": 5
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true,
        "has_country_flag": "giga_meopa_fe"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 10
      }
    },
    "key": "building_giga_fe_stronghold",
    "isGE": true
  },
  "building_giga_flusion_capital": {
    "name": "Katown Megalopolis",
    "description": "A gigantic city home to millions of inhabitants, serving as the capital of the Katzens. It features a noticeably large modern pyramid which houses their centralized government. The city also features a huge primitive shield generator, protecting its inhabitants from bombardment.",
    "base_buildtime": 720,
    "can_build": false,
    "planet_modifier": {
      "job_politician_add": 2,
      "planet_max_districts_add": 1,
      "planet_housing_add": 10,
      "planet_amenities_add": 25,
      "planet_crime_add": -25,
      "planet_orbital_bombardment_damage": -0.1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_flusion_capital",
    "isGE": true
  },
  "building_giga_flusion_fusion_power_plant": {
    "name": "Katzen Megareactor",
    "description": "A colossal Katzen-built Fusion Reactor located under the Katzen capital, providing vast amounts of clean energy.",
    "base_buildtime": 360,
    "can_build": false,
    "potential": {
      "always": false
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "energy": 25
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "job_technician_drone_add": 2
    },
    "key": "building_giga_flusion_fusion_power_plant",
    "isGE": true
  },
  "building_giga_flusion_home": {
    "name": "Flusionian Metropolis",
    "description": "A major Flusionian urban center home to a myriad of species, offering remarkably good living conditions.",
    "base_buildtime": 360,
    "can_build": false,
    "planet_modifier": {
      "planet_amenities_add": 5,
      "planet_housing_add": 5,
      "planet_crime_add": -5
    },
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "job_calculator_add": 1,
      "job_fabricator_add": 1
    },
    "key": "building_giga_flusion_home",
    "isGE": true
  },
  "building_giga_gas_floater_harvester_fixed": {
    "name": "Floater Analysis Complex",
    "description": "Facilities dedicated to herding and studying the peculiar airborne lifeforms found on this Gas Giant.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 400,
    "category": "manufacturing",
    "potential": {
      "planet": {
        "is_planet_class": "pc_habitable_gas_giant"
      }
    },
    "prerequisites": [
      "giga_tech_terraform_gas"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600
      },
      "produces": {
        "society_research": 20
      },
      "upkeep": {
        "energy": 4
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_per_pop": 0.04
      }
    },
    "key": "building_giga_gas_floater_harvester_fixed",
    "isGE": true
  },
  "building_giga_gas_fusion_plant_fixed": {
    "name": "Atmospheric Fusion Facility",
    "description": "This building fuses light elements, such as Hydrogen and Helium harvested from this planet's atmosphere, into heavier elements that can be used by our industries.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 400,
    "category": "manufacturing",
    "potential": {
      "planet": {
        "is_planet_class": "pc_habitable_gas_giant"
      }
    },
    "prerequisites": [
      "giga_tech_terraform_gas"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "minerals": 10
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_matter_synthesizer_drone_per_pop": 0.1
      }
    },
    "key": "building_giga_gas_fusion_plant_fixed",
    "isGE": true
  },
  "building_giga_gas_giant_habitation_module": {
    "name": "Gas Giant Habitation Module",
    "description": "Collection of facilities necessary to maintain a colony on a gas giant assembled by the original population of this planet. These facilities include reactors to provide power for the colony, docking bays to unload minerals collected from local moons and large climate-controlled hangars that can be used for hydroponic farms. In addition to that, these facilities serve as headquarters for resource distribution network and provide various services to the local populations.",
    "can_build": false,
    "category": "resource",
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "planet_amenities_no_happiness_add": 10
      }
    },
    "key": "building_giga_gas_giant_habitation_module",
    "isGE": true
  },
  "building_giga_gas_mote_harvester_fixed": {
    "name": "Atmospheric Mote Extractor",
    "description": "A facility which exploits massive mote clouds drifting through this Gas Giant's atmosphere.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 400,
    "category": "manufacturing",
    "potential": {
      "planet": {
        "is_planet_class": "pc_habitable_gas_giant"
      }
    },
    "prerequisites": [
      "giga_tech_terraform_gas"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "volatile_motes": 2
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_mote_harvesting_drone_per_pop": 0.05
      }
    },
    "key": "building_giga_gas_mote_harvester_fixed",
    "isGE": true
  },
  "building_giga_habitat_zro_harvester": {
    "name": "Zro Refining Complex",
    "description": "This facility processes Zro harvested from accessible deposits.",
    "base_buildtime": 400,
    "category": "resource",
    "potential": {
      "planet": {
        "is_planet_class": "pc_interstellar_habitat"
      },
      "owner": {
        "is_regular_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_giga_zro_extractor_drone_add": 1
      }
    },
    "key": "building_giga_habitat_zro_harvester",
    "isGE": true
  },
  "building_giga_institute_1": {
    "name": "Unorthodox Think Tank",
    "description": "The Unorthodox Think Thank is an enormous installation and a planet's central processing and research facility for abstract physics. The planet's research output gets hugely boosted in all aspects by this amazing facility.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "research",
    "convert_to": [
      "building_giga_supercomputer_1"
    ],
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.3,
      "job_head_researcher_add": 2
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_u_r_e_t"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "exotic_gases": "@b3_rare_upkeep"
      }
    },
    "upgrades": [
      "building_giga_institute_2"
    ],
    "key": "building_giga_institute_1",
    "isGE": true
  },
  "building_giga_institute_2": {
    "name": "Supercausal Science Nexus",
    "description": "The Supercausal Science Nexus is a tremendous facility dedicated to the most advanced and humongous research projects and experiments in regards to the non-local, supercausal phenomenons of abstract physics.",
    "allow": {
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "research",
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.45,
      "job_head_researcher_add": 3
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_non_local_r_i"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b4_rare_cost",
        "ehof_sr_negative_mass": 20
      },
      "upkeep": {
        "energy": "@b4_upkeep",
        "exotic_gases": "@b4_rare_upkeep",
        "ehof_sr_negative_mass": 1
      }
    },
    "key": "building_giga_institute_2",
    "isGE": true
  },
  "building_giga_interstellar_hydroponic_farm": {
    "name": "Hydroponic Farm Complex",
    "description": "A sprawling complex of hydroponic farms, providing the ringworld's population with fresh food. These facilities, however, have their limits and can't sustain the ever-growing population forever.",
    "can_build": false,
    "category": "resource",
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_agri_drone_add": 3
      }
    },
    "key": "building_giga_interstellar_hydroponic_farm",
    "isGE": true
  },
  "building_giga_iodizium_mines": {
    "name": "Iodizium Crystal Mines",
    "description": "Created when planetary material was bathed in exotic radiation during the supernova of this system's star, iodizium requires careful extraction.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "giga_tech_fusion_suppressor"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_giga_iodizium_mining_drone_add": 1
      }
    },
    "key": "building_giga_iodizium_mines",
    "isGE": true
  },
  "building_giga_iodizium_plant": {
    "name": "Iodizium Power Plant",
    "description": "A power plant powered by the exotic, physics-defying Iodizium Crystals. The crystals' strange nature makes them incredibly potent energy generators.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 350,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_technician_energy_produces_add": 2,
      "planet_technician_sr_iodizium_upkeep_add": 0.01
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "giga_tech_fusion_suppressor"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "minerals": 5,
        "sr_iodizium": 1
      },
      "produces": {
        "energy": 35
      }
    },
    "key": "building_giga_iodizium_plant",
    "isGE": true
  },
  "building_giga_iodizium_research": {
    "name": "Iodizium Research Facility",
    "description": "This building conducts various experiments around Iodizium Crystals in order to study them and understand their incredibly odd nature.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 350,
    "category": "research",
    "planet_modifier": {
      "planet_researchers_physics_research_produces_add": 1,
      "planet_researchers_society_research_produces_add": 1,
      "planet_researchers_engineering_research_produces_add": 1,
      "planet_researchers_sr_iodizium_upkeep_add": 0.01
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "giga_tech_fusion_suppressor"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "minerals": 5,
        "sr_iodizium": 1
      },
      "produces": {
        "physics_research": 25,
        "society_research": 25,
        "engineering_research": 25
      }
    },
    "key": "building_giga_iodizium_research",
    "isGE": true
  },
  "building_giga_katzen_capital": {
    "name": "Katzen Planetary Administration",
    "description": "A large Katzen building complex, which houses the planet's local government. It is heavily connected to the central government on Flusion, and helps in coordinating the Imperium's fleet movements and resource distribution.",
    "can_build": false,
    "planet_modifier": {
      "job_politician_add": 2,
      "planet_max_districts_add": 3,
      "district_farming_max": 1,
      "district_generator_max": 1,
      "district_mining_max": 1,
      "planet_housing_add": 20,
      "planet_amenities_add": 20,
      "planet_crime_add": -20,
      "planet_orbital_bombardment_damage": -0.1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_katzen_capital",
    "isGE": true
  },
  "building_giga_katzen_synthetizer": {
    "name": "Katzen Megarefineries",
    "description": "A vast network of Katzen-built refineries designed to artificially synthetize strategic resources.",
    "base_buildtime": 360,
    "can_build": false,
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "job_translucer_drone_add": 2,
      "job_gas_refiner_drone_add": 2,
      "job_chemist_drone_add": 2
    },
    "key": "building_giga_katzen_synthetizer",
    "isGE": true
  },
  "building_giga_katzen_terraformer": {
    "name": "Katzen Environmental Reshaper",
    "description": "This large array of complex structures helps the Katzens adapt the planet's environment to their liking, effectively rendering it more habitable and facilitating colonization efforts.",
    "base_buildtime": 360,
    "can_build": false,
    "planet_modifier": {
      "pop_environment_tolerance": 0.2
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_katzen_terraformer",
    "isGE": true
  },
  "building_giga_living_metal_infusion_plant": {
    "name": "Living Metal Infusion Plant",
    "description": "Incorporating the regenerative properties of living metal into our manufacturing processes will be a great boon to our deep-space construction projects.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "planet_modifier": {
      "planet_giga_megaengineers_produces_mult": 0.2
    },
    "potential": {
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "giga_tech_amb_living_metal_infusion"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "sr_living_metal": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "sr_living_metal": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": true
        }
      },
      "job_giga_amb_fe_acolyte_foundry_add": 1
    },
    "key": "building_giga_living_metal_infusion_plant",
    "isGE": true
  },
  "building_giga_maginot_global_bunker": {
    "name": "Maginot Global Bunker System",
    "description": "A world-spanning system of deep bunkers gives our armies unprecedented strike power while on this world.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 720,
    "can_build": false,
    "category": "army",
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.25
    },
    "prerequisites": [
      "giga_tech_maginot_world"
    ],
    "resources": {
      "category": "planet_buildings_strongholds",
      "produces": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "has_active_tradition": "tr_unyielding_resistance_is_frugal"
          }
        },
        "unity": 10
      },
      "cost": {
        "minerals": 1000,
        "alloys": 100
      },
      "upkeep": {
        "energy": 10,
        "alloys": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_maginot_bunker_officer_gestalt_add": 1
      }
    },
    "key": "building_giga_maginot_global_bunker",
    "isGE": true
  },
  "building_giga_maginot_stronghold": {
    "name": "Maginot Fort Complex",
    "description": "New techniques within the field of excessive fortification enables the construction of complexes like this one. It should now be possible to extend these defences to cover the whole planet.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 720,
    "category": "army",
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.25
    },
    "potential": {
      "NOT": {
        "is_giga_maginot_world": true,
        "has_planet_flag": "giga_maginot_world"
      }
    },
    "prerequisites": [
      "giga_tech_maginot_world"
    ],
    "resources": {
      "category": "planet_buildings_strongholds",
      "produces": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "has_active_tradition": "tr_unyielding_resistance_is_frugal"
          }
        },
        "unity": 10
      },
      "cost": {
        "minerals": 1000,
        "alloys": 100
      },
      "upkeep": {
        "energy": 10,
        "alloys": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_maginot_bunker_officer_gestalt_add": 1
      }
    },
    "key": "building_giga_maginot_stronghold",
    "isGE": true
  },
  "building_giga_matter_synthesizer": {
    "name": "Matter Synthesis Station",
    "description": "A sprawling complex of arcane energy-to-mass converters that create the raw materials required to keep a pre-FTL civilization running.",
    "can_build": false,
    "category": "resource",
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": false
        }
      },
      "modifier": {
        "job_matter_synthesizer_drone_add": 5
      }
    },
    "key": "building_giga_matter_synthesizer",
    "isGE": true
  },
  "building_giga_megaworkshop": {
    "name": "Molecular Foundry",
    "description": "Molecular synthesis arrays and spotless clean rooms fill these facilities, producing the highly specialized materials required for large-scale orbital construction projects.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "has_global_flag": "@giga_amb_flag"
    },
    "prerequisites": [
      "giga_tech_amb_supertensiles"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": true
        }
      },
      "modifier": {
        "job_giga_amb_fe_acolyte_foundry_add": 2
      }
    },
    "key": "building_giga_megaworkshop",
    "isGE": true
  },
  "building_giga_megaworkshop_hub": {
    "name": "Megaconstruction Logistics Hub",
    "description": "Experts coordinate a vast fleet of transport and construction ships, bearing forth their grand designs, while molecular foundries churn out vast quantities of construction materials.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "has_global_flag": "@giga_amb_flag"
    },
    "prerequisites": [
      "giga_tech_amb_supertensiles"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire_spiritualist": true
        }
      },
      "modifier": {
        "job_giga_amb_fe_celestial_architect_add": 2
      }
    },
    "key": "building_giga_megaworkshop_hub",
    "isGE": true
  },
  "building_giga_paluush_capital": {
    "name": "Grand Paluush Palace",
    "description": "A colossal network of buildings which seemingly serves as the Paluushian capital. Immense psionic energies seem to be emanating from it.",
    "can_build": false,
    "planet_modifier": {
      "job_bureaucrat_add": 2,
      "job_telepath_add": 2,
      "planet_housing_add": 10,
      "planet_amenities_add": 50,
      "planet_crime_add": -50,
      "planet_max_buildings_add": 12
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_paluush_capital",
    "isGE": true
  },
  "building_giga_paluush_homes": {
    "name": "Paluush Megapolis",
    "description": "A massive city constructed by Paluushes. It is remarkably efficient and organized despite employing primitive technologies, almost rivalling space-age urban constructs.",
    "can_build": false,
    "planet_modifier": {
      "planet_amenities_add": 10,
      "planet_housing_add": 5,
      "planet_crime_add": -20,
      "job_researcher_add": 2,
      "job_farmer_add": 2,
      "job_technician_add": 1,
      "job_miner_add": 1,
      "job_telepath_add": 1,
      "job_artisan_add": 1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_paluush_homes",
    "isGE": true
  },
  "building_giga_planetary_shield_generator_1": {
    "name": "Hypershield Defensive Screen",
    "description": "The Hypershield Defensive Screen is an enhanced version of the classical Planetary Shield Generator, which utilizes hypershield technology to vastly improve the capabilities and efficency of the generator.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.6
    },
    "prerequisites": [
      "tech_giga_planetary_shield_generator_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": 20
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "exotic_gases": 1
      }
    },
    "upgrades": [
      "building_giga_planetary_shield_generator_2"
    ],
    "key": "building_giga_planetary_shield_generator_1",
    "isGE": true
  },
  "building_giga_planetary_shield_generator_2": {
    "name": "Negative Mass Protector",
    "description": "By creating a mass-energy repulsive layer around a planets atmosphere, through the utilization of Negative Mass, the Negative Mass Projector shields a Planet from even the most intense orbital bombardment and asteroids. Only permanent long-time bombardment and focused extreme high energy beams can penetrate the repulsive layer in time.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 1200,
    "can_build": false,
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.7
    },
    "prerequisites": [
      "tech_giga_planetary_shield_generator_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b2_minerals",
        "ehof_sr_negative_mass": 20
      },
      "upkeep": {
        "energy": "@b4_upkeep",
        "exotic_gases": "@b2_upkeep",
        "ehof_sr_negative_mass": 2
      }
    },
    "key": "building_giga_planetary_shield_generator_2",
    "isGE": true
  },
  "building_giga_research_lab_1": {
    "name": "Abstract Examination Institute",
    "description": "A specialized Institute for the phenomenol research and experiments in the branch of abstract physics, with a very large capacity for research staff.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "category": "research",
    "prerequisites": [
      "tech_u_r_e_t"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1400
      },
      "upkeep": {
        "trigger": {
          "owner": {
            "is_galactic_community_member": true
          },
          "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
          "planet": {
            "has_modifier": "pm_extradimensional_experimentation"
          }
        },
        "sr_zro": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true,
          "is_galactic_community_member": true
        },
        "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
        "has_modifier": "pm_extradimensional_experimentation"
      },
      "modifier": {
        "job_dimensional_portal_researcher_gestalt_add": 2
      }
    },
    "upgrades": [
      "building_giga_research_lab_2"
    ],
    "key": "building_giga_research_lab_1",
    "isGE": true
  },
  "building_giga_research_lab_2": {
    "name": "Non-localized Research Facility",
    "description": "A specialized Institute for the phenomenol research and experiments in the branch of abstract physics, with a very large capacity for research staff.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "research",
    "prerequisites": [
      "tech_non_local_r_i"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b4_rare_cost"
      },
      "upkeep": {
        "trigger": {
          "owner": {
            "is_galactic_community_member": true
          },
          "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
          "planet": {
            "has_modifier": "pm_extradimensional_experimentation"
          }
        },
        "sr_zro": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true,
          "is_galactic_community_member": true
        },
        "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
        "has_modifier": "pm_extradimensional_experimentation"
      },
      "modifier": {
        "job_dimensional_portal_researcher_gestalt_add": 3
      }
    },
    "key": "building_giga_research_lab_2",
    "isGE": true
  },
  "building_giga_shroud_capacitor": {
    "name": "Shroud Capacitor",
    "description": "A massive psionic facility forcefully extracting Shroud Energy and redistributing it on the planet's surface, greatly boosting telepathic abilities and industries.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 1000,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_jobs_energy_produces_mult": 0.1,
      "planet_jobs_minerals_produces_mult": 0.1,
      "planet_jobs_society_research_produces_mult": 0.1,
      "planet_jobs_physics_research_produces_mult": 0.1,
      "planet_jobs_engineering_research_produces_mult": 0.1,
      "pop_happiness": 0.05
    },
    "prerequisites": [
      "giga_tech_psychic_hypersiphon_4"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000,
        "alloys": 50
      },
      "upkeep": {
        "unity": 10,
        "energy": 10
      },
      "produces": {
        "physics_research": 5
      }
    },
    "key": "building_giga_shroud_capacitor",
    "isGE": true
  },
  "building_giga_siegfried_global_bunker": {
    "name": "Siegfried Central Command",
    "description": "This vast network of reinforced bunkers houses the administrative heart of a Katzen Siegfried World, ensuring its defenders are as efficient as possible.",
    "allow": {
      "has_upgraded_capital": true
    },
    "can_build": false,
    "category": "army",
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.25,
      "job_maginot_bunker_officer_add": 1
    },
    "potential": {
      "always": false
    },
    "key": "building_giga_siegfried_global_bunker",
    "isGE": true
  },
  "building_giga_supercomputer_1": {
    "name": "Abstract Supercomputer",
    "description": "The Unorthodox Think Thank is an enormous installation and a planet's central processing and research facility for abstract physics. The planet's research output gets hugely boosted in all aspects by this amazing facility.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "research",
    "convert_to": [
      "building_giga_institute_1"
    ],
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_gestalt": true
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_u_r_e_t"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "exotic_gases": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": 2
      }
    },
    "upgrades": [
      "building_giga_supercomputer_2"
    ],
    "key": "building_giga_supercomputer_1",
    "isGE": true
  },
  "building_giga_supercomputer_2": {
    "name": "Abstract Hypercomputer",
    "description": "This highly advanced and specialized installation allows for the study and experimentation of the non-localized phenomenons discovered through the means of abstract physics.",
    "allow": {
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "research",
    "convert_to": [
      "building_giga_institute_2"
    ],
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.45
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_gestalt": true
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_non_local_r_i"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b4_rare_cost",
        "ehof_sr_negative_mass": 20
      },
      "upkeep": {
        "energy": "@b4_upkeep",
        "exotic_gases": "@b4_rare_upkeep",
        "ehof_sr_negative_mass": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": 3
      }
    },
    "key": "building_giga_supercomputer_2",
    "isGE": true
  },
  "building_giga_supertensiles_mines": {
    "name": "Supertensile Materials Extractors",
    "description": "In rare instances, the right conditions can allow materials of improbable strength to form in nature.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "giga_tech_amb_supertensiles"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_giga_supertensiles_extractor_drone_add": 1
      }
    },
    "key": "building_giga_supertensiles_mines",
    "isGE": true
  },
  "building_grand_embassy": {
    "name": "Grand Embassy Complex",
    "description": "The complex is intended to awe the viewer, rendering them more compliant in negotiations.nnDue to the need to be close to the seat of government, it can only be built at our Capital.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "government",
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      },
      "planet": {
        "is_capital": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_xeno_relations"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "key": "building_grand_embassy"
  },
  "building_great_pyramid": {
    "name": "Great Pyramid",
    "description": "A pyramid constructed by the local population to appease a deity descended from the sky.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "planet_modifier": [],
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "food": 2,
        "society_research": 2
      }
    },
    "key": "building_great_pyramid"
  },
  "building_hab_capital": {
    "name": "Habitat Administration",
    "description": "The administrative hub of the Habitat, serving as its capital and the seat of the local government.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hab_fe_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 3,
      "planet_max_buildings_add": "@buildings_t1"
    },
    "potential": {
      "is_planet_class": "pc_habitat",
      "exists": "owner",
      "owner": {
        "is_fallen_empire": false
      }
    },
    "resources": {
      "category": "planet_buildings_hab_capital",
      "upkeep": {
        "trigger": {
          "owner": {
            "has_active_tradition": "tr_domination_adopt_void"
          }
        },
        "alloys": -1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "job_coordinator_add": 1,
      "job_replicator_add": 1,
      "job_maintenance_drone_add": 2,
      "planet_amenities_add": 3
    },
    "upgrades": [
      "building_hab_major_capital"
    ],
    "key": "building_hab_capital"
  },
  "building_hab_fe_capital": {
    "name": "Habitat Administration",
    "description": "The administrative hub of the Habitat, serving as its capital and the seat of the local government.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_hab_major_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "planet_max_buildings_add": 11
    },
    "potential": {
      "is_planet_class": "pc_habitat",
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_machine_empire": true
        }
      },
      "job_fe_guardian_bot_add": 2,
      "job_fe_maintenance_bot_add": 1
    },
    "upgrades": [],
    "key": "building_hab_fe_capital"
  },
  "building_hab_major_capital": {
    "name": "Habitat Central Control",
    "description": "An extensive complex of bureaucratic offices that oversees the administration of a highly-populated habitat.",
    "allow": [
      "num_pops",
      ">=",
      "10"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hab_fe_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "planet_max_buildings_add": "@buildings_t2",
      "planet_max_branch_office_buildings_add": 1
    },
    "potential": {
      "is_planet_class": "pc_habitat",
      "exists": "owner",
      "owner": {
        "is_fallen_empire": false
      }
    },
    "resources": {
      "category": "planet_buildings_hab_capital",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "trigger": {
          "owner": {
            "has_active_tradition": "tr_domination_adopt_void"
          }
        },
        "alloys": -1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_hab_major_capital"
  },
  "building_hall_judgment": {
    "name": "Hall of Judgment",
    "description": "A massive complex dedicated to courts and law enforcement.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "planet_modifier": {
      "job_enforcer_add": 5
    },
    "potential": {
      "owner": {
        "is_regular_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "key": "building_hall_judgment"
  },
  "building_heritage_site": {
    "name": "Heritage Site",
    "description": "An area dedicated to the early history of our empire and its people.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_site",
      "building_simulation_2",
      "building_galactic_memorial_2",
      "building_sensorium_2"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "NOR": {
          "is_gestalt": true,
          "is_megacorp": true
        }
      }
    },
    "prerequisites": [
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 2,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b2_minerals"
      }
    },
    "upgrades": [
      "building_hypercomms_forum"
    ],
    "key": "building_heritage_site"
  },
  "building_hive_capital": {
    "name": "Hive Core",
    "description": "The organizational core from which the Hive Mind coordinates planetside functions.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_machine_capital",
      "building_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 8,
      "job_synapse_drone_add": 2,
      "job_maintenance_drone_add": 2,
      "job_patrol_drone_add": 1,
      "planet_max_buildings_add": "@buildings_t2"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_hive_empire": true,
          "is_country_type": "swarm"
        },
        "is_fallen_empire": false
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_hive_major_capital"
    ],
    "key": "building_hive_capital"
  },
  "building_hive_cluster": {
    "name": "Synaptic Clusters",
    "description": "Synaptic hive nodes networked and clustered together produce maximum meganeuron transmission per available surface area, strengthening the organization of the will to its drones.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_2",
      "building_holotemple",
      "building_network_junction"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": "@b2_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_hive_empire": true
      }
    },
    "prerequisites": [
      "tech_hive_cluster"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "has_edict": "synaptic_reinforcement"
          }
        },
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_edict": "synaptic_reinforcement"
        }
      },
      "job_maintenance_drone_add": 1
    },
    "upgrades": [
      "building_hive_confluence"
    ],
    "key": "building_hive_cluster"
  },
  "building_hive_confluence": {
    "name": "Confluence of Thought",
    "description": "A massive nervous center of macroscopic neurology, billions of meganeurons fire along vast stretches of roiling protoplasmic fibers in the Confluence, spreading, strengthening, coordinating the will of the Hive.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_3",
      "building_sacred_nexus",
      "building_system_conflux"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": "@b3_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_hive_empire": true
      }
    },
    "prerequisites": [
      "tech_hive_confluence"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "has_edict": "synaptic_reinforcement"
          }
        },
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_edict": "synaptic_reinforcement"
        }
      },
      "job_maintenance_drone_add": 1
    },
    "key": "building_hive_confluence"
  },
  "building_hive_major_capital": {
    "name": "Hive Nexus",
    "description": "A sprawling capital complex from which the Hive Mind focuses planetary organization, coordination, and planning.",
    "allow": [
      "num_pops",
      ">=",
      "25"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 12,
      "job_synapse_drone_add": 3,
      "job_maintenance_drone_add": 5,
      "job_patrol_drone_add": 2,
      "planet_max_buildings_add": "@buildings_t4"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_hive_empire": true,
          "is_country_type": "swarm"
        },
        "is_fallen_empire": false
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_imperial_hive_capital"
    ],
    "key": "building_hive_major_capital"
  },
  "building_hive_node": {
    "name": "Synaptic Nodes",
    "description": "A center of massive, macroscopic synapses, these nodes - tended to and assisted by specialized drones - receive and transmit the will of the Hive.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_1",
      "building_temple",
      "building_uplink_node"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": "@b1_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_hive_empire": true
      }
    },
    "prerequisites": [
      "tech_hive_node"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "trigger": {
          "exists": "owner",
          "owner": {
            "has_edict": "synaptic_reinforcement"
          }
        },
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_edict": "synaptic_reinforcement"
        }
      },
      "job_maintenance_drone_add": 1
    },
    "upgrades": [
      "building_hive_cluster"
    ],
    "key": "building_hive_node"
  },
  "building_hive_warren": {
    "name": "Hive Warren",
    "description": "A vast warren offers shelter for many Drones to rest.",
    "allow": {
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "convert_to": [
      "building_luxury_residence",
      "building_drone_storage",
      "building_communal_housing"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 5
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_hive_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "upgrades": [
      "building_expanded_warren"
    ],
    "key": "building_hive_warren"
  },
  "building_holo_theatres": {
    "name": "Holo-Theatres",
    "description": "The latest in holographic entertainment. Entire worlds built out of photons and energy fields.",
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_holo_entertainment"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_warrior_culture"
        }
      },
      "modifier": {
        "job_duelist_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_hyper_entertainment_forum"
    ],
    "key": "building_holo_theatres"
  },
  "building_holotemple": {
    "name": "Holotemple",
    "description": "An enhanced form of its rough-hewn predecessors, the latest in Spiritualist technology creates a mutable reality inside the Holotemple - all for deeper meditation and more intense devotion.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_2",
      "building_hive_cluster",
      "building_network_junction"
    ],
    "planet_modifier": {
      "job_priest_add": 2,
      "pop_ethic_spiritualist_attraction_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_holographic_rituals"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": 2
      }
    },
    "upgrades": [
      "building_sacred_nexus"
    ],
    "key": "building_holotemple"
  },
  "building_hospital": {
    "name": "Cyto-Revitalization Centers",
    "description": "Cyto-Revitalization Centers can offer advanced medical treatments to a large population. Treatments on a cellular level lead to a significantly healthier and longer-living population.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "planet_modifier": {
      "job_healthcare_add": "@b2_jobs"
    },
    "potential": {
      "has_building": "building_clinic"
    },
    "prerequisites": [
      "tech_frontier_hospital"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "key": "building_hospital"
  },
  "building_hydroponics_farm": {
    "name": "Hydroponics Farms",
    "description": "Hydroponics Farms produce nutrient-rich vegetable matter tailored for consumption by local Pops.",
    "allow": {
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "country_uses_food": true,
          "is_ai": false
        }
      },
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_hydroponics"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true,
          "is_fallen_empire_spiritualist": false,
          "is_anglers_empire": true,
          "PREV": {
            "planet": {
              "is_wet": true
            }
          }
        }
      },
      "modifier": {
        "job_angler_add": 1
      }
    },
    "key": "building_hydroponics_farm"
  },
  "building_hyper_entertainment_forum": {
    "name": "Hyper-Entertainment Forums",
    "description": "These massive entertainment complexes is where dreams come true. Shopping malls, restaurants, amusement parks, virtual arcades, and more. You dream it - we are it!",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "potential": {
      "has_building": "building_holo_theatres"
    },
    "prerequisites": [
      "tech_hyper_entertainment_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_warrior_culture"
        }
      },
      "modifier": {
        "job_duelist_add": "@b2_jobs"
      }
    },
    "key": "building_hyper_entertainment_forum"
  },
  "building_hypercomms_forum": {
    "name": "Hypercomms Forum",
    "description": "An immense facility equipped with avant-garde interpersonal communications equipment, the Forum allows for the exchange of multisensory ideas in casual discussions and rapid consensus-forming in debates.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_forum",
      "building_simulation_3",
      "building_galactic_memorial_3",
      "building_sensorium_3"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "NOR": {
          "is_gestalt": true,
          "is_megacorp": true
        }
      }
    },
    "prerequisites": [
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 3,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b3_minerals"
      }
    },
    "key": "building_hypercomms_forum"
  },
  "building_illicit_research_labs": {
    "name": "Illicit Research Labs",
    "description": "All manner of highly illegal research and development is carried out in these secret laboratories.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_crime_add": 40,
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "physics_research": 6,
        "engineering_research": 6,
        "society_research": 6
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_illicit_research_labs"
  },
  "building_imperial_capital": {
    "name": "Imperial Palace",
    "description": "A massive palace complex fit for the greatest empire history has ever seen. If there is a bright center to the galaxy, this is it.",
    "allow": [
      "num_pops",
      ">=",
      "50"
    ],
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_system_capital",
      "building_system_capital",
      "building_hab_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "job_enforcer_add": 5,
      "planet_housing_add": 18,
      "planet_amenities_add": 18,
      "planet_max_buildings_add": 11,
      "planet_max_branch_office_buildings_add": 4
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "is_galactic_emperor": true
      },
      "planet": {
        "is_capital": true
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_imperial_capital"
  },
  "building_imperial_concession_port": {
    "name": "Imperial Concession Port",
    "description": "This concession port enjoys extraterritorial rights and is legally considered the sovereign territory of the Galactic Imperium. It is exempt from local taxes and regulations.",
    "base_buildtime": "@b3_time",
    "planet_modifier": {
      "branch_office_value_mult": 0.25
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "OR": {
          "has_modifier": "imperial_charter",
          "has_civic": "civic_galactic_sovereign_megacorp"
        }
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 1000
      },
      "produces": {
        "energy": 8
      }
    },
    "key": "building_imperial_concession_port"
  },
  "building_imperial_hive_capital": {
    "name": "Imperial Complex",
    "description": "From this massive structure, the Hive Mind governs the Galactic Imperium. This is where the fate of the galaxy is decided.",
    "allow": [
      "num_pops",
      ">=",
      "50"
    ],
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_system_capital",
      "building_system_capital",
      "building_hab_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 20,
      "planet_amenities_add": 20,
      "job_synapse_drone_add": 5,
      "job_maintenance_drone_add": 7,
      "job_patrol_drone_add": 4,
      "planet_max_buildings_add": 11,
      "planet_max_branch_office_buildings_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_hive_empire": true,
          "is_country_type": "swarm"
        },
        "is_galactic_emperor": true
      },
      "planet": {
        "is_capital": true
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_imperial_hive_capital"
  },
  "building_imperial_machine_capital": {
    "name": "Imperial Center",
    "description": "This colossal complex is the administrative heart of the Galactic Imperium. Thousands of AIs are constantly processing and evaluating the current state of the galaxy.",
    "allow": [
      "num_pops",
      ">=",
      "50"
    ],
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_system_capital",
      "building_system_capital",
      "building_hab_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 18,
      "planet_amenities_add": 20,
      "job_replicator_add": 4,
      "job_patrol_drone_add": 5,
      "job_maintenance_drone_add": 6,
      "planet_max_buildings_add": 11,
      "planet_max_branch_office_buildings_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        },
        "is_galactic_emperor": true
      },
      "planet": {
        "is_capital": true
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_imperial_machine_capital"
  },
  "building_institute": {
    "name": "Research Institute",
    "description": "The Research Institute is a massive complex, gathering the cutting edges of disparate fields together for unprecedented synergy, improving the research output of the whole planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "research",
    "convert_to": [
      "building_supercomputer"
    ],
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.15,
      "job_head_researcher_add": 1
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_global_research_initiative"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "key": "building_institute"
  },
  "building_junkheap": {
    "name": "Junkheap",
    "description": "A rusting, irradiated jumble of collapsed infrastructure, destroyed buildings, and decaying wreckage from an unknown civilization.",
    "can_build": false,
    "convert_to": [
      "building_machine_capital",
      "building_capital",
      "building_hive_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 15,
      "planet_amenities_add": 20,
      "job_ratling_scavenger_add": 10
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_country_type": "ratlings"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "upgrades": [],
    "key": "building_junkheap"
  },
  "building_katzen_foundry": {
    "name": "Katzen Megafoundry",
    "description": "The Katzen Megafoundry produces large quantities of usable alloys with the unfortunate side-effect of damaging its planet's climate.",
    "can_build": false,
    "category": "manufacturing",
    "planet_modifier": {
      "pop_environment_tolerance": -0.075
    },
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_fabricator_add": 8
      }
    },
    "key": "building_katzen_foundry",
    "isGE": true
  },
  "building_katzen_science": {
    "name": "Katzen Research Center",
    "description": "A large facility where researchers work tirelessly to push the boundaries of Katzen science (reportedly the ",
    "can_build": false,
    "category": "research",
    "planet_modifier": {
      "pop_happiness": -0.025
    },
    "potential": {
      "always": false
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": 8
      }
    },
    "key": "building_katzen_science",
    "isGE": true
  },
  "building_katzen_theater": {
    "name": "Katzen Entertainment Complex",
    "description": "These vast complexes provide citizens with large quantities of Katzen-approved mass media which primarily focuses on warfare and militarism.",
    "can_build": false,
    "category": "amenity",
    "planet_modifier": {
      "planet_amenities_add": 24,
      "pop_ethic_militarist_attraction_mult": 2
    },
    "potential": {
      "always": false
    },
    "key": "building_katzen_theater",
    "isGE": true
  },
  "building_luxury_residence": {
    "name": "Luxury Residences",
    "description": "Intricately designed residential towers with luxurious apartments. Advanced zero-g technology is the only thing keeping the more outlandish terrace designs from collapsing.",
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "convert_to": [
      "building_drone_storage",
      "building_hive_warren",
      "building_communal_housing"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 5
    },
    "potential": {
      "OR": {
        "NOT": {
          "is_planet_class": "pc_habitat"
        },
        "has_planet_flag": "advanced_habitat"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "NOT": {
          "has_valid_civic": "civic_shared_burden"
        }
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "upgrades": [
      "building_paradise_dome"
    ],
    "key": "building_luxury_residence"
  },
  "building_machine_assembly_complex": {
    "name": "Machine Assembly Complex",
    "description": "An advanced assembly plant where new units are constructed.",
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "pop_assembly",
    "convert_to": [
      "building_robot_assembly_plant"
    ],
    "planet_modifier": {
      "job_replicator_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true
      }
    },
    "prerequisites": [
      "tech_mega_assembly"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "key": "building_machine_assembly_complex"
  },
  "building_machine_assembly_plant": {
    "name": "Machine Assembly Plants",
    "description": "A production line assembly plant where new units are constructed.",
    "allow": {
      "hidden_trigger": {
        "OR": {
          "owner": {
            "is_ai": false
          },
          "NAND": {
            "free_district_slots": 0
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "convert_to": [
      "building_robot_assembly_plant"
    ],
    "planet_modifier": {
      "job_replicator_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "upgrades": [
      "building_machine_assembly_complex"
    ],
    "key": "building_machine_assembly_plant"
  },
  "building_machine_capital": {
    "name": "Administrative Array",
    "description": "A semi-autonomous computer network that handles the various administrative functions on a planet.",
    "allow": [
      "num_pops",
      ">=",
      "10"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_colony_shelter",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 10,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 1,
      "job_maintenance_drone_add": 3,
      "planet_max_buildings_add": "@buildings_t2"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire",
          "AND": {
            "exists": "event_target:mechanocalibrator_country",
            "is_same_value": "event_target:mechanocalibrator_country"
          }
        },
        "is_fallen_empire": false
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_machine_major_capital"
    ],
    "key": "building_machine_capital"
  },
  "building_machine_major_capital": {
    "name": "Planetary Processor",
    "description": "A powerful administrative computer that has been designed to manage and oversee the various functions of a complex planetary settlement.",
    "allow": [
      "num_pops",
      ">=",
      "25"
    ],
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 8,
      "planet_amenities_add": 12,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 2,
      "job_maintenance_drone_add": 4,
      "planet_max_buildings_add": "@buildings_t3"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        },
        "is_fallen_empire": false
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_2"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_machine_system_capital"
    ],
    "key": "building_machine_major_capital"
  },
  "building_machine_system_capital": {
    "name": "Primary Nexus",
    "description": "The administrative heart of the system. Hundreds of AIs process requests and manage the minute but critical details that are involved in running an efficient interstellar civilization.",
    "allow": [
      "num_pops",
      ">=",
      "50"
    ],
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_major_capital",
      "building_machine_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 12,
      "planet_amenities_add": 18,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 3,
      "job_maintenance_drone_add": 5,
      "planet_max_buildings_add": "@buildings_t4"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        },
        "is_fallen_empire": false
      }
    },
    "prerequisites": [
      "tech_galactic_administration"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_imperial_machine_capital"
    ],
    "key": "building_machine_system_capital"
  },
  "building_maintenance_depot": {
    "name": "Maintenance Depots",
    "description": "Workshops where maintenance of machinery and structures is planned, managed, and executed.",
    "base_buildtime": 240,
    "can_build": false,
    "category": "amenity",
    "planet_modifier": {
      "job_maintenance_drone_add": 5
    },
    "potential": {
      "owner": {
        "is_gestalt": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_maintenance_depot"
  },
  "building_major_capital": {
    "name": "Planetary Capital",
    "description": "A sprawling complex of bureaucratic structures that acts as the administrative center for a major colony.",
    "allow": [
      "num_pops",
      ">=",
      "25"
    ],
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_resort_major_capital",
      "building_slave_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "job_enforcer_add": 2,
      "planet_housing_add": 8,
      "planet_amenities_add": 8,
      "planet_max_buildings_add": "@buildings_t3",
      "planet_max_branch_office_buildings_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "is_fallen_empire": false
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_2"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_system_capital"
    ],
    "key": "building_major_capital"
  },
  "building_master_archive": {
    "name": "Master Archive",
    "description": "The collected knowledge of five galactic ages is supposedly stored here, but the ability to operate the exceedingly complex and arcane data retrieval system has long since been lost. Still, whatever scraps of data can be obtained are often invaluable.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "physics_research": 100,
        "society_research": 100,
        "engineering_research": 100
      },
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": 20
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_fallen_empire": true
        }
      },
      "job_fe_archivist_add": 10
    },
    "upgrades": [],
    "key": "building_master_archive"
  },
  "building_military_academy": {
    "name": "Military Academy",
    "description": "Military Academies improve local recruitment rates and offer a higher standard of training.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "army",
    "convert_to": [
      "building_dread_encampment"
    ],
    "potential": {
      "buildings_simple_allow": true,
      "exists": "owner",
      "owner": {
        "NOT": {
          "has_valid_civic": "civic_reanimated_armies"
        }
      }
    },
    "prerequisites": [
      "tech_centralized_command"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": "@b1_jobs"
      }
    },
    "key": "building_military_academy"
  },
  "building_military_contractors": {
    "name": "Mercenary Liaison Office",
    "description": "This office allows locals to sign up for the exciting life of a corporate soldier of fortune. Generous compensation, limited health insurance and stories of adventure ensure a steady stream of recruits.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_soldier_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_military_contractors"
  },
  "building_mineral_purification_hub": {
    "name": "Mineral Purification Hubs",
    "description": "Massive hubs where minerals are received and then shuttled to arrays of purifiers.",
    "allow": {
      "has_upgraded_capital": true,
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "resource",
    "prerequisites": [
      "tech_mineral_purification_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 300,
        "alloys": 150
      },
      "upkeep": {
        "energy": 2,
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_shattered_ring_habitable"
        }
      },
      "modifier": {
        "district_mining_max": 4
      }
    },
    "key": "building_mineral_purification_hub"
  },
  "building_mineral_purification_plant": {
    "name": "Mineral Purification Plants",
    "description": "Minerals that have passed through these purifiers are of the highest quality.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "planet_modifier": {
      "planet_miners_minerals_produces_add": 1
    },
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      },
      "NOR": {
        "is_planet_class": "pc_cybrex"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_any_mining_district": true
      }
    },
    "prerequisites": [
      "tech_mineral_purification_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "trigger": {
          "owner": {
            "is_robot_empire": true
          }
        },
        "minerals": 100,
        "alloys": 100
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        },
        "NOR": {
          "is_planet_class": "pc_shattered_ring_habitable"
        }
      },
      "modifier": {
        "district_mining_max": 2
      }
    },
    "upgrades": [
      "building_mineral_purification_hub"
    ],
    "key": "building_mineral_purification_plant"
  },
  "building_ministry_production": {
    "name": "building_ministry_production",
    "description": "building_ministry_production",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "planet_modifier": {
      "job_politician_add": 1,
      "planet_metallurgists_produces_mult": 0.15,
      "planet_artisans_produces_mult": 0.15,
      "planet_cultivators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_global_production_strategy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "key": "building_ministry_production",
    "isGE": true
  },
  "building_mote_harvesters": {
    "name": "Mote Harvesting Traps",
    "description": "These intricate facilities trap Volatile Motes within energy fields, funneling them into special containment zones below ground where they can be stabilized and harvested.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "potential": {
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_mine_volatile_motes"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_mote_harvesting_drone_add": 1
      }
    },
    "key": "building_mote_harvesters"
  },
  "building_nanite_transmuter": {
    "name": "Nanite Transmuter",
    "description": "This factory mass-produces a variety of rare resources using extremely advanced nanites. A Nanite deficit will halt production.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "category": "manufacturing",
    "potential": {
      "exists": "owner",
      "OWNER": {
        "OR": {
          "has_monthly_income": {
            "resource": "nanites"
          },
          "AND": {
            "is_ai": false,
            "has_resource": {
              "type": "nanites"
            }
          }
        }
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_nanite_transmutation"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "produces": {
        "trigger": {
          "owner": {
            "NOT": {
              "has_deficit": "nanites"
            }
          }
        },
        "rare_crystals": 2,
        "volatile_motes": 2,
        "exotic_gases": 2
      },
      "upkeep": {
        "nanites": 1,
        "energy": 5
      }
    },
    "key": "building_nanite_transmuter"
  },
  "building_nano_forge": {
    "name": "Auto-Forge",
    "description": "The colossal nano-replicator bays convert raw materials into advanced alloys with miraculous efficiency.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": [],
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "nano_forge_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "alloys": 25
      },
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "minerals": 50,
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_nano_forge"
  },
  "building_necrophage_elevation_chamber": {
    "name": "Chamber of Elevation",
    "description": "Those awaiting transformation spend their days studying the practices and rituals of the [This.Owner.GetSpeciesNamePlural] in the comfort of the Chamber of Elevation.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "NO_CULTURE_SHOCK",
        "NOT": {
          "has_modifier": "planet_culture_shock"
        }
      },
      "if": {
        "limit": {
          "owner": {
            "is_hive_empire": false
          }
        },
        "NOT": {
          "is_planet_class": "pc_hive"
        }
      },
      "NOT": {
        "is_planet_class": "pc_machine"
      },
      "hidden_trigger": {
        "if": {
          "limit": {
            "owner": {
              "is_ai": true
            }
          },
          "any_owned_species": {
            "species_can_be_necrophaged": true
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "planet_modifier": {
      "job_necro_apprentice_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "has_origin": "origin_necrophage",
        "has_trait": "trait_necrophage",
        "NOR": {
          "has_valid_civic": "civic_hive_devouring_swarm"
        }
      }
    },
    "prerequisites": [],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": [
        "num_organic_pops_per_year",
        ">=",
        "0.3"
      ],
      "job_necro_apprentice_add": 1
    },
    "upgrades": [
      "building_necrophage_house_of_apotheosis"
    ],
    "key": "building_necrophage_elevation_chamber"
  },
  "building_necrophage_house_of_apotheosis": {
    "name": "House of Apotheosis",
    "description": "A house of untold splendor where those awaiting their apotheosis as [This.Owner.GetSpeciesNamePlural] can spend their final days in their original forms in comfort.",
    "allow": {
      "hidden_trigger": {
        "if": {
          "limit": {
            "owner": {
              "is_ai": true
            }
          },
          "any_owned_species": {
            "species_can_be_necrophaged": true
          }
        }
      }
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "pop_assembly",
    "planet_modifier": {
      "job_necro_apprentice_add": 6
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "has_origin": "origin_necrophage",
        "has_trait": "trait_necrophage",
        "NOR": {
          "has_valid_civic": "civic_hive_devouring_swarm"
        },
        "is_ai": false
      }
    },
    "prerequisites": [
      "tech_glandular_acclimation"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "is_planet_class": "pc_hive",
        "exists": "owner",
        "owner": {
          "is_hive_empire": true
        }
      },
      "job_necro_apprentice_add": 4
    },
    "key": "building_necrophage_house_of_apotheosis"
  },
  "building_negative_mass_factory_1": {
    "name": "Prototype Energy Anti-Transmuter",
    "description": "Advances in abstract physics allow us the development and construction of experimental facilities for the generation of the exotic negative mass. While being able to produce negative mass, the Energy Anti-Transmuter is still in a prototype state and its production efficency and yield is very low.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b4_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_nm_utilization_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b2_rare_cost",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true
        }
      },
      "modifier": {
        "job_ehof_energy_converter_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_negative_mass_factory_2"
    ],
    "key": "building_negative_mass_factory_1",
    "isGE": true
  },
  "building_negative_mass_factory_2": {
    "name": "Negative Mass Transmuter",
    "description": "Being the next step in negative mass production, the Negative Mass Transmuter is an advanced form of the Energy Anti-Transmuter with increased efficency and yield. However, energy-to-negative-energy conversion is still far from efficient and will remain so, until we figure out how to perfectly convert energy between the two states.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 1000,
    "can_build": false,
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_nm_utilization_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals",
        "exotic_gases": "@b3_rare_cost",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_regular_empire": true
        }
      },
      "modifier": {
        "job_ehof_energy_converter_add": "@b2_jobs"
      }
    },
    "key": "building_negative_mass_factory_2",
    "isGE": true
  },
  "building_network_junction": {
    "name": "Network Junction",
    "description": "This powerful transceiver increases the bandwidth of the signals being continuously sent between the many different systems operating across our empire.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_bureaucratic_2",
      "building_holotemple",
      "building_hive_cluster",
      "building_sensorium_2"
    ],
    "planet_modifier": {
      "job_coordinator_add": "@b2_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true,
        "NOT": {
          "has_valid_civic": "civic_machine_servitor"
        }
      }
    },
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "upgrades": [
      "building_system_conflux"
    ],
    "key": "building_network_junction"
  },
  "building_noble_estates": {
    "name": "Noble Estates",
    "description": "Palaces and mansions, resplendent in their glory, owned by the nobility. The surrounding countryside and the peasants that inhabit it are theirs as well.",
    "allow": {
      "has_upgraded_capital": true,
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b2_time",
    "category": "government",
    "planet_modifier": {
      "job_noble_add": 1,
      "planet_housing_add": 1
    },
    "potential": {
      "exists": "owner",
      "planet": {
        "or": {
          "has_building": "building_noble_estates",
          "owner": {
            "is_ai": false
          }
        }
      },
      "owner": {
        "has_valid_civic": "civic_aristocratic_elite"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_noble_estates"
  },
  "building_nourishment_center": {
    "name": "Nourishment Center",
    "description": "If it exists as a flavor, it can be replicated here.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": [],
    "potential": {
      "custom_tooltip": {
        "exists": "owner",
        "OR": {
          "owner": {
            "check_variable": {
              "which": "nourishment_center_build_count"
            }
          }
        },
        "fail_text": "ancrel.10004.failtext"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "food": 100
      },
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 20
      }
    },
    "upgrades": [],
    "key": "building_nourishment_center"
  },
  "building_nuumismatic_shrine": {
    "name": "Numistic Shrine",
    "description": "A shrine devoted to the worship of Numa, goddess of fortune.",
    "base_buildtime": 180,
    "planet_modifier": {
      "job_merchant_add": 2,
      "job_priest_add": 2
    },
    "potential": {
      "owner": {
        "has_country_flag": "nuumismatic_shrine"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "cost": {
        "minerals": 1000
      },
      "category": "planet_buildings"
    },
    "key": "building_nuumismatic_shrine"
  },
  "building_offspring_nest": {
    "name": "Offspring Nest",
    "description": "This fortified nest safely harbors the local Offspring while also accelerating growth for the rest of the nearby hive.",
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "convert_to": [
      "building_spawning_pool"
    ],
    "planet_modifier": {
      "job_offspring_drone_add": 1
    },
    "potential": {
      "owner": {
        "has_origin": "origin_progenitor_hive"
      },
      "or": {
        "num_buildings": {
          "type": "any"
        },
        "owner": {
          "is_ai": false
        }
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_offspring_nest"
  },
  "building_organic_paradise": {
    "name": "Organic Paradise",
    "description": "An AI-controlled artificial paradise designed to satisfy every need a sapient organic being might have, just so long as it does not express a need for self-determination. The organics within have their housing needs completely fulfilled.",
    "base_buildtime": "@b2_time",
    "can_build": false,
    "convert_to": [
      "building_paradise_dome",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "job_bio_trophy_add": 20,
      "job_artisan_drone_add": 2,
      "job_maintenance_drone_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "has_valid_civic": "civic_machine_servitor"
      }
    },
    "prerequisites": [
      "tech_paradise_dome"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "key": "building_organic_paradise"
  },
  "building_organic_sanctuary": {
    "name": "Organic Sanctuary",
    "description": "This sanctuary provides a sealed environment where organics can thrive in a safe and above all controlled manner. The organics within have their housing needs completely fulfilled.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_luxury_residence",
      "building_communal_housing"
    ],
    "planet_modifier": {
      "job_bio_trophy_add": 10,
      "job_artisan_drone_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "has_valid_civic": "civic_machine_servitor"
      },
      "OR": {
        "owner": {
          "is_ai": false
        },
        "has_upgraded_capital": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "upgrades": [
      "building_organic_paradise"
    ],
    "key": "building_organic_sanctuary"
  },
  "building_overseer_homes": {
    "name": "Overseer Residences",
    "description": "These homes are reserved for the relatively privileged slave overseers.",
    "base_buildtime": 240,
    "category": "amenity",
    "planet_modifier": {
      "planet_housing_add": 2,
      "job_slave_overseer_add": 2
    },
    "potential": {
      "has_modifier": "slave_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "key": "building_overseer_homes"
  },
  "building_paradise_dome": {
    "name": "Paradise Dome",
    "description": "A fully enclosed habitation dome with a self-contained ecosystem, a veritable private paradise for those rich or fortunate enough to live there.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "amenity",
    "convert_to": [
      "building_organic_paradise",
      "building_drone_megastorage",
      "building_expanded_warren",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "planet_housing_add": 6,
      "planet_amenities_add": 10
    },
    "potential": {
      "has_building": "building_luxury_residence",
      "OR": {
        "NOT": {
          "is_planet_class": "pc_habitat"
        },
        "AND": {
          "has_planet_flag": "advanced_habitat",
          "exists": "owner",
          "owner": {
            "has_ascension_perk": "ap_voidborn"
          }
        }
      }
    },
    "prerequisites": [
      "tech_paradise_dome"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_active_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_paradise_dome"
  },
  "building_pirate_haven": {
    "name": "Pirate Free Haven",
    "description": "A secluded and hidden city on the planet's surface, where pirates and other lowlifes can congregate to repair their ships and trade stories.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": 40,
      "job_soldier_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_pirate_haven"
  },
  "building_planetary_shield_generator": {
    "name": "Planetary Shield Generator",
    "description": "Generating a strong energy shield within a planetary atmosphere is a greater challenge than in the vacuum of space, but it offers a potent defense against orbital bombardment.",
    "allow": {
      "has_upgraded_capital": true,
      "hidden_trigger": {
        "owner": {
          "is_ai": false
        }
      }
    },
    "base_buildtime": "@b3_time",
    "category": "army",
    "planet_modifier": {
      "planet_orbital_bombardment_damage": -0.5
    },
    "prerequisites": [
      "tech_planetary_shield_generator"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "key": "building_planetary_shield_generator"
  },
  "building_posthumous_employment_center": {
    "name": "Posthumous Employment Center",
    "description": "At the Posthumous Employment Center, carcasses bereft of consciousness can find new purpose and a new opportunity to pay off their debts.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "planet_modifier": {
      "job_reassigner_add": 1
    },
    "potential": {
      "exists": "owner",
      "OR": {
        "owner": {
          "is_ai": false
        },
        "NAND": {
          "free_district_slots": 0
        }
      },
      "owner": {
        "is_regular_empire": true,
        "has_valid_civic": "civic_permanent_employment"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "key": "building_posthumous_employment_center"
  },
  "building_precinct_house": {
    "name": "Precinct Houses",
    "description": "Monuments to law and order. Enforcers are based here.",
    "allow": {
      "hidden_trigger": {
        "OR": {
          "owner": {
            "is_ai": false
          },
          "AND": {
            "NOR": {
              "AND": {
                "has_building": "building_precinct_house",
                "owner": {
                  "has_technology": "tech_colonial_centralization"
                }
              },
              "has_building": "building_hall_judgment",
              "num_buildings": {
                "type": "building_precinct_house",
                "value": 3
              }
            }
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "government",
    "planet_modifier": {
      "job_enforcer_add": 2
    },
    "potential": {
      "owner": {
        "is_regular_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "upgrades": [
      "building_hall_judgment"
    ],
    "key": "building_precinct_house"
  },
  "building_primitive_capital": {
    "name": "Regional Capitals",
    "description": "The regional capital buildings of the various nation-states inhabiting this primitive world.",
    "can_build": false,
    "convert_to": [
      "building_machine_capital",
      "building_capital",
      "building_hive_capital"
    ],
    "planet_modifier": {
      "job_primitive_bureaucrat_add": 2,
      "job_primitive_warrior_2_add": 2,
      "job_primitive_researcher_2_add": 2,
      "job_primitive_priest_2_add": 2,
      "planet_housing_add": 5,
      "planet_amenities_add": 25,
      "planet_crime_add": -20
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_primitive_capital"
  },
  "building_primitive_dwellings": {
    "name": "Primitive Dwellings",
    "description": "These small buildings provide a minimal amount of shelter, but they keep out the worst of the elements.",
    "can_build": false,
    "planet_modifier": {
      "planet_housing_add": 6
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_primitive_dwellings"
  },
  "building_primitive_factory": {
    "name": "Primitive Factory",
    "description": "Primitive, inefficient factories spewing pollution while producing goods.",
    "can_build": false,
    "planet_modifier": {
      "job_primitive_laborer_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_primitive_factory"
  },
  "building_primitive_farm": {
    "name": "Primitive Farms",
    "description": "Primitive farmsteads working the soil for meager returns.",
    "can_build": false,
    "convert_to": [
      "building_primitive_mine"
    ],
    "planet_modifier": {
      "job_primitive_farmer_add": 10
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        },
        "is_lithoid_empire": false
      }
    },
    "upgrades": [],
    "key": "building_primitive_farm"
  },
  "building_primitive_mine": {
    "name": "Primitive Mine",
    "description": "Primitive mining tunnels that snake through the ground.",
    "can_build": false,
    "planet_modifier": {
      "job_primitive_miner_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_lithoid_empire": true
        }
      },
      "job_primitive_miner_add": 8
    },
    "upgrades": [],
    "key": "building_primitive_mine"
  },
  "building_primitive_power_plant": {
    "name": "Primitive Power Plant",
    "description": "A primitive and somewhat unreliable power plant that relies on coal or early atomic power.",
    "can_build": false,
    "planet_modifier": {
      "job_primitive_technician_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_primitive_power_plant"
  },
  "building_private_mining_consortium": {
    "name": "Private Mining Consortium",
    "description": "A private mineral extraction company owned by a megacorporation. It employs local miners to access the planet's wealth.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_miner_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": false
      },
      "is_artificial": false,
      "NOR": {
        "is_planet_class": "pc_city"
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "minerals": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_private_mining_consortium"
  },
  "building_private_research_initiative": {
    "name": "Private Research Enterprises",
    "description": "In these state-of-the-art facilities, private tech-enterprises carry out important research and development on behalf of their parent company.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "physics_research": 6,
        "engineering_research": 6,
        "society_research": 6
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_private_research_initiative"
  },
  "building_private_shipyards": {
    "name": "Private Military Industries",
    "description": "These planet-based corporate factories produce and assemble a variety of components that are vital in starship construction.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "alloys": 3
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_private_shipyards"
  },
  "building_production_center": {
    "name": "building_production_center",
    "description": "building_production_center",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "planet_modifier": {
      "planet_metallurgists_produces_mult": 0.15,
      "planet_artisans_produces_mult": 0.15,
      "planet_cultivators_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_gestalt": true
      }
    },
    "prerequisites": [
      "tech_global_production_strategy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "volatile_motes": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true,
          "is_catalytic_empire": true
        }
      },
      "job_catalytic_drone_add": 1
    },
    "key": "building_production_center",
    "isGE": true
  },
  "building_psi_corps": {
    "name": "Psi Corps",
    "description": "Psi-gifted individuals are brought from all across to our empire to a place where they are able to hone their abilities.nn§YThe Psi Corps is your friend. Trust the Corps.§!",
    "allow": {
      "has_major_upgraded_capital": true,
      "buildings_simple_allow": true
    },
    "base_buildtime": "@b2_time",
    "category": "government",
    "planet_modifier": {
      "job_telepath_add": 2,
      "planet_stability_add": 5
    },
    "potential": {
      "host_has_dlc": "Utopia",
      "owner": {
        "OR": {
          "has_ascension_perk": "ap_mind_over_matter",
          "has_origin": "origin_shroudwalker_apprentice"
        }
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "key": "building_psi_corps"
  },
  "building_public_relations_office": {
    "name": "Public Relations Firm",
    "description": "Misconceptions and suspicions are always floating around any large corporate entity. It is in the public's interest to hear out all sides of any dispute, and this PR firm makes it their business to get their employer's point across.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "unity": 6
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_public_relations_office"
  },
  "building_ranger_lodge": {
    "name": "Ranger Lodge",
    "description": "The first step to live more in tune with nature is to ensure that nature is still around. Making sure none of the colonists impact the natural beauty is essential. The world must remain pure.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "no_free_district_for_ranger_lodge",
        "planet": {
          "num_free_districts": {
            "type": "any"
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "amenity",
    "planet_modifier": {
      "job_ranger_add": "@b1_jobs",
      "deposit_blockers_natural_unity_produces_add": 2
    },
    "potential": {
      "always": false,
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_regular_empire": true,
        "has_valid_civic": "civic_environmentalist"
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      },
      "is_artificial": false
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_galactic_community_member": true,
          "is_active_resolution": "resolution_ecology_paradise_initiative"
        }
      },
      "deposit_blockers_natural_unity_produces_add": 1
    },
    "key": "building_ranger_lodge"
  },
  "building_refinery": {
    "name": "Refinery Build Speed",
    "description": "Exotic Gas Refineries",
    "base_buildtime": "@b2_time",
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_exotic_gases"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 3
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_gas_refiner_drone_add": 1
      }
    },
    "key": "building_refinery"
  },
  "building_research_lab_1": {
    "name": "Research Labs",
    "description": "Research Labs provide the basic facilities for general research.",
    "base_buildtime": "@b1_time",
    "category": "research",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_research_lab_2"
    ],
    "key": "building_research_lab_1"
  },
  "building_research_lab_2": {
    "name": "Research Complexes",
    "description": "Upgraded research facilities with a very large staff capacity.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "research",
    "prerequisites": [
      "tech_basic_science_lab_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": "@b2_jobs"
      }
    },
    "upgrades": [
      "building_research_lab_3"
    ],
    "key": "building_research_lab_2"
  },
  "building_research_lab_3": {
    "name": "Advanced Research Complexes",
    "description": "These advanced research facilities have the very latest science equipment along with an extremely large staff capacity.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "research",
    "prerequisites": [
      "tech_basic_science_lab_3"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "trigger": {
          "owner": {
            "is_galactic_community_member": true
          },
          "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
          "planet": {
            "has_modifier": "pm_extradimensional_experimentation"
          }
        },
        "sr_zro": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true,
          "is_galactic_community_member": true
        },
        "is_active_resolution": "resolution_galacticstudies_extradimensional_experimentation",
        "has_modifier": "pm_extradimensional_experimentation"
      },
      "modifier": {
        "job_dimensional_portal_researcher_gestalt_add": 1
      }
    },
    "key": "building_research_lab_3"
  },
  "building_resort_capital": {
    "name": "Resort Administration",
    "description": "The central complex from where this planet-wide resort is administrated.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "job_entertainer_add": 1,
      "planet_max_buildings_add": 5,
      "planet_max_branch_office_buildings_add": 1
    },
    "potential": {
      "has_modifier": "resort_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_authority": "auth_corporate"
        }
      },
      "modifier": {
        "job_executive_add": 1
      }
    },
    "upgrades": [
      "building_resort_major_capital"
    ],
    "key": "building_resort_capital"
  },
  "building_resort_major_capital": {
    "name": "Resort Capital-Complex",
    "description": "A huge sprawling complex capable of administrating an even greater number of resorts and tourist attractions.",
    "allow": [
      "num_pops",
      ">=",
      "20"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_entertainer_add": 2,
      "planet_max_buildings_add": 11,
      "planet_max_branch_office_buildings_add": 2
    },
    "potential": {
      "has_modifier": "resort_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_resort_major_capital"
  },
  "building_resource_silo": {
    "name": "Resource Silos",
    "description": "Massive resource silos and storage facilities where large quantities of resources can be safely kept.",
    "allow": {
      "exists": "owner",
      "hidden_trigger": {
        "OR": {
          "owner": {
            "is_ai": false
          },
          "AND": {
            "NOT": {
              "has_building": "building_resource_silo"
            },
            "OR": {
              "owner": {
                "has_ascension_perk": "ap_arcology_project",
                "NOT": {
                  "has_technology": "tech_mega_engineering"
                }
              },
              "is_active_resolution": "resolution_greatergood_universal_prosperity_mandate"
            }
          }
        }
      }
    },
    "base_buildtime": 180,
    "category": "resource",
    "potential": {
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_basic_industry"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_maintenance_drone_add": 1
      }
    },
    "key": "building_resource_silo"
  },
  "building_robot_assembly_plant": {
    "name": "Robot Assembly Plants",
    "description": "High-tech factories where skilled Roboticists assemble the latest robot models.",
    "allow": {
      "hidden_trigger": {
        "OR": {
          "owner": {
            "is_ai": false
          },
          "NAND": {
            "free_district_slots": 0
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "convert_to": [
      "building_machine_assembly_plant"
    ],
    "planet_modifier": {
      "job_roboticist_add": 1
    },
    "potential": {
      "exists": "owner",
      "OR": {
        "owner": {
          "is_ai": false
        },
        "NOT": {
          "exists": "assembling_species"
        },
        "assembling_species": {
          "is_robotic_species": true
        }
      },
      "owner": {
        "is_regular_empire": true,
        "NOT": {
          "has_policy_flag": "robots_outlawed"
        },
        "OR": {
          "is_ai": false,
          "NOT": {
            "has_ascension_perk": "ap_engineered_evolution"
          },
          "is_materialist": true
        }
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_robotic_workers"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "key": "building_robot_assembly_plant"
  },
  "building_sacred_nexus": {
    "name": "Sacred Nexus",
    "description": "The latest developments in field technology allow worshipers to directly experience the divine influence of sacred ground.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_3",
      "building_hive_confluence",
      "building_system_conflux"
    ],
    "planet_modifier": {
      "job_priest_add": 3,
      "pop_ethic_spiritualist_attraction_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_consecration_fields"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": 3
      }
    },
    "key": "building_sacred_nexus"
  },
  "building_sacrificial_temple_1": {
    "name": "Sacrificial Temple",
    "description": "A revered site in which solemn preachers and dedicated pupils pray and work towards each prosperous yet bloody cycle.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_1",
      "building_temple",
      "building_hive_node",
      "building_uplink_node"
    ],
    "planet_modifier": {
      "pop_ethic_spiritualist_attraction_mult": 0.05,
      "job_death_priest_add": 1,
      "job_mortal_initiate_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_death_cult_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "upgrades": [
      "building_sacrificial_temple_2"
    ],
    "key": "building_sacrificial_temple_1"
  },
  "building_sacrificial_temple_2": {
    "name": "Grim Holotemple",
    "description": "Technological enhancements to this consecrated building allow for more rigorous study, and a more tangible sense of devotion to causes beyond its mutable walls.",
    "allow": {
      "exists": "owner",
      "has_upgraded_capital": true,
      "owner": {
        "is_death_cult_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_2",
      "building_holotemple",
      "building_hive_cluster",
      "building_network_junction"
    ],
    "planet_modifier": {
      "pop_ethic_spiritualist_attraction_mult": 0.1,
      "job_death_priest_add": 1,
      "job_mortal_initiate_add": 1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_death_cult_empire": true
      }
    },
    "prerequisites": [
      "tech_holographic_rituals"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals",
        "exotic_gases": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "exotic_gases": "@b3_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": 2
      }
    },
    "upgrades": [
      "building_sacrificial_temple_3"
    ],
    "key": "building_sacrificial_temple_2"
  },
  "building_sacrificial_temple_3": {
    "name": "Temple of Grand Sacrifice",
    "description": "A site of supreme consecration in which multi-sensory immersion fields allow the faithful to honor every [This.Owner.GetAdj] sacrifice - past, present and future.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_hypercomms_forum",
      "building_hive_confluence",
      "building_simulation_3",
      "building_corporate_forum",
      "building_sacred_nexus"
    ],
    "planet_modifier": {
      "pop_ethic_spiritualist_attraction_mult": 0.15,
      "job_death_priest_add": 2,
      "job_mortal_initiate_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_death_cult_empire": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_consecration_fields"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "exotic_gases": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "exotic_gases": "@b3_rare_upkeep",
        "volatile_motes": "@b2_rare_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": 2
      }
    },
    "key": "building_sacrificial_temple_3"
  },
  "building_sensorium_1": {
    "name": "Sensorium Site",
    "description": "To further understand the galaxy, our specialized sensory drones need to experience everything it has to offer.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_autochthon_monument",
      "building_corporate_monument",
      "building_galactic_memorial_1",
      "building_simulation_1"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_hive_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_hive_node"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 1,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b1_minerals"
      }
    },
    "upgrades": [
      "building_sensorium_2"
    ],
    "key": "building_sensorium_1"
  },
  "building_sensorium_2": {
    "name": "Sensorium Center",
    "description": "To further understand the galaxy, our specialized sensory drones need to experience everything it has to offer.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_site",
      "building_heritage_site",
      "building_galactic_memorial_2",
      "building_simulation_2"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_hive_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_hive_cluster"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 2,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b2_minerals"
      }
    },
    "upgrades": [
      "building_sensorium_3"
    ],
    "key": "building_sensorium_2"
  },
  "building_sensorium_3": {
    "name": "Sensorium Complex",
    "description": "To further understand the galaxy, our specialized sensory drones need to experience everything it has to offer.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_forum",
      "building_hypercomms_forum",
      "building_galactic_memorial_3",
      "building_simulation_3"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_hive_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_hive_confluence"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 3,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b3_minerals"
      }
    },
    "key": "building_sensorium_3"
  },
  "building_sentinel_posts": {
    "name": "Sentinel Posts",
    "description": "These are the outposts from which Patrol Drones scan the Consciousness for signs of deviancy and malfunction.",
    "allow": {
      "hidden_trigger": {
        "OR": {
          "owner": {
            "is_ai": false
          },
          "AND": {
            "buildings_simple_allow": true,
            "NOT": {
              "has_building": "building_sentinel_posts"
            }
          }
        }
      }
    },
    "base_buildtime": "@b1_time",
    "category": "government",
    "planet_modifier": {
      "job_patrol_drone_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_gestalt": true
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_sentinel_posts"
  },
  "building_simulation_1": {
    "name": "Simulation Site",
    "description": "To advance our civilization we must run and evaluate complex simulations.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_autochthon_monument",
      "building_corporate_monument",
      "building_galactic_memorial_1",
      "building_sensorium_1"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_machine_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 1,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b1_minerals"
      }
    },
    "upgrades": [
      "building_simulation_2"
    ],
    "key": "building_simulation_1"
  },
  "building_simulation_2": {
    "name": "Simulation Center",
    "description": "To advance our civilization we must run and evaluate complex simulations.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_site",
      "building_heritage_site",
      "building_galactic_memorial_2",
      "building_sensorium_2"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.1
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_machine_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 2,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b2_minerals"
      }
    },
    "upgrades": [
      "building_simulation_3"
    ],
    "key": "building_simulation_2"
  },
  "building_simulation_3": {
    "name": "Simulation Complex",
    "description": "To advance our civilization we must run and evaluate complex simulations.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_corporate_forum",
      "building_hypercomms_forum",
      "building_galactic_memorial_3",
      "building_sensorium_3"
    ],
    "planet_modifier": {
      "planet_jobs_unity_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_machine_empire": true,
        "is_memorialist_empire": false
      }
    },
    "prerequisites": [
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "trigger": {
          "exists": "owner"
        },
        "unity": 3,
        "multiplier": "owner.trigger:num_ascension_perks"
      },
      "cost": {
        "minerals": "@b3_minerals"
      }
    },
    "key": "building_simulation_3"
  },
  "building_slave_capital": {
    "name": "Governor's Palace",
    "description": "The lavish palace from which this Thrall-World is governed.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "job_slave_overseer_add": 2,
      "planet_stability_add": 5,
      "planet_max_buildings_add": 5,
      "planet_max_branch_office_buildings_add": 1
    },
    "potential": {
      "has_modifier": "slave_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_authority": "auth_corporate"
        }
      },
      "modifier": {
        "job_executive_add": 2
      }
    },
    "upgrades": [
      "building_slave_major_capital"
    ],
    "key": "building_slave_capital"
  },
  "building_slave_huts": {
    "name": "Slave Huts",
    "description": "Crude dwellings for the planet's enslaved population.",
    "allow": {
      "buildings_simple_allow": true
    },
    "base_buildtime": 240,
    "category": "amenity",
    "planet_modifier": {
      "planet_housing_add": 8
    },
    "potential": {
      "has_modifier": "slave_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "key": "building_slave_huts"
  },
  "building_slave_major_capital": {
    "name": "Governor's Estates",
    "description": "Sprawling and luxurious palaces that house the ruling elite of the Thrall-World.",
    "allow": [
      "num_pops",
      ">=",
      "20"
    ],
    "base_buildtime": "@b2_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_slave_overseer_add": 4,
      "planet_stability_add": 10,
      "planet_max_buildings_add": 11,
      "planet_max_branch_office_buildings_add": 2
    },
    "potential": {
      "has_modifier": "slave_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_1"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "key": "building_slave_major_capital"
  },
  "building_slave_processing": {
    "name": "Slave Processing Facility",
    "description": "This large and imposing facility is used to process slave labor and extinguish any trace of free will.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b1_time",
    "category": "government",
    "planet_modifier": {
      "planet_jobs_slave_produces_mult": 0.05,
      "pop_cat_slave_political_power": -0.25,
      "planet_resettlement_unemployed_mult": -0.5
    },
    "potential": {
      "owner": {
        "has_policy_flag": "slavery_allowed"
      },
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_neural_implants"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_slave_processing"
  },
  "building_smuggling_rings": {
    "name": "Smuggler's Port",
    "description": "An unauthorized spaceport that remains off the records thanks to secrecy and generous bribes. Large volumes of illegal cargo passes through here every day.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_crime_add": 50,
      "branch_office_value_mult": 0.25,
      "job_merchant_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_smuggling_rings"
  },
  "building_solar_farm": {
    "name": "Solar Farm",
    "description": "A large solar array which generates enough energy to power the planet's systems.",
    "can_build": false,
    "category": "resource",
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_technician_drone_add": 8,
        "job_maintenance_drone_add": 6
      }
    },
    "key": "building_solar_farm",
    "isGE": true
  },
  "building_spawning_pool": {
    "name": "Spawning Pools",
    "description": "Tended by the scientific and gentle care of specialists, these pools stimulate our spawn into faster growth.",
    "base_buildtime": "@b1_time",
    "category": "pop_assembly",
    "convert_to": [
      "building_offspring_nest"
    ],
    "planet_modifier": {
      "job_spawning_drone_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_hive_empire": true,
        "NOT": {
          "has_origin": "origin_progenitor_hive"
        }
      },
      "or": {
        "num_buildings": {
          "type": "any"
        },
        "owner": {
          "is_ai": false
        }
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_spawning_pool"
  },
  "building_stone_palace": {
    "name": "Stone Palaces",
    "description": "Primitive palaces built out of stone, where the local ruling elite resides.",
    "can_build": false,
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_colony_shelter"
    ],
    "planet_modifier": {
      "job_primitive_noble_add": 1,
      "job_primitive_warrior_add": 1,
      "job_primitive_researcher_add": 1,
      "job_primitive_priest_add": 1,
      "planet_housing_add": 3,
      "planet_amenities_add": 25,
      "planet_crime_add": -10
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "steam_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_stone_palace"
  },
  "building_stronghold": {
    "name": "Stronghold",
    "description": "A planetary stronghold housing a substantial garrison force to protect the world from invasion and rebellion.",
    "base_buildtime": 240,
    "category": "army",
    "potential": {
      "buildings_simple_allow": true
    },
    "prerequisites": [
      "tech_planetary_defenses"
    ],
    "resources": {
      "category": "planet_buildings_strongholds",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": "@b1_jobs"
      }
    },
    "upgrades": [
      "building_fortress"
    ],
    "key": "building_stronghold"
  },
  "building_subversive_shrine": {
    "name": "Subversive Shrine",
    "description": "A meeting place for followers of the Subversive Cult to gather and conduct their ceremonies.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_preacher_add": 2,
      "pop_ethic_spiritualist_attraction_mult": 0.25,
      "planet_crime_add": 25
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "has_valid_civic": "civic_gospel_of_the_masses",
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_subversive_shrine"
  },
  "building_supercomputer": {
    "name": "Planetary Supercomputer",
    "description": "A single colossal supercomputer which can carry out incredibly complex calculations, improving the research output of the whole planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": "@b2_time",
    "category": "research",
    "convert_to": [
      "building_institute"
    ],
    "planet_modifier": {
      "planet_researchers_produces_mult": 0.15
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_gestalt": true
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_global_research_initiative"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b2_minerals"
      },
      "upkeep": {
        "energy": "@b2_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "modifier": {
        "job_calculator_add": 1
      }
    },
    "key": "building_supercomputer"
  },
  "building_syndicate_outreach_office": {
    "name": "Syndicate Front Corporations",
    "description": "These above-the-board businesses allow the local criminal syndicate to operate behind a veneer of upstanding legality.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_crime_add": 40,
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "unity": 6
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_syndicate_outreach_office"
  },
  "building_system_capital": {
    "name": "System Capital-Complex",
    "description": "A towering configuration of administrative bureaus and networked infrastructure, allowing the construction and operation of highly demanding facilities.",
    "allow": [
      "num_pops",
      ">=",
      "50"
    ],
    "base_buildtime": "@b4_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_resort_major_capital",
      "building_slave_major_capital",
      "building_ancient_control_center",
      "building_ancient_palace"
    ],
    "planet_modifier": {
      "job_enforcer_add": 3,
      "planet_housing_add": 12,
      "planet_amenities_add": 12,
      "planet_max_buildings_add": "@buildings_t4",
      "planet_max_branch_office_buildings_add": 4
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true,
        "is_fallen_empire": false
      },
      "NOR": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_galactic_administration"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b4_minerals"
      },
      "upkeep": {
        "energy": "@b4_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_technology": "tech_capital_productivity_3"
        }
      },
      "modifier": {
        "planet_jobs_productive_upkeep_mult": 0.1,
        "planet_jobs_productive_produces_mult": 0.1
      }
    },
    "upgrades": [
      "building_imperial_capital"
    ],
    "key": "building_system_capital"
  },
  "building_system_conflux": {
    "name": "System Conflux",
    "description": "A massive hub facility that receives and forwards signals across interstellar distances from millions of different systems.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": "@b3_time",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_bureaucratic_3",
      "building_sacred_nexus",
      "building_hive_confluence",
      "building_sensorium_3"
    ],
    "planet_modifier": {
      "job_coordinator_add": "@b3_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true,
        "NOT": {
          "has_valid_civic": "civic_machine_servitor"
        }
      }
    },
    "prerequisites": [
      "tech_galactic_bureaucracy"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b3_minerals",
        "rare_crystals": "@b3_rare_cost"
      },
      "upkeep": {
        "energy": "@b3_upkeep",
        "rare_crystals": "@b3_rare_upkeep"
      }
    },
    "key": "building_system_conflux"
  },
  "building_temple": {
    "name": "Temple",
    "description": "Simple constructs erected since time immemorial, temples are places of quiet contemplation and communion with that which unites us all.",
    "base_buildtime": "@b1_time",
    "category": "unity",
    "convert_to": [
      "building_bureaucratic_1",
      "building_hive_node",
      "building_uplink_node"
    ],
    "planet_modifier": {
      "job_priest_add": 1,
      "pop_ethic_spiritualist_attraction_mult": 0.05
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_spiritualist": true
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_megacorp": true
        }
      },
      "modifier": {
        "job_manager_add": 1
      }
    },
    "upgrades": [
      "building_holotemple"
    ],
    "key": "building_temple"
  },
  "building_temple_of_prosperity": {
    "name": "Temple of Prosperity",
    "description": "A high-security temple that spreads the gospel of the Megachurch that built it.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_preacher_add": 2,
      "pop_ethic_spiritualist_attraction_mult": 0.5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "has_valid_civic": "civic_gospel_of_the_masses",
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_temple_of_prosperity"
  },
  "building_underground_chemists": {
    "name": "Concealed Drug Labs",
    "description": "Subterranean drug labs in remote regions that are virtually undetectable from the surface. Chemists work day and night here to produce various illegal, highly addictive and quite lucrative narcotics.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "consumer_goods": 6
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_underground_chemists"
  },
  "building_underground_clubs": {
    "name": "Underground Clubs",
    "description": "These illegal entertainment clubs will satisfy any vice. As night descends, they are open for business in the planet's seedier districts.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "planet_crime_add": 40,
      "planet_amenities_add": 10
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": "@b3_minerals"
      },
      "produces": {
        "energy": 10
      }
    },
    "key": "building_underground_clubs"
  },
  "building_uplink_node": {
    "name": "Uplink Node",
    "description": "An uplink node that decreases planetary latency.",
    "base_buildtime": "@b1_time",
    "category": "government",
    "convert_to": [
      "building_bureaucratic_1",
      "building_temple",
      "building_hive_node",
      "building_sensorium_1"
    ],
    "planet_modifier": {
      "job_coordinator_add": "@b1_jobs"
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_machine_empire": true,
        "NOT": {
          "has_valid_civic": "civic_machine_servitor"
        }
      }
    },
    "prerequisites": [
      "tech_planetary_government"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "upgrades": [
      "building_network_junction"
    ],
    "key": "building_uplink_node"
  },
  "building_urban_dwellings": {
    "name": "Urban Dwellings",
    "description": "Cramped and often polluted jungles of concrete.",
    "can_build": false,
    "planet_modifier": {
      "planet_housing_add": 24
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_primitive": true,
        "OR": {
          "has_country_flag": "early_space_age"
        }
      }
    },
    "upgrades": [],
    "key": "building_urban_dwellings"
  },
  "building_virtual_entertainment_studios": {
    "name": "Virtual Entertainment Studios",
    "description": "Using nano-transaction systems and neuro-chemical retention algorithms, these development houses bring the latest in virtual entertainment software into the homes and lives of billions of sapient consumers.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "job_clerk_add": 2
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "consumer_goods": 6
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_virtual_entertainment_studios"
  },
  "building_waste_reprocessing_center": {
    "name": "Waste Reprocessing Center",
    "description": "A planet's one stop center for converting industrial and biowaste into mostly clean, mostly reusable energy and minerals. Designed by the $NAME_Caravaneer_Fleet3$, its construction is somewhat arcane, and largely non-reverse- engineerable.",
    "base_buildtime": "@b2_time",
    "can_build": true,
    "planet_modifier": {
      "planet_amenities_add": 5,
      "job_technician_drone_add": 2
    },
    "potential": {
      "owner": {
        "has_country_flag": "bought_waste_reprocessing_center"
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 100
      },
      "produces": {
        "minerals": 10,
        "energy": 10
      }
    },
    "key": "building_waste_reprocessing_center"
  },
  "building_wildcat_miners": {
    "name": "Wildcat Mining Operations",
    "description": "Illegal, highly unsafe mining operations operated by the destitute and the desperate, who toil away in the vain hopes of striking it rich.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": true
      },
      "is_artificial": false,
      "NOR": {
        "is_planet_class": "pc_city"
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "minerals": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_wildcat_miners"
  },
  "building_wrecking_yards": {
    "name": "Wrecking Yards",
    "description": "Stolen vessels and prize ships brought in by pirates are broken into scrap here. Any valuable components and alloys are carefully salvaged.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false,
        "is_criminal_syndicate": true
      }
    },
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 500
      },
      "produces": {
        "alloys": 3
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_wrecking_yards"
  },
  "building_xeno_tourism_agency": {
    "name": "Xeno-Outreach Agency",
    "description": "This corporate agency promotes a wide variety of interstellar tourist attractions, as well as offering employment packages and signing bonuses to potential emigrants interested in relocating to corporate space.",
    "allow": [
      "num_pops",
      ">=",
      "25"
    ],
    "base_buildtime": "@b3_time",
    "planet_modifier": {
      "trade_value_mult": 0.05
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_ai": false
      }
    },
    "prerequisites": [
      "tech_xeno_tourism_agency"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 1000,
        "rare_crystals": "@b2_rare_cost"
      },
      "upkeep": {
        "energy": "@b2_upkeep",
        "rare_crystals": "@b2_rare_upkeep"
      }
    },
    "key": "building_xeno_tourism_agency"
  },
  "building_xeno_zoo": {
    "name": "Alien Zoo",
    "description": "As a sign of our mastery of the unknown, we have gathered alien creatures from all across the galaxy.",
    "base_buildtime": "@b1_time",
    "category": "resource",
    "planet_modifier": {
      "job_entertainer_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_alien_life_studies"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_valid_civic": "civic_warrior_culture"
        }
      },
      "modifier": {
        "job_duelist_add": 2,
        "job_entertainer_add": -2
      }
    },
    "key": "building_xeno_zoo"
  },
  "holding_aid_agency": {
    "name": "Aid Agency",
    "description": "Agencies founded and staffed by foreign benefactors, bringing some of their culture and knowledge to the planet.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "overlord_is_xenophobe",
        "exists": "owner.overlord",
        "owner.overlord": {
          "NOR": {
            "has_ethic": "ethic_fanatic_xenophobe"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": 0.5
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "trigger": {
          "exists": "planet.owner",
          "planet.owner": {
            "is_lithoid": false,
            "is_machine_empire": false,
            "is_mechanical_empire": false
          }
        },
        "food": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_aid_worker_drone_add": 2
    },
    "key": "holding_aid_agency"
  },
  "holding_communal_housing_outreach": {
    "name": "Communal Housing Outreach",
    "description": "Everyone is entitled to a home, which is why the Ovelord have extended their Communal Housing Project to this planet. This serves as a great forum for teaching the inhabitants the value of egalitarianism.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 6
    },
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_shared_burden"
      },
      "NOT": {
        "owner": {
          "has_valid_civic": "civic_shared_burden"
        }
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_egalitarian": false,
          "is_gestalt": false
        }
      },
      "pop_ethic_egalitarian_attraction_mult": 1
    },
    "key": "holding_communal_housing_outreach"
  },
  "holding_distributed_processing": {
    "name": "Distributed Processing",
    "description": "A cold structure eclipsing the local region. Those who work here refuse to elaborate on what they do, but no-one leaves the experience entirely unscathed.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -2
    },
    "potential": {
      "owner.overlord": {
        "is_machine_empire": true,
        "NOT": {
          "has_civic": "civic_machine_servitor"
        }
      },
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_mind_thrall_drone_add": 4
    },
    "key": "holding_distributed_processing"
  },
  "holding_dread_outpost": {
    "name": "Dread Outpost",
    "description": "The Dread Outpost is an arcane structure that produces unholy reanimated armies while sending back insidious data to this planet's Overlord.",
    "allow": {
      "owner": {
        "NOR": {
          "has_valid_civic": "civic_reanimated_armies",
          "is_machine_empire": true
        }
      }
    },
    "base_buildtime": "@b2_time",
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_reanimated_armies"
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_necromancer_drone_add": 2
    },
    "key": "holding_dread_outpost"
  },
  "holding_emporium": {
    "name": "Emporium",
    "description": "Large shopping malls filled with futuristic and exotic wares from distant planets.",
    "base_buildtime": "@b2_time",
    "potential": {
      "owner.overlord": {
        "is_machine_empire": false,
        "is_hive_empire": false
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "consumer_goods": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_trader_drone_add": 2
    },
    "key": "holding_emporium"
  },
  "holding_energy_requisitorium": {
    "name": "Ministry of Energy",
    "description": "A ministry overseeing taxation and the minting of energy credits, often coming into conflict with the domestic bureaucracy.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "ove_requires_tech_power_hub_2",
        "owner.overlord": {
          "has_technology": "tech_power_hub_2"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -0.25
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "exotic_gases": 1
      }
    },
    "key": "holding_energy_requisitorium"
  },
  "holding_experimental_crater": {
    "name": "Experimental Crater",
    "description": "A designated area for testing new asteroidal colony ships. It might not be the most convenient way to test the ships, but outsourcing the process definitely saves on the clean-up costs for the Overlord.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -1
    },
    "potential": {
      "owner.overlord": {
        "has_origin": "origin_lithoid"
      }
    },
    "resources": {
      "category": "planet_holdings",
      "produces": {
        "engineering_research": 8,
        "physics_research": 4
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_mining_drone_add": 3
    },
    "key": "holding_experimental_crater"
  },
  "holding_franchise_headquarters": {
    "name": "Franchise Headquarters",
    "description": "These offices allow Corporate Management to realign the Subsidiary's interests with that of their Overlord through mandatory planet-wide training and team-building exercises.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "no_branch_office",
        "planet": {
          "has_branch_office": "owner.overlord"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -0.5,
      "job_overlord_manager_add": 2
    },
    "potential": {
      "owner.overlord": {
        "has_civic": "civic_franchising"
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner.overlord": {
          "has_ethic": "ethic_fanatic_egalitarian"
        }
      },
      "pop_ethic_egalitarian_attraction_mult": 1
    },
    "key": "holding_franchise_headquarters"
  },
  "holding_garrison": {
    "name": "Overlord Garrison",
    "description": "A garrison established to oversee the local enforcers, occasionally reinforced by military battalions in more dire circumstances.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_crime_add": -10,
      "monthly_loyalty": 0.5
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "overlord_has_more_than_num_armies_on_planet": {
          "NUM": 2
        }
      },
      "modifier": {
        "planet_crime_add": -30,
        "pop_happiness": -0.15,
        "monthly_loyalty": 1.5
      }
    },
    "key": "holding_garrison"
  },
  "holding_giga_megaworkshop": {
    "name": "Megalogistics Export Wharf",
    "description": "Molecular foundries owned by a foreign empire use local resources to fuel distant construction projects. Some might even call them vanity projects.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "ove_requires_giga_tech_amb_supertensiles",
        "owner.overlord": {
          "has_technology": "giga_tech_amb_supertensiles"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -1.5
    },
    "potential": {
      "has_overlord_dlc": true,
      "has_global_flag": "@giga_amb_flag"
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_giga_overlord_megaengineer_drone_add": 1
    },
    "key": "holding_giga_megaworkshop",
    "isGE": true
  },
  "holding_idyllic_bloom": {
    "name": "Gaia Seeder Outpost",
    "description": "Hyper-advanced terraforming techniques mastered by the Overlord are housed in this structure. After being introduced to the planet, it will take a decade to finish its world-changing work.",
    "allow": {
      "can_build_overlord_gaiaseeder": true
    },
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "pop_environment_tolerance": 0.2
    },
    "potential": {
      "exists": "owner",
      "owner.overlord": {
        "is_country_type": "default",
        "OR": {
          "has_valid_civic": "civic_hive_idyllic_bloom"
        }
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      },
      "is_artificial": false
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "energy": 1500,
        "exotic_gases": "@b4_rare_cost"
      },
      "upkeep": {
        "energy": 20,
        "exotic_gases": "@b3_rare_upkeep",
        "multiplier": "value:overlord_gaiaseeder_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "NOT": {
            "has_ascension_perk": "ap_hydrocentric"
          }
        }
      },
      "monthly_loyalty": 1
    },
    "key": "holding_idyllic_bloom"
  },
  "holding_material_requisitorium": {
    "name": "Ministry of Extraction",
    "description": "A ministry overseeing local mineral production, extraction, and purification. They often secure the best land purchases and reap the benefits for their patron.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "ove_requires_tech_mineral_purification_2",
        "owner.overlord": {
          "has_technology": "tech_mineral_purification_2"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -0.5
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "volatile_motes": 1
      }
    },
    "key": "holding_material_requisitorium"
  },
  "holding_noble_vacation_homes": {
    "name": "Noble Chateaus",
    "description": "A home away from home, this is the perfect place for the Overlord's ruling elite to let off steam, so that they don't cause incidents back home.",
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -1
    },
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_aristocratic_elite"
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "planet_amenities_no_happiness_add": -15
    },
    "key": "holding_noble_vacation_homes"
  },
  "holding_offspring_nest": {
    "name": "Offspring Nest",
    "description": "At this nest, a foreign hivemind has a unique representative acting as a centralized node for its neural network. This has enabled its continued control over the colony.",
    "allow": {
      "owner": {
        "NOT": {
          "has_origin": "origin_progenitor_hive"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "potential": {
      "owner.overlord": {
        "is_hive_empire": true,
        "has_origin": "origin_progenitor_hive"
      },
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_offspring_drone_feeder_drone_add": 1
    },
    "key": "holding_offspring_nest"
  },
  "holding_offworld_foundry": {
    "name": "Offworld Foundry",
    "description": "Large foundries owned by a foreign empire, siphoning off local resources for the creation of high quality alloys.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "subject_is_prospectorium",
        "exists": "planet.owner",
        "planet.owner": {
          "is_specialist_subject_type": {
            "TYPE": "prospectorium"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -1.5
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_catalytic_empire": true,
          "is_gestalt": true
        }
      },
      "job_overlord_catalytic_drone_add": 2
    },
    "key": "holding_offworld_foundry"
  },
  "holding_orbital_assembly_complex": {
    "name": "Orbital Assembly Complex",
    "description": "A soaring building filled with long assembly lines, creating everything one could dream of.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "planet_building_build_speed_mult": 0.1
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "alloys": 5
      }
    },
    "key": "holding_orbital_assembly_complex"
  },
  "holding_organic_sanctuary": {
    "name": "Organic Haven",
    "description": "Although the care facilities on this planet are more limited in scope than those found on the Overlord's worlds, the bio-trophies inside still enjoy a much more comfortable standard of living than they are used to.",
    "base_buildtime": "@b2_time",
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_machine_servitor"
      },
      "owner": {
        "is_machine_empire": false
      }
    },
    "resources": {
      "category": "planet_holdings",
      "upkeep": {
        "consumer_goods": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_bio_trophy_drone_add": 5
    },
    "key": "holding_organic_sanctuary"
  },
  "holding_overlord_vigil_command": {
    "name": "Vigil Command",
    "description": "A command center specialized in - and delegated to - calculating the best possible means of increasing defensive measures.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "subject_is_bulwark",
        "exists": "planet.owner",
        "planet.owner": {
          "is_specialist_subject_type": {
            "TYPE": "bulwark"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_beholder_drone_add": 1
    },
    "key": "holding_overlord_vigil_command"
  },
  "holding_parasitic_algorithms": {
    "name": "Ministry of Science",
    "description": "A ministry overseeing local research and science, bringing the most noteworthy breakthroughs and discoveries back to their benefactor.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "subject_is_scholarium",
        "exists": "planet.owner",
        "planet.owner": {
          "is_specialist_subject_type": {
            "TYPE": "scholarium"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -1
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "key": "holding_parasitic_algorithms"
  },
  "holding_park_ranger_lodge": {
    "name": "Ranger Lodge",
    "description": "The Overlord has an interest in co-existing with nature and wishes to spread this joy to its Vassal. To ensure that there always is at least some nature left to enjoy.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "no_free_district_for_ranger_lodge",
        "planet": {
          "num_free_districts": {
            "type": "any"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_environmentalist"
      },
      "NOT": {
        "owner": {
          "has_valid_civic": "civic_environmentalist"
        }
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      },
      "is_artificial": false
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_ranger_drone_add": 1
    },
    "key": "holding_park_ranger_lodge"
  },
  "holding_produce_requisitorium": {
    "name": "Ministry of Acquisition",
    "description": "A ministry overseeing local produce. In addition to placing a small tax on this world, some products have a tendency to disappear into their convoluted, bureaucratic process.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "ove_requires_tech_food_processing_2",
        "owner.overlord": {
          "has_technology": "tech_food_processing_2"
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -0.25
    },
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep",
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner.overlord",
        "owner.overlord": {
          "is_gestalt": false
        }
      },
      "monthly_loyalty": -0.25
    },
    "key": "holding_produce_requisitorium"
  },
  "holding_propaganda_office": {
    "name": "Ministry of Truth",
    "description": "A ministry overseeing local faiths, news, and political interest groups. With the right prod everything runs a tad smoother.",
    "allow": {
      "exists": "planet",
      "planet": {
        "is_capital": true
      }
    },
    "base_buildtime": "@b2_time",
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_propagandist_drone_add": 2
    },
    "key": "holding_propaganda_office"
  },
  "holding_recruitment_office": {
    "name": "Recruitment Office",
    "description": "Everyone must do their part. That is why the Overlord is offering military training in exchange for a tour in their fleet. Service guarantees citizenship.",
    "base_buildtime": "@b1_time",
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_citizen_service"
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_pacifist": true
        }
      },
      "monthly_loyalty": -0.5
    },
    "key": "holding_recruitment_office"
  },
  "holding_reemployment_center": {
    "name": "Reemployment Center",
    "description": "Never leave a resource unexploited, even if that resource is the Subject's dead. With the Reemployment Center, the Overlord can ensure that the Subject's planets are always filled with employees even though the quality of work might vary.",
    "base_buildtime": "@b1_time",
    "potential": {
      "owner.overlord": {
        "has_valid_civic": "civic_permanent_employment"
      },
      "NOT": {
        "owner": {
          "has_valid_civic": "civic_permanent_employment"
        }
      },
      "owner": {
        "is_machine_empire": false
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_egalitarian": true
        }
      },
      "monthly_loyalty": -0.5
    },
    "key": "holding_reemployment_center"
  },
  "holding_sacrificial_shrine": {
    "name": "Sacrificial Shrine",
    "description": "The great study of the cycle should not be limited to the Overlord; the turning of life and death must be explored through the Vassal as well.",
    "base_buildtime": "@b1_time",
    "potential": {
      "owner.overlord": {
        "is_death_cult_empire": true
      },
      "owner": {
        "is_machine_empire": false
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_mortal_initiate_drone_add": 2
    },
    "key": "holding_sacrificial_shrine"
  },
  "holding_satellite_campus": {
    "name": "Satellite Campus",
    "description": "A large campus where domestic researchers and foreign scientists can come together to share ideas and conduct experiments.",
    "base_buildtime": "@b2_time",
    "potential": {
      "has_overlord_dlc": true
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_academic_drone_add": 2
    },
    "key": "holding_satellite_campus"
  },
  "holding_splinter_hive": {
    "name": "Splinter Hive",
    "description": "A large biomass producing new workers for the hive. Though it stands apart from the original hive, it is still connected to the neural network.",
    "allow": {
      "custom_tooltip": {
        "fail_text": "no_free_district_for_splinter_hive",
        "planet": {
          "num_free_districts": {
            "type": "any"
          }
        }
      }
    },
    "base_buildtime": "@b2_time",
    "planet_modifier": {
      "monthly_loyalty": -2
    },
    "potential": {
      "owner.overlord": {
        "is_hive_empire": true
      }
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "minerals": "@b1_minerals"
      },
      "upkeep": {
        "energy": "@b1_upkeep"
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_breeder_drone_add": 1
    },
    "key": "holding_splinter_hive"
  },
  "holding_tree_of_life_sapling": {
    "name": "Tree of Life Sapling",
    "description": "The Overlord has existed with their Tree of Life for so long that they can no longer imagine life without it. Now, they want to share the same opportunity with their vassals.",
    "base_buildtime": "@b1_time",
    "planet_modifier": {
      "monthly_loyalty": 1,
      "pop_environment_tolerance": 0.1,
      "planet_farmers_food_produces_add": 1
    },
    "potential": {
      "owner.overlord": {
        "has_origin": "origin_tree_of_life"
      },
      "NOR": {
        "is_planet_class": "pc_relic"
      },
      "is_artificial": false
    },
    "resources": {
      "category": "planet_holdings",
      "cost": {
        "food": 1000
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "planet.owner",
        "planet.owner": {
          "is_gestalt": true
        }
      },
      "job_overlord_arborist_drone_add": 1
    },
    "key": "holding_tree_of_life_sapling"
  }
}

Object.freeze(Building);

export default Building;