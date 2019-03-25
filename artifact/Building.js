/* GENERATED FILE Do not edit. */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const Building = {
  "building_affluence_center": {
    "name": "Affluence Center",
    "description": "Any material desire can be met here, no matter how outlandish.",
    "base_buildtime": 480,
    "can_build": false,
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "consumer_goods": 50
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
    "allow": [],
    "base_buildtime": 900,
    "planet_modifier": [],
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
        "energy": 6
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
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": 600,
    "can_build": false,
    "category": "unity",
    "planet_modifier": {
      "job_coordinator_add": 10
    },
    "potential": {
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
        "minerals": 1000,
        "rare_crystals": 100
      },
      "upkeep": {
        "energy": 4,
        "rare_crystals": 2
      }
    },
    "key": "building_alpha_hub"
  },
  "building_amusement_megaplex": {
    "name": "Amusement Megaplex",
    "description": "A magical place where dreams can become reality, this megaplex features wholesome, corporate-sanctioned fun for the entire family unit.",
    "base_buildtime": 480,
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
        "minerals": 800
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
    "can_build": false,
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital"
    ],
    "planet_modifier": {
      "job_fe_guardian_bot_add": 5
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
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
    "base_buildtime": 480,
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
    "base_buildtime": 480,
    "can_build": false,
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital"
    ],
    "potential": {
      "exists": "owner",
      "owner": {
        "is_fallen_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
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
    "base_buildtime": 480,
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
        "owner": {
          "is_machine_empire": true
        }
      },
      "planet_jobs_unity_produces_mult": 0.15,
      "job_coordinator_add": 3
    },
    "key": "building_artist_patron"
  },
  "building_autochthon_monument": {
    "name": "Autochthon Monument",
    "description": "A monument to the first pioneers to venture into space.",
    "base_buildtime": 240,
    "category": "unity",
    "convert_to": [
      "building_temple",
      "building_hive_node",
      "building_uplink_node",
      "building_corporate_monument"
    ],
    "planet_modifier": {
      "job_culture_worker_add": 2
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_gestalt": false,
        "is_spiritualist": false,
        "is_megacorp": false
      }
    },
    "prerequisites": [
      "tech_cultural_heritage"
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
    "upgrades": [
      "building_heritage_site"
    ],
    "key": "building_autochthon_monument"
  },
  "building_autocurating_vault": {
    "name": "Auto-Curating Vault",
    "description": "A highly-specialized computerized network constantly acquires, analyzes, evaluates and puts on display everyday artifacts it deems of impending historical import, creating a living museum of the present and a window into the zeitgeist.",
    "allow": {
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": 600,
    "can_build": false,
    "category": "unity",
    "planet_modifier": {
      "job_culture_worker_add": 10
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_gestalt": false,
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
        "minerals": 1000,
        "rare_crystals": 100
      },
      "upkeep": {
        "energy": 4,
        "rare_crystals": 2
      }
    },
    "key": "building_autocurating_vault"
  },
  "building_betharian_power_plant": {
    "name": "Betharian Power Plant",
    "description": "Betharian Power Plants consume Betharian Stone to produce vast amounts of Energy Credits.",
    "base_buildtime": 360,
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
          "is_machine_empire": true,
          "is_mechanical_empire": true
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
    "base_buildtime": 360,
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      },
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
        "food": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_bio_reprocessing_facilities"
  },
  "building_bureaucratic_complex": {
    "name": "Bureaucratic Complex",
    "description": "A labyrinthine government complex of bureaucratic offices, sub-offices and sub-sub-offices.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "government",
    "planet_modifier": {
      "job_administrator_add": 2
    },
    "potential": {
      "owner": {
        "has_valid_civic": "civic_byzantine_bureaucracy"
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
        "energy": 3
      }
    },
    "key": "building_bureaucratic_complex"
  },
  "building_capital": {
    "name": "Planetary Administration",
    "description": "Seat of the local ruling elite.",
    "allow": [
      "num_pops",
      ">=",
      "10"
    ],
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_resort_capital",
      "building_slave_capital"
    ],
    "planet_modifier": {
      "job_enforcer_add": 1,
      "planet_housing_add": 5,
      "planet_amenities_add": 5
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
      "tech_planetary_government"
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
          "has_civic": "civic_merchant_guilds"
        }
      },
      "modifier": {
        "job_administrator_add": 1,
        "job_merchant_add": 1
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
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
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
        "job_chemist_drone_add": 1
      }
    },
    "key": "building_chemical_plant"
  },
  "building_citadel_of_faith": {
    "name": "Citadel of Faith",
    "description": "A massive complex offering refuge and seclusion from the material world, for all comers.",
    "allow": {
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": 600,
    "can_build": false,
    "category": "unity",
    "planet_modifier": {
      "job_priest_add": 10,
      "pop_ethic_spiritualist_attraction_mult": 0.2
    },
    "potential": {
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
        "minerals": 1000,
        "rare_crystals": 100
      },
      "upkeep": {
        "energy": 4,
        "rare_crystals": 2
      }
    },
    "key": "building_citadel_of_faith"
  },
  "building_class_4_singularity": {
    "name": "Class-4 Singularity",
    "description": "Even after all this time, the containment fields remain stable. No one understands how.",
    "base_buildtime": 480,
    "can_build": false,
    "planet_modifier": [],
    "potential": [],
    "resources": {
      "category": "planet_buildings",
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
    "allow": [],
    "base_buildtime": 360,
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
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
      }
    },
    "upgrades": [
      "building_hospital"
    ],
    "key": "building_clinic"
  },
  "building_clone_vats": {
    "name": "Clone Vats",
    "description": "Clone Vats allow for a remarkable increase to population growth speed.",
    "base_buildtime": 360,
    "category": "government",
    "planet_modifier": {
      "pop_growth_speed": 0.33
    },
    "potential": {
      "owner": {
        "has_ascension_perk": "ap_engineered_evolution"
      },
      "NOT": {
        "has_modifier": "resort_colony"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 200
      },
      "upkeep": {
        "energy": 2
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
      "building_slave_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 3
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
    "base_buildtime": 480,
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
        "minerals": 800
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "trade",
    "planet_modifier": {
      "job_merchant_add": 1,
      "job_clerk_add": 10
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
      "tech_interstellar_economics"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 2,
        "rare_crystals": 1
      }
    },
    "key": "building_commercial_megaplex"
  },
  "building_commercial_zone": {
    "name": "Commercial Zones",
    "description": "These commercial zones are home to towering office buildings and business complexes.",
    "base_buildtime": 360,
    "category": "trade",
    "planet_modifier": {
      "job_clerk_add": 5
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
      "tech_interplanetary_commerce"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
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
    "base_buildtime": 360,
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
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_regular_empire": true,
        "has_valid_civic": "civic_shared_burden"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
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
    "base_buildtime": 480,
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
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_regular_empire": true,
        "has_valid_civic": "civic_shared_burden"
      }
    },
    "prerequisites": [
      "tech_paradise_dome"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 2,
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_communal_housing_large"
  },
  "building_corporate_forum": {
    "name": "Synergy Forum",
    "description": "A massive FTL communications forum capable of synergizing the corporate culture of millions of planetary corporate subdivisions.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_sacred_nexus",
      "building_hive_confluence",
      "building_hypercomms_forum",
      "building_system_conflux"
    ],
    "planet_modifier": {
      "job_manager_add": 7
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
      "cost": {
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": 1
      }
    },
    "upgrades": [
      "building_corporate_vault"
    ],
    "key": "building_corporate_forum"
  },
  "building_corporate_monument": {
    "name": "Corporate Culture Site",
    "description": "A site dedicated to glorifying the unique corporate culture that permeates every business transaction conducted on the planet.",
    "base_buildtime": 240,
    "category": "unity",
    "convert_to": [
      "building_temple",
      "building_hive_node",
      "building_uplink_node",
      "building_autochthon_monument"
    ],
    "planet_modifier": {
      "job_manager_add": 2
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
      "tech_cultural_heritage"
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
    "base_buildtime": 360,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_holotemple",
      "building_hive_cluster",
      "building_heritage_site",
      "building_network_junction"
    ],
    "planet_modifier": {
      "job_manager_add": 4
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
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
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
      "has_fully_upgraded_capital": true
    },
    "base_buildtime": 600,
    "can_build": false,
    "category": "unity",
    "planet_modifier": {
      "job_manager_add": 10
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
      "tech_autocurating_vault"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000,
        "rare_crystals": 100
      },
      "upkeep": {
        "energy": 5,
        "rare_crystals": 2
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
    "base_buildtime": 360,
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
    "name": "Synthetic Crystal Plants",
    "description": "Nearly identical to the real thing, the crystals produced here are of the highest quality.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
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
        "job_translucer_drone_add": 1
      }
    },
    "key": "building_crystal_plant"
  },
  "building_deployment_post": {
    "name": "Deployment Post",
    "description": "The initial deployment post from which we will expand on this world.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_colony_shelter"
    ],
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 3,
      "job_coordinator_add": 1,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 1,
      "job_maintenance_drone_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        }
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
    "can_build": false,
    "planet_modifier": [],
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "minerals": 100,
        "rare_crystals": 2,
        "exotic_gases": 2,
        "volatile_motes": 2
      },
      "upkeep": {
        "energy": 20
      }
    },
    "upgrades": [],
    "key": "building_dimensional_fabricator"
  },
  "building_drone_megastorage": {
    "name": "Upgraded Drone Storage",
    "description": "With the latest upgrades, while undergoing maintenance a portion of Drones' power-generation can be re-directed to the grid.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
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
      "owner": {
        "is_machine_empire": true
      }
    },
    "prerequisites": [
      "tech_micro_replicators"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 2,
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
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
    "base_buildtime": 360,
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
      "owner": {
        "is_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
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
  "building_empyrean_shrine": {
    "name": "Empyrean Shrine",
    "description": "The shrine itself vibrates somehow, making it appear slightly blurred from a distance.",
    "base_buildtime": 480,
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
    "base_buildtime": 360,
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_mult": 0.15
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "OR": {
        "NOT": {
          "is_planet_class": "pc_habitat"
        },
        "AND": {
          "exists": "owner",
          "owner": {
            "is_gestalt": true
          }
        }
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
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        }
      },
      "modifier": {
        "district_generator_max": 2,
        "planet_technician_energy_produces_mult": 0.05
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_technician_energy_produces_mult": 0.25
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
        "energy": 1,
        "exotic_gases": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        }
      },
      "modifier": {
        "district_generator_max": 4,
        "planet_technician_energy_produces_mult": 0.05
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
      "50"
    ],
    "base_buildtime": 600,
    "planet_modifier": {
      "trade_value_mult": 0.05
    },
    "potential": {
      "has_branch_office": true
    },
    "prerequisites": [
      "tech_executive_retreat"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 1000,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 5,
        "exotic_gases": 1
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "amenity",
    "convert_to": [
      "building_paradise_dome",
      "building_drone_megastorage",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "planet_housing_add": 12,
      "job_maintenance_drone_add": 2
    },
    "potential": {
      "owner": {
        "is_hive_empire": true
      }
    },
    "prerequisites": [
      "tech_housing_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 2,
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
        }
      },
      "modifier": {
        "planet_housing_add": 1
      }
    },
    "key": "building_expanded_warren"
  },
  "building_factory_1": {
    "name": "Civilian Industries",
    "description": "A wide collection of civilian industries and manufactories where a variety of consumer goods are produced.",
    "base_buildtime": 360,
    "category": "manufacturing",
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_gestalt": false,
          "has_valid_civic": "civic_machine_servitor"
        }
      },
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_basic_industry"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 4
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
        "job_artisan_drone_add": 2
      }
    },
    "upgrades": [
      "building_factory_2"
    ],
    "key": "building_factory_1"
  },
  "building_factory_2": {
    "name": "Civilian Fabricators",
    "description": "Large industrial fabricators geared towards producing consumer goods.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "manufacturing",
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_gestalt": false,
          "has_valid_civic": "civic_machine_servitor"
        }
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
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 5,
        "rare_crystals": 1
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
        "job_artisan_drone_add": 5
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
    "base_buildtime": 600,
    "can_build": false,
    "category": "manufacturing",
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_gestalt": false,
          "has_valid_civic": "civic_machine_servitor"
        }
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
        "minerals": 800,
        "rare_crystals": 100
      },
      "upkeep": {
        "energy": 6,
        "rare_crystals": 2
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
        "job_artisan_drone_add": 8
      }
    },
    "key": "building_factory_3"
  },
  "building_fe_dome": {
    "name": "Sky-Dome",
    "description": "A floating utopia maintained with extremely advanced anti-gravity technology.",
    "base_buildtime": 480,
    "can_build": false,
    "planet_modifier": {
      "planet_housing_add": 20,
      "planet_amenities_add": 20
    },
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 10
      }
    },
    "key": "building_fe_dome"
  },
  "building_fe_stronghold": {
    "name": "Aegis Complex",
    "description": "A massive planetary defense complex housing a multitude of armories stocked to the brim with advanced precursor weaponry.",
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
      "upkeep": {
        "energy": 10
      }
    },
    "key": "building_fe_stronghold"
  },
  "building_fe_xeno_zoo": {
    "name": "Xeno Preserve",
    "description": "A highly sophisticated preserve that maintains the natural habitat of the ",
    "base_buildtime": 480,
    "can_build": false,
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_capital"
    ],
    "planet_modifier": {
      "planet_amenities_add": 15,
      "job_fe_xeno_keeper_add": 2,
      "planet_housing_add": 30
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
    "base_buildtime": 360,
    "planet_modifier": {
      "job_farmer_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      },
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
        "food": 10
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_food_conglomerate"
  },
  "building_food_processing_center": {
    "name": "Food Processing Centers",
    "description": "Streamlined facilities where large amounts of food can be processed.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_farmers_food_produces_mult": 0.25
    },
    "prerequisites": [
      "tech_food_processing_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "volatile_motes": 50
      },
      "upkeep": {
        "energy": 1,
        "volatile_motes": 1
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
        "job_agri_drone_add": 2
      }
    },
    "key": "building_food_processing_center"
  },
  "building_food_processing_facility": {
    "name": "Food Processing Facilities",
    "description": "Food that is processed at these facilities has its nutritional value greatly increased.",
    "base_buildtime": 360,
    "category": "resource",
    "planet_modifier": {
      "planet_farmers_food_produces_mult": 0.15
    },
    "potential": {
      "NOR": {
        "is_planet_class": "pc_machine",
        "has_modifier": "resort_colony"
      }
    },
    "prerequisites": [
      "tech_food_processing_1"
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
        "job_agri_drone_add": 1
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
    "base_buildtime": 360,
    "can_build": false,
    "category": "army",
    "planet_modifier": {
      "planet_housing_add": 3
    },
    "prerequisites": [
      "tech_global_defense_grid"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400,
        "volatile_motes": 50
      },
      "upkeep": {
        "energy": 1,
        "volatile_motes": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": 3
      }
    },
    "key": "building_fortress"
  },
  "building_foundry_1": {
    "name": "Alloy Foundries",
    "description": "The Metallurgists working in these foundries produce high-quality alloys.",
    "base_buildtime": 360,
    "category": "manufacturing",
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
      }
    },
    "prerequisites": [
      "tech_basic_industry"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 4
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
        "job_foundry_add": 2
      }
    },
    "upgrades": [
      "building_foundry_2"
    ],
    "key": "building_foundry_1"
  },
  "building_foundry_2": {
    "name": "Alloy Mega-Forges",
    "description": "Production on a massive scale, these forges can manufacture alloys in great quantities.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "manufacturing",
    "prerequisites": [
      "tech_alloys_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600,
        "volatile_motes": 50
      },
      "upkeep": {
        "energy": 5,
        "volatile_motes": 1
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
        "job_foundry_add": 5
      }
    },
    "upgrades": [
      "building_foundry_3"
    ],
    "key": "building_foundry_2"
  },
  "building_foundry_3": {
    "name": "Alloy Nano-Plants",
    "description": "Advanced manufacturing centers where the alloy production process is aided by nanomachines.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 600,
    "can_build": false,
    "category": "manufacturing",
    "prerequisites": [
      "tech_alloys_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 800,
        "volatile_motes": 100
      },
      "upkeep": {
        "energy": 6,
        "volatile_motes": 2
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
        "job_foundry_add": 8
      }
    },
    "key": "building_foundry_3"
  },
  "building_galactic_stock_exchange": {
    "name": "Galactic Stock Exchange",
    "description": "By engaging in free trade of goods and services we allow for a more specialized economy, where an individual can excel in a narrow field and trade for their needs.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
      }
    },
    "key": "building_galactic_stock_exchange"
  },
  "building_gas_extractors": {
    "name": "Gas Extraction Wells",
    "description": "These hulking wells reach deep into the planet's mantle to access pockets of Exotic Gas.",
    "base_buildtime": 360,
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
  "building_great_pyramid": {
    "name": "Great Pyramid",
    "description": "A pyramid constructed by the local population to appease a deity descended from the sky.",
    "base_buildtime": 480,
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
    "planet_modifier": {
      "planet_housing_add": 3,
      "planet_amenities_add": 3
    },
    "potential": {
      "is_planet_class": "pc_habitat"
    },
    "resources": {
      "category": "planet_buildings",
      "upkeep": {
        "energy": 3,
        "alloys": 5
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
      "job_replicator_add": 1
    },
    "upgrades": [
      "building_hab_major_capital"
    ],
    "key": "building_hab_capital"
  },
  "building_hab_major_capital": {
    "name": "Habitat Central Control",
    "description": "An extensive complex of bureaucratic offices that oversees the administration of a highly-populated habitat.",
    "allow": [
      "num_pops",
      ">=",
      "10"
    ],
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5
    },
    "potential": {
      "is_planet_class": "pc_habitat"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 5,
        "alloys": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_civic": "civic_merchant_guilds"
        }
      },
      "modifier": {
        "job_administrator_add": 1,
        "job_merchant_add": 1
      }
    },
    "key": "building_hab_major_capital"
  },
  "building_hall_judgment": {
    "name": "Hall of Judgment",
    "description": "A massive complex dedicated to courts and law enforcement.",
    "base_buildtime": 480,
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
        "minerals": 600,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 4,
        "exotic_gases": 1
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
    "base_buildtime": 360,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_holotemple",
      "building_network_junction",
      "building_hive_cluster",
      "building_corporate_site"
    ],
    "planet_modifier": {
      "job_culture_worker_add": 4
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_gestalt": false,
        "is_spiritualist": false,
        "is_megacorp": false
      }
    },
    "prerequisites": [
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
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
      "building_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 10,
      "job_synapse_drone_add": 2,
      "job_maintenance_drone_add": 2,
      "job_patrol_drone_add": 1
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_hive_empire": true,
          "is_country_type": "swarm"
        }
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
    "base_buildtime": 360,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_holotemple",
      "building_network_junction",
      "building_heritage_site",
      "building_corporate_site"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": 4
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
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_swapped_tradition": "tr_domination_synaptic_extensions"
        }
      },
      "modifier": {
        "planet_housing_add": 2
      }
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_sacred_nexus",
      "building_system_conflux",
      "building_hypercomms_forum",
      "building_corporate_forum"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": 7
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
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_swapped_tradition": "tr_domination_synaptic_extensions"
        }
      },
      "modifier": {
        "planet_housing_add": 2
      }
    },
    "key": "building_hive_confluence"
  },
  "building_hive_major_capital": {
    "name": "Hive Nexus",
    "description": "A sprawling capital complex from which the Hive Mind focuses planetary organization, coordination, and planning.",
    "allow": [
      "num_pops",
      ">=",
      "40"
    ],
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_machine_major_capital",
      "building_major_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_synapse_drone_add": 3,
      "job_maintenance_drone_add": 5,
      "job_patrol_drone_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_hive_empire": true,
          "is_country_type": "swarm"
        }
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": 4
      }
    },
    "key": "building_hive_major_capital"
  },
  "building_hive_node": {
    "name": "Synaptic Nodes",
    "description": "A center of massive, macroscopic synapses, these nodes, tended to and assisted by specialized drones, receive and transmit the will of the Hive.",
    "base_buildtime": 240,
    "category": "unity",
    "convert_to": [
      "building_temple",
      "building_uplink_node",
      "building_autochthon_monument",
      "building_corporate_monument"
    ],
    "planet_modifier": {
      "job_synapse_drone_add": 2
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
          "has_swapped_tradition": "tr_domination_synaptic_extensions"
        }
      },
      "modifier": {
        "planet_housing_add": 2
      }
    },
    "upgrades": [
      "building_hive_cluster"
    ],
    "key": "building_hive_node"
  },
  "building_hive_warren": {
    "name": "Hive Warren",
    "description": "A vast warren offers shelter for many Drones to rest.",
    "base_buildtime": 360,
    "category": "amenity",
    "convert_to": [
      "building_luxury_residence",
      "building_drone_storage",
      "building_communal_housing"
    ],
    "planet_modifier": {
      "planet_housing_add": 6,
      "job_maintenance_drone_add": 1
    },
    "potential": {
      "owner": {
        "is_hive_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
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
    "base_buildtime": 360,
    "category": "amenity",
    "potential": {
      "NOR": {
        "is_planet_class": "pc_habitat",
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
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
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
        "job_duelist_add": 2
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
    "base_buildtime": 360,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_network_junction",
      "building_hive_cluster",
      "building_heritage_site",
      "building_corporate_site"
    ],
    "planet_modifier": {
      "job_priest_add": 4,
      "pop_ethic_spiritualist_attraction_mult": 0.1
    },
    "potential": {
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
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "amenity",
    "planet_modifier": {
      "job_healthcare_add": 5
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
      "tech_frontier_hospital"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 2,
        "exotic_gases": 1
      }
    },
    "key": "building_hospital"
  },
  "building_hydroponics_farm": {
    "name": "Hydroponics Farms",
    "description": "Hydroponics Farms produce nutrient-rich vegetable matter tailored for consumption by local Pops.",
    "base_buildtime": 360,
    "category": "resource",
    "potential": {
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
        "minerals": 300
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
        "job_agri_drone_add": 2
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "amenity",
    "potential": {
      "owner": {
        "is_regular_empire": true
      }
    },
    "prerequisites": [
      "tech_hyper_entertainment_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 2,
        "exotic_gases": 1
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
        "job_duelist_add": 4
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_sacred_nexus",
      "building_hive_confluence",
      "building_system_conflux",
      "building_corporate_forum"
    ],
    "planet_modifier": {
      "job_culture_worker_add": 7
    },
    "potential": {
      "exists": "owner",
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_gestalt": false,
        "is_spiritualist": false,
        "is_megacorp": false
      }
    },
    "prerequisites": [
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": 1
      }
    },
    "upgrades": [
      "building_autocurating_vault"
    ],
    "key": "building_hypercomms_forum"
  },
  "building_illicit_research_labs": {
    "name": "Illicit Research Labs",
    "description": "All manner of highly illegal R&D is carried out in these secret laboratories.",
    "base_buildtime": 480,
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
        "minerals": 800
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
  "building_institute": {
    "name": "Research Institute",
    "description": "The Research Institute is a massive complex, gathering the cutting edges of disparate fields together for unprecedented synergy, improving the research output of the whole planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "research",
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
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
  "building_luxury_residence": {
    "name": "Luxury Residences",
    "description": "Intricately designed residential towers with luxurious apartments. Advanced zero-g technology is the only thing keeping the more outlandish terrace designs from collapsing.",
    "base_buildtime": 360,
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
      "NOT": {
        "has_modifier": "slave_colony"
      },
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
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
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
  "building_machine_assembly_plant": {
    "name": "Machine Assembly Plants",
    "description": "A production line assembly plant where new units are constructed.",
    "base_buildtime": 360,
    "category": "pop_assembly",
    "convert_to": [
      "building_robot_assembly_plant"
    ],
    "planet_modifier": {
      "job_replicator_add": 1
    },
    "potential": {
      "owner": {
        "is_machine_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
      },
      "upkeep": {
        "energy": 2
      }
    },
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_colony_shelter"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "job_coordinator_add": 2,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 1,
      "job_maintenance_drone_add": 2
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        }
      }
    },
    "prerequisites": [
      "tech_planetary_government"
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
        "owner": {
          "has_civic": "civic_machine_assimilator"
        }
      },
      "modifier": {
        "job_replicator_add": -1
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
      "40"
    ],
    "base_buildtime": 600,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_major_capital"
    ],
    "planet_modifier": {
      "job_coordinator_add": 3,
      "job_replicator_add": 2,
      "planet_housing_add": 8,
      "planet_amenities_add": 8,
      "job_patrol_drone_add": 2,
      "job_maintenance_drone_add": 3
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        }
      }
    },
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "has_civic": "civic_machine_assimilator"
        }
      },
      "modifier": {
        "job_replicator_add": -1
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
      "80"
    ],
    "base_buildtime": 900,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_major_capital",
      "building_machine_major_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_coordinator_add": 5,
      "job_replicator_add": 2,
      "job_patrol_drone_add": 3,
      "job_maintenance_drone_add": 4
    },
    "potential": {
      "exists": "owner",
      "owner": {
        "OR": {
          "is_machine_empire": true,
          "is_country_type": "ai_empire"
        }
      }
    },
    "prerequisites": [
      "tech_galactic_administration"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 2000
      },
      "upkeep": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "has_civic": "civic_machine_assimilator"
        }
      },
      "modifier": {
        "job_replicator_add": -1
      }
    },
    "key": "building_machine_system_capital"
  },
  "building_maintenance_depot": {
    "name": "Maintenance Depots",
    "description": "Workshops where maintenance of machinery and structures is planned, managed, and executed.",
    "base_buildtime": 240,
    "category": "amenity",
    "planet_modifier": {
      "job_maintenance_drone_add": 3
    },
    "potential": {
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
          "has_swapped_tradition": "tr_synchronicity_integrated_preservation"
        }
      },
      "modifier": {
        "job_maintenance_drone_add": 2
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
      "40"
    ],
    "base_buildtime": 600,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_resort_major_capital",
      "building_slave_major_capital"
    ],
    "planet_modifier": {
      "job_enforcer_add": 2,
      "planet_housing_add": 8,
      "planet_amenities_add": 8
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
      "tech_colonial_centralization"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 1000
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_civic": "civic_merchant_guilds"
        }
      },
      "modifier": {
        "job_merchant_add": 2,
        "job_administrator_add": 1
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
    "base_buildtime": 480,
    "can_build": false,
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "physics_research": 100,
        "society_research": 100,
        "engineering_research": 100
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
    "base_buildtime": 480,
    "category": "army",
    "potential": {
      "always": true
    },
    "prerequisites": [
      "tech_centralized_command"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": 1
      }
    },
    "key": "building_military_academy"
  },
  "building_military_contractors": {
    "name": "Mercenary Liaison Office",
    "description": "This office allows locals to sign up for the exciting life of a corporate soldier of fortune. Generous compensation, limited health insurance and stories of adventure ensure a steady stream of recruits.",
    "base_buildtime": 360,
    "planet_modifier": {
      "job_soldier_add": 1
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
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "resource",
    "planet_modifier": {
      "planet_miners_minerals_produces_mult": 0.25
    },
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
        "energy": 1,
        "volatile_motes": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        }
      },
      "modifier": {
        "district_mining_max": 4,
        "planet_miners_minerals_produces_mult": 0.05
      }
    },
    "key": "building_mineral_purification_hub"
  },
  "building_mineral_purification_plant": {
    "name": "Mineral Purification Plants",
    "description": "Minerals that have passed through these purifiers are of the highest quality.",
    "base_buildtime": 360,
    "category": "resource",
    "planet_modifier": {
      "planet_miners_minerals_produces_mult": 0.15
    },
    "potential": {
      "NOT": {
        "has_modifier": "slave_colony"
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
        "energy": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_robot_empire": true
        }
      },
      "modifier": {
        "district_mining_max": 2,
        "planet_miners_minerals_produces_mult": 0.05
      }
    },
    "upgrades": [
      "building_mineral_purification_hub"
    ],
    "key": "building_mineral_purification_plant"
  },
  "building_ministry_production": {
    "name": "Ministry of Production",
    "description": "The Ministry of Production works tirelessly to organize and streamline manufacturing across the entire planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "manufacturing",
    "planet_modifier": {
      "job_administrator_add": 1,
      "planet_metallurgists_produces_mult": 0.15,
      "planet_artisans_produces_mult": 0.15
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
      }
    },
    "key": "building_ministry_production"
  },
  "building_mote_harvesters": {
    "name": "Mote Harvesting Traps",
    "description": "These intricate facilities trap Volatile Motes within energy fields, funneling them into special containment zones below ground where they can be stabilized and harvested.",
    "base_buildtime": 360,
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
    "base_buildtime": 600,
    "category": "manufacturing",
    "potential": {
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
    "base_buildtime": 480,
    "can_build": false,
    "planet_modifier": [],
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "alloys": 25
      },
      "upkeep": {
        "minerals": 50,
        "energy": 10
      }
    },
    "upgrades": [],
    "key": "building_nano_forge"
  },
  "building_network_junction": {
    "name": "Network Junction",
    "description": "This powerful transceiver increases the bandwidth of the signals being continuously sent between the many different systems operating across our empire.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 360,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_holotemple",
      "building_hive_cluster",
      "building_heritage_site",
      "building_corporate_site"
    ],
    "planet_modifier": {
      "job_coordinator_add": 4
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
      "tech_heritage_site"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
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
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "government",
    "planet_modifier": {
      "job_noble_add": 1,
      "planet_housing_add": 1
    },
    "potential": {
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
        "minerals": 400
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
    "base_buildtime": 480,
    "can_build": false,
    "planet_modifier": [],
    "potential": [],
    "resources": {
      "category": "planet_buildings",
      "produces": {
        "food": 100
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
  "building_organic_paradise": {
    "name": "Organic Paradise",
    "description": "An AI-controlled artificial paradise designed to satisfy every need a sapient organic being might have, just so long as it does not express a need for self-determination. The Organics within have their housing needs completely fulfilled.",
    "base_buildtime": 480,
    "can_build": false,
    "convert_to": [
      "building_paradise_dome",
      "building_communal_housing_large"
    ],
    "planet_modifier": {
      "job_bio_trophy_add": 20,
      "job_maintenance_drone_add": 2
    },
    "potential": {
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
        "minerals": 600,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 3,
        "exotic_gases": 1
      }
    },
    "key": "building_organic_paradise"
  },
  "building_organic_sanctuary": {
    "name": "Organic Sanctuary",
    "description": "This sanctuary provides a sealed environment where organics can thrive in a safe and above all controlled manner. The Organics within have their housing needs completely fulfilled.",
    "base_buildtime": 360,
    "category": "unity",
    "convert_to": [
      "building_luxury_residence",
      "building_communal_housing"
    ],
    "planet_modifier": {
      "job_bio_trophy_add": 10,
      "job_maintenance_drone_add": 1
    },
    "potential": {
      "owner": {
        "has_valid_civic": "civic_machine_servitor"
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
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
    "base_buildtime": 480,
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
      "NOT": {
        "has_modifier": "slave_colony"
      },
      "owner": {
        "is_regular_empire": true,
        "NOT": {
          "has_valid_civic": "civic_shared_burden"
        }
      }
    },
    "prerequisites": [
      "tech_paradise_dome"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 2,
        "rare_crystals": 1
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_non_swapped_tradition": "tr_domination_imperious_architecture"
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
    "base_buildtime": 360,
    "planet_modifier": {
      "planet_crime_add": 40,
      "job_soldier_add": 1
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
      "has_upgraded_capital": true
    },
    "base_buildtime": 600,
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
      }
    },
    "key": "building_planetary_shield_generator"
  },
  "building_precinct_house": {
    "name": "Precinct Houses",
    "description": "Monuments to law and order. Enforcers are based here.",
    "base_buildtime": 360,
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
        "minerals": 400
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
    "planet_modifier": {
      "job_primitive_farmer_add": 10
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
    "base_buildtime": 360,
    "planet_modifier": {
      "job_miner_add": 1
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": false
      },
      "habitable_structure": false,
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
    "description": "In these state-of-the-art facilities, private tech-enterprises carry out important R&D on behalf of their parent company.",
    "base_buildtime": 480,
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
        "minerals": 800
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
    "base_buildtime": 360,
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
        "alloys": 3
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_private_shipyards"
  },
  "building_production_center": {
    "name": "Resource Processing Center",
    "description": "A vast facility which centralizes the handling of resources and manufacturing across the entire planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "manufacturing",
    "planet_modifier": {
      "planet_metallurgists_produces_mult": 0.15,
      "planet_artisans_produces_mult": 0.15
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "is_machine_empire": true
        }
      },
      "job_coordinator_add": 1
    },
    "key": "building_production_center"
  },
  "building_psi_corps": {
    "name": "Psi Corps",
    "description": "Psi-gifted individuals are brought from all across to our empire to a place where they are able to hone their abilities.nn§YThe Psi Corps is your friend. Trust the Corps.§!",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "government",
    "planet_modifier": {
      "job_telepath_add": 2,
      "planet_stability_add": 5
    },
    "potential": {
      "owner": {
        "has_ascension_perk": "ap_mind_over_matter"
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
        "energy": 5
      }
    },
    "key": "building_psi_corps"
  },
  "building_public_relations_office": {
    "name": "Public Relations Firm",
    "description": "Misconceptions and suspicions are always floating around any large corporate entity. It is in the public's interest to hear out all sides of any dispute, and this PR firm makes it their business to get their employer's point across.",
    "base_buildtime": 480,
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
        "minerals": 800
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
  "building_refinery": {
    "name": "Exotic Gas Refineries",
    "description": "These advanced refineries work day and night to produce exotic gases.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 480,
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
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 360,
    "category": "research",
    "potential": {
      "NOT": {
        "is_planet_class": "pc_habitat"
      }
    },
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 400
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
        "job_calculator_add": 2
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "research",
    "prerequisites": [
      "tech_basic_science_lab_2"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600,
        "exotic_gases": 50
      },
      "upkeep": {
        "energy": 5,
        "exotic_gases": 1
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
        "job_calculator_add": 5
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "research",
    "prerequisites": [
      "tech_basic_science_lab_3"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 800,
        "exotic_gases": 100
      },
      "upkeep": {
        "energy": 6,
        "exotic_gases": 2
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
        "job_calculator_add": 8
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
      "building_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "job_entertainer_add": 1
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
      "10"
    ],
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_entertainer_add": 2
    },
    "potential": {
      "has_modifier": "resort_colony"
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 500
      },
      "upkeep": {
        "energy": 4
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
    "key": "building_resort_major_capital"
  },
  "building_resource_silo": {
    "name": "Resource Silos",
    "description": "Massive resource silos and storage facilities where large quantities of resources can be safely kept.",
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
    "base_buildtime": 360,
    "category": "pop_assembly",
    "convert_to": [
      "building_machine_assembly_plant"
    ],
    "planet_modifier": {
      "job_roboticist_add": 1
    },
    "potential": {
      "owner": {
        "is_regular_empire": true,
        "NOT": {
          "has_policy_flag": "robots_outlawed"
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
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
    "base_buildtime": 480,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_hive_confluence",
      "building_system_conflux",
      "building_hypercomms_forum",
      "building_corporate_forum"
    ],
    "planet_modifier": {
      "job_priest_add": 7,
      "pop_ethic_spiritualist_attraction_mult": 0.15
    },
    "potential": {
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
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": 1
      }
    },
    "upgrades": [
      "building_citadel_of_faith"
    ],
    "key": "building_sacred_nexus"
  },
  "building_sentinel_posts": {
    "name": "Sentinel Posts",
    "description": "These are the outposts from which Patrol Drones scan the Consciousness for signs of deviancy and malfunction.",
    "base_buildtime": 360,
    "category": "government",
    "planet_modifier": {
      "job_patrol_drone_add": 2
    },
    "potential": {
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
        "minerals": 400
      },
      "upkeep": {
        "energy": 2
      }
    },
    "key": "building_sentinel_posts"
  },
  "building_slave_capital": {
    "name": "Governor's Palace",
    "description": "The lavish palace from which this Thrall-World is governed.",
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_capital",
      "building_machine_capital",
      "building_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 5,
      "planet_amenities_add": 5,
      "job_slave_overseer_add": 2,
      "planet_stability_add": 5
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
      "10"
    ],
    "base_buildtime": 480,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital"
    ],
    "planet_modifier": {
      "planet_housing_add": 10,
      "planet_amenities_add": 10,
      "job_slave_overseer_add": 4,
      "planet_stability_add": 10
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
        "energy": 4
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
    "key": "building_slave_major_capital"
  },
  "building_slave_processing": {
    "name": "Slave Processing Facility",
    "description": "This large and imposing facility is used to process slave labor and extinguish any trace of free will. A Slave Processing Facility is required for the creation of slave armies.",
    "allow": {
      "has_upgraded_capital": true
    },
    "base_buildtime": 360,
    "category": "government",
    "planet_modifier": {
      "planet_jobs_slave_produces_mult": 0.05,
      "pop_cat_slave_political_power": -0.25
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
        "minerals": 400
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
    "base_buildtime": 480,
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
        "minerals": 800
      },
      "upkeep": {
        "energy": 3
      }
    },
    "key": "building_smuggling_rings"
  },
  "building_spawning_pool": {
    "name": "Spawning Pools",
    "description": "Tended by the scientific and gentle care of specialists, these pools stimulate our spawn into faster growth.",
    "base_buildtime": 360,
    "category": "amenity",
    "planet_modifier": {
      "job_spawning_drone_add": 1
    },
    "potential": {
      "owner": {
        "is_hive_empire": true
      }
    },
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 300
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
    "planet_modifier": {
      "planet_housing_add": 1
    },
    "potential": {
      "always": true
    },
    "prerequisites": [
      "tech_planetary_defenses"
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
        "owner": {
          "is_gestalt": true
        }
      },
      "modifier": {
        "job_warrior_drone_add": 1
      }
    },
    "upgrades": [
      "building_fortress"
    ],
    "key": "building_stronghold"
  },
  "building_supercomputer": {
    "name": "Planetary Supercomputer",
    "description": "A single colossal supercomputer which can carry out incredibly complex calculations, improving the research output of the whole planet.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "category": "research",
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
        "minerals": 500
      },
      "upkeep": {
        "energy": 5
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
    "base_buildtime": 480,
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
        "minerals": 800
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
      "80"
    ],
    "base_buildtime": 900,
    "can_build": false,
    "category": "government",
    "convert_to": [
      "building_hive_major_capital",
      "building_machine_major_capital",
      "building_major_capital",
      "building_resort_major_capital",
      "building_slave_major_capital"
    ],
    "planet_modifier": {
      "job_enforcer_add": 3,
      "planet_housing_add": 10,
      "planet_amenities_add": 10
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
      "tech_galactic_administration"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 2000
      },
      "upkeep": {
        "energy": 10
      }
    },
    "triggered_planet_modifier": {
      "potential": {
        "exists": "owner",
        "owner": {
          "has_civic": "civic_merchant_guilds"
        }
      },
      "modifier": {
        "job_merchant_add": 3,
        "job_administrator_add": 2
      }
    },
    "key": "building_system_capital"
  },
  "building_system_conflux": {
    "name": "System Conflux",
    "description": "A massive hub facility that receives and forwards signals across interstellar distances from millions of different systems.",
    "allow": {
      "has_major_upgraded_capital": true
    },
    "base_buildtime": 480,
    "can_build": false,
    "category": "unity",
    "convert_to": [
      "building_sacred_nexus",
      "building_hive_confluence",
      "building_hypercomms_forum",
      "building_corporate_forum"
    ],
    "planet_modifier": {
      "job_coordinator_add": 7
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
      "tech_hypercomms_forum"
    ],
    "resources": {
      "category": "planet_buildings",
      "cost": {
        "minerals": 600,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 3,
        "rare_crystals": 1
      }
    },
    "upgrades": [
      "building_alpha_hub"
    ],
    "key": "building_system_conflux"
  },
  "building_temple": {
    "name": "Temple",
    "description": "Simple constructs erected since time immemorial, temples are places of quiet contemplation and communion with that which unites us all.",
    "base_buildtime": 240,
    "category": "unity",
    "convert_to": [
      "building_hive_node",
      "building_uplink_node",
      "building_autochthon_monument",
      "building_corporate_monument"
    ],
    "planet_modifier": {
      "job_priest_add": 2,
      "pop_ethic_spiritualist_attraction_mult": 0.05
    },
    "potential": {
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
        "minerals": 200
      },
      "upkeep": {
        "energy": 1
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
    "base_buildtime": 360,
    "planet_modifier": {
      "job_preacher_add": 2,
      "pop_ethic_spiritualist_attraction_mult": 0.5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "has_valid_civic": "civic_gospel_of_the_masses"
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
    "base_buildtime": 360,
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
    "base_buildtime": 480,
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
        "minerals": 800
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
    "base_buildtime": 240,
    "category": "unity",
    "convert_to": [
      "building_temple",
      "building_hive_node",
      "building_autochthon_monument",
      "building_corporate_monument"
    ],
    "planet_modifier": {
      "job_coordinator_add": 2
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
      "tech_cultural_heritage"
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
    "base_buildtime": 360,
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
    "base_buildtime": 480,
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
    "base_buildtime": 360,
    "planet_modifier": {
      "planet_crime_add": 25,
      "trade_value_add": 5
    },
    "potential": {
      "has_branch_office": true,
      "branch_office_owner": {
        "is_criminal_syndicate": true
      },
      "habitable_structure": false,
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
    "base_buildtime": 360,
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
      "50"
    ],
    "base_buildtime": 600,
    "planet_modifier": {
      "trade_value_mult": 0.05
    },
    "potential": {
      "has_branch_office": true
    },
    "prerequisites": [
      "tech_xeno_tourism_agency"
    ],
    "resources": {
      "category": "planet_branch_office_buildings",
      "cost": {
        "minerals": 1000,
        "rare_crystals": 50
      },
      "upkeep": {
        "energy": 5,
        "rare_crystals": 1
      }
    },
    "key": "building_xeno_tourism_agency"
  },
  "building_xeno_zoo": {
    "name": "Alien Zoo",
    "description": "As a sign of our mastery of the unknown, we have gathered alien creatures from all across the galaxy.",
    "base_buildtime": 360,
    "category": "resource",
    "planet_modifier": {
      "job_entertainer_add": 1,
      "job_culture_worker_add": 2
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
        "job_duelist_add": 1,
        "job_entertainer_add": -1
      }
    },
    "key": "building_xeno_zoo"
  }
}

Object.freeze(Building);

export default Building;