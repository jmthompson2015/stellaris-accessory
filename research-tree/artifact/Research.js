const Research = {
  "tech_lasers_1": {
    "key": "tech_lasers_1",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Large Red Laser",
      "<b>Component:</b> Medium Red Laser",
      "<b>Component:</b> Small Red Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Red Lasers",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_plant_1": {
    "key": "tech_power_plant_1",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 0,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "High-Energy Capacitors",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_basic_science_lab_1": {
    "key": "tech_basic_science_lab_1",
    "area": "physics",
    "category": "Computing",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Research Labs"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Scientific Method",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_reactor_boosters_1": {
    "key": "tech_reactor_boosters_1",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Reactor Booster"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Reactor Boosters",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_bio_reactor": {
    "key": "tech_bio_reactor",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Bio-Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Bio-Reactor",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "Any of the following \n    •   is_machine_empire=yes\n    •   is_mechanical_empire=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_drive_1": {
    "key": "tech_hyper_drive_1",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Hyper Drive I"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Hyperspace Travel",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_fission_power": {
    "key": "tech_fission_power",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Fission Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Fission Power",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pd_tracking_1": {
    "key": "tech_pd_tracking_1",
    "area": "physics",
    "category": "Computing",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Sentinel Point-Defense"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Active Countermeasures",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shields_1": {
    "key": "tech_shields_1",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Medium Deflectors",
      "<b>Component:</b> Large Deflectors",
      "<b>Component:</b> Small Deflectors"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Deflectors",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_lasers_2": {
    "key": "tech_lasers_2",
    "area": "physics",
    "category": "Particles",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Small Blue Laser",
      "<b>Component:</b> Medium Blue Laser",
      "<b>Component:</b> Large Blue Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Blue Lasers",
    "prerequisites": [
      "tech_lasers_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Red Lasers",
        "key": "tech_lasers_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_science_2": {
    "key": "tech_space_science_2",
    "area": "physics",
    "category": "Computing",
    "cost": 1000,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_RESEARCHERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Miniature Containment Fields",
    "prerequisites": [
      "tech_space_science_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Zero-G Laboratories",
        "key": "tech_space_science_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_science_1": {
    "key": "tech_space_science_1",
    "area": "physics",
    "category": "Computing",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_RESEARCHERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Zero-G Laboratories",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_automated_exploration": {
    "key": "tech_automated_exploration",
    "area": "physics",
    "category": "Computing",
    "cost": 750,
    "feature_unlocks": [
      "MOD_COUNTRY_SCIENCE_SHIP_SURVEY_SPEED: +25%",
      "<b>Feature : </b>Automatic Exploration"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Automated Exploration Protocols",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_combat_computers_1": {
    "key": "tech_combat_computers_1",
    "area": "physics",
    "category": "Computing",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Starbase Fire Control",
      "<b>Component:</b> Combat Computer"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Specialized Combat Computers",
    "prerequisites": [
      "tech_administrative_ai"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Administrative AI",
        "key": "tech_administrative_ai"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cryostasis_1": {
    "key": "tech_cryostasis_1",
    "area": "physics",
    "category": "Computing",
    "cost": 1000,
    "feature_unlocks": [
      "Colony Development Speed: +50%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "AI-Controlled Colony Ships",
    "prerequisites": [
      "tech_administrative_ai",
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Administrative AI",
        "key": "tech_administrative_ai"
      },
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_fusion_power": {
    "key": "tech_fusion_power",
    "area": "physics",
    "category": "Particles",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Fusion Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Fusion Power",
    "prerequisites": [
      "tech_fission_power"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Fission Power",
        "key": "tech_fission_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_plant_2": {
    "key": "tech_power_plant_2",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_TECHNICIAN_ENERGY_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Field Modulation",
    "prerequisites": [
      "tech_power_plant_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "High-Energy Capacitors",
        "key": "tech_power_plant_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_hub_1": {
    "key": "tech_power_hub_1",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 750,
    "feature_unlocks": [
      "<b>Edict:</b> Capacity Overload",
      "<b>Building:</b> Energy Grid"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Global Energy Management",
    "prerequisites": [
      "tech_power_plant_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "High-Energy Capacitors",
        "key": "tech_power_plant_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_basic_science_lab_2": {
    "key": "tech_basic_science_lab_2",
    "area": "physics",
    "category": "Computing",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Research Complexes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Exotic Materials Labs",
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Scientific Method",
        "key": "tech_basic_science_lab_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_auxiliary_fire_control": {
    "key": "tech_auxiliary_fire_control",
    "area": "physics",
    "category": "Computing",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Auxiliary Fire-control"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Auxiliary Fire-control",
    "prerequisites": [
      "tech_combat_computers_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Specialized Combat Computers",
        "key": "tech_combat_computers_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_reactor_boosters_3": {
    "key": "tech_reactor_boosters_3",
    "area": "physics",
    "category": "Particles",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Advanced Reactor Booster"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Reactor Boosters",
    "prerequisites": [
      "tech_reactor_boosters_2",
      "tech_antimatter_power"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Antimatter Power",
        "key": "tech_antimatter_power"
      },
      {
        "name": "Improved Reactor Boosters",
        "key": "tech_reactor_boosters_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_reactor_boosters_2": {
    "key": "tech_reactor_boosters_2",
    "area": "physics",
    "category": "Particles",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Improved Reactor Booster"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Reactor Boosters",
    "prerequisites": [
      "tech_reactor_boosters_1",
      "tech_fusion_power"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Fusion Power",
        "key": "tech_fusion_power"
      },
      {
        "name": "Reactor Boosters",
        "key": "tech_reactor_boosters_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_physics_1": {
    "key": "tech_physics_1",
    "area": "physics",
    "category": "Computing",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_PHYSICS_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Quantum Theory",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_administrative_ai": {
    "key": "tech_administrative_ai",
    "area": "physics",
    "category": "Computing",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_ALL_TECHNOLOGY_RESEARCH_SPEED: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Administrative AI",
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Scientific Method",
        "key": "tech_basic_science_lab_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shields_2": {
    "key": "tech_shields_2",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Large Improved Deflectors",
      "<b>Component:</b> Small Improved Deflectors",
      "<b>Component:</b> Medium Improved Deflectors"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Deflectors",
    "prerequisites": [
      "tech_shields_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Deflectors",
        "key": "tech_shields_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_lasers_3": {
    "key": "tech_lasers_3",
    "area": "physics",
    "category": "Particles",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Component:</b> Small UV Laser",
      "<b>Component:</b> Large UV Laser",
      "<b>Component:</b> Medium UV Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "UV Lasers",
    "prerequisites": [
      "tech_lasers_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Blue Lasers",
        "key": "tech_lasers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_disruptors_1": {
    "key": "tech_disruptors_1",
    "area": "physics",
    "category": "Particles",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Small Disruptor",
      "<b>Component:</b> Medium Disruptor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Disruptors",
    "prerequisites": [
      "tech_lasers_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Blue Lasers",
        "key": "tech_lasers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_science_4": {
    "key": "tech_space_science_4",
    "area": "physics",
    "category": "Computing",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_RESEARCHERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Autonomous Station Protocols",
    "prerequisites": [
      "tech_space_science_3"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Quantum Probes",
        "key": "tech_space_science_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_science_3": {
    "key": "tech_space_science_3",
    "area": "physics",
    "category": "Computing",
    "cost": 1500,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_RESEARCHERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Quantum Probes",
    "prerequisites": [
      "tech_space_science_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Miniature Containment Fields",
        "key": "tech_space_science_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_plasma_1": {
    "key": "tech_plasma_1",
    "area": "physics",
    "category": "Particles",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Large Plasma Thrower",
      "<b>Component:</b> Small Plasma Thrower",
      "<b>Component:</b> Medium Plasma Thrower"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Plasma Throwers",
    "prerequisites": [
      "tech_lasers_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Blue Lasers",
        "key": "tech_lasers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "null_void_beam": {
    "key": "null_void_beam",
    "area": "physics",
    "category": "Particles",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Large Null Void Beam",
      "<b>Component:</b> Small Null Void Beam",
      "<b>Component:</b> Medium Null Void Beam"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Null Void Beam",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_drone_weapon_1": {
    "key": "tech_mining_drone_weapon_1",
    "area": "physics",
    "category": "Particles",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Cutting Laser",
      "<b>Component:</b> Small Cutting Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mining Drone Lasers",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_self_aware_logic": {
    "key": "tech_self_aware_logic",
    "area": "physics",
    "category": "Computing",
    "cost": 2000,
    "feature_unlocks": [
      "Research Alternatives: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Self-Evolving Logic",
    "prerequisites": [
      "tech_administrative_ai"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Administrative AI",
        "key": "tech_administrative_ai"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_archeology_lab": {
    "key": "tech_archeology_lab",
    "area": "physics",
    "category": "Computing",
    "cost": 1500,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIP_ANOMALY_GENERATION_CHANCE_MULT: +10%",
      "MOD_COUNTRY_SHIP_ANOMALY_RESEARCH_SPEED_MULT: +25%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Curator Archeology Lab",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_curator_lab": {
    "key": "tech_curator_lab",
    "area": "physics",
    "category": "Computing",
    "cost": 1500,
    "feature_unlocks": [
      "MOD_COUNTRY_SCIENCE_SHIP_SURVEY_SPEED: +33%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Curator Exploration Lab",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_plant_3": {
    "key": "tech_power_plant_3",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_TECHNICIAN_ENERGY_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Quantum Energy States",
    "prerequisites": [
      "tech_power_plant_2",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Field Modulation",
        "key": "tech_power_plant_2"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cold_fusion_power": {
    "key": "tech_cold_fusion_power",
    "area": "physics",
    "category": "Particles",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Cold Fusion Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cold Fusion Power",
    "prerequisites": [
      "tech_fusion_power"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Fusion Power",
        "key": "tech_fusion_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_sensors_2": {
    "key": "tech_sensors_2",
    "area": "physics",
    "category": "Computing",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Component:</b> Gravitic Sensors",
      "<b>Starbase Building:</b> Listening Post"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gravitic Sensors",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_experimental_subspace_navigation": {
    "key": "tech_experimental_subspace_navigation",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Feature : </b>Experimental Subspace Navigation"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Speculative Hyperlane Breaching",
    "prerequisites": [
      "tech_sensors_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Gravitic Sensors",
        "key": "tech_sensors_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_hub_2": {
    "key": "tech_power_hub_2",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Building:</b> Energy Nexus"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Planetary Power Grid",
    "prerequisites": [
      "tech_power_hub_1",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Global Energy Management",
        "key": "tech_power_hub_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shield_rechargers_1": {
    "key": "tech_shield_rechargers_1",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Shield Capacitor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Shield Capacitors",
    "prerequisites": [
      "tech_shields_3"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Shields",
        "key": "tech_shields_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ftl_inhibitor": {
    "key": "tech_ftl_inhibitor",
    "area": "physics",
    "category": "Particles",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Feature : </b>Planetary FTL Inhibitors",
      "<b>Component:</b> FTL Inhibitor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "FTL Inhibition",
    "prerequisites": [
      "tech_hyper_drive_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Hyperspace Travel",
        "key": "tech_hyper_drive_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_physics_2": {
    "key": "tech_physics_2",
    "area": "physics",
    "category": "Computing",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_PHYSICS_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Applied Quantum Physics",
    "prerequisites": [
      "tech_physics_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Quantum Theory",
        "key": "tech_physics_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_drive_2": {
    "key": "tech_hyper_drive_2",
    "area": "physics",
    "category": "Particles",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Hyper Drive II",
      "<b>Starbase Building:</b> Hyperlane Registrar"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hyperlane Breach Points",
    "prerequisites": [
      "tech_hyper_drive_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Hyperspace Travel",
        "key": "tech_hyper_drive_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pd_tracking_2": {
    "key": "tech_pd_tracking_2",
    "area": "physics",
    "category": "Computing",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Barrier Point-Defense"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interlinked Support Systems",
    "prerequisites": [
      "tech_pd_tracking_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Active Countermeasures",
        "key": "tech_pd_tracking_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shields_3": {
    "key": "tech_shields_3",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Small Shields",
      "<b>Component:</b> Medium Shields",
      "<b>Component:</b> Large Shields"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Shields",
    "prerequisites": [
      "tech_shields_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Improved Deflectors",
        "key": "tech_shields_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_volatile_motes": {
    "key": "tech_volatile_motes",
    "area": "physics",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Building:</b> Chemical Plants"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Volatile Material Plants",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_cloud_weapon_1": {
    "key": "tech_space_cloud_weapon_1",
    "area": "physics",
    "category": "Particles",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Cloud Lightning"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Cloud Lightning Conduits",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_lasers_4": {
    "key": "tech_lasers_4",
    "area": "physics",
    "category": "Particles",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Large X-Ray Laser",
      "<b>Component:</b> Medium X-Ray Laser",
      "<b>Component:</b> Small X-Ray Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "X-Ray Lasers",
    "prerequisites": [
      "tech_lasers_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "UV Lasers",
        "key": "tech_lasers_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_disruptors_2": {
    "key": "tech_disruptors_2",
    "area": "physics",
    "category": "Particles",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Ion Disruptor",
      "<b>Component:</b> Small Ion Disruptor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ion Disruptors",
    "prerequisites": [
      "tech_disruptors_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Disruptors",
        "key": "tech_disruptors_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_science_5": {
    "key": "tech_space_science_5",
    "area": "physics",
    "category": "Computing",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_RESEARCHERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Multi-Dimensional Analysis",
    "prerequisites": [
      "tech_space_science_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Autonomous Station Protocols",
        "key": "tech_space_science_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_plasma_2": {
    "key": "tech_plasma_2",
    "area": "physics",
    "category": "Particles",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Large Plasma Accelerator",
      "<b>Component:</b> Medium Plasma Accelerator",
      "<b>Component:</b> Small Plasma Accelerator",
      "<b>Component:</b> Small Caravan Cannon",
      "<b>Component:</b> Large Caravan Cannon",
      "<b>Component:</b> Medium Caravan Cannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Plasma Accelerators",
    "prerequisites": [
      "tech_plasma_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Plasma Throwers",
        "key": "tech_plasma_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_planetary_shield_generator": {
    "key": "tech_planetary_shield_generator",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Planetary Shield Generator"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Planetary Shields",
    "prerequisites": [
      "tech_shields_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Shields",
        "key": "tech_shields_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_combat_computers_2": {
    "key": "tech_combat_computers_2",
    "area": "physics",
    "category": "Computing",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Starbase Fire Control",
      "<b>Component:</b> Advanced Combat Computer"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Extended Combat Algorithms",
    "prerequisites": [
      "tech_combat_computers_1",
      "tech_self_aware_logic"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Specialized Combat Computers",
        "key": "tech_combat_computers_1"
      },
      {
        "name": "Self-Evolving Logic",
        "key": "tech_self_aware_logic"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_antimatter_power": {
    "key": "tech_antimatter_power",
    "area": "physics",
    "category": "Particles",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Component:</b> Antimatter Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Antimatter Power",
    "prerequisites": [
      "tech_cold_fusion_power"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Cold Fusion Power",
        "key": "tech_cold_fusion_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cryostasis_2": {
    "key": "tech_cryostasis_2",
    "area": "physics",
    "category": "Computing",
    "cost": 2500,
    "feature_unlocks": [
      "Colony Development Speed: +50%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Self-Aware Colony Ships",
    "prerequisites": [
      "tech_cryostasis_1",
      "tech_self_aware_logic"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Self-Evolving Logic",
        "key": "tech_self_aware_logic"
      },
      {
        "name": "AI-Controlled Colony Ships",
        "key": "tech_cryostasis_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_global_research_initiative": {
    "key": "tech_global_research_initiative",
    "area": "physics",
    "category": "Computing",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Research Institute",
      "<b>Building:</b> Planetary Supercomputer"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interplanetary Research Initiative",
    "prerequisites": [
      "tech_physics_1",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Quantum Theory",
        "key": "tech_physics_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_sensors_3": {
    "key": "tech_sensors_3",
    "area": "physics",
    "category": "Computing",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Subspace Sensors",
      "<b>Starbase Building:</b> Black Hole Observatory"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Subspace Sensors",
    "prerequisites": [
      "tech_sensors_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Gravitic Sensors",
        "key": "tech_sensors_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_basic_science_lab_3": {
    "key": "tech_basic_science_lab_3",
    "area": "physics",
    "category": "Computing",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Advanced Research Complexes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Multi-Dimensional Studies",
    "prerequisites": [
      "tech_basic_science_lab_2",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Exotic Materials Labs",
        "key": "tech_basic_science_lab_2"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_wormhole_stabilization": {
    "key": "tech_wormhole_stabilization",
    "area": "physics",
    "category": "Particles",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Feature : </b>Wormhole Travel"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Wormhole Stabilization",
    "prerequisites": [
      "tech_hyper_drive_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Hyperlane Breach Points",
        "key": "tech_hyper_drive_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_akx_worm_3": {
    "key": "tech_akx_worm_3",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Building:</b> Omega Alignment"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Omega Theory",
    "prerequisites": [
      "tech_akx_worm_1",
      "tech_akx_worm_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Entropic Recursion",
        "key": "tech_akx_worm_1"
      },
      {
        "name": "Doctrine: Strange Loop",
        "key": "tech_akx_worm_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_dark_matter": {
    "key": "tech_mine_dark_matter",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Reveals Ressource:</b> Dark Matter"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Dark Matter Drawing",
    "prerequisites": [
      "tech_sensors_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Tachyon Sensors",
        "key": "tech_sensors_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_akx_worm_1": {
    "key": "tech_akx_worm_1",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 4000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Entropic Recursion",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_lgate_activation": {
    "key": "tech_lgate_activation",
    "area": "physics",
    "category": "Particles",
    "cost": 6000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "L-Gate Activation",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "Does NOT Have Global Flag l_cluster_opened"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_drive_3": {
    "key": "tech_hyper_drive_3",
    "area": "physics",
    "category": "Particles",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Hyper Drive III"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hyperspace Slipstreams",
    "prerequisites": [
      "tech_hyper_drive_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Hyperlane Breach Points",
        "key": "tech_hyper_drive_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shields_4": {
    "key": "tech_shields_4",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Advanced Shields",
      "<b>Component:</b> Large Advanced Shields",
      "<b>Component:</b> Small Advanced Shields"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Shields",
    "prerequisites": [
      "tech_shields_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Shields",
        "key": "tech_shields_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_energy_torpedoes_1": {
    "key": "tech_energy_torpedoes_1",
    "area": "physics",
    "category": "Particles",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Proton Launchers"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Proton Launchers",
    "prerequisites": [
      "tech_lasers_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "X-Ray Lasers",
        "key": "tech_lasers_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_disruptors_3": {
    "key": "tech_disruptors_3",
    "area": "physics",
    "category": "Particles",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Phased Disruptor",
      "<b>Component:</b> Small Phased Disruptor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Phase Disruptors",
    "prerequisites": [
      "tech_disruptors_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Ion Disruptors",
        "key": "tech_disruptors_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_lasers_5": {
    "key": "tech_lasers_5",
    "area": "physics",
    "category": "Particles",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Gamma Laser",
      "<b>Component:</b> Small Gamma Laser",
      "<b>Component:</b> Large Gamma Laser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gamma Lasers",
    "prerequisites": [
      "tech_lasers_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "X-Ray Lasers",
        "key": "tech_lasers_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_positronic_implants": {
    "key": "tech_positronic_implants",
    "area": "physics",
    "category": "Computing",
    "cost": 8000,
    "feature_unlocks": [
      "MOD_COUNTRY_ALL_TECHNOLOGY_RESEARCH_SPEED: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Positronic Implants",
    "prerequisites": [
      "tech_self_aware_logic"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Self-Evolving Logic",
        "key": "tech_self_aware_logic"
      }
    ],
    "potential": [
      "Has Gestalt Consciousness Ethic"
    ],
    "is_gestalt": true,
    "is_machine": false
  },
  "tech_plasma_3": {
    "key": "tech_plasma_3",
    "area": "physics",
    "category": "Particles",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Plasma Cannon",
      "<b>Component:</b> Small Plasma Cannon",
      "<b>Component:</b> Large Plasma Cannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Plasma Cannons",
    "prerequisites": [
      "tech_plasma_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Plasma Accelerators",
        "key": "tech_plasma_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_arc_emitter_1": {
    "key": "tech_arc_emitter_1",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Arc Emitter"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Arc Emitters",
    "prerequisites": [
      "tech_disruptors_3",
      "tech_battleships"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Phase Disruptors",
        "key": "tech_disruptors_3"
      },
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_arc_emitter_2": {
    "key": "tech_arc_emitter_2",
    "area": "physics",
    "category": "Particles",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Component:</b> Focused Arc Emitter"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Focused Arc Emitters",
    "prerequisites": [
      "tech_arc_emitter_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Arc Emitters",
        "key": "tech_arc_emitter_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_combat_computers_3": {
    "key": "tech_combat_computers_3",
    "area": "physics",
    "category": "Computing",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Sapient Combat Computer"
    ],
    "is_dangerous": true,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Sapient Combat Simulations",
    "prerequisites": [
      "tech_combat_computers_2",
      "tech_sapient_ai"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Extended Combat Algorithms",
        "key": "tech_combat_computers_2"
      },
      {
        "name": "Positronic AI",
        "key": "tech_sapient_ai"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gateway_activation": {
    "key": "tech_gateway_activation",
    "area": "physics",
    "category": "Particles",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Feature : </b>Gateway Travel"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Gateway Activation",
    "prerequisites": [
      "tech_hyper_drive_3"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Hyperspace Slipstreams",
        "key": "tech_hyper_drive_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_synchronized_defences": {
    "key": "tech_synchronized_defences",
    "area": "physics",
    "category": "Computing",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Starbase Building:</b> Defense-Grid Supercomputer"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Synchronized Defenses",
    "prerequisites": [
      "tech_self_aware_logic"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Self-Evolving Logic",
        "key": "tech_self_aware_logic"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_sapient_ai": {
    "key": "tech_sapient_ai",
    "area": "physics",
    "category": "Computing",
    "cost": 8000,
    "feature_unlocks": [
      "MOD_COUNTRY_ALL_TECHNOLOGY_RESEARCH_SPEED: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Positronic AI",
    "prerequisites": [
      "tech_self_aware_logic"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Self-Evolving Logic",
        "key": "tech_self_aware_logic"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_plant_4": {
    "key": "tech_power_plant_4",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_TECHNICIAN_ENERGY_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Quantum Field Manipulation",
    "prerequisites": [
      "tech_power_plant_3",
      "tech_galactic_administration"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Quantum Energy States",
        "key": "tech_power_plant_3"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_sensors_4": {
    "key": "tech_sensors_4",
    "area": "physics",
    "category": "Computing",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Tachyon Sensors"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Tachyon Sensors",
    "prerequisites": [
      "tech_sensors_3"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Subspace Sensors",
        "key": "tech_sensors_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_combat_computers_autonomous": {
    "key": "tech_combat_computers_autonomous",
    "area": "physics",
    "category": "Computing",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Autonomous Ship Intellect"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Autonomous Ship Intellects",
    "prerequisites": [
      "tech_combat_computers_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Extended Combat Algorithms",
        "key": "tech_combat_computers_2"
      }
    ],
    "potential": [
      "Has Gestalt Consciousness Ethic"
    ],
    "is_gestalt": true,
    "is_machine": false
  },
  "tech_zero_point_power": {
    "key": "tech_zero_point_power",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Zero Point Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Zero Point Power",
    "prerequisites": [
      "tech_antimatter_power"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Antimatter Power",
        "key": "tech_antimatter_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_energy_lance_1": {
    "key": "tech_energy_lance_1",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Particle Lance"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Particle Lances",
    "prerequisites": [
      "tech_lasers_4",
      "tech_battleships"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "X-Ray Lasers",
        "key": "tech_lasers_4"
      },
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_physics_3": {
    "key": "tech_physics_3",
    "area": "physics",
    "category": "Computing",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_PHYSICS_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Space-Time Theory",
    "prerequisites": [
      "tech_physics_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Applied Quantum Physics",
        "key": "tech_physics_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pd_tracking_3": {
    "key": "tech_pd_tracking_3",
    "area": "physics",
    "category": "Computing",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Guardian Point-Defense"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Predictive Algorithms",
    "prerequisites": [
      "tech_pd_tracking_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Interlinked Support Systems",
        "key": "tech_pd_tracking_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_shields_5": {
    "key": "tech_shields_5",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Component:</b> Medium Hyper Shields",
      "<b>Component:</b> Large Hyper Shields",
      "<b>Component:</b> Small Hyper Shields"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hyper Shields",
    "prerequisites": [
      "tech_shields_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Advanced Shields",
        "key": "tech_shields_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_energy_lance_2": {
    "key": "tech_energy_lance_2",
    "area": "physics",
    "category": "Particles",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Component:</b> Tachyon Lance"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Tachyon Lances",
    "prerequisites": [
      "tech_lasers_5",
      "tech_energy_lance_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Gamma Lasers",
        "key": "tech_lasers_5"
      },
      {
        "name": "Particle Lances",
        "key": "tech_energy_lance_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_energy_torpedoes_2": {
    "key": "tech_energy_torpedoes_2",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Neutron Launchers"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Neutron Launchers",
    "prerequisites": [
      "tech_energy_torpedoes_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Proton Launchers",
        "key": "tech_energy_torpedoes_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pk_shielder": {
    "key": "tech_pk_shielder",
    "area": "physics",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Global Pacifier"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Global Pacification",
    "prerequisites": [
      "tech_colossus"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Colossi",
        "key": "tech_colossus"
      }
    ],
    "potential": [
      "Has DLC Apocalypse",
      "Has Country Flag colossus_project"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dark_matter_power_core": {
    "key": "tech_dark_matter_power_core",
    "area": "physics",
    "category": "Particles",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Dark Matter Reactor"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Dark Matter Power",
    "prerequisites": [
      "tech_zero_point_power"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Zero Point Power",
        "key": "tech_zero_point_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_energy_fire_rate": {
    "key": "tech_repeatable_weapon_type_energy_fire_rate",
    "area": "physics",
    "category": "Particles",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_ENERGY_WEAPON_FIRE_RATE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Flash Coolant",
    "prerequisites": [
      "tech_lasers_2"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Blue Lasers",
        "key": "tech_lasers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pk_neutron": {
    "key": "tech_pk_neutron",
    "area": "physics",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Neutron Sweep"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Neutron Sweeping",
    "prerequisites": [
      "tech_colossus"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Colossi",
        "key": "tech_colossus"
      }
    ],
    "potential": [
      "Has DLC Apocalypse",
      "Has Country Flag colossus_project",
      "Is Spiritualist",
      "Is Pacifist"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_enigmatic_decoder": {
    "key": "tech_enigmatic_decoder",
    "area": "physics",
    "category": "Computing",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Enigmatic Decoder"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Enigmatic Decoder",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_reduced_building_cost": {
    "key": "tech_repeatable_reduced_building_cost",
    "area": "physics",
    "category": "Computing",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_BUILDINGS_COST_MULT: -5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gravitational Analysis",
    "prerequisites": [
      "tech_physics_2"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Applied Quantum Physics",
        "key": "tech_physics_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_jump_drive_1": {
    "key": "tech_jump_drive_1",
    "area": "physics",
    "category": "Particles",
    "cost": 15000,
    "feature_unlocks": [
      "<b>Component:</b> Jump Drive",
      "<b>Feature : </b>Jump Drive Travel"
    ],
    "is_dangerous": true,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Jump Drive",
    "prerequisites": [
      "tech_zero_point_power"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Zero Point Power",
        "key": "tech_zero_point_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gateway_construction": {
    "key": "tech_gateway_construction",
    "area": "physics",
    "category": "Particles",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Feature : </b>Gateway Construction"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Gateway Construction",
    "prerequisites": [
      "tech_gateway_activation",
      "tech_mega_engineering"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Gateway Activation",
        "key": "tech_gateway_activation"
      },
      {
        "name": "Mega-Engineering",
        "key": "tech_mega_engineering"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_shield_output": {
    "key": "tech_repeatable_improved_shield_output",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 50000,
    "feature_unlocks": [
      "Shield Hit Points: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Shield Harmonics",
    "prerequisites": [
      "tech_shields_4"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Advanced Shields",
        "key": "tech_shields_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_extradimensional_weapon_1": {
    "key": "tech_extradimensional_weapon_1",
    "area": "physics",
    "category": "Particles",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Large Matter Disintegrator",
      "<b>Component:</b> Medium Matter Disintegrator",
      "<b>Component:</b> Small Matter Disintegrator"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Extradimensional Weaponry",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_enigmatic_encoder": {
    "key": "tech_enigmatic_encoder",
    "area": "physics",
    "category": "Computing",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Enigmatic Encoder"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Enigmatic Encoder",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_energy_damage": {
    "key": "tech_repeatable_weapon_type_energy_damage",
    "area": "physics",
    "category": "Particles",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_ENERGY_WEAPON_DAMAGE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Focusing Arrays",
    "prerequisites": [
      "tech_lasers_4"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "X-Ray Lasers",
        "key": "tech_lasers_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_tile_energy_output": {
    "key": "tech_repeatable_improved_tile_energy_output",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_ENERGY_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Applied Superconductivity",
    "prerequisites": [
      "tech_power_plant_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Quantum Energy States",
        "key": "tech_power_plant_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dark_matter_deflector": {
    "key": "tech_dark_matter_deflector",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Large Dark Matter Deflectors",
      "<b>Component:</b> Small Dark Matter Deflectors",
      "<b>Component:</b> Medium Dark Matter Deflectors"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Dark Matter Deflectors",
    "prerequisites": [
      "tech_shields_5"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Hyper Shields",
        "key": "tech_shields_5"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hive_node": {
    "key": "tech_hive_node",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Synaptic Nodes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Synaptic Structures",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "is_hive_empire=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_planetary_government": {
    "key": "tech_planetary_government",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Sentinel Posts",
      "<b>Building:</b> Administrative Array",
      "<b>Building:</b> Precinct Houses",
      "<b>Building:</b> Planetary Administration",
      "<b>Building:</b> Maintenance Depots",
      "<b>Building:</b> Hive Core"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Planetary Government",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_1": {
    "key": "tech_colonization_1",
    "area": "society",
    "category": "New Worlds",
    "cost": 0,
    "feature_unlocks": [
      "<b>Ship Size:</b> Private Colony Ship",
      "<b>Ship Size:</b> Colony Ship"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "New Worlds Protocol",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_interplanetary_commerce": {
    "key": "tech_interplanetary_commerce",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Commercial Zones"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Interplanetary Commerce",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_holo_entertainment": {
    "key": "tech_holo_entertainment",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Holo-Theatres"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Holo-Entertainment",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cultural_heritage": {
    "key": "tech_cultural_heritage",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Temple",
      "<b>Building:</b> Autochthon Monument",
      "<b>Building:</b> Corporate Culture Site",
      "<b>Building:</b> Uplink Node"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Sociocultural History",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "is_hive_empire=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_planetary_defenses": {
    "key": "tech_planetary_defenses",
    "area": "society",
    "category": "Military Theory",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Stronghold"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Planetary Defenses",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_industrial_farming": {
    "key": "tech_industrial_farming",
    "area": "society",
    "category": "Biology",
    "cost": 0,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Industrial Agriculture",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_genome_mapping": {
    "key": "tech_genome_mapping",
    "area": "society",
    "category": "Biology",
    "cost": 500,
    "feature_unlocks": [
      "Pop Growth Speed: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Genome Mapping",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_planetary_unification": {
    "key": "tech_planetary_unification",
    "area": "society",
    "category": "Statecraft",
    "cost": 500,
    "feature_unlocks": [
      "<b>Edict:</b> Peace Festivals",
      "MOD_COUNTRY_COUNTRY_BASE_UNITY_PRODUCES_ADD: +2",
      "<b>Feature : </b>Additional Edicts (Campaigns)"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Planetary Unification",
    "prerequisites": [
      "tech_planetary_government"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Planetary Government",
        "key": "tech_planetary_government"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dense_jungle": {
    "key": "tech_dense_jungle",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Selective Defoliants",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_frontier_health": {
    "key": "tech_frontier_health",
    "area": "society",
    "category": "Biology",
    "cost": 750,
    "feature_unlocks": [
      "<b>Building:</b> Gene Clinics"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Genetic Healthcare",
    "prerequisites": [
      "tech_colonization_1",
      "tech_genome_mapping"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      },
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_whale_weapon_1": {
    "key": "tech_space_whale_weapon_1",
    "area": "society",
    "category": "Biology",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Energy Siphon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Frequency Tuning",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_food_processing_1": {
    "key": "tech_food_processing_1",
    "area": "society",
    "category": "Biology",
    "cost": 750,
    "feature_unlocks": [
      "<b>Building:</b> Food Processing Facilities"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Food Processing",
    "prerequisites": [
      "tech_eco_simulation"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Eco Simulation",
        "key": "tech_eco_simulation"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_quicksand_basin": {
    "key": "tech_quicksand_basin",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Soil Remediation",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_adaptive_bureaucracy": {
    "key": "tech_adaptive_bureaucracy",
    "area": "society",
    "category": "Statecraft",
    "cost": 750,
    "feature_unlocks": [
      "MOD_COUNTRY_LEADERS_COST_MULT: -20%",
      "Leader Pool Size: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Adaptive Bureaucracy",
    "prerequisites": [
      "tech_planetary_unification"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Planetary Unification",
        "key": "tech_planetary_unification"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_trading": {
    "key": "tech_space_trading",
    "area": "society",
    "category": "Statecraft",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Starbase Building:</b> Offworld Trading Company"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Offworld Trade Companies",
    "prerequisites": [
      "tech_interplanetary_commerce"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Interplanetary Commerce",
        "key": "tech_interplanetary_commerce"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_deep_sinkhole": {
    "key": "tech_deep_sinkhole",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Subterranean Colonization",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_society_1": {
    "key": "tech_society_1",
    "area": "society",
    "category": "Biology",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_SOCIETY_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Biodiversity Studies",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hydroponics": {
    "key": "tech_hydroponics",
    "area": "society",
    "category": "Biology",
    "cost": 500,
    "feature_unlocks": [
      "<b>Building:</b> Hydroponics Farms",
      "<b>Starbase Building:</b> Hydroponics Bay"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hydroponics Farming",
    "prerequisites": [
      "tech_industrial_farming"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Agriculture",
        "key": "tech_industrial_farming"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_massive_glacier": {
    "key": "tech_massive_glacier",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Climate Control Network",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gargantuan_evolution": {
    "key": "tech_gargantuan_evolution",
    "area": "society",
    "category": "Biology",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_ENERGY_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Gargantuan Evolution",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_eco_simulation": {
    "key": "tech_eco_simulation",
    "area": "society",
    "category": "Biology",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_FARMERS_FOOD_PRODUCES_MULT: +10%",
      "<b>Edict:</b> Farming Subsidies"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Eco Simulation",
    "prerequisites": [
      "tech_industrial_farming"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Agriculture",
        "key": "tech_industrial_farming"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_noxious_swamp": {
    "key": "tech_noxious_swamp",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Xeno-Hydraulic Mastery",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_entertainment_forum": {
    "key": "tech_hyper_entertainment_forum",
    "area": "society",
    "category": "Statecraft",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Hyper-Entertainment Forums"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hyper-Entertainment Forum",
    "prerequisites": [
      "tech_holo_entertainment"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Holo-Entertainment",
        "key": "tech_holo_entertainment"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_toxic_kelp": {
    "key": "tech_toxic_kelp",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ocean Ecology Management",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_alien_life_studies": {
    "key": "tech_alien_life_studies",
    "area": "society",
    "category": "Biology",
    "cost": 750,
    "feature_unlocks": [
      "<b>Building:</b> Alien Zoo"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Xenology",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [
      "is_regular_empire=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_neural_implants": {
    "key": "tech_neural_implants",
    "area": "society",
    "category": "Statecraft",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Slave Processing Facility",
      "<b>Army:</b> Slave Army"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Neural Implants",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ground_defense_planning": {
    "key": "tech_ground_defense_planning",
    "area": "society",
    "category": "Military Theory",
    "cost": 750,
    "feature_unlocks": [
      "MOD_COUNTRY_SHOW_ONLY_CUSTOM_TOOLTIP: no",
      "Defense Army Damage: +33%",
      "MOD_COUNTRY_CUSTOM_TOOLTIP: "
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ground Defense Planning",
    "prerequisites": [
      "tech_planetary_defenses"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Planetary Defenses",
        "key": "tech_planetary_defenses"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_crops": {
    "key": "tech_gene_crops",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_FARMERS_FOOD_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gene Crops",
    "prerequisites": [
      "tech_eco_simulation",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Eco Simulation",
        "key": "tech_eco_simulation"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_interstellar_campaigns": {
    "key": "tech_interstellar_campaigns",
    "area": "society",
    "category": "Military Theory",
    "cost": 2500,
    "feature_unlocks": [
      "War Exhaustion Gain: -10%",
      "Claim Influence Cost: -10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interstellar Campaigns",
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Stellar Expansion",
        "key": "tech_galactic_ambitions"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autonomous_agents": {
    "key": "tech_autonomous_agents",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_COUNTRY_BASE_INFLUENCE_PRODUCES_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Autonomous Agents",
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Has Gestalt Consciousness Ethic"
    ],
    "is_gestalt": true,
    "is_machine": false
  },
  "tech_gene_banks": {
    "key": "tech_gene_banks",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Army:</b> Clone Army"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Gene Banks",
    "prerequisites": [
      "tech_cloning"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Cloning",
        "key": "tech_cloning"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_global_defense_grid": {
    "key": "tech_global_defense_grid",
    "area": "society",
    "category": "Military Theory",
    "cost": 1500,
    "feature_unlocks": [
      "Defense Army Health: +25%",
      "<b>Building:</b> Fortress"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Global Defense Grid",
    "prerequisites": [
      "tech_ground_defense_planning"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Ground Defense Planning",
        "key": "tech_ground_defense_planning"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hive_cluster": {
    "key": "tech_hive_cluster",
    "area": "society",
    "category": "Statecraft",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Synaptic Clusters"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Clustered Synapses",
    "prerequisites": [
      "tech_hive_node"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Synaptic Structures",
        "key": "tech_hive_node"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_living_state": {
    "key": "tech_living_state",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_POP_FACTIONS_PRODUCES_ADD: +1",
      "<b>Starbase Building:</b> Deep Space Black Site"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "The Living State",
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_terrestrial_sculpting": {
    "key": "tech_terrestrial_sculpting",
    "area": "society",
    "category": "New Worlds",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Feature : </b>Terraforming",
      "<b>Edict:</b> Terraforming Gases"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Terrestrial Sculpting",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_volcano": {
    "key": "tech_volcano",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Deep Crust Engineering",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_3": {
    "key": "tech_colonization_3",
    "area": "society",
    "category": "New Worlds",
    "cost": 2500,
    "feature_unlocks": [
      "Habitability: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Hostile Environment Adaptation",
    "prerequisites": [
      "tech_colonization_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Atmospheric Filtering",
        "key": "tech_colonization_2"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_machine_empire=no\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_2": {
    "key": "tech_colonization_2",
    "area": "society",
    "category": "New Worlds",
    "cost": 1000,
    "feature_unlocks": [
      "Habitability: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Atmospheric Filtering",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_machine_empire=no\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_society_2": {
    "key": "tech_society_2",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_SOCIETY_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Xenobiology",
    "prerequisites": [
      "tech_society_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Biodiversity Studies",
        "key": "tech_society_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_heritage_site": {
    "key": "tech_heritage_site",
    "area": "society",
    "category": "Statecraft",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Network Junction",
      "<b>Building:</b> Heritage Site",
      "<b>Building:</b> Business Management Nexus"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Heritage Sites",
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Sociocultural History",
        "key": "tech_cultural_heritage"
      }
    ],
    "potential": [
      "None of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_amoeba_strike_craft_1": {
    "key": "tech_amoeba_strike_craft_1",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Amoeba Flagella"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Amoeba Breeding Program",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_unity_of_purpose": {
    "key": "tech_unity_of_purpose",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "feature_unlocks": [
      "Amenities: +5%",
      "Deviancy: -15%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Unity of Purpose",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "is_gestalt=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_centralized_command": {
    "key": "tech_centralized_command",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Military Academy",
      "Max Occupation Garrisons: +2"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Centralized Command",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_1": {
    "key": "tech_doctrine_fleet_size_1",
    "area": "society",
    "category": "Military Theory",
    "cost": 1500,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Space Combat",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonial_centralization": {
    "key": "tech_colonial_centralization",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Planetary Capital",
      "<b>Building:</b> Hive Nexus",
      "<b>Building:</b> Hall of Judgment",
      "<b>Building:</b> Planetary Processor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Colonial Centralization",
    "prerequisites": [
      "tech_planetary_unification"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Planetary Unification",
        "key": "tech_planetary_unification"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_2": {
    "key": "tech_doctrine_fleet_size_2",
    "area": "society",
    "category": "Military Theory",
    "cost": 2500,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Reactive Formations",
    "prerequisites": [
      "tech_doctrine_fleet_size_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Doctrine: Space Combat",
        "key": "tech_doctrine_fleet_size_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_adaptive_combat_algorithms": {
    "key": "tech_adaptive_combat_algorithms",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Army:</b> Battle Frame Army"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Adaptive Combat Algorithms",
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Colonial Bureaucracy",
        "key": "tech_colonial_bureaucracy"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_epigenetic_triggers": {
    "key": "tech_epigenetic_triggers",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Feature : </b>Uplift"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Epigenetic Triggers",
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_navy_size_1": {
    "key": "tech_doctrine_navy_size_1",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Fleet Support",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cloning": {
    "key": "tech_cloning",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "feature_unlocks": [
      "Pop Growth Speed: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cloning",
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mountain_range": {
    "key": "tech_mountain_range",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Planetary Resurfacing",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_galactic_ambitions": {
    "key": "tech_galactic_ambitions",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "feature_unlocks": [
      "Starbase Capacity: +2"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Stellar Expansion",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_holographic_rituals": {
    "key": "tech_holographic_rituals",
    "area": "society",
    "category": "Statecraft",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Holotemple"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Holographic Rituals",
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Sociocultural History",
        "key": "tech_cultural_heritage"
      }
    ],
    "potential": [
      "Any of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_interstellar_fleet_traditions": {
    "key": "tech_interstellar_fleet_traditions",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Starbase Building:</b> Naval Logistics Office",
      "<b>Starbase Building:</b> Fleet Academy"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interstellar Fleet Traditions",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonial_bureaucracy": {
    "key": "tech_colonial_bureaucracy",
    "area": "society",
    "category": "New Worlds",
    "cost": 1500,
    "feature_unlocks": [
      "Administrative Cap: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Colonial Bureaucracy",
    "prerequisites": [
      "tech_adaptive_bureaucracy"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Adaptive Bureaucracy",
        "key": "tech_adaptive_bureaucracy"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_vitality_boosters": {
    "key": "tech_vitality_boosters",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "feature_unlocks": [
      "Leader Lifespan: +10"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Vitality Boosters",
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_frontier_hospital": {
    "key": "tech_frontier_hospital",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Building:</b> Cyto-Revitalization Centers"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cyto-Revitalization",
    "prerequisites": [
      "tech_frontier_health",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Genetic Healthcare",
        "key": "tech_frontier_health"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dangerous_wildlife": {
    "key": "tech_dangerous_wildlife",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Dangerous Wildlife Removal",
    "prerequisites": [
      "tech_colonization_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "New Worlds Protocol",
        "key": "tech_colonization_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_subdermal_stimulation": {
    "key": "tech_subdermal_stimulation",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Feature : </b>Chemical Bliss"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Subdermal Stimulation",
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_artificial_moral_codes": {
    "key": "tech_artificial_moral_codes",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "feature_unlocks": [
      "Crime: -15%",
      "Amenities: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Artificial Moral Codes",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_slave_colonies": {
    "key": "tech_slave_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Thrall-Worlds",
    "prerequisites": [
      "tech_neural_implants"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Neural Implants",
        "key": "tech_neural_implants"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_penal_colonies": {
    "key": "tech_penal_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Penal Colonies",
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Artificial Moral Codes",
        "key": "tech_artificial_moral_codes"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_command_matrix": {
    "key": "tech_command_matrix",
    "area": "society",
    "category": "Military Theory",
    "cost": 6000,
    "feature_unlocks": [
      "Ship Fire Rate: +5%",
      "<b>Starbase Building:</b> Command Center"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Command Matrix",
    "prerequisites": [
      "tech_refit_standards"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Refit Standards",
        "key": "tech_refit_standards"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_synthetic_thought_patterns": {
    "key": "tech_synthetic_thought_patterns",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Synthetic Thought Patterns",
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Artificial Moral Codes",
        "key": "tech_artificial_moral_codes"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_glandular_acclimation": {
    "key": "tech_glandular_acclimation",
    "area": "society",
    "category": "Biology",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Feature : </b>Habitability Modification"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Glandular Acclimation",
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Gene Tailoring",
        "key": "tech_gene_tailoring"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_food_processing_2": {
    "key": "tech_food_processing_2",
    "area": "society",
    "category": "Biology",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Food Processing Centers"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Food Processing",
    "prerequisites": [
      "tech_food_processing_1",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Food Processing",
        "key": "tech_food_processing_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_combat_training": {
    "key": "tech_combat_training",
    "area": "society",
    "category": "Military Theory",
    "cost": 4000,
    "feature_unlocks": [
      "Assault Army Damage: +15%",
      "Assault Army Morale: +15%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Combat Training",
    "prerequisites": [
      "tech_centralized_command"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Centralized Command",
        "key": "tech_centralized_command"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_housing_agrarian_idyll": {
    "key": "tech_housing_agrarian_idyll",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "Agriculture District Housing: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Agrarian Utopias",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_4": {
    "key": "tech_colonization_4",
    "area": "society",
    "category": "New Worlds",
    "cost": 6000,
    "feature_unlocks": [
      "Habitability: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Foreign Soil Enrichment",
    "prerequisites": [
      "tech_colonization_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Hostile Environment Adaptation",
        "key": "tech_colonization_3"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_machine_empire=no\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ecological_adaptation": {
    "key": "tech_ecological_adaptation",
    "area": "society",
    "category": "New Worlds",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Feature : </b>Ecological Adaptation"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ecological Adaptation",
    "prerequisites": [
      "tech_terrestrial_sculpting"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Terrestrial Sculpting",
        "key": "tech_terrestrial_sculpting"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hypercomms_forum": {
    "key": "tech_hypercomms_forum",
    "area": "society",
    "category": "Statecraft",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Building:</b> Hypercomms Forum",
      "<b>Building:</b> System Conflux",
      "<b>Building:</b> Synergy Forum"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Local Hypercommunication",
    "prerequisites": [
      "tech_heritage_site",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Heritage Sites",
        "key": "tech_heritage_site"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "None of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_global_production_strategy": {
    "key": "tech_global_production_strategy",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Ministry of Production",
      "<b>Building:</b> Resource Processing Center"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Global Production Strategy",
    "prerequisites": [
      "tech_colonial_centralization",
      "tech_alloys_1",
      "tech_luxuries_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Holographic Casts",
        "key": "tech_alloys_1"
      },
      {
        "name": "Nano-Circuit Assembly",
        "key": "tech_luxuries_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psionic_barrier": {
    "key": "tech_psionic_barrier",
    "area": "society",
    "category": "Psionics",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Large Psionic Barrier",
      "<b>Component:</b> Medium Psionic Barrier",
      "<b>Component:</b> Small Psionic Barrier"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Psionic Barrier",
    "prerequisites": [
      "tech_psionic_theory"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Psionic Theory",
        "key": "tech_psionic_theory"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_galactic_bureaucracy": {
    "key": "tech_galactic_bureaucracy",
    "area": "society",
    "category": "New Worlds",
    "cost": 4000,
    "feature_unlocks": [
      "Administrative Cap: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Galactic Bureaucracy",
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Colonial Bureaucracy",
        "key": "tech_colonial_bureaucracy"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_interstellar_economics": {
    "key": "tech_interstellar_economics",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Commerce Megaplexes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interstellar Economics",
    "prerequisites": [
      "tech_space_trading"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Offworld Trade Companies",
        "key": "tech_space_trading"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_paradise_dome": {
    "key": "tech_paradise_dome",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Paradise Dome",
      "<b>Building:</b> Utopian Communal Housing",
      "<b>Building:</b> Organic Paradise"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Idyllic Architecture",
    "prerequisites": [
      "tech_housing_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Weather Control Systems",
        "key": "tech_housing_1"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_gestalt=no\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_tailoring": {
    "key": "tech_gene_tailoring",
    "area": "society",
    "category": "Biology",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Feature : </b>Self-Modification",
      "Gene Modification Points: +1",
      "<b>Feature : </b>Genetic Modification"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gene Tailoring",
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Genome Mapping",
        "key": "tech_genome_mapping"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psionic_theory": {
    "key": "tech_psionic_theory",
    "area": "society",
    "category": "Psionics",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_COUNTRY_UNITY_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Psionic Theory",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_prescient_data_modeling": {
    "key": "tech_prescient_data_modeling",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_ENERGY_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Numistic Data Modeling",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_3": {
    "key": "tech_doctrine_fleet_size_3",
    "area": "society",
    "category": "Military Theory",
    "cost": 5000,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Interstellar Warfare",
    "prerequisites": [
      "tech_doctrine_fleet_size_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Doctrine: Reactive Formations",
        "key": "tech_doctrine_fleet_size_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_collective_production_methods": {
    "key": "tech_collective_production_methods",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Collective Production Methods",
    "prerequisites": [
      "tech_unity_of_purpose"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Unity of Purpose",
        "key": "tech_unity_of_purpose"
      }
    ],
    "potential": [
      "Has Hive Mind Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_refit_standards": {
    "key": "tech_refit_standards",
    "area": "society",
    "category": "Military Theory",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPS_UPKEEP_MULT: -5%",
      "Ship Upgrade Cost: -20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Refit Standards",
    "prerequisites": [
      "tech_interstellar_fleet_traditions"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Interstellar Fleet Traditions",
        "key": "tech_interstellar_fleet_traditions"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_resource_processing_algorithms": {
    "key": "tech_resource_processing_algorithms",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Resource Processing Algorithms",
    "prerequisites": [
      "tech_unity_of_purpose"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Unity of Purpose",
        "key": "tech_unity_of_purpose"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_doctrine_navy_size_2": {
    "key": "tech_doctrine_navy_size_2",
    "area": "society",
    "category": "Military Theory",
    "cost": 5000,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Support Vessels",
    "prerequisites": [
      "tech_doctrine_navy_size_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Doctrine: Fleet Support",
        "key": "tech_doctrine_navy_size_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_consecration_fields": {
    "key": "tech_consecration_fields",
    "area": "society",
    "category": "Statecraft",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Building:</b> Sacred Nexus"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Consecration Fields",
    "prerequisites": [
      "tech_holographic_rituals",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Holographic Rituals",
        "key": "tech_holographic_rituals"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Any of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_selected_lineages": {
    "key": "tech_selected_lineages",
    "area": "society",
    "category": "Biology",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Policy:</b> Selected Lineages"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Selected Lineages",
    "prerequisites": [
      "tech_vitality_boosters"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Vitality Boosters",
        "key": "tech_vitality_boosters"
      }
    ],
    "potential": [
      "Does NOT Have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_zro": {
    "key": "tech_mine_zro",
    "area": "society",
    "category": "Psionics",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Reveals Ressource:</b> Zro"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Zro Distillation",
    "prerequisites": [
      "tech_psionic_theory",
      "tech_sensors_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Subspace Sensors",
        "key": "tech_sensors_3"
      },
      {
        "name": "Psionic Theory",
        "key": "tech_psionic_theory"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_embodied_dynamism": {
    "key": "tech_embodied_dynamism",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "feature_unlocks": [
      "Leader Level Cap: +1",
      "MOD_COUNTRY_LEADERS_UPKEEP_MULT: -10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Embodied Dynamism",
    "prerequisites": [
      "tech_autonomous_agents"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Autonomous Agents",
        "key": "tech_autonomous_agents"
      }
    ],
    "potential": [
      "Has Gestalt Consciousness Ethic"
    ],
    "is_gestalt": true,
    "is_machine": false
  },
  "tech_galactic_administration": {
    "key": "tech_galactic_administration",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Building:</b> System Capital-Complex",
      "Civic Slots: +1",
      "<b>Building:</b> Primary Nexus"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Galactic Administration",
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_xeno_tourism_agency": {
    "key": "tech_xeno_tourism_agency",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Xeno-Outreach Agency"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Xeno Outreach Agencies",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "is_megacorp=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_akx_worm_2": {
    "key": "tech_akx_worm_2",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Doctrine: Strange Loop",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hive_confluence": {
    "key": "tech_hive_confluence",
    "area": "society",
    "category": "Statecraft",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Building:</b> Confluence of Thought"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Confluence of Thought",
    "prerequisites": [
      "tech_hive_cluster",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Clustered Synapses",
        "key": "tech_hive_cluster"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_collective_self": {
    "key": "tech_collective_self",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "feature_unlocks": [
      "Leader Level Cap: +1",
      "MOD_COUNTRY_LEADERS_UPKEEP_MULT: -10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "The Collective Self",
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_telepathy": {
    "key": "tech_telepathy",
    "area": "society",
    "category": "Psionics",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Army:</b> Psionic Army"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Telepathy",
    "prerequisites": [
      "tech_psionic_theory"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Psionic Theory",
        "key": "tech_psionic_theory"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_tomb_world_adaption": {
    "key": "tech_tomb_world_adaption",
    "area": "society",
    "category": "New Worlds",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_PC_NUKED_HABITABILITY: +20%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Tomb World Adaptation",
    "prerequisites": [
      "tech_colonization_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Hostile Environment Adaptation",
        "key": "tech_colonization_3"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_machine_empire=no\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_resort_colonies": {
    "key": "tech_resort_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Resort Worlds",
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Artificial Moral Codes",
        "key": "tech_artificial_moral_codes"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_executive_retreat": {
    "key": "tech_executive_retreat",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Executive Retreat"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Executive Leisure Program",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "is_megacorp=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_expressions": {
    "key": "tech_gene_expressions",
    "area": "society",
    "category": "Biology",
    "cost": 6000,
    "feature_unlocks": [
      "Gene Modification Points: +1"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Targeted Gene Expressions",
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Gene Tailoring",
        "key": "tech_gene_tailoring"
      }
    ],
    "potential": [
      "Any of the following \n    •   Does NOT Have Machine Intelligence Authority\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_regenerative_hull_tissue": {
    "key": "tech_regenerative_hull_tissue",
    "area": "society",
    "category": "Biology",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Component:</b> Regenerative Hull Tissue"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Regenerative Hull Tissue",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_neuroregeneration": {
    "key": "tech_neuroregeneration",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "feature_unlocks": [
      "Leader Level Cap: +1",
      "Species Leader Exp Gain: +25%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Neural Tissue Engineering",
    "prerequisites": [],
    "tier": 4,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_transcendent_faith": {
    "key": "tech_transcendent_faith",
    "area": "society",
    "category": "Statecraft",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Building:</b> Citadel of Faith"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Metacognitive Faith",
    "prerequisites": [
      "tech_consecration_fields",
      "tech_galactic_administration"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Consecration Fields",
        "key": "tech_consecration_fields"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      }
    ],
    "potential": [
      "Any of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_nano_vitality_crops": {
    "key": "tech_nano_vitality_crops",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_FARMERS_FOOD_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nano-Vitality Crops",
    "prerequisites": [
      "tech_gene_crops",
      "tech_galactic_administration"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Gene Crops",
        "key": "tech_gene_crops"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_galactic_markets": {
    "key": "tech_galactic_markets",
    "area": "society",
    "category": "Statecraft",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Building:</b> Galactic Stock Exchange"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Galactic Markets",
    "prerequisites": [
      "tech_colonial_centralization",
      "tech_interstellar_economics"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      },
      {
        "name": "Interstellar Economics",
        "key": "tech_interstellar_economics"
      }
    ],
    "potential": [
      "is_gestalt=no"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_capacity_boosters": {
    "key": "tech_capacity_boosters",
    "area": "society",
    "category": "Biology",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Policy:</b> Capacity Boosters"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Capacity Boosters",
    "prerequisites": [
      "tech_selected_lineages"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Selected Lineages",
        "key": "tech_selected_lineages"
      }
    ],
    "potential": [
      "Does NOT Have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_manifest_destiny": {
    "key": "tech_manifest_destiny",
    "area": "society",
    "category": "New Worlds",
    "cost": 10000,
    "feature_unlocks": [
      "Starbase Capacity: +2"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Manifest Destiny",
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Stellar Expansion",
        "key": "tech_galactic_ambitions"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_seed_purification": {
    "key": "tech_gene_seed_purification",
    "area": "society",
    "category": "Biology",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Army:</b> Gene Warrior Army"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Gene Seed Purification",
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Gene Tailoring",
        "key": "tech_gene_tailoring"
      }
    ],
    "potential": [
      "Does NOT Have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_5": {
    "key": "tech_colonization_5",
    "area": "society",
    "category": "New Worlds",
    "cost": 12000,
    "feature_unlocks": [
      "Habitability: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Eco-Integration Studies",
    "prerequisites": [
      "tech_colonization_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Foreign Soil Enrichment",
        "key": "tech_colonization_4"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_machine_empire=no\n    •   Has Driven Assimilator Civic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_society_3": {
    "key": "tech_society_3",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_SOCIETY_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Secrets of Life",
    "prerequisites": [
      "tech_society_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Xenobiology",
        "key": "tech_society_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_precognition_interface": {
    "key": "tech_precognition_interface",
    "area": "society",
    "category": "Psionics",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Precognitive Interface"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Precognition Interface",
    "prerequisites": [
      "tech_telepathy"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Telepathy",
        "key": "tech_telepathy"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_biomechanics": {
    "key": "tech_biomechanics",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Army:</b> Mega-Warform"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Biomechanics",
    "prerequisites": [
      "tech_adaptive_combat_algorithms"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Adaptive Combat Algorithms",
        "key": "tech_adaptive_combat_algorithms"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_nutrient_replication": {
    "key": "tech_nutrient_replication",
    "area": "society",
    "category": "Biology",
    "cost": 12000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_FOOD_PRODUCES_MULT: +15%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Nutrient Replication",
    "prerequisites": [
      "tech_nano_vitality_crops"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Nano-Vitality Crops",
        "key": "tech_nano_vitality_crops"
      }
    ],
    "potential": [
      "Does NOT Have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_5": {
    "key": "tech_doctrine_fleet_size_5",
    "area": "society",
    "category": "Military Theory",
    "cost": 12000,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Armada Battle Formation",
    "prerequisites": [
      "tech_doctrine_fleet_size_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Doctrine: Fluid Fleet Templates",
        "key": "tech_doctrine_fleet_size_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_4": {
    "key": "tech_doctrine_fleet_size_4",
    "area": "society",
    "category": "Military Theory",
    "cost": 8000,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Fluid Fleet Templates",
    "prerequisites": [
      "tech_doctrine_fleet_size_3"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Doctrine: Interstellar Warfare",
        "key": "tech_doctrine_fleet_size_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_galactic_campaigns": {
    "key": "tech_galactic_campaigns",
    "area": "society",
    "category": "Military Theory",
    "cost": 8000,
    "feature_unlocks": [
      "War Exhaustion Gain: -10%",
      "Claim Influence Cost: -10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Galactic Campaigns",
    "prerequisites": [
      "tech_interstellar_campaigns"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Interstellar Campaigns",
        "key": "tech_interstellar_campaigns"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_navy_size_3": {
    "key": "tech_doctrine_navy_size_3",
    "area": "society",
    "category": "Military Theory",
    "cost": 8000,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Interstellar Logistics",
    "prerequisites": [
      "tech_doctrine_navy_size_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Doctrine: Support Vessels",
        "key": "tech_doctrine_navy_size_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_navy_size_4": {
    "key": "tech_doctrine_navy_size_4",
    "area": "society",
    "category": "Military Theory",
    "cost": 12000,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Doctrine: Fleet Liasions",
    "prerequisites": [
      "tech_doctrine_navy_size_3"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Doctrine: Interstellar Logistics",
        "key": "tech_doctrine_navy_size_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_morphogenetic_field_mastery": {
    "key": "tech_morphogenetic_field_mastery",
    "area": "society",
    "category": "Biology",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Army:</b> Xenomorph Army"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Morphogenetic Field Mastery",
    "prerequisites": [
      "tech_epigenetic_triggers"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Epigenetic Triggers",
        "key": "tech_epigenetic_triggers"
      }
    ],
    "potential": [
      "Does NOT Have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autocurating_vault": {
    "key": "tech_autocurating_vault",
    "area": "society",
    "category": "Statecraft",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Building:</b> Auto-Curating Vault",
      "<b>Building:</b> Alpha Hub",
      "<b>Building:</b> Vault of Acquisitions"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Automated Curation Algorithms",
    "prerequisites": [
      "tech_hypercomms_forum",
      "tech_galactic_administration",
      "tech_administrative_ai"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Local Hypercommunication",
        "key": "tech_hypercomms_forum"
      },
      {
        "name": "Administrative AI",
        "key": "tech_administrative_ai"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      }
    ],
    "potential": [
      "None of the following \n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_climate_restoration": {
    "key": "tech_climate_restoration",
    "area": "society",
    "category": "New Worlds",
    "cost": 8000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Climate Restoration",
    "prerequisites": [
      "tech_terrestrial_sculpting"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Terrestrial Sculpting",
        "key": "tech_terrestrial_sculpting"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pk_godray": {
    "key": "tech_pk_godray",
    "area": "society",
    "category": "Psionics",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Divine Enforcer"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Divine Stimulus",
    "prerequisites": [
      "tech_colossus"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Colossi",
        "key": "tech_colossus"
      }
    ],
    "potential": [
      "Has DLC Apocalypse",
      "Has Country Flag colossus_project",
      "Is Spiritualist",
      "Any of the following \n    •   All of the following \n\t    •   Does NOT Have DLC Utopia\n\t    •   Has technology Telepathy\n    •   All of the following \n\t    •   Has DLC Utopia\n\t    •   Has Ascension Perk Mind over Matter"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_core_system_cap": {
    "key": "tech_repeatable_improved_core_system_cap",
    "area": "society",
    "category": "New Worlds",
    "cost": 50000,
    "feature_unlocks": [
      "Administrative Cap: +10"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Administrative Efficiency",
    "prerequisites": [
      "tech_galactic_bureaucracy"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Galactic Bureaucracy",
        "key": "tech_galactic_bureaucracy"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_scourge_missile_1": {
    "key": "tech_scourge_missile_1",
    "area": "society",
    "category": "Biology",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Large Scourge Missile"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Scourge Missiles",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_edict_length": {
    "key": "tech_repeatable_improved_edict_length",
    "area": "society",
    "category": "Statecraft",
    "cost": 50000,
    "feature_unlocks": [
      "Edict Duration: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Proclamation Broadcasts",
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Artificial Moral Codes",
        "key": "tech_artificial_moral_codes"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_swarm_strike_craft_1": {
    "key": "tech_swarm_strike_craft_1",
    "area": "society",
    "category": "Biology",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Swarm Strikers"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Swarm Spawning Pools",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_leader_life_span": {
    "key": "tech_repeatable_improved_leader_life_span",
    "area": "society",
    "category": "Biology",
    "cost": 50000,
    "feature_unlocks": [
      "Leader Lifespan: +5"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cell Revitalization",
    "prerequisites": [
      "tech_vitality_boosters"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Vitality Boosters",
        "key": "tech_vitality_boosters"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psi_jump_drive_1": {
    "key": "tech_psi_jump_drive_1",
    "area": "society",
    "category": "Psionics",
    "cost": 17500,
    "feature_unlocks": [
      "<b>Component:</b> Psi Jump Drive",
      "<b>Feature : </b>Jump Drive Travel"
    ],
    "is_dangerous": true,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Psi Jump Drive",
    "prerequisites": [
      "tech_precognition_interface"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Precognition Interface",
        "key": "tech_precognition_interface"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_command_limit": {
    "key": "tech_repeatable_command_limit",
    "area": "society",
    "category": "Military Theory",
    "cost": 50000,
    "feature_unlocks": [
      "Fleet Command Limit: +10"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Admiralty Support Staff",
    "prerequisites": [
      "tech_doctrine_fleet_size_5"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Doctrine: Armada Battle Formation",
        "key": "tech_doctrine_fleet_size_5"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_naval_cap": {
    "key": "tech_repeatable_naval_cap",
    "area": "society",
    "category": "Military Theory",
    "cost": 50000,
    "feature_unlocks": [
      "Naval Capacity: +20"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Fleet Management Procedures",
    "prerequisites": [
      "tech_doctrine_navy_size_4"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Doctrine: Fleet Liasions",
        "key": "tech_doctrine_navy_size_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_army_damage": {
    "key": "tech_repeatable_improved_army_damage",
    "area": "society",
    "category": "Military Theory",
    "cost": 50000,
    "feature_unlocks": [
      "Army Damage: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Aggressive Conditioning",
    "prerequisites": [
      "tech_combat_training"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Combat Training",
        "key": "tech_combat_training"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_army_health": {
    "key": "tech_repeatable_improved_army_health",
    "area": "society",
    "category": "Military Theory",
    "cost": 50000,
    "feature_unlocks": [
      "Army Health: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nerve Dampeners",
    "prerequisites": [
      "tech_combat_training"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Combat Training",
        "key": "tech_combat_training"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psionic_shield": {
    "key": "tech_psionic_shield",
    "area": "society",
    "category": "Psionics",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Large Psionic Shield",
      "<b>Component:</b> Medium Psionic Shield",
      "<b>Component:</b> Small Psionic Shield"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Psionic Shields",
    "prerequisites": [
      "tech_psionic_theory"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Psionic Theory",
        "key": "tech_psionic_theory"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_genetic_resequencing": {
    "key": "tech_genetic_resequencing",
    "area": "society",
    "category": "Biology",
    "cost": 15000,
    "feature_unlocks": [
      "<b>Feature : </b>Genetic Resequencing",
      "<b>Feature : </b>Advanced Traits"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Genetic Resequencing",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_tile_food_output": {
    "key": "tech_repeatable_improved_tile_food_output",
    "area": "society",
    "category": "Biology",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_FOOD_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Transgenic Crops",
    "prerequisites": [
      "tech_gene_crops"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Gene Crops",
        "key": "tech_gene_crops"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ascension_theory": {
    "key": "tech_ascension_theory",
    "area": "society",
    "category": "Statecraft",
    "cost": 17500,
    "feature_unlocks": [
      "<b>Feature : </b>Unity Ambitions",
      "Ascension Perks: +1"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Ascension Theory",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_starbase_capacity": {
    "key": "tech_repeatable_improved_starbase_capacity",
    "area": "society",
    "category": "New Worlds",
    "cost": 50000,
    "feature_unlocks": [
      "Starbase Capacity: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Interstellar Expansion",
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Stellar Expansion",
        "key": "tech_galactic_ambitions"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_exploration": {
    "key": "tech_space_exploration",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Ship Size:</b> Science Ship"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Space Exploration",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_1": {
    "key": "tech_missiles_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 0,
    "feature_unlocks": [
      "<b>Starbase Module:</b> Missile Battery",
      "<b>Component:</b> Nuclear Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Nuclear Missiles",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_flak_batteries_1": {
    "key": "tech_flak_batteries_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Flak Battery"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Flak Battery",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_corvettes": {
    "key": "tech_corvettes",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Ship Size:</b> Corvette"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Corvettes",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mechanized_mining": {
    "key": "tech_mechanized_mining",
    "area": "engineering",
    "category": "Industry",
    "cost": 0,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Mechanized Mining",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_solar_panel_network": {
    "key": "tech_solar_panel_network",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Starbase Module:</b> Solar Panel Network"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Orbital Energy Conversion",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "is_gestalt=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_assault_armies": {
    "key": "tech_assault_armies",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 500,
    "feature_unlocks": [
      "<b>Army:</b> Assault Army",
      "<b>Army:</b> Hunter-Killer Army"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Interplanetary Expeditionary Forces",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_starbase_2": {
    "key": "tech_starbase_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Starport",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_starbase_1": {
    "key": "tech_starbase_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Starbase Construction",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_basic_industry": {
    "key": "tech_basic_industry",
    "area": "engineering",
    "category": "Industry",
    "cost": 0,
    "feature_unlocks": [
      "<b>Building:</b> Civilian Industries",
      "<b>Building:</b> Resource Silos",
      "<b>Building:</b> Alloy Foundries"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Industrial Base",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ship_armor_1": {
    "key": "tech_ship_armor_1",
    "area": "engineering",
    "category": "Materials",
    "cost": 500,
    "feature_unlocks": [
      "<b>Component:</b> Large Nanocomposite Armor",
      "<b>Component:</b> Medium Nanocomposite Armor",
      "<b>Component:</b> Small Nanocomposite Armor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Nanocomposite Materials",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_thrusters_1": {
    "key": "tech_thrusters_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Chemical Thrusters"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Chemical Thrusters",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_construction": {
    "key": "tech_space_construction",
    "area": "engineering",
    "category": "Industry",
    "cost": 0,
    "feature_unlocks": [
      "<b>Ship Size:</b> Mining Station",
      "<b>Ship Size:</b> Construction Ship",
      "<b>Ship Size:</b> Research Station"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Offworld Construction",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_drivers_1": {
    "key": "tech_mass_drivers_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 0,
    "feature_unlocks": [
      "<b>Component:</b> Medium Mass Driver",
      "<b>Starbase Module:</b> Gun Battery",
      "<b>Component:</b> Small Mass Driver",
      "<b>Component:</b> Large Mass Driver"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Mass Drivers",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_defense_station_1": {
    "key": "tech_space_defense_station_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "feature_unlocks": [
      "<b>Ship Size:</b> Defense Platform"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Deep Space Defenses",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_robotic_workers": {
    "key": "tech_robotic_workers",
    "area": "engineering",
    "category": "Industry",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Robot Assembly Plants",
      "<b>Feature : </b>Robot Workers"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Robotic Workers",
    "prerequisites": [
      "tech_powered_exoskeletons"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Powered Exoskeletons",
        "key": "tech_powered_exoskeletons"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_2": {
    "key": "tech_missiles_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Fusion Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Fusion Missiles",
    "prerequisites": [
      "tech_missiles_1",
      "tech_fusion_power"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Nuclear Missiles",
        "key": "tech_missiles_1"
      },
      {
        "name": "Fusion Power",
        "key": "tech_fusion_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_orbital_trash_dispersal": {
    "key": "tech_orbital_trash_dispersal",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Orbital Trash Disperser"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Orbital Trash Dispersal",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_robomodding": {
    "key": "tech_robomodding",
    "area": "engineering",
    "category": "Industry",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Feature : </b>Robomodding",
      "MOD_COUNTRY_ROBOT_SPECIES_TRAIT_POINTS_ADD: +2"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Machine Template System",
    "prerequisites": [
      "tech_robotic_workers"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Robotic Workers",
        "key": "tech_robotic_workers"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_1": {
    "key": "tech_mining_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_MINERS_MINERALS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Geothermal Fracking",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_assembly_pattern": {
    "key": "tech_assembly_pattern",
    "area": "engineering",
    "category": "Industry",
    "cost": 1000,
    "feature_unlocks": [
      "Planet Build Speed: +25%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Assembly Patterns",
    "prerequisites": [
      "tech_engineering_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Nanomechanics",
        "key": "tech_engineering_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_corvette_build_speed": {
    "key": "tech_corvette_build_speed",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 750,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CORVETTE_BUILD_SPEED_MULT: +25%",
      "MOD_COUNTRY_SHIP_CORVETTE_COST_MULT: -5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Standardized Corvette Patterns",
    "prerequisites": [
      "tech_corvettes"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Corvettes",
        "key": "tech_corvettes"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_powered_exoskeletons": {
    "key": "tech_powered_exoskeletons",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_MINERALS_PRODUCES_MULT: +5%",
      "Army Damage: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Powered Exoskeletons",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ship_armor_2": {
    "key": "tech_ship_armor_2",
    "area": "engineering",
    "category": "Materials",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Small Ceramo-Metal Armor",
      "<b>Component:</b> Medium Ceramo-Metal Armor",
      "<b>Component:</b> Large Ceramo-Metal Armor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ceramo-Metal Materials",
    "prerequisites": [
      "tech_ship_armor_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Nanocomposite Materials",
        "key": "tech_ship_armor_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_corvette_hull_1": {
    "key": "tech_corvette_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 1000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CORVETTE_HULL_ADD: +100"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Corvette Hulls",
    "prerequisites": [
      "tech_corvettes"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Corvettes",
        "key": "tech_corvettes"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_strike_craft_1": {
    "key": "tech_strike_craft_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Component:</b> Basic Strike Craft",
      "<b>Starbase Module:</b> Hangar Bay"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Carrier Operations",
    "prerequisites": [
      "tech_starbase_2"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Starport",
        "key": "tech_starbase_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mineral_purification_1": {
    "key": "tech_mineral_purification_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 750,
    "feature_unlocks": [
      "<b>Building:</b> Mineral Purification Plants",
      "<b>Edict:</b> Production Targets"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mineral Purification",
    "prerequisites": [
      "tech_mining_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Geothermal Fracking",
        "key": "tech_mining_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_afterburners_1": {
    "key": "tech_afterburners_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Afterburners"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Afterburners",
    "prerequisites": [
      "tech_thrusters_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Chemical Thrusters",
        "key": "tech_thrusters_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_luxuries_1": {
    "key": "tech_luxuries_1",
    "area": "engineering",
    "category": "Materials",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Civilian Fabricators"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nano-Circuit Assembly",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_gestalt=no\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_engineering_1": {
    "key": "tech_engineering_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_ENGINEERING_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nanomechanics",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_mining_1": {
    "key": "tech_space_mining_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "feature_unlocks": [
      "<b>Starbase Building:</b> Nebula Refinery",
      "MOD_COUNTRY_STATION_GATHERERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Zero-G Refineries",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_mining_2": {
    "key": "tech_space_mining_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 1000,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_GATHERERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Long-Range Mineral Scanners",
    "prerequisites": [
      "tech_space_mining_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Zero-G Refineries",
        "key": "tech_space_mining_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_robomodding_m": {
    "key": "tech_robomodding_m",
    "area": "engineering",
    "category": "Industry",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Feature : </b>Robomodding",
      "MOD_COUNTRY_MACHINE_SPECIES_TRAIT_POINTS_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Machine Template System",
    "prerequisites": [
      "tech_powered_exoskeletons"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Powered Exoskeletons",
        "key": "tech_powered_exoskeletons"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_mass_drivers_2": {
    "key": "tech_mass_drivers_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 750,
    "feature_unlocks": [
      "<b>Component:</b> Medium Coilgun",
      "<b>Component:</b> Large Coilgun",
      "<b>Component:</b> Small Coilgun"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Coilguns",
    "prerequisites": [
      "tech_mass_drivers_1"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Mass Drivers",
        "key": "tech_mass_drivers_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_alloys_1": {
    "key": "tech_alloys_1",
    "area": "engineering",
    "category": "Materials",
    "cost": 1000,
    "feature_unlocks": [
      "<b>Building:</b> Alloy Mega-Forges"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Holographic Casts",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 1,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_housing_1": {
    "key": "tech_housing_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 2000,
    "feature_unlocks": [
      "City District Housing: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Weather Control Systems",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_3": {
    "key": "tech_missiles_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Component:</b> Antimatter Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Antimatter Missiles",
    "prerequisites": [
      "tech_missiles_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Fusion Missiles",
        "key": "tech_missiles_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_micro_replicators": {
    "key": "tech_micro_replicators",
    "area": "engineering",
    "category": "Industry",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Building:</b> Upgraded Drone Storage",
      "Pop Assembly Speed: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Micro-Replicators",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_rare_crystals": {
    "key": "tech_rare_crystals",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Building:</b> Synthetic Crystal Plants"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Rare Crystal Manufacturing",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_rare_crystals": {
    "key": "tech_mine_rare_crystals",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Building:</b> Crystal Mines",
      "<b>Reveals Ressource:</b> Rare Crystals"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Rare Crystal Mining",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_nanite_transmutation": {
    "key": "tech_nanite_transmutation",
    "area": "engineering",
    "category": "Materials",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Building:</b> Nanite Transmuter"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Nanite Transmutation",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Has DLC Distant Stars Story Pack"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autocannons_1": {
    "key": "tech_autocannons_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Autocannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Autocannons",
    "prerequisites": [
      "tech_mass_drivers_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Coilguns",
        "key": "tech_mass_drivers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_torpedoes_1": {
    "key": "tech_torpedoes_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Space Torpedoes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Space Torpedoes",
    "prerequisites": [
      "tech_missiles_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Nuclear Missiles",
        "key": "tech_missiles_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_robomodding_points_1": {
    "key": "tech_robomodding_points_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_ROBOT_SPECIES_TRAIT_POINTS_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cross-Model Standardization",
    "prerequisites": [
      "tech_robomodding",
      "tech_droid_workers"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Machine Template System",
        "key": "tech_robomodding"
      },
      {
        "name": "Droids",
        "key": "tech_droid_workers"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_modular_engineering": {
    "key": "tech_modular_engineering",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_STARBASE_BUILDINGS_COST_MULT: -25%",
      "MOD_COUNTRY_STARBASE_MODULES_COST_MULT: -25%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Modular Engineering",
    "prerequisites": [
      "tech_starbase_3"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Starhold",
        "key": "tech_starbase_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_2": {
    "key": "tech_mining_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_MINERS_MINERALS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Deep Core Mining",
    "prerequisites": [
      "tech_mining_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Geothermal Fracking",
        "key": "tech_mining_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_betharian": {
    "key": "tech_mine_betharian",
    "area": "engineering",
    "category": "Materials",
    "cost": 750,
    "feature_unlocks": [
      "<b>Building:</b> Betharian Power Plant"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Betharian Refining",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_droid_workers": {
    "key": "tech_droid_workers",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Feature : </b>Droid Workers",
      "<b>Army:</b> Robotic Assault Army"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Droids",
    "prerequisites": [
      "tech_robotic_workers",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Robotic Workers",
        "key": "tech_robotic_workers"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_destroyer_hull_1": {
    "key": "tech_destroyer_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_DESTROYER_HULL_ADD: +200"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Destroyer Hulls",
    "prerequisites": [
      "tech_destroyers"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Destroyers",
        "key": "tech_destroyers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_destroyers": {
    "key": "tech_destroyers",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 1500,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "<b>Ship Size:</b> Destroyer"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Destroyers",
    "prerequisites": [
      "tech_corvettes"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Corvettes",
        "key": "tech_corvettes"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_swarmer_missiles_1": {
    "key": "tech_swarmer_missiles_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Swarmer Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Swarmer Missiles",
    "prerequisites": [
      "tech_missiles_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Fusion Missiles",
        "key": "tech_missiles_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_starbase_3": {
    "key": "tech_starbase_3",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Starhold",
    "prerequisites": [
      "tech_starbase_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Starport",
        "key": "tech_starbase_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_crystal_armor_1": {
    "key": "tech_crystal_armor_1",
    "area": "engineering",
    "category": "Materials",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Large Crystal-Infused Plating",
      "<b>Component:</b> Medium Crystal-Infused Plating",
      "<b>Component:</b> Small Crystal-Infused Plating"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Crystal-Infused Plating",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_defense_platform_hull_1": {
    "key": "tech_defense_platform_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_MILITARY_STATION_SMALL_HULL_ADD: +500"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Improved Structural Integrity",
    "prerequisites": [
      "tech_starbase_3"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Starhold",
        "key": "tech_starbase_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_exotic_gases": {
    "key": "tech_mine_exotic_gases",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Building:</b> Gas Extraction Wells",
      "<b>Reveals Ressource:</b> Exotic Gases"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Exotic Gas Extraction",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_exotic_gases": {
    "key": "tech_exotic_gases",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Building:</b> Exotic Gas Refineries"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Exotic Gas Refining",
    "prerequisites": [
      "tech_basic_industry"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Industrial Base",
        "key": "tech_basic_industry"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ship_armor_3": {
    "key": "tech_ship_armor_3",
    "area": "engineering",
    "category": "Materials",
    "cost": 2000,
    "feature_unlocks": [
      "<b>Component:</b> Large Plasteel Armor",
      "<b>Component:</b> Small Plasteel Armor",
      "<b>Component:</b> Medium Plasteel Armor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Plasteel Materials",
    "prerequisites": [
      "tech_ship_armor_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Ceramo-Metal Materials",
        "key": "tech_ship_armor_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_corvette_hull_2": {
    "key": "tech_corvette_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CORVETTE_HULL_ADD: +100"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Advanced Corvette Hulls",
    "prerequisites": [
      "tech_corvette_hull_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Improved Corvette Hulls",
        "key": "tech_corvette_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_strike_craft_2": {
    "key": "tech_strike_craft_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Improved Strike Craft"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Strike Craft",
    "prerequisites": [
      "tech_strike_craft_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Carrier Operations",
        "key": "tech_strike_craft_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_destroyer_build_speed": {
    "key": "tech_destroyer_build_speed",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIP_DESTROYER_COST_MULT: -5%",
      "MOD_COUNTRY_SHIPSIZE_DESTROYER_BUILD_SPEED_MULT: +25%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Standardized Destroyer Patterns",
    "prerequisites": [
      "tech_destroyers"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Destroyers",
        "key": "tech_destroyers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mineral_purification_2": {
    "key": "tech_mineral_purification_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Building:</b> Mineral Purification Hubs"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Mineral Purification",
    "prerequisites": [
      "tech_mineral_purification_1",
      "tech_colonial_centralization"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Mineral Purification",
        "key": "tech_mineral_purification_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_volatile_motes": {
    "key": "tech_mine_volatile_motes",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Reveals Ressource:</b> Volatile Motes",
      "<b>Building:</b> Mote Harvesting Traps"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mote Stabilization",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_thrusters_2": {
    "key": "tech_thrusters_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Component:</b> Ion Thrusters"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ion Thrusters",
    "prerequisites": [
      "tech_thrusters_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Chemical Thrusters",
        "key": "tech_thrusters_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_lcluster_clue": {
    "key": "tech_repeatable_lcluster_clue",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "L-Gate Insight",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Has Country Flag encountered_first_lgate",
      "Does NOT Have Country Flag completed_lcluster_chain"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_engineering_2": {
    "key": "tech_engineering_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_ENGINEERING_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Supersolid Materials",
    "prerequisites": [
      "tech_engineering_1"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Nanomechanics",
        "key": "tech_engineering_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_mining_3": {
    "key": "tech_space_mining_3",
    "area": "engineering",
    "category": "Industry",
    "cost": 1500,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_GATHERERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mineral Cutting Beams",
    "prerequisites": [
      "tech_space_mining_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Long-Range Mineral Scanners",
        "key": "tech_space_mining_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_mining_4": {
    "key": "tech_space_mining_4",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_GATHERERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Autonomous Mining Drones",
    "prerequisites": [
      "tech_space_mining_3"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Mineral Cutting Beams",
        "key": "tech_space_mining_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_drivers_3": {
    "key": "tech_mass_drivers_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 1500,
    "feature_unlocks": [
      "<b>Component:</b> Small Railgun",
      "<b>Component:</b> Medium Railgun",
      "<b>Component:</b> Large Railgun"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Railguns",
    "prerequisites": [
      "tech_mass_drivers_2"
    ],
    "tier": 2,
    "prerequisites_names": [
      {
        "name": "Coilguns",
        "key": "tech_mass_drivers_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_housing_2": {
    "key": "tech_housing_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Expanded Warren",
      "City District Housing: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Anti-Gravity Engineering",
    "prerequisites": [
      "tech_housing_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Weather Control Systems",
        "key": "tech_housing_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_4": {
    "key": "tech_missiles_4",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Quantum Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Quantum Missiles",
    "prerequisites": [
      "tech_missiles_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Antimatter Missiles",
        "key": "tech_missiles_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_flak_batteries_2": {
    "key": "tech_flak_batteries_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 2500,
    "feature_unlocks": [
      "<b>Component:</b> Flak Cannons"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Flak Cannons",
    "prerequisites": [
      "tech_flak_batteries_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Flak Battery",
        "key": "tech_flak_batteries_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_defense_station_improvement": {
    "key": "tech_space_defense_station_improvement",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 6000,
    "feature_unlocks": [
      "Starbase Upgrade Speed: +25%",
      "Starbase Upgrade Cost: -15%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Corps of Engineers",
    "prerequisites": [
      "tech_modular_engineering",
      "tech_starbase_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Star Fortress",
        "key": "tech_starbase_4"
      },
      {
        "name": "Modular Engineering",
        "key": "tech_modular_engineering"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_construction_templates": {
    "key": "tech_construction_templates",
    "area": "engineering",
    "category": "Industry",
    "cost": 5000,
    "feature_unlocks": [
      "Planet Build Speed: +50%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Construction Templates",
    "prerequisites": [
      "tech_assembly_pattern"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Assembly Patterns",
        "key": "tech_assembly_pattern"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_self_assembling_components": {
    "key": "tech_self_assembling_components",
    "area": "engineering",
    "category": "Industry",
    "cost": 6000,
    "feature_unlocks": [
      "Pop Assembly Speed: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Self-Assembling Components",
    "prerequisites": [
      "tech_micro_replicators"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Micro-Replicators",
        "key": "tech_micro_replicators"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_cruiser_build_speed": {
    "key": "tech_cruiser_build_speed",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 5000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CRUISER_BUILD_SPEED_MULT: +25%",
      "MOD_COUNTRY_SHIP_CRUISER_COST_MULT: -5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Standardized Cruiser Patterns",
    "prerequisites": [
      "tech_cruisers"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Cruisers",
        "key": "tech_cruisers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autocannons_2": {
    "key": "tech_autocannons_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Ripper Autocannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Ripper Cannons",
    "prerequisites": [
      "tech_autocannons_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Autocannons",
        "key": "tech_autocannons_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_torpedoes_2": {
    "key": "tech_torpedoes_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Component:</b> Armored Torpedoes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Armored Torpedoes",
    "prerequisites": [
      "tech_torpedoes_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Space Torpedoes",
        "key": "tech_torpedoes_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_binary_motivators": {
    "key": "tech_binary_motivators",
    "area": "engineering",
    "category": "Industry",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_MACHINE_SPECIES_TRAIT_POINTS_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Binary Motivators",
    "prerequisites": [
      "tech_robomodding_m",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      },
      {
        "name": "Machine Template System",
        "key": "tech_robomodding_m"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_destroyer_hull_2": {
    "key": "tech_destroyer_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_DESTROYER_HULL_ADD: +200"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Advanced Destroyer Hulls",
    "prerequisites": [
      "tech_destroyer_hull_1"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Improved Destroyer Hulls",
        "key": "tech_destroyer_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_starbase_4": {
    "key": "tech_starbase_4",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 5000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Star Fortress",
    "prerequisites": [
      "tech_starbase_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Starhold",
        "key": "tech_starbase_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cruisers": {
    "key": "tech_cruisers",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 4000,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "<b>Ship Size:</b> Cruiser"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Cruisers",
    "prerequisites": [
      "tech_destroyers"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Destroyers",
        "key": "tech_destroyers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_kinetic_artillery_1": {
    "key": "tech_kinetic_artillery_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Kinetic Battery"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Kinetic Battery",
    "prerequisites": [
      "tech_mass_drivers_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Advanced Railguns",
        "key": "tech_mass_drivers_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ship_armor_4": {
    "key": "tech_ship_armor_4",
    "area": "engineering",
    "category": "Materials",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Component:</b> Small Durasteel Armor",
      "<b>Component:</b> Large Durasteel Armor",
      "<b>Component:</b> Medium Durasteel Armor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Durasteel Materials",
    "prerequisites": [
      "tech_ship_armor_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Plasteel Materials",
        "key": "tech_ship_armor_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_strike_craft_3": {
    "key": "tech_strike_craft_3",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 6000,
    "feature_unlocks": [
      "<b>Component:</b> Advanced Strike Craft"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Strike Craft",
    "prerequisites": [
      "tech_strike_craft_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Improved Strike Craft",
        "key": "tech_strike_craft_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_afterburners_2": {
    "key": "tech_afterburners_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 5000,
    "feature_unlocks": [
      "<b>Component:</b> Advanced Afterburners"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Afterburners",
    "prerequisites": [
      "tech_afterburners_1",
      "tech_thrusters_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Afterburners",
        "key": "tech_afterburners_1"
      },
      {
        "name": "Plasma Thrusters",
        "key": "tech_thrusters_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_thrusters_3": {
    "key": "tech_thrusters_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Plasma Thrusters"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Plasma Thrusters",
    "prerequisites": [
      "tech_thrusters_2"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Ion Thrusters",
        "key": "tech_thrusters_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_luxuries_2": {
    "key": "tech_luxuries_2",
    "area": "engineering",
    "category": "Materials",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Civilian Repli-Complexes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Replicator Kiosks",
    "prerequisites": [
      "tech_luxuries_1",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Nano-Circuit Assembly",
        "key": "tech_luxuries_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [
      "Any of the following \n    •   is_gestalt=no\n    •   Has Rogue Servitor Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cruiser_hull_1": {
    "key": "tech_cruiser_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 6000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CRUISER_HULL_ADD: +500"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Cruiser Hulls",
    "prerequisites": [
      "tech_cruisers"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Cruisers",
        "key": "tech_cruisers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_mining_5": {
    "key": "tech_space_mining_5",
    "area": "engineering",
    "category": "Industry",
    "cost": 4000,
    "feature_unlocks": [
      "MOD_COUNTRY_STATION_GATHERERS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nanite Mineral Probes",
    "prerequisites": [
      "tech_space_mining_4"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Autonomous Mining Drones",
        "key": "tech_space_mining_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_drivers_4": {
    "key": "tech_mass_drivers_4",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Component:</b> Small Advanced Railgun",
      "<b>Component:</b> Large Advanced Railgun",
      "<b>Component:</b> Medium Advanced Railgun"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Advanced Railguns",
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Railguns",
        "key": "tech_mass_drivers_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_alloys_2": {
    "key": "tech_alloys_2",
    "area": "engineering",
    "category": "Materials",
    "cost": 4000,
    "feature_unlocks": [
      "<b>Building:</b> Alloy Nano-Plants"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Nano-Separators",
    "prerequisites": [
      "tech_alloys_1",
      "tech_colonial_centralization"
    ],
    "tier": 3,
    "prerequisites_names": [
      {
        "name": "Holographic Casts",
        "key": "tech_alloys_1"
      },
      {
        "name": "Colonial Centralization",
        "key": "tech_colonial_centralization"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_5": {
    "key": "tech_missiles_5",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Marauder Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Marauder Missiles",
    "prerequisites": [
      "tech_missiles_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Quantum Missiles",
        "key": "tech_missiles_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_flak_batteries_3": {
    "key": "tech_flak_batteries_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Flak Artillery"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Flak Artillery",
    "prerequisites": [
      "tech_flak_batteries_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Flak Cannons",
        "key": "tech_flak_batteries_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_battleship_build_speed": {
    "key": "tech_battleship_build_speed",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIP_BATTLESHIP_COST_MULT: -5%",
      "MOD_COUNTRY_SHIPSIZE_BATTLESHIP_BUILD_SPEED_MULT: +25%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Standardized Battleship Patterns",
    "prerequisites": [
      "tech_battleships"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_battleship_hull_1": {
    "key": "tech_battleship_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 12000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_BATTLESHIP_HULL_ADD: +800"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Improved Battleship Hulls",
    "prerequisites": [
      "tech_battleships"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_torpedoes_3": {
    "key": "tech_torpedoes_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Devastator Torpedoes"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Devastator Torpedoes",
    "prerequisites": [
      "tech_torpedoes_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Armored Torpedoes",
        "key": "tech_torpedoes_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autocannons_3": {
    "key": "tech_autocannons_3",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Stormfire Autocannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Stormfire Cannons",
    "prerequisites": [
      "tech_autocannons_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Ripper Cannons",
        "key": "tech_autocannons_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_robomodding_points_2": {
    "key": "tech_robomodding_points_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 8000,
    "feature_unlocks": [
      "MOD_COUNTRY_ROBOT_SPECIES_TRAIT_POINTS_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Fungible Circuitry",
    "prerequisites": [
      "tech_robomodding_points_1",
      "tech_synthetic_workers"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Cross-Model Standardization",
        "key": "tech_robomodding_points_1"
      },
      {
        "name": "Synthetics",
        "key": "tech_synthetic_workers"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_3": {
    "key": "tech_mining_3",
    "area": "engineering",
    "category": "Industry",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_MINERS_MINERALS_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mineral Isolation",
    "prerequisites": [
      "tech_mining_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Deep Core Mining",
        "key": "tech_mining_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_synthetic_workers": {
    "key": "tech_synthetic_workers",
    "area": "engineering",
    "category": "Industry",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Feature : </b>Synthetic Workers",
      "MOD_COUNTRY_PLANET_JOBS_ROBOTIC_PRODUCES_MULT: +10%"
    ],
    "is_dangerous": true,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Synthetics",
    "prerequisites": [
      "tech_droid_workers",
      "tech_galactic_administration",
      "tech_sapient_ai"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Droids",
        "key": "tech_droid_workers"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      },
      {
        "name": "Positronic AI",
        "key": "tech_sapient_ai"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_battleships": {
    "key": "tech_battleships",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 8000,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "<b>Ship Size:</b> Battleship"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Battleships",
    "prerequisites": [
      "tech_cruisers"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Cruisers",
        "key": "tech_cruisers"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_swarmer_missiles_2": {
    "key": "tech_swarmer_missiles_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Whirlwind Missiles"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Whirlwind Missiles",
    "prerequisites": [
      "tech_swarmer_missiles_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Swarmer Missiles",
        "key": "tech_swarmer_missiles_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_nanite_assemblers": {
    "key": "tech_nanite_assemblers",
    "area": "engineering",
    "category": "Industry",
    "cost": 8000,
    "feature_unlocks": [
      "MOD_COUNTRY_MACHINE_SPECIES_TRAIT_POINTS_ADD: +1"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Nanite Assemblers",
    "prerequisites": [
      "tech_binary_motivators",
      "tech_galactic_administration"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Binary Motivators",
        "key": "tech_binary_motivators"
      },
      {
        "name": "Galactic Administration",
        "key": "tech_galactic_administration"
      }
    ],
    "potential": [
      "Has Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": true
  },
  "tech_starbase_5": {
    "key": "tech_starbase_5",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 10000,
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Citadel",
    "prerequisites": [
      "tech_starbase_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Star Fortress",
        "key": "tech_starbase_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_synthetic_leaders": {
    "key": "tech_synthetic_leaders",
    "area": "engineering",
    "category": "Industry",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Feature : </b>Synth Leaders"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Synthetic Personality Matrix",
    "prerequisites": [
      "tech_synthetic_workers"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Synthetics",
        "key": "tech_synthetic_workers"
      }
    ],
    "potential": [
      "Does NOT Have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_kinetic_artillery_2": {
    "key": "tech_kinetic_artillery_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Kinetic Artillery"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Kinetic Artillery",
    "prerequisites": [
      "tech_kinetic_artillery_1",
      "tech_mass_drivers_5"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Gauss Cannons",
        "key": "tech_mass_drivers_5"
      },
      {
        "name": "Kinetic Battery",
        "key": "tech_kinetic_artillery_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ship_armor_5": {
    "key": "tech_ship_armor_5",
    "area": "engineering",
    "category": "Materials",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Small Neutronium Armor",
      "<b>Component:</b> Medium Neutronium Armor",
      "<b>Component:</b> Large Neutronium Armor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Neutronium Materials",
    "prerequisites": [
      "tech_ship_armor_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Durasteel Materials",
        "key": "tech_ship_armor_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_thrusters_4": {
    "key": "tech_thrusters_4",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Impulse Thrusters"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Impulse Thrusters",
    "prerequisites": [
      "tech_thrusters_3"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Plasma Thrusters",
        "key": "tech_thrusters_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_engineering_3": {
    "key": "tech_engineering_3",
    "area": "engineering",
    "category": "Industry",
    "cost": 10000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_RESEARCHERS_ENGINEERING_RESEARCH_PRODUCES_MULT: +20%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Superfluid Materials",
    "prerequisites": [
      "tech_engineering_2"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Supersolid Materials",
        "key": "tech_engineering_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cruiser_hull_2": {
    "key": "tech_cruiser_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 8000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_CRUISER_HULL_ADD: +500"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Advanced Cruiser Hulls",
    "prerequisites": [
      "tech_cruiser_hull_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Improved Cruiser Hulls",
        "key": "tech_cruiser_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_accelerator_2": {
    "key": "tech_mass_accelerator_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 12000,
    "feature_unlocks": [
      "<b>Component:</b> Giga Cannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Giga Cannon",
    "prerequisites": [
      "tech_mass_drivers_5",
      "tech_mass_accelerator_1"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Gauss Cannons",
        "key": "tech_mass_drivers_5"
      },
      {
        "name": "Mega Cannon",
        "key": "tech_mass_accelerator_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_accelerator_1": {
    "key": "tech_mass_accelerator_1",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "feature_unlocks": [
      "<b>Component:</b> Mega Cannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Mega Cannon",
    "prerequisites": [
      "tech_mass_drivers_4",
      "tech_battleships"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Advanced Railguns",
        "key": "tech_mass_drivers_4"
      },
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_crystal_armor_2": {
    "key": "tech_crystal_armor_2",
    "area": "engineering",
    "category": "Materials",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Large Crystal-Forged Plating",
      "<b>Component:</b> Medium Crystal-Forged Plating",
      "<b>Component:</b> Small Crystal-Forged Plating"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Crystal-Forged Plating",
    "prerequisites": [],
    "tier": 4,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mass_drivers_5": {
    "key": "tech_mass_drivers_5",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 8000,
    "feature_unlocks": [
      "<b>Component:</b> Large Gauss Cannon",
      "<b>Component:</b> Small Gauss Cannon",
      "<b>Component:</b> Medium Gauss Cannon"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Gauss Cannons",
    "prerequisites": [
      "tech_mass_drivers_4"
    ],
    "tier": 4,
    "prerequisites_names": [
      {
        "name": "Advanced Railguns",
        "key": "tech_mass_drivers_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_battleship_hull_2": {
    "key": "tech_battleship_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 15000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_BATTLESHIP_HULL_ADD: +800"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Advanced Battleship Hulls",
    "prerequisites": [
      "tech_battleship_hull_1"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Improved Battleship Hulls",
        "key": "tech_battleship_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_armor_output": {
    "key": "tech_repeatable_improved_armor_output",
    "area": "engineering",
    "category": "Materials",
    "cost": 50000,
    "feature_unlocks": [
      "Armor Hit Points: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Matter Compression",
    "prerequisites": [
      "tech_ship_armor_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Plasteel Materials",
        "key": "tech_ship_armor_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_kinetic_damage": {
    "key": "tech_repeatable_weapon_type_kinetic_damage",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_KINETIC_WEAPON_DAMAGE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "High-Density Munitions",
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Railguns",
        "key": "tech_mass_drivers_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_living_metal": {
    "key": "tech_mine_living_metal",
    "area": "engineering",
    "category": "Materials",
    "cost": 15000,
    "feature_unlocks": [
      "<b>Edict:</b> Living Metal Mega-Construction",
      "<b>Reveals Ressource:</b> Living Metal"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Living Metal",
    "prerequisites": [
      "tech_space_construction"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Offworld Construction",
        "key": "tech_space_construction"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_explosive_fire_rate": {
    "key": "tech_repeatable_weapon_type_explosive_fire_rate",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_EXPLOSIVE_WEAPON_FIRE_RATE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Miniaturized Pre-Igniters",
    "prerequisites": [
      "tech_missiles_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Antimatter Missiles",
        "key": "tech_missiles_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_kinetic_fire_rate": {
    "key": "tech_repeatable_weapon_type_kinetic_fire_rate",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_KINETIC_WEAPON_FIRE_RATE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Loader Efficiency",
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Railguns",
        "key": "tech_mass_drivers_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_titan_hull_2": {
    "key": "tech_titan_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_TITAN_HULL_ADD: +2000"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Advanced Titan Hulls",
    "prerequisites": [
      "tech_titan_hull_1"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Improved Titan Hulls",
        "key": "tech_titan_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_titan_hull_1": {
    "key": "tech_titan_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 17500,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPSIZE_TITAN_HULL_ADD: +2000"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Improved Titan Hulls",
    "prerequisites": [
      "tech_titans"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Titans",
        "key": "tech_titans"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_military_station_health": {
    "key": "tech_repeatable_improved_military_station_health",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPCLASS_MILITARY_STATION_HULL_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Fortified Core Layers",
    "prerequisites": [
      "tech_defense_platform_hull_1"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Improved Structural Integrity",
        "key": "tech_defense_platform_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_military_station_damage": {
    "key": "tech_repeatable_improved_military_station_damage",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_SHIPCLASS_MILITARY_STATION_DAMAGE_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Synchronized Firing Patterns",
    "prerequisites": [
      "tech_defense_platform_hull_1"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Improved Structural Integrity",
        "key": "tech_defense_platform_hull_1"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pk_cracker": {
    "key": "tech_pk_cracker",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> World Cracker"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Core Cracking",
    "prerequisites": [
      "tech_colossus"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Colossi",
        "key": "tech_colossus"
      }
    ],
    "potential": [
      "Has DLC Apocalypse",
      "Has Country Flag colossus_project",
      "Is Pacifist"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dragon_armor": {
    "key": "tech_dragon_armor",
    "area": "engineering",
    "category": "Materials",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Small Dragonscale Armor",
      "<b>Component:</b> Medium Dragonscale Armor",
      "<b>Component:</b> Large Dragonscale Armor"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Artificial Dragonscales",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_explosive_damage": {
    "key": "tech_repeatable_weapon_type_explosive_damage",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_EXPLOSIVE_WEAPON_DAMAGE_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Thermodynamic Yield Control",
    "prerequisites": [
      "tech_missiles_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Antimatter Missiles",
        "key": "tech_missiles_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colossus": {
    "key": "tech_colossus",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Starbase Building:</b> Colossus Assembly Yards"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Colossi",
    "prerequisites": [
      "tech_titans"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Titans",
        "key": "tech_titans"
      }
    ],
    "potential": [
      "Has DLC Apocalypse"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_titans": {
    "key": "tech_titans",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 15000,
    "feature_unlocks": [
      "<b>Component:</b> Ion Cannon",
      "<b>Ship Size:</b> Titan",
      "Fleet Command Limit: +10",
      "<b>Component:</b> Perdition Beam"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Titans",
    "prerequisites": [
      "tech_battleships"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Battleships",
        "key": "tech_battleships"
      }
    ],
    "potential": [
      "Has DLC Apocalypse"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_pk_nanobots": {
    "key": "tech_pk_nanobots",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Nanobot Diffuser"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Atmospheric Nanobot Dispersal",
    "prerequisites": [
      "tech_colossus"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Colossi",
        "key": "tech_colossus"
      }
    ],
    "potential": [
      "Has DLC Apocalypse",
      "Has Country Flag colossus_project",
      "Has Driven Assimilator Civic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_reduced_building_time": {
    "key": "tech_repeatable_reduced_building_time",
    "area": "engineering",
    "category": "Industry",
    "cost": 50000,
    "feature_unlocks": [
      "Planet Build Speed: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Assembly Algorithms",
    "prerequisites": [
      "tech_construction_templates"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Construction Templates",
        "key": "tech_construction_templates"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_improved_tile_mineral_output": {
    "key": "tech_repeatable_improved_tile_mineral_output",
    "area": "engineering",
    "category": "Industry",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_PLANET_JOBS_MINERALS_PRODUCES_MULT: +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Extraction Patterns",
    "prerequisites": [
      "tech_mineral_purification_2"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Advanced Mineral Purification",
        "key": "tech_mineral_purification_2"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_strike_craft_fire_damage": {
    "key": "tech_repeatable_weapon_type_strike_craft_fire_damage",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_STRIKE_CRAFT_WEAPON_DAMAGE_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Synapse Interceptors",
    "prerequisites": [
      "tech_strike_craft_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Advanced Strike Craft",
        "key": "tech_strike_craft_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_repeatable_weapon_type_strike_craft_fire_rate": {
    "key": "tech_repeatable_weapon_type_strike_craft_fire_rate",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 50000,
    "feature_unlocks": [
      "MOD_COUNTRY_WEAPON_TYPE_STRIKE_CRAFT_WEAPON_FIRE_RATE_MULT: +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Heat Recyclers",
    "prerequisites": [
      "tech_strike_craft_3"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Advanced Strike Craft",
        "key": "tech_strike_craft_3"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dark_matter_propulsion": {
    "key": "tech_dark_matter_propulsion",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "feature_unlocks": [
      "<b>Component:</b> Dark Matter Thrusters"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Dark Matter Propulsion",
    "prerequisites": [
      "tech_thrusters_4"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Impulse Thrusters",
        "key": "tech_thrusters_4"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mega_engineering": {
    "key": "tech_mega_engineering",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "Resource Storage Capacity: +20000",
      "<b>Feature : </b>Megastructure Restoration"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Mega-Engineering",
    "prerequisites": [
      "tech_battleships",
      "tech_starbase_5",
      "tech_zero_point_power"
    ],
    "tier": 5,
    "prerequisites_names": [
      {
        "name": "Citadel",
        "key": "tech_starbase_5"
      },
      {
        "name": "Battleships",
        "key": "tech_battleships"
      },
      {
        "name": "Zero Point Power",
        "key": "tech_zero_point_power"
      }
    ],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_nanite_repair_system": {
    "key": "tech_nanite_repair_system",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "feature_unlocks": [
      "<b>Component:</b> Nanite Repair System"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Nanite Repair System",
    "prerequisites": [],
    "tier": 5,
    "prerequisites_names": [],
    "potential": [],
    "is_gestalt": false,
    "is_machine": false
  }
}

Object.freeze(Research);

export default Research;