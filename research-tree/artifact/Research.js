const Research = {
  "tech_lasers_1": {
    "key": "tech_lasers_1",
    "name": "Red Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 0,
    "cost": "0",
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Red Laser",
      "Unlocks Component: Medium Red Laser",
      "Unlocks Component: Large Red Laser"
    ]
  },
  "tech_basic_science_lab_1": {
    "key": "tech_basic_science_lab_1",
    "name": "Scientific Method",
    "area": "physics",
    "category": "Computing",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Basic Science Lab"
    ]
  },
  "tech_fission_power": {
    "key": "tech_fission_power",
    "name": "Fission Power",
    "area": "physics",
    "category": "Particles",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Fission Reactor"
    ]
  },
  "tech_reactor_boosters_1": {
    "key": "tech_reactor_boosters_1",
    "name": "Reactor Boosters",
    "area": "physics",
    "category": "Particles",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_fission_power"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Reactor Booster"
    ]
  },
  "tech_shields_1": {
    "key": "tech_shields_1",
    "name": "Deflectors",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Deflectors",
      "Unlocks Component: Medium Deflectors",
      "Unlocks Component: Large Deflectors"
    ]
  },
  "tech_power_plant_1": {
    "key": "tech_power_plant_1",
    "name": "High-Energy Capacitors",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Power Plant I"
    ]
  },
  "tech_hyper_drive_1": {
    "key": "tech_hyper_drive_1",
    "name": "Hyperspace Travel",
    "area": "physics",
    "category": "Particles",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Hyperdrive I"
    ]
  },
  "tech_lasers_2": {
    "key": "tech_lasers_2",
    "name": "Blue Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_lasers_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Blue Laser",
      "Unlocks Component: Medium Blue Laser",
      "Unlocks Component: Large Blue Laser"
    ]
  },
  "tech_pd_tracking_1": {
    "key": "tech_pd_tracking_1",
    "name": "Active Countermeasures",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_lasers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Sentinel Point-Defense"
    ]
  },
  "tech_databank_uplinks": {
    "key": "tech_databank_uplinks",
    "name": "Databank Uplinks",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Assist Research",
      "Unlocks Feature: Assist Research"
    ]
  },
  "tech_physics_lab_1": {
    "key": "tech_physics_lab_1",
    "name": "Quantum Theory",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Physics Lab I"
    ]
  },
  "tech_administrative_ai": {
    "key": "tech_administrative_ai",
    "name": "Administrative AI",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Research Speed: +5%"
    ]
  },
  "tech_cryostasis_1": {
    "key": "tech_cryostasis_1",
    "name": "AI-Controlled Colony Ships",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_administrative_ai",
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Colony Development Speed: +50%"
    ]
  },
  "tech_automated_exploration": {
    "key": "tech_automated_exploration",
    "name": "Automated Exploration Protocols",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 640,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Survey Speed: +25%",
      "Unlocks Feature: Automatic Exploration",
      "Unlocks Feature: Automatic Exploration"
    ]
  },
  "tech_combat_computers_1": {
    "key": "tech_combat_computers_1",
    "name": "Specialized Combat Computers",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_administrative_ai"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Basic Combat Roles"
    ]
  },
  "tech_auxiliary_fire_control": {
    "key": "tech_auxiliary_fire_control",
    "name": "Auxiliary Fire-control",
    "area": "physics",
    "category": "Computing",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_combat_computers_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Auxiliary Fire-control"
    ]
  },
  "tech_fusion_power": {
    "key": "tech_fusion_power",
    "name": "Fusion Power",
    "area": "physics",
    "category": "Particles",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_fission_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Fusion Reactor"
    ]
  },
  "tech_reactor_boosters_2": {
    "key": "tech_reactor_boosters_2",
    "name": "Improved Reactor Boosters",
    "area": "physics",
    "category": "Particles",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_fusion_power",
      "tech_reactor_boosters_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Improved Reactor Booster"
    ]
  },
  "tech_reactor_boosters_3": {
    "key": "tech_reactor_boosters_3",
    "name": "Advanced Reactor Boosters",
    "area": "physics",
    "category": "Particles",
    "tier": 1,
    "cost": 5000,
    "prerequisites": [
      "tech_antimatter_power",
      "tech_reactor_boosters_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Advanced Reactor Booster"
    ]
  },
  "tech_shields_2": {
    "key": "tech_shields_2",
    "name": "Improved Deflectors",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_shields_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Improved Deflectors",
      "Unlocks Component: Medium Improved Deflectors",
      "Unlocks Component: Large Improved Deflectors"
    ]
  },
  "tech_power_plant_2": {
    "key": "tech_power_plant_2",
    "name": "Field Modulation",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_power_plant_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +5000",
      "Unlocks Building: Power Plant II"
    ]
  },
  "tech_power_hub_1": {
    "key": "tech_power_hub_1",
    "name": "Global Energy Management",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_power_plant_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Energy Grid",
      "Unlocks Edict: Capacity Overload"
    ]
  },
  "tech_lasers_3": {
    "key": "tech_lasers_3",
    "name": "UV Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_lasers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small UV Laser",
      "Unlocks Component: Medium UV Laser",
      "Unlocks Component: Large UV Laser"
    ]
  },
  "tech_plasma_1": {
    "key": "tech_plasma_1",
    "name": "Plasma Throwers",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_lasers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Plasma Thrower",
      "Unlocks Component: Medium Plasma Thrower",
      "Unlocks Component: Large Plasma Thrower"
    ]
  },
  "tech_disruptors_1": {
    "key": "tech_disruptors_1",
    "name": "Disruptors",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_lasers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Disruptor",
      "Unlocks Component: Medium Disruptor"
    ]
  },
  "tech_pd_tracking_2": {
    "key": "tech_pd_tracking_2",
    "name": "Interlinked Support Systems",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_pd_tracking_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Barrier Point-Defense"
    ]
  },
  "tech_mining_drone_weapon_1": {
    "key": "tech_mining_drone_weapon_1",
    "name": "Mining Drone Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Cutting Laser",
      "Unlocks Component: Medium Cutting Laser"
    ]
  },
  "tech_space_cloud_weapon_1": {
    "key": "tech_space_cloud_weapon_1",
    "name": "Cloud Lightning Conduits",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: $SPACE_CLOUD_WEAPON_1$"
    ]
  },
  "tech_lythuric_gas": {
    "key": "tech_lythuric_gas",
    "name": "Lythuric Gas Refining",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_sensors_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Lythuric Gas ([[sr_lythuric]])"
    ]
  },
  "tech_mine_satramene": {
    "key": "tech_mine_satramene",
    "name": "Satramene Refining",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_sensors_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Satramene Gas ([[sr_satramene]])"
    ]
  },
  "tech_improved_databank_uplinks": {
    "key": "tech_improved_databank_uplinks",
    "name": "Uplink Miniaturization",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_databank_uplinks"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Improved Assist Research"
    ]
  },
  "tech_curator_lab": {
    "key": "tech_curator_lab",
    "name": "Curator Exploration Lab",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Survey Speed: +33%",
      "Unlocks Component: Curator Exploration Lab"
    ]
  },
  "tech_archeology_lab": {
    "key": "tech_archeology_lab",
    "name": "Curator Archeology Lab",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Anomaly Fail Risk: -5%",
      "ship_anomaly_generation_chance_mult: +5%",
      "ship_anomaly_research_speed_mult: +25%",
      "Unlocks Component: Curator Archeology Lab"
    ]
  },
  "tech_physics_lab_2": {
    "key": "tech_physics_lab_2",
    "name": "Applied Quantum Physics",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_physics_lab_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Physics Lab II"
    ]
  },
  "tech_self_aware_logic": {
    "key": "tech_self_aware_logic",
    "name": "Self-Evolving Logic",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_administrative_ai"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Research Alternatives: +1"
    ]
  },
  "tech_cold_fusion_power": {
    "key": "tech_cold_fusion_power",
    "name": "Cold Fusion Power",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_fusion_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Cold Fusion Reactor"
    ]
  },
  "tech_shields_3": {
    "key": "tech_shields_3",
    "name": "Shields",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_shields_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Shields",
      "Unlocks Component: Medium Shields",
      "Unlocks Component: Large Shields"
    ]
  },
  "tech_shield_rechargers_1": {
    "key": "tech_shield_rechargers_1",
    "name": "Shield Capacitors",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_shields_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Shield Capacitor"
    ]
  },
  "tech_sensors_2": {
    "key": "tech_sensors_2",
    "name": "Gravitic Sensors",
    "area": "physics",
    "category": "Computing",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Gravitic Sensors"
    ]
  },
  "tech_power_plant_3": {
    "key": "tech_power_plant_3",
    "name": "Quantum Energy States",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_power_plant_2",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +10000",
      "Unlocks Building: Power Plant III"
    ]
  },
  "tech_hyper_drive_2": {
    "key": "tech_hyper_drive_2",
    "name": "Hyperlane Breach Points",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_hyper_drive_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Hyperdrive II"
    ]
  },
  "tech_ftl_inhibitor": {
    "key": "tech_ftl_inhibitor",
    "name": "FTL Inhibition",
    "area": "physics",
    "category": "Particles",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_hyper_drive_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Planetary FTL Inhibitors",
      "Unlocks Feature: Planetary FTL Inhibitors",
      "Unlocks Component: $sm_ftl_inhibitor$"
    ]
  },
  "tech_lasers_4": {
    "key": "tech_lasers_4",
    "name": "X-Ray Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_lasers_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small X-Ray Laser",
      "Unlocks Component: Medium X-Ray Laser",
      "Unlocks Component: Large X-Ray Laser"
    ]
  },
  "tech_plasma_2": {
    "key": "tech_plasma_2",
    "name": "Plasma Accelerators",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_plasma_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Plasma Accelerator",
      "Unlocks Component: Medium Plasma Accelerator",
      "Unlocks Component: Large Plasma Accelerator"
    ]
  },
  "tech_disruptors_2": {
    "key": "tech_disruptors_2",
    "name": "Ion Disruptors",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_disruptors_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Ion Disruptor",
      "Unlocks Component: Medium Ion Disruptor"
    ]
  },
  "tech_energy_torpedoes_1": {
    "key": "tech_energy_torpedoes_1",
    "name": "Proton Launchers",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_lasers_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Proton Launchers"
    ]
  },
  "tech_akx_worm_1": {
    "key": "tech_akx_worm_1",
    "name": "Entropic Recursion",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Omega Theory"
    ]
  },
  "tech_akx_worm_3": {
    "key": "tech_akx_worm_3",
    "name": "Omega Theory",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_akx_worm_1",
      "tech_akx_worm_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Omega Theory"
    ]
  },
  "tech_cryostasis_2": {
    "key": "tech_cryostasis_2",
    "name": "Self-Aware Colony Ships",
    "area": "physics",
    "category": "Computing",
    "tier": 3,
    "cost": 2000,
    "prerequisites": [
      "tech_self_aware_logic",
      "tech_cryostasis_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Colony Development Speed: +50%"
    ]
  },
  "tech_combat_computers_2": {
    "key": "tech_combat_computers_2",
    "name": "Extended Combat Algorithms",
    "area": "physics",
    "category": "Computing",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_combat_computers_1",
      "tech_self_aware_logic"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Advanced Combat Roles"
    ]
  },
  "tech_synchronized_defences": {
    "key": "tech_synchronized_defences",
    "name": "Synchronized Defenses",
    "area": "physics",
    "category": "Computing",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_self_aware_logic"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": []
  },
  "tech_antimatter_power": {
    "key": "tech_antimatter_power",
    "name": "Antimatter Power",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_cold_fusion_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Antimatter Reactor"
    ]
  },
  "tech_shields_4": {
    "key": "tech_shields_4",
    "name": "Advanced Shields",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_shields_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Advanced Shields",
      "Unlocks Component: Medium Advanced Shields",
      "Unlocks Component: Large Advanced Shields"
    ]
  },
  "tech_planetary_shield_generator": {
    "key": "tech_planetary_shield_generator",
    "name": "Planetary Shields",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_shields_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Planetary Shield Generator"
    ]
  },
  "tech_sensors_3": {
    "key": "tech_sensors_3",
    "name": "Subspace Sensors",
    "area": "physics",
    "category": "Computing",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_sensors_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Subspace Sensors"
    ]
  },
  "tech_power_hub_2": {
    "key": "tech_power_hub_2",
    "name": "Planetary Power Grid",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_power_hub_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Energy Nexus"
    ]
  },
  "tech_hyper_drive_3": {
    "key": "tech_hyper_drive_3",
    "name": "Hyperspace Slipstreams",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_hyper_drive_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Hyperdrive III"
    ]
  },
  "tech_wormhole_stabilization": {
    "key": "tech_wormhole_stabilization",
    "name": "Wormhole Stabilization",
    "area": "physics",
    "category": "Particles",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_hyper_drive_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Feature: Wormhole Travel",
      "Unlocks Feature: Wormhole Travel"
    ]
  },
  "tech_singularity_core": {
    "key": "tech_singularity_core",
    "name": "Singularity Core",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_physics_lab_1",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Singularity Core"
    ]
  },
  "tech_lasers_5": {
    "key": "tech_lasers_5",
    "name": "Gamma Lasers",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_lasers_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Gamma Laser",
      "Unlocks Component: Medium Gamma Laser",
      "Unlocks Component: Large Gamma Laser"
    ]
  },
  "tech_energy_lance_1": {
    "key": "tech_energy_lance_1",
    "name": "Particle Lances",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_lasers_4",
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Particle Lance"
    ]
  },
  "tech_energy_lance_2": {
    "key": "tech_energy_lance_2",
    "name": "Tachyon Lances",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_lasers_5",
      "tech_energy_lance_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Tachyon Lance"
    ]
  },
  "tech_plasma_3": {
    "key": "tech_plasma_3",
    "name": "Plasma Cannons",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_plasma_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Plasma Cannon",
      "Unlocks Component: Medium Plasma Cannon",
      "Unlocks Component: Large Plasma Cannon"
    ]
  },
  "tech_arc_emitter_1": {
    "key": "tech_arc_emitter_1",
    "name": "Arc Emitters",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_plasma_3",
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Arc Emitter"
    ]
  },
  "tech_arc_emitter_2": {
    "key": "tech_arc_emitter_2",
    "name": "Focused Arc Emitters",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_arc_emitter_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Focused Arc Emitter"
    ]
  },
  "tech_disruptors_3": {
    "key": "tech_disruptors_3",
    "name": "Phase Disruptors",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_disruptors_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Phased Disruptor",
      "Unlocks Component: Medium Phased Disruptor"
    ]
  },
  "tech_energy_torpedoes_2": {
    "key": "tech_energy_torpedoes_2",
    "name": "Neutron Launchers",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_energy_torpedoes_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Neutron Launchers"
    ]
  },
  "tech_pd_tracking_3": {
    "key": "tech_pd_tracking_3",
    "name": "Predictive Algorithms",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_pd_tracking_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Guardian Point-Defense"
    ]
  },
  "tech_mine_neutronium": {
    "key": "tech_mine_neutronium",
    "name": "Neutronium Extraction",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_sensors_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Neutronium Ore ([[sr_neutronium]])"
    ]
  },
  "tech_mine_dark_matter": {
    "key": "tech_mine_dark_matter",
    "name": "Dark Matter Drawing",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_sensors_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Dark Matter ([[sr_dark_matter]])"
    ]
  },
  "tech_physics_lab_3": {
    "key": "tech_physics_lab_3",
    "name": "Space-Time Theory",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_physics_lab_2",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Physics Lab III",
      "Unlocks Building: Physics Lab IV"
    ]
  },
  "tech_global_research_initiative": {
    "key": "tech_global_research_initiative",
    "name": "Interplanetary Research Initiative",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_physics_lab_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Research Institute"
    ]
  },
  "tech_sapient_ai": {
    "key": "tech_sapient_ai",
    "name": "Positronic AI",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_self_aware_logic"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Research Speed: +5%"
    ]
  },
  "tech_combat_computers_3": {
    "key": "tech_combat_computers_3",
    "name": "Sapient Combat Simulations",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_combat_computers_2",
      "tech_sapient_ai"
    ],
    "is_start_tech": false,
    "is_dangerous": true,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Sapient Combat AI"
    ]
  },
  "tech_combat_computers_autonomous": {
    "key": "tech_combat_computers_autonomous",
    "name": "Autonomous Ship Intellects",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_combat_computers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": true,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Autonomous Ship Intellects"
    ]
  },
  "tech_zero_point_power": {
    "key": "tech_zero_point_power",
    "name": "Zero Point Power",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_antimatter_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Zero Point Reactor"
    ]
  },
  "tech_shields_5": {
    "key": "tech_shields_5",
    "name": "Hyper Shields",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_shields_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Hyper Shields",
      "Unlocks Component: Medium Hyper Shields",
      "Unlocks Component: Large Hyper Shields"
    ]
  },
  "tech_sensors_4": {
    "key": "tech_sensors_4",
    "name": "Tachyon Sensors",
    "area": "physics",
    "category": "Computing",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_sensors_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Tachyon Sensors"
    ]
  },
  "tech_power_plant_4": {
    "key": "tech_power_plant_4",
    "name": "Quantum Field Manipulation",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_power_plant_3",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +10000",
      "Unlocks Building: Power Plant IV",
      "Unlocks Building: Power Plant V"
    ]
  },
  "tech_gateway_activation": {
    "key": "tech_gateway_activation",
    "name": "Gateway Activation",
    "area": "physics",
    "category": "Particles",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_hyper_drive_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Feature: Gateway Travel",
      "Unlocks Feature: Gateway Travel"
    ]
  },
  "tech_enigmatic_encoder": {
    "key": "tech_enigmatic_encoder",
    "name": "Enigmatic Encoder",
    "area": "physics",
    "category": "Computing",
    "tier": 5,
    "cost": 15000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Enigmatic Encoder"
    ]
  },
  "tech_enigmatic_decoder": {
    "key": "tech_enigmatic_decoder",
    "name": "Enigmatic Decoder",
    "area": "physics",
    "category": "Computing",
    "tier": 5,
    "cost": 15000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Enigmatic Decoder"
    ]
  },
  "tech_extradimensional_weapon_1": {
    "key": "tech_extradimensional_weapon_1",
    "name": "Extradimensional Weaponry",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Small Matter Disintegrator",
      "Unlocks Component: Medium Matter Disintegrator",
      "Unlocks Component: Large Matter Disintegrator"
    ]
  },
  "tech_repeatable_improved_tile_energy_output": {
    "key": "tech_repeatable_improved_tile_energy_output",
    "name": "Applied Superconductivity",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_power_plant_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Credits: +5%"
    ]
  },
  "tech_repeatable_improved_shield_output": {
    "key": "tech_repeatable_improved_shield_output",
    "name": "Shield Harmonics",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_shields_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Shield Hit Points: +5%"
    ]
  },
  "tech_repeatable_weapon_type_energy_damage": {
    "key": "tech_repeatable_weapon_type_energy_damage",
    "name": "Focusing Arrays",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_lasers_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Weapon Damage: +5%"
    ]
  },
  "tech_repeatable_weapon_type_energy_fire_rate": {
    "key": "tech_repeatable_weapon_type_energy_fire_rate",
    "name": "Flash Coolant",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_lasers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Weapon Attack Speed: +5%"
    ]
  },
  "tech_repeatable_reduced_building_cost": {
    "key": "tech_repeatable_reduced_building_cost",
    "name": "Gravitational Analysis",
    "area": "physics",
    "category": "Computing",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_physics_lab_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Building Cost: -5%"
    ]
  },
  "tech_gateway_construction": {
    "key": "tech_gateway_construction",
    "name": "Gateway Construction",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_gateway_activation",
      "tech_mega_engineering"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Feature: Gateway Construction",
      "Unlocks Feature: Gateway Construction"
    ]
  },
  "tech_jump_drive_1": {
    "key": "tech_jump_drive_1",
    "name": "Jump Drive",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_zero_point_power"
    ],
    "is_start_tech": false,
    "is_dangerous": true,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Jump Drive",
      "Unlocks Feature: Jump Drive Travel"
    ]
  },
  "tech_matter_generator": {
    "key": "tech_matter_generator",
    "name": "Matter Generation",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_zero_point_power",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Resource Replicator"
    ]
  },
  "tech_pk_shielder": {
    "key": "tech_pk_shielder",
    "name": "Global Pacification",
    "area": "physics",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_colossus"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Global Pacifier"
    ]
  },
  "tech_pk_neutron": {
    "key": "tech_pk_neutron",
    "name": "Neutron Sweeping",
    "area": "physics",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_colossus"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Neutron Sweep"
    ]
  },
  "tech_dark_matter_deflector": {
    "key": "tech_dark_matter_deflector",
    "name": "Dark Matter Deflectors",
    "area": "physics",
    "category": "Field Manipulation",
    "tier": 5,
    "cost": 25000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Small $DARK_MATTER_DEFLECTOR$",
      "Unlocks Component: Medium $DARK_MATTER_DEFLECTOR$",
      "Unlocks Component: Large $DARK_MATTER_DEFLECTOR$"
    ]
  },
  "tech_dark_matter_power_core": {
    "key": "tech_dark_matter_power_core",
    "name": "Dark Matter Power",
    "area": "physics",
    "category": "Particles",
    "tier": 5,
    "cost": 25000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Dark Matter Reactor"
    ]
  },
  "tech_planetary_defenses": {
    "key": "tech_planetary_defenses",
    "name": "Planetary Defenses",
    "area": "society",
    "category": "Military Theory",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Stronghold"
    ]
  },
  "tech_eco_simulation": {
    "key": "tech_eco_simulation",
    "name": "Hydroponics",
    "area": "society",
    "category": "Biology",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Hydroponics Farm I"
    ]
  },
  "tech_colonization_1": {
    "key": "tech_colonization_1",
    "name": "New Worlds Protocol",
    "area": "society",
    "category": "New Worlds",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_space_exploration"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Ship Type: Colony Ship"
    ]
  },
  "tech_planetary_government": {
    "key": "tech_planetary_government",
    "name": "Planetary Government",
    "area": "society",
    "category": "Statecraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Planetary Administration",
      "Unlocks Building: Administrative Array"
    ]
  },
  "tech_cultural_heritage": {
    "key": "tech_cultural_heritage",
    "name": "Sociocultural History",
    "area": "society",
    "category": "Statecraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Autochthon Monument",
      "Unlocks Building: Temple",
      "Unlocks Building: Uplink Node"
    ]
  },
  "tech_space_whale_weapon_1": {
    "key": "tech_space_whale_weapon_1",
    "name": "Frequency Tuning",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 780,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: $SPACE_WHALE_WEAPON_1$"
    ]
  },
  "tech_modular_components": {
    "key": "tech_modular_components",
    "name": "$tech_frontier_health_machine_intelligence$",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Spare Parts Depot"
    ]
  },
  "tech_hydroponics": {
    "key": "tech_hydroponics",
    "name": "Eco Simulation",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_eco_simulation"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Hydroponics Farm II",
      "Unlocks Edict: Farming Subsidies"
    ]
  },
  "tech_biolab_1": {
    "key": "tech_biolab_1",
    "name": "Biodiversity Studies",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Biolab I"
    ]
  },
  "tech_alien_life_studies": {
    "key": "tech_alien_life_studies",
    "name": "Xenology",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 640,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Alien Zoo",
      "Unlocks Building: Animal Evaluation Laboratory"
    ]
  },
  "tech_space_trading": {
    "key": "tech_space_trading",
    "name": "Space Trading",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": []
  },
  "tech_frontier_health": {
    "key": "tech_frontier_health",
    "name": "Genetic Healthcare",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_genome_mapping",
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Gene Clinic"
    ]
  },
  "tech_tb_dense_jungle": {
    "key": "tech_tb_dense_jungle",
    "name": "Selective Defoliants",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Dense Jungle"
    ]
  },
  "tech_tb_quicksand_basin": {
    "key": "tech_tb_quicksand_basin",
    "name": "Soil Remediation",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Quicksand Basin"
    ]
  },
  "tech_tb_noxious_swamp": {
    "key": "tech_tb_noxious_swamp",
    "name": "Xeno-Hydraulic Mastery",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Noxious Swamp"
    ]
  },
  "tech_tb_massive_glacier": {
    "key": "tech_tb_massive_glacier",
    "name": "Climate Control Network",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Massive Glacier"
    ]
  },
  "tech_tb_toxic_kelp": {
    "key": "tech_tb_toxic_kelp",
    "name": "Ocean Ecology Management",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Toxic Kelp"
    ]
  },
  "tech_tb_deep_sinkhole": {
    "key": "tech_tb_deep_sinkhole",
    "name": "Subterranean Colonization",
    "area": "society",
    "category": "New Worlds",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Deep Sinkhole"
    ]
  },
  "tech_genome_mapping": {
    "key": "tech_genome_mapping",
    "name": "Genome Mapping",
    "area": "society",
    "category": "Biology",
    "tier": 1,
    "cost": 500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Growth Speed: +10%"
    ]
  },
  "tech_ground_defense_planning": {
    "key": "tech_ground_defense_planning",
    "name": "Ground Defense Planning",
    "area": "society",
    "category": "Military Theory",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_planetary_defenses"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Defense Army Damage: +33%"
    ]
  },
  "tech_planetary_unification": {
    "key": "tech_planetary_unification",
    "name": "Planetary Unification",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_planetary_government"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Monthly Unity: +2",
      "Unlocks Feature: Additional Edicts (Campaigns)",
      "Unlocks Feature: Additional Edicts (Campaigns)",
      "Unlocks Edict: Peace Festivals"
    ]
  },
  "tech_adaptive_bureaucracy": {
    "key": "tech_adaptive_bureaucracy",
    "name": "Adaptive Bureaucracy",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_planetary_unification"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Empire Leader Capacity: +1",
      "Leader Pool Size: +1"
    ]
  },
  "tech_neural_implants": {
    "key": "tech_neural_implants",
    "name": "Neural Implants",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 780,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Army: Slave Army",
      "Unlocks Building: Slave Processing Facility"
    ]
  },
  "tech_heritage_site": {
    "key": "tech_heritage_site",
    "name": "Heritage Sites",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Heritage Site",
      "Unlocks Building: Network Junction"
    ]
  },
  "tech_holographic_rituals": {
    "key": "tech_holographic_rituals",
    "name": "Holographic Rituals",
    "area": "society",
    "category": "Statecraft",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_cultural_heritage"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Holotemple"
    ]
  },
  "tech_amoeba_strike_craft_1": {
    "key": "tech_amoeba_strike_craft_1",
    "name": "Amoeba Breeding Program",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Amoeba Flagella"
    ]
  },
  "tech_adaptive_combat_algorithms": {
    "key": "tech_adaptive_combat_algorithms",
    "name": "Adaptive Combat Algorithms",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Army: Battle Frame Army"
    ]
  },
  "tech_intelligent_factories": {
    "key": "tech_intelligent_factories",
    "name": "$tech_frontier_hospital_machine_intelligence$",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_modular_components",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Unit Assembly Plant"
    ]
  },
  "tech_engos_vapor": {
    "key": "tech_engos_vapor",
    "name": "Engos Vapor Refining",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Engos Vapor ([[sr_engos]])"
    ]
  },
  "tech_pitharan_dust": {
    "key": "tech_pitharan_dust",
    "name": "Pitharan Dust Refining",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Pitharan Dust ([[sr_pitharan]])"
    ]
  },
  "tech_gene_crops": {
    "key": "tech_gene_crops",
    "name": "Gene Crops",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_hydroponics",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Hydroponics Farm III"
    ]
  },
  "tech_biolab_2": {
    "key": "tech_biolab_2",
    "name": "Xenobiology",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_biolab_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Biolab II"
    ]
  },
  "tech_colonization_2": {
    "key": "tech_colonization_2",
    "name": "Atmospheric Filtering",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 780,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Habitability: +5%"
    ]
  },
  "tech_colonization_3": {
    "key": "tech_colonization_3",
    "name": "Hostile Environment Adaptation",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_colonization_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Habitability: +5%"
    ]
  },
  "tech_frontier_hospital": {
    "key": "tech_frontier_hospital",
    "name": "Cyto-Revitalization",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_frontier_health",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Cyto-Revitalization Center"
    ]
  },
  "tech_tb_mountain_range": {
    "key": "tech_tb_mountain_range",
    "name": "Planetary Resurfacing",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Mountain Range"
    ]
  },
  "tech_tb_volcano": {
    "key": "tech_tb_volcano",
    "name": "Deep Crust Engineering",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Active Volcano"
    ]
  },
  "tech_tb_dangerous_wildlife": {
    "key": "tech_tb_dangerous_wildlife",
    "name": "Dangerous Wildlife Removal",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Clear Blockers: Dangerous Wildlife"
    ]
  },
  "tech_terrestrial_sculpting": {
    "key": "tech_terrestrial_sculpting",
    "name": "Terrestrial Sculpting",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_colonization_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +5000",
      "Unlocks Feature: Terraforming",
      "Unlocks Feature: Terraforming",
      "Reveals Resource: Terraforming Gases ([[sr_terraform_gases]])",
      "Reveals Resource: Terraforming Liquids ([[sr_terraform_liquids]])"
    ]
  },
  "tech_vitality_boosters": {
    "key": "tech_vitality_boosters",
    "name": "Vitality Boosters",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Leader Lifespan: +10"
    ]
  },
  "tech_epigenetic_triggers": {
    "key": "tech_epigenetic_triggers",
    "name": "Epigenetic Triggers",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Uplift",
      "Unlocks Feature: Uplift"
    ]
  },
  "tech_cloning": {
    "key": "tech_cloning",
    "name": "Cloning",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Growth Speed: +10%"
    ]
  },
  "tech_gene_banks": {
    "key": "tech_gene_banks",
    "name": "Gene Banks",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_cloning"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Clone Army",
      "Unlocks Building: Clone Vats"
    ]
  },
  "tech_doctrine_fleet_size_1": {
    "key": "tech_doctrine_fleet_size_1",
    "name": "Doctrine: Space Combat",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ]
  },
  "tech_doctrine_fleet_size_2": {
    "key": "tech_doctrine_fleet_size_2",
    "name": "Doctrine: Reactive Formations",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_doctrine_fleet_size_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ]
  },
  "tech_interstellar_fleet_traditions": {
    "key": "tech_interstellar_fleet_traditions",
    "name": "Interstellar Fleet Traditions",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": []
  },
  "tech_doctrine_navy_size_1": {
    "key": "tech_doctrine_navy_size_1",
    "name": "Doctrine: Fleet Support",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ]
  },
  "tech_centralized_command": {
    "key": "tech_centralized_command",
    "name": "Centralized Command",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Military Academy",
      "Unlocks Building: War Factory"
    ]
  },
  "tech_global_defense_grid": {
    "key": "tech_global_defense_grid",
    "name": "Global Defense Grid",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_ground_defense_planning"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Defense Army Health: +25%",
      "Unlocks Building: Fortress"
    ]
  },
  "tech_galactic_ambitions": {
    "key": "tech_galactic_ambitions",
    "name": "Stellar Expansion",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Starbase Capacity: +2"
    ]
  },
  "tech_interstellar_campaigns": {
    "key": "tech_interstellar_campaigns",
    "name": "Interstellar Campaigns",
    "area": "society",
    "category": "Military Theory",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Claim Influence Cost: -10%"
    ]
  },
  "tech_colonial_centralization": {
    "key": "tech_colonial_centralization",
    "name": "Colonial Centralization",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_planetary_unification"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Planetary Capital",
      "Unlocks Building: Planetary Processor",
      "Unlocks Edict: Production Targets"
    ]
  },
  "tech_subdermal_stimulation": {
    "key": "tech_subdermal_stimulation",
    "name": "Subdermal Stimulation",
    "area": "society",
    "category": "Biology",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Feature: Chemical Bliss",
      "Unlocks Feature: Chemical Bliss"
    ]
  },
  "tech_colonial_bureaucracy": {
    "key": "tech_colonial_bureaucracy",
    "name": "Colonial Bureaucracy",
    "area": "society",
    "category": "New Worlds",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_adaptive_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Core Sector Systems: +1"
    ]
  },
  "tech_living_state": {
    "key": "tech_living_state",
    "name": "The Living State",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Max Influence from Factions: +1"
    ]
  },
  "tech_autonomous_agents": {
    "key": "tech_autonomous_agents",
    "name": "Autonomous Agents",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Monthly Influence: +1"
    ]
  },
  "tech_artificial_moral_codes": {
    "key": "tech_artificial_moral_codes",
    "name": "Artificial Moral Codes",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 3000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Edict Cost: -15%",
      "Slave Resource Production: +5%"
    ]
  },
  "tech_hypercomms_forum": {
    "key": "tech_hypercomms_forum",
    "name": "Local Hypercommunication",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_heritage_site",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Hypercomms Forum",
      "Unlocks Building: System Conflux"
    ]
  },
  "tech_consecration_fields": {
    "key": "tech_consecration_fields",
    "name": "Consecration Fields",
    "area": "society",
    "category": "Statecraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_holographic_rituals",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Sacred Nexus"
    ]
  },
  "tech_akx_worm_2": {
    "key": "tech_akx_worm_2",
    "name": "Doctrine: Strange Loop",
    "area": "society",
    "category": "Statecraft",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Omega Theory"
    ]
  },
  "tech_colonization_4": {
    "key": "tech_colonization_4",
    "name": "Foreign Soil Enrichment",
    "area": "society",
    "category": "New Worlds",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_colonization_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Habitability: +5%"
    ]
  },
  "tech_tomb_world_adaption": {
    "key": "tech_tomb_world_adaption",
    "name": "Tomb World Adaptation",
    "area": "society",
    "category": "New Worlds",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_colonization_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Tomb World Habitability: +20%"
    ]
  },
  "tech_ecological_adaptation": {
    "key": "tech_ecological_adaptation",
    "name": "Ecological Adaptation",
    "area": "society",
    "category": "New Worlds",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_terrestrial_sculpting"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +5000",
      "Unlocks Feature: Ecological Adaptation",
      "Unlocks Feature: Ecological Adaptation"
    ]
  },
  "tech_gene_tailoring": {
    "key": "tech_gene_tailoring",
    "name": "Gene Tailoring",
    "area": "society",
    "category": "Biology",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_genome_mapping"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      null,
      null,
      null,
      "Unlocks Feature: Genetic Modification",
      "Unlocks Feature: Self-Modification",
      "Unlocks Feature: Genetic Modification",
      "Unlocks Feature: Self-Modification"
    ]
  },
  "tech_glandular_acclimation": {
    "key": "tech_glandular_acclimation",
    "name": "Glandular Acclimation",
    "area": "society",
    "category": "Biology",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Habitability Modification",
      "Unlocks Feature: Habitability Modification"
    ]
  },
  "tech_gene_expressions": {
    "key": "tech_gene_expressions",
    "name": "Targeted Gene Expressions",
    "area": "society",
    "category": "Biology",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      null,
      null,
      null
    ]
  },
  "tech_selected_lineages": {
    "key": "tech_selected_lineages",
    "name": "Selected Lineages",
    "area": "society",
    "category": "Biology",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_vitality_boosters"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Policy: Leader Enhancement - Selected Lineages"
    ]
  },
  "tech_regenerative_hull_tissue": {
    "key": "tech_regenerative_hull_tissue",
    "name": "Regenerative Hull Tissue",
    "area": "society",
    "category": "Biology",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Regenerative Hull Tissue"
    ]
  },
  "tech_doctrine_fleet_size_3": {
    "key": "tech_doctrine_fleet_size_3",
    "name": "Doctrine: Interstellar Warfare",
    "area": "society",
    "category": "Military Theory",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_doctrine_fleet_size_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ]
  },
  "tech_refit_standards": {
    "key": "tech_refit_standards",
    "name": "Refit Standards",
    "area": "society",
    "category": "Military Theory",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_interstellar_fleet_traditions"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Ship Upgrade Cost: -20%",
      "Ship Upkeep: -5%"
    ]
  },
  "tech_command_matrix": {
    "key": "tech_command_matrix",
    "name": "Command Matrix",
    "area": "society",
    "category": "Military Theory",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_refit_standards"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fire Rate: +5%"
    ]
  },
  "tech_doctrine_navy_size_2": {
    "key": "tech_doctrine_navy_size_2",
    "name": "Doctrine: Support Vessels",
    "area": "society",
    "category": "Military Theory",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_doctrine_navy_size_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ]
  },
  "tech_combat_training": {
    "key": "tech_combat_training",
    "name": "Combat Training",
    "area": "society",
    "category": "Military Theory",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_centralized_command"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Assault Army Damage: +15%",
      "Assault Army Morale: +15%"
    ]
  },
  "tech_psionic_theory": {
    "key": "tech_psionic_theory",
    "name": "Psionic Theory",
    "area": "society",
    "category": "Psionics",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Monthly Unity: +5%"
    ]
  },
  "tech_telepathy": {
    "key": "tech_telepathy",
    "name": "Telepathy",
    "area": "society",
    "category": "Psionics",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_psionic_theory"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Psionic Army"
    ]
  },
  "tech_galactic_bureaucracy": {
    "key": "tech_galactic_bureaucracy",
    "name": "Galactic Bureaucracy",
    "area": "society",
    "category": "New Worlds",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_colonial_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Core Sector Systems: +1"
    ]
  },
  "tech_collective_self": {
    "key": "tech_collective_self",
    "name": "The Collective Self",
    "area": "society",
    "category": "Statecraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Empire Leader Capacity: +2",
      "Leader Recruitment Cost: -20%"
    ]
  },
  "tech_embodied_dynamism": {
    "key": "tech_embodied_dynamism",
    "name": "Embodied Dynamism",
    "area": "society",
    "category": "Statecraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_autonomous_agents"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Empire Leader Capacity: +2",
      "Leader Recruitment Cost: -20%"
    ]
  },
  "tech_synthetic_thought_patterns": {
    "key": "tech_synthetic_thought_patterns",
    "name": "Synthetic Thought Patterns",
    "area": "society",
    "category": "Statecraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Resettlement Cost: -15%",
      "Robot Resource Production: +5%"
    ]
  },
  "tech_autocurating_vault": {
    "key": "tech_autocurating_vault",
    "name": "Automated Curation Algorithms",
    "area": "society",
    "category": "Statecraft",
    "tier": 3,
    "cost": 8000,
    "prerequisites": [
      "tech_hypercomms_forum",
      "tech_administrative_ai",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Auto-Curating Vault",
      "Unlocks Building: Alpha Hub"
    ]
  },
  "tech_psionic_shield": {
    "key": "tech_psionic_shield",
    "name": "Psionic Shields",
    "area": "society",
    "category": "Psionics",
    "tier": 3,
    "cost": 10000,
    "prerequisites": [
      "tech_psionic_theory"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Small Psionic Shield",
      "Unlocks Component: Medium Psionic Shield",
      "Unlocks Component: Large Psionic Shield"
    ]
  },
  "tech_probability_theory": {
    "key": "tech_probability_theory",
    "name": "Organic Probability Theory",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Probability Engine"
    ]
  },
  "tech_biomechanics": {
    "key": "tech_biomechanics",
    "name": "Biomechanics",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_adaptive_combat_algorithms"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Mega-Warform"
    ]
  },
  "tech_mine_zro": {
    "key": "tech_mine_zro",
    "name": "Zro Distillation",
    "area": "society",
    "category": "Psionics",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_sensors_3",
      "tech_psionic_theory"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Reveals Resource: Zro ([[sr_zro]])"
    ]
  },
  "tech_nano_vitality_crops": {
    "key": "tech_nano_vitality_crops",
    "name": "Nano-Vitality Crops",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_gene_crops",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Hydroponics Farm IV",
      "Unlocks Building: Hydroponics Farm V"
    ]
  },
  "tech_nutrient_replication": {
    "key": "tech_nutrient_replication",
    "name": "Nutrient Replication",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_nano_vitality_crops"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Food: +15%"
    ]
  },
  "tech_biolab_3": {
    "key": "tech_biolab_3",
    "name": "Secrets of Life",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_biolab_2",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Biolab III",
      "Unlocks Building: Biolab IV"
    ]
  },
  "tech_colonization_5": {
    "key": "tech_colonization_5",
    "name": "Eco-Integration Studies",
    "area": "society",
    "category": "New Worlds",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_colonization_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Habitability: +5%"
    ]
  },
  "tech_climate_restoration": {
    "key": "tech_climate_restoration",
    "name": "Climate Restoration",
    "area": "society",
    "category": "New Worlds",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_terrestrial_sculpting"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Energy Storage Capacity: +5000",
      "Unlocks Feature: Climate Restoration"
    ]
  },
  "tech_gene_seed_purification": {
    "key": "tech_gene_seed_purification",
    "name": "Gene Seed Purification",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_gene_tailoring"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Gene Warrior Army"
    ]
  },
  "tech_morphogenetic_field_mastery": {
    "key": "tech_morphogenetic_field_mastery",
    "name": "Morphogenetic Field Mastery",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_epigenetic_triggers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Xenomorph Army"
    ]
  },
  "tech_capacity_boosters": {
    "key": "tech_capacity_boosters",
    "name": "Capacity Boosters",
    "area": "society",
    "category": "Biology",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_selected_lineages"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Policy: Leader Enhancement - Capacity Boosters"
    ]
  },
  "tech_doctrine_fleet_size_4": {
    "key": "tech_doctrine_fleet_size_4",
    "name": "Doctrine: Fluid Fleet Templates",
    "area": "society",
    "category": "Military Theory",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_doctrine_fleet_size_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ]
  },
  "tech_doctrine_fleet_size_5": {
    "key": "tech_doctrine_fleet_size_5",
    "name": "Doctrine: Armada Battle Formation",
    "area": "society",
    "category": "Military Theory",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_doctrine_fleet_size_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +20"
    ]
  },
  "tech_doctrine_navy_size_3": {
    "key": "tech_doctrine_navy_size_3",
    "name": "Doctrine: Interstellar Logistics",
    "area": "society",
    "category": "Military Theory",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_doctrine_navy_size_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ]
  },
  "tech_doctrine_navy_size_4": {
    "key": "tech_doctrine_navy_size_4",
    "name": "Doctrine: Fleet Liasions",
    "area": "society",
    "category": "Military Theory",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_doctrine_navy_size_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Naval Capacity: +30"
    ]
  },
  "tech_precognition_interface": {
    "key": "tech_precognition_interface",
    "name": "Precognition Interface",
    "area": "society",
    "category": "Psionics",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_telepathy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Precognitive Interface"
    ]
  },
  "tech_manifest_destiny": {
    "key": "tech_manifest_destiny",
    "name": "Manifest Destiny",
    "area": "society",
    "category": "New Worlds",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Starbase Capacity: +2"
    ]
  },
  "tech_galactic_campaigns": {
    "key": "tech_galactic_campaigns",
    "name": "Galactic Campaigns",
    "area": "society",
    "category": "Military Theory",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_interstellar_campaigns"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Claim Influence Cost: -10%"
    ]
  },
  "tech_galactic_administration": {
    "key": "tech_galactic_administration",
    "name": "Galactic Administration",
    "area": "society",
    "category": "Statecraft",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Civic Slots: +1",
      "Unlocks Building: Empire Capital-Complex",
      "Unlocks Building: Primary Nexus"
    ]
  },
  "tech_galactic_markets": {
    "key": "tech_galactic_markets",
    "name": "Galactic Markets",
    "area": "society",
    "category": "Statecraft",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Galactic Stock Exchange"
    ]
  },
  "tech_galactic_benevolence": {
    "key": "tech_galactic_benevolence",
    "name": "Galactic Benevolence",
    "area": "society",
    "category": "Statecraft",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Building: Ministry of Benevolence"
    ]
  },
  "tech_transcendent_faith": {
    "key": "tech_transcendent_faith",
    "name": "Metacognitive Faith",
    "area": "society",
    "category": "Statecraft",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_consecration_fields",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Citadel of Faith"
    ]
  },
  "tech_swarm_strike_craft_1": {
    "key": "tech_swarm_strike_craft_1",
    "name": "Swarm Spawning Pools",
    "area": "society",
    "category": "Biology",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Swarm Strikers"
    ]
  },
  "tech_scourge_missile_1": {
    "key": "tech_scourge_missile_1",
    "name": "Scourge Missiles",
    "area": "society",
    "category": "Biology",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Large Scourge Missile"
    ]
  },
  "tech_repeatable_improved_tile_food_output": {
    "key": "tech_repeatable_improved_tile_food_output",
    "name": "Transgenic Crops",
    "area": "society",
    "category": "Biology",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_gene_crops"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Food: +5%"
    ]
  },
  "tech_repeatable_improved_sector_cap": {
    "key": "tech_repeatable_improved_sector_cap",
    "name": "Communication Protocols",
    "area": "society",
    "category": "New Worlds",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_adaptive_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Sector Limit: +1"
    ]
  },
  "tech_repeatable_improved_core_system_cap": {
    "key": "tech_repeatable_improved_core_system_cap",
    "name": "Administrative Efficiency",
    "area": "society",
    "category": "New Worlds",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_galactic_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Core Sector Systems: +1"
    ]
  },
  "tech_repeatable_improved_leader_cap": {
    "key": "tech_repeatable_improved_leader_cap",
    "name": "Sapient Resource Management",
    "area": "society",
    "category": "Statecraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_adaptive_bureaucracy"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Empire Leader Capacity: +1"
    ]
  },
  "tech_repeatable_improved_edict_length": {
    "key": "tech_repeatable_improved_edict_length",
    "name": "Proclamation Broadcasts",
    "area": "society",
    "category": "Statecraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_artificial_moral_codes"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Edict Duration: +10%"
    ]
  },
  "tech_repeatable_improved_army_damage": {
    "key": "tech_repeatable_improved_army_damage",
    "name": "Aggressive Conditioning",
    "area": "society",
    "category": "Military Theory",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_combat_training"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Army Damage: +10%"
    ]
  },
  "tech_repeatable_improved_army_health": {
    "key": "tech_repeatable_improved_army_health",
    "name": "Nerve Dampeners",
    "area": "society",
    "category": "Military Theory",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_combat_training"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Army Health: +10%"
    ]
  },
  "tech_repeatable_improved_leader_life_span": {
    "key": "tech_repeatable_improved_leader_life_span",
    "name": "Cell Revitalization",
    "area": "society",
    "category": "Biology",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_vitality_boosters"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Leader Lifespan: +5"
    ]
  },
  "tech_repeatable_naval_cap": {
    "key": "tech_repeatable_naval_cap",
    "name": "Fleet Management Procedures",
    "area": "society",
    "category": "Military Theory",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_doctrine_navy_size_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Naval Capacity: +20"
    ]
  },
  "tech_repeatable_command_limit": {
    "key": "tech_repeatable_command_limit",
    "name": "Admiralty Support Staff",
    "area": "society",
    "category": "Military Theory",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_doctrine_fleet_size_5"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +10"
    ]
  },
  "tech_repeatable_improved_starbase_capacity": {
    "key": "tech_repeatable_improved_starbase_capacity",
    "name": "Interstellar Expansion",
    "area": "society",
    "category": "New Worlds",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_galactic_ambitions"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Starbase Capacity: +1"
    ]
  },
  "tech_genetic_resequencing": {
    "key": "tech_genetic_resequencing",
    "name": "Genetic Resequencing",
    "area": "society",
    "category": "Biology",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Feature: Genetic Resequencing",
      "Unlocks Feature: Advanced Traits",
      "Unlocks Feature: Genetic Resequencing",
      "Unlocks Feature: Advanced Traits"
    ]
  },
  "tech_psi_jump_drive_1": {
    "key": "tech_psi_jump_drive_1",
    "name": "Psi Jump Drive",
    "area": "society",
    "category": "Psionics",
    "tier": 5,
    "cost": 17000,
    "prerequisites": [
      "tech_precognition_interface"
    ],
    "is_start_tech": false,
    "is_dangerous": true,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Psi Jump Drive",
      "Unlocks Feature: Jump Drive Travel"
    ]
  },
  "tech_ascension_theory": {
    "key": "tech_ascension_theory",
    "name": "Ascension Theory",
    "area": "society",
    "category": "Statecraft",
    "tier": 5,
    "cost": 17000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Ascension Perks: +1"
    ]
  },
  "tech_ascension_theory_apoc": {
    "key": "tech_ascension_theory_apoc",
    "name": "$tech_ascension_theory$",
    "area": "society",
    "category": "Statecraft",
    "tier": 5,
    "cost": 17000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Ascension Perks: +1",
      "Unlocks Feature: Unity Ambitions",
      "Unlocks Feature: Unity Ambitions"
    ]
  },
  "tech_pk_godray": {
    "key": "tech_pk_godray",
    "name": "Divine Stimulus",
    "area": "society",
    "category": "Psionics",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_colossus"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Divine Enforcer"
    ]
  },
  "tech_mass_drivers_1": {
    "key": "tech_mass_drivers_1",
    "name": "Mass Drivers",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 0,
    "cost": "0",
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Mass Driver",
      "Unlocks Component: Medium Mass Driver",
      "Unlocks Component: Large Mass Driver"
    ]
  },
  "tech_missiles_1": {
    "key": "tech_missiles_1",
    "name": "Nuclear Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 0,
    "cost": "0",
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Nuclear Missiles"
    ]
  },
  "tech_space_exploration": {
    "key": "tech_space_exploration",
    "name": "Space Exploration",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Ship Type: Science Ship"
    ]
  },
  "tech_corvettes": {
    "key": "tech_corvettes",
    "name": "Corvettes",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_starbase_2"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Ship Type: Corvette"
    ]
  },
  "tech_starbase_1": {
    "key": "tech_starbase_1",
    "name": "Starbase Construction",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_space_construction"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Starbase: Outpost"
    ]
  },
  "tech_starbase_2": {
    "key": "tech_starbase_2",
    "name": "Starport",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_starbase_1"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Starbase Upgrade: Starport"
    ]
  },
  "tech_assault_armies": {
    "key": "tech_assault_armies",
    "name": "Interplanetary Expeditionary Forces",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 500,
    "prerequisites": [
      "tech_planetary_defenses"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Army: Assault Army",
      "Unlocks Army: Hunter-Killer Army"
    ]
  },
  "tech_ship_armor_1": {
    "key": "tech_ship_armor_1",
    "name": "Nanocomposite Materials",
    "area": "engineering",
    "category": "Materials",
    "tier": 0,
    "cost": 500,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Nanocomposite Armor",
      "Unlocks Component: Medium Nanocomposite Armor",
      "Unlocks Component: Large Nanocomposite Armor"
    ]
  },
  "tech_thrusters_1": {
    "key": "tech_thrusters_1",
    "name": "Chemical Thrusters",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Chemical Thruster"
    ]
  },
  "tech_space_defense_station_1": {
    "key": "tech_space_defense_station_1",
    "name": "Deep Space Defenses",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 0,
    "cost": 0,
    "prerequisites": [
      "tech_starbase_1"
    ],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": []
  },
  "tech_basic_industry": {
    "key": "tech_basic_industry",
    "name": "Industrial Base",
    "area": "engineering",
    "category": "Industry",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Mining Network I"
    ]
  },
  "tech_space_construction": {
    "key": "tech_space_construction",
    "name": "Offworld Construction",
    "area": "engineering",
    "category": "Industry",
    "tier": 0,
    "cost": 0,
    "prerequisites": [],
    "is_start_tech": true,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Ship Type: Construction Ship",
      "Unlocks Station: Mining Station",
      "Unlocks Station: Research Station"
    ]
  },
  "tech_mass_drivers_2": {
    "key": "tech_mass_drivers_2",
    "name": "Coilguns",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_mass_drivers_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Coilgun",
      "Unlocks Component: Medium Coilgun",
      "Unlocks Component: Large Coilgun"
    ]
  },
  "tech_flak_batteries_1": {
    "key": "tech_flak_batteries_1",
    "name": "Flak Battery",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_mass_drivers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: $tech_flak_batteries_1$"
    ]
  },
  "tech_missiles_2": {
    "key": "tech_missiles_2",
    "name": "Fusion Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_missiles_1",
      "tech_fusion_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Fusion Missiles"
    ]
  },
  "tech_robomodding_m": {
    "key": "tech_robomodding_m",
    "name": "Machine Template System",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 1000,
    "prerequisites": [
      "tech_powered_exoskeletons"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Machine Modification Points: +1",
      "Unlocks Feature: Robomodding",
      "Unlocks Feature: Robomodding"
    ]
  },
  "tech_robomodding": {
    "key": "tech_robomodding",
    "name": "Machine Template System",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 1000,
    "prerequisites": [
      "tech_robotic_workers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Robot Modification Points: +1",
      "Unlocks Feature: Robomodding",
      "Unlocks Buildable Pop: Mechanical Pop Templates",
      "Unlocks Feature: Robomodding"
    ]
  },
  "tech_corvette_build_speed": {
    "key": "tech_corvette_build_speed",
    "name": "Standardized Corvette Patterns",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_corvettes"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Corvette Build Speed: +25%"
    ]
  },
  "tech_corvette_hull_1": {
    "key": "tech_corvette_hull_1",
    "name": "Improved Corvette Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_corvettes"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Corvette Hull Points: +100"
    ]
  },
  "tech_strike_craft_1": {
    "key": "tech_strike_craft_1",
    "name": "Carrier Operations",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_starbase_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Basic Strike Craft"
    ]
  },
  "tech_ship_armor_2": {
    "key": "tech_ship_armor_2",
    "name": "Ceramo-Metal Materials",
    "area": "engineering",
    "category": "Materials",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_ship_armor_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Ceramo-Metal Armor",
      "Unlocks Component: Medium Ceramo-Metal Armor",
      "Unlocks Component: Large Ceramo-Metal Armor"
    ]
  },
  "tech_powered_exoskeletons": {
    "key": "tech_powered_exoskeletons",
    "name": "Powered Exoskeletons",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_industry"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Army Damage: +5%",
      "Minerals: +5%"
    ]
  },
  "tech_mining_network_2": {
    "key": "tech_mining_network_2",
    "name": "Geothermal Fracking",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_industry"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Mineral Storage Capacity: +5000",
      "Unlocks Building: Mining Network II"
    ]
  },
  "tech_mineral_processing_1": {
    "key": "tech_mineral_processing_1",
    "name": "Mineral Processing",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_mining_network_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Mineral Processing Plant I"
    ]
  },
  "tech_engineering_lab_1": {
    "key": "tech_engineering_lab_1",
    "name": "Nanomechanics",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 500,
    "prerequisites": [
      "tech_basic_science_lab_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Engineering Facility I"
    ]
  },
  "tech_robotic_workers": {
    "key": "tech_robotic_workers",
    "name": "Robotic Workers",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_powered_exoskeletons"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Buildable Pop: Robot",
      "Unlocks Buildable Pop: Awoken"
    ]
  },
  "tech_afterburners_1": {
    "key": "tech_afterburners_1",
    "name": "Afterburners",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 1,
    "cost": 640,
    "prerequisites": [
      "tech_thrusters_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Afterburners"
    ]
  },
  "tech_assembly_pattern": {
    "key": "tech_assembly_pattern",
    "name": "Assembly Patterns",
    "area": "engineering",
    "category": "Industry",
    "tier": 1,
    "cost": 780,
    "prerequisites": [
      "tech_engineering_lab_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Building Build Speed: +25%"
    ]
  },
  "tech_mass_drivers_3": {
    "key": "tech_mass_drivers_3",
    "name": "Railguns",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_mass_drivers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Railgun",
      "Unlocks Component: Medium Railgun",
      "Unlocks Component: Large Railgun"
    ]
  },
  "tech_autocannons_1": {
    "key": "tech_autocannons_1",
    "name": "Autocannons",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_mass_drivers_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Autocannon"
    ]
  },
  "tech_missiles_3": {
    "key": "tech_missiles_3",
    "name": "Antimatter Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_missiles_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Antimatter Missiles"
    ]
  },
  "tech_swarmer_missiles_1": {
    "key": "tech_swarmer_missiles_1",
    "name": "Swarmer Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_missiles_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Swarmer Missiles"
    ]
  },
  "tech_torpedoes_1": {
    "key": "tech_torpedoes_1",
    "name": "Space Torpedoes",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_missiles_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Space Torpedoes"
    ]
  },
  "tech_robomodding_points_1": {
    "key": "tech_robomodding_points_1",
    "name": "Cross-Model Standardization",
    "area": "engineering",
    "category": "Industry",
    "tier": 2,
    "cost": 3000,
    "prerequisites": [
      "tech_robomodding",
      "tech_droid_workers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Robot Modification Points: +1"
    ]
  },
  "tech_mine_garanthium": {
    "key": "tech_mine_garanthium",
    "name": "Garanthium Mining",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_mineral_processing_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Garanthium Ore ([[sr_garanthium]])"
    ]
  },
  "tech_mine_teldar": {
    "key": "tech_mine_teldar",
    "name": "Teldar Crystal Mining",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_mineral_processing_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Teldar Crystals ([[sr_teldar]])"
    ]
  },
  "tech_mine_yuranic": {
    "key": "tech_mine_yuranic",
    "name": "Yurantic Crystal Mining",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_mineral_processing_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Yurantic Crystals ([[sr_yuranic]])"
    ]
  },
  "tech_mine_orillium": {
    "key": "tech_mine_orillium",
    "name": "Orillium Mining",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_mineral_processing_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Orillium Ore ([[sr_orillium]])"
    ]
  },
  "tech_mine_betharian": {
    "key": "tech_mine_betharian",
    "name": "Betharian Refining",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 640,
    "prerequisites": [
      "tech_space_construction"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Betharian Power Plant"
    ]
  },
  "tech_destroyers": {
    "key": "tech_destroyers",
    "name": "Destroyers",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_corvettes"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "Unlocks Ship Type: Destroyer"
    ]
  },
  "tech_corvette_hull_2": {
    "key": "tech_corvette_hull_2",
    "name": "Advanced Corvette Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_corvette_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Corvette Hull Points: +100"
    ]
  },
  "tech_destroyer_build_speed": {
    "key": "tech_destroyer_build_speed",
    "name": "Standardized Destroyer Patterns",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_destroyers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Destroyer Build Speed: +25%"
    ]
  },
  "tech_destroyer_hull_1": {
    "key": "tech_destroyer_hull_1",
    "name": "Improved Destroyer Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_destroyers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Destroyer Hull Points: +200"
    ]
  },
  "tech_starbase_3": {
    "key": "tech_starbase_3",
    "name": "Starhold",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_starbase_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Starbase Upgrade: Starhold"
    ]
  },
  "tech_modular_engineering": {
    "key": "tech_modular_engineering",
    "name": "Modular Engineering",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_starbase_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Starbase Building Build Cost: -25%",
      "Starbase Module Build Cost: -25%"
    ]
  },
  "tech_strike_craft_2": {
    "key": "tech_strike_craft_2",
    "name": "Improved Strike Craft",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_strike_craft_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Improved Strike Craft"
    ]
  },
  "tech_ship_armor_3": {
    "key": "tech_ship_armor_3",
    "name": "Plasteel Materials",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_ship_armor_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Plasteel Armor",
      "Unlocks Component: Medium Plasteel Armor",
      "Unlocks Component: Large Plasteel Armor"
    ]
  },
  "tech_crystal_armor_1": {
    "key": "tech_crystal_armor_1",
    "name": "Crystal-Infused Plating",
    "area": "engineering",
    "category": "Materials",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small $CRYSTAL_ARMOR_1$",
      "Unlocks Component: Medium $CRYSTAL_ARMOR_1$",
      "Unlocks Component: Large $CRYSTAL_ARMOR_1$"
    ]
  },
  "tech_thrusters_2": {
    "key": "tech_thrusters_2",
    "name": "Ion Thrusters",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 2,
    "cost": 1000,
    "prerequisites": [
      "tech_thrusters_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Ion Thruster"
    ]
  },
  "tech_defense_platform_hull_1": {
    "key": "tech_defense_platform_hull_1",
    "name": "Improved Structural Integrity",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 2,
    "cost": 1500,
    "prerequisites": [
      "tech_starbase_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Defense Platform Hull Points: +500"
    ]
  },
  "tech_mining_network_3": {
    "key": "tech_mining_network_3",
    "name": "Deep Core Mining",
    "area": "engineering",
    "category": "Industry",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_mining_network_2",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Mineral Storage Capacity: +10000",
      "Unlocks Building: Mining Network III"
    ]
  },
  "tech_engineering_lab_2": {
    "key": "tech_engineering_lab_2",
    "name": "Supersolid Materials",
    "area": "engineering",
    "category": "Industry",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_engineering_lab_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Engineering Facility II"
    ]
  },
  "tech_droid_workers": {
    "key": "tech_droid_workers",
    "name": "Droids",
    "area": "engineering",
    "category": "Industry",
    "tier": 2,
    "cost": 2000,
    "prerequisites": [
      "tech_robotic_workers",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Army: Robotic Assault Army",
      "Unlocks Buildable Pop: Droid",
      "Unlocks Buildable Pop: Awoken"
    ]
  },
  "tech_mass_drivers_4": {
    "key": "tech_mass_drivers_4",
    "name": "Advanced Railguns",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Advanced Railgun",
      "Unlocks Component: Medium Advanced Railgun",
      "Unlocks Component: Large Advanced Railgun"
    ]
  },
  "tech_kinetic_artillery_1": {
    "key": "tech_kinetic_artillery_1",
    "name": "Kinetic Battery",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_mass_drivers_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Kinetic Battery"
    ]
  },
  "tech_autocannons_2": {
    "key": "tech_autocannons_2",
    "name": "Ripper Cannons",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_autocannons_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Ripper Autocannon"
    ]
  },
  "tech_flak_batteries_2": {
    "key": "tech_flak_batteries_2",
    "name": "Flak Cannons",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 2000,
    "prerequisites": [
      "tech_flak_batteries_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: $tech_flak_batteries_2$"
    ]
  },
  "tech_missiles_4": {
    "key": "tech_missiles_4",
    "name": "Quantum Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_missiles_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Quantum Missiles"
    ]
  },
  "tech_torpedoes_2": {
    "key": "tech_torpedoes_2",
    "name": "Armored Torpedoes",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_torpedoes_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Armored Torpedoes"
    ]
  },
  "tech_binary_motivators": {
    "key": "tech_binary_motivators",
    "name": "Binary Motivators",
    "area": "engineering",
    "category": "Industry",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_colonial_centralization",
      "tech_robomodding_m"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Machine Modification Points: +1"
    ]
  },
  "tech_cruisers": {
    "key": "tech_cruisers",
    "name": "Cruisers",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_destroyers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "Unlocks Ship Type: Cruiser"
    ]
  },
  "tech_destroyer_hull_2": {
    "key": "tech_destroyer_hull_2",
    "name": "Advanced Destroyer Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_destroyer_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Destroyer Hull Points: +200"
    ]
  },
  "tech_cruiser_build_speed": {
    "key": "tech_cruiser_build_speed",
    "name": "Standardized Cruiser Patterns",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_cruisers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Cruiser Build Speed: +25%"
    ]
  },
  "tech_cruiser_hull_1": {
    "key": "tech_cruiser_hull_1",
    "name": "Improved Cruiser Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_cruisers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Cruiser Hull Points: +400"
    ]
  },
  "tech_starbase_4": {
    "key": "tech_starbase_4",
    "name": "Star Fortress",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_starbase_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Starbase Upgrade: Star Fortress"
    ]
  },
  "tech_space_defense_station_improvement": {
    "key": "tech_space_defense_station_improvement",
    "name": "Corps of Engineers",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_starbase_4",
      "tech_modular_engineering"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Starbase Upgrade Cost: -15%",
      "Starbase Upgrade Speed: +25%"
    ]
  },
  "tech_strike_craft_3": {
    "key": "tech_strike_craft_3",
    "name": "Advanced Strike Craft",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 3,
    "cost": 5000,
    "prerequisites": [
      "tech_strike_craft_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Advanced Strike Craft"
    ]
  },
  "tech_ship_armor_4": {
    "key": "tech_ship_armor_4",
    "name": "Durasteel Materials",
    "area": "engineering",
    "category": "Materials",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_ship_armor_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Durasteel Armor",
      "Unlocks Component: Medium Durasteel Armor",
      "Unlocks Component: Large Durasteel Armor"
    ]
  },
  "tech_thrusters_3": {
    "key": "tech_thrusters_3",
    "name": "Plasma Thrusters",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_thrusters_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Plasma Thruster"
    ]
  },
  "tech_mineral_processing_2": {
    "key": "tech_mineral_processing_2",
    "name": "Advanced Mineral Processing",
    "area": "engineering",
    "category": "Industry",
    "tier": 3,
    "cost": 3000,
    "prerequisites": [
      "tech_mineral_processing_1",
      "tech_colonial_centralization"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Mineral Processing Plant II"
    ]
  },
  "tech_afterburners_2": {
    "key": "tech_afterburners_2",
    "name": "Advanced Afterburners",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_afterburners_1",
      "tech_thrusters_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Advanced Afterburners"
    ]
  },
  "tech_construction_templates": {
    "key": "tech_construction_templates",
    "name": "Construction Templates",
    "area": "engineering",
    "category": "Industry",
    "tier": 3,
    "cost": 4000,
    "prerequisites": [
      "tech_assembly_pattern"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Building Build Speed: +50%"
    ]
  },
  "tech_mass_drivers_5": {
    "key": "tech_mass_drivers_5",
    "name": "Gauss Cannons",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_mass_drivers_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Gauss Cannon",
      "Unlocks Component: Medium Gauss Cannon",
      "Unlocks Component: Large Gauss Cannon"
    ]
  },
  "tech_kinetic_artillery_2": {
    "key": "tech_kinetic_artillery_2",
    "name": "Kinetic Artillery",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_mass_drivers_5",
      "tech_kinetic_artillery_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Kinetic Artillery"
    ]
  },
  "tech_mass_accelerator_1": {
    "key": "tech_mass_accelerator_1",
    "name": "Mega Cannon",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_mass_drivers_4",
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Mega Cannon"
    ]
  },
  "tech_mass_accelerator_2": {
    "key": "tech_mass_accelerator_2",
    "name": "Giga Cannon",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_mass_drivers_5",
      "tech_mass_accelerator_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Giga Cannon"
    ]
  },
  "tech_autocannons_3": {
    "key": "tech_autocannons_3",
    "name": "Stormfire Cannons",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_autocannons_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Stormfire Autocannon"
    ]
  },
  "tech_flak_batteries_3": {
    "key": "tech_flak_batteries_3",
    "name": "Flak Artillery",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_flak_batteries_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: $tech_flak_batteries_3$"
    ]
  },
  "tech_missiles_5": {
    "key": "tech_missiles_5",
    "name": "Marauder Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_missiles_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Marauder Missiles"
    ]
  },
  "tech_swarmer_missiles_2": {
    "key": "tech_swarmer_missiles_2",
    "name": "Whirlwind Missiles",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_swarmer_missiles_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Whirlwind Missiles"
    ]
  },
  "tech_torpedoes_3": {
    "key": "tech_torpedoes_3",
    "name": "Devastator Torpedoes",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_torpedoes_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Devastator Torpedoes"
    ]
  },
  "tech_robomodding_points_2": {
    "key": "tech_robomodding_points_2",
    "name": "Fungible Circuitry",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_robomodding_points_1",
      "tech_synthetic_workers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Robot Modification Points: +1"
    ]
  },
  "tech_nanite_assemblers": {
    "key": "tech_nanite_assemblers",
    "name": "Nanite Assemblers",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_binary_motivators",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Machine Modification Points: +1"
    ]
  },
  "tech_battleships": {
    "key": "tech_battleships",
    "name": "Battleships",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_cruisers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "Unlocks Ship Type: Battleship"
    ]
  },
  "tech_cruiser_hull_2": {
    "key": "tech_cruiser_hull_2",
    "name": "Advanced Cruiser Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_cruiser_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Cruiser Hull Points: +400"
    ]
  },
  "tech_battleship_build_speed": {
    "key": "tech_battleship_build_speed",
    "name": "Standardized Battleship Patterns",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Battleship Build Speed: +25%"
    ]
  },
  "tech_battleship_hull_1": {
    "key": "tech_battleship_hull_1",
    "name": "Improved Battleship Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Battleship Hull Points: +800"
    ]
  },
  "tech_starbase_5": {
    "key": "tech_starbase_5",
    "name": "Citadel",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_starbase_4"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Starbase Upgrade: Citadel"
    ]
  },
  "tech_ship_armor_5": {
    "key": "tech_ship_armor_5",
    "name": "Neutronium Materials",
    "area": "engineering",
    "category": "Materials",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_ship_armor_4",
      "tech_mine_neutronium"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Small Neutronium Armor",
      "Unlocks Component: Medium Neutronium Armor",
      "Unlocks Component: Large Neutronium Armor"
    ]
  },
  "tech_crystal_armor_2": {
    "key": "tech_crystal_armor_2",
    "name": "Crystal-Forged Plating",
    "area": "engineering",
    "category": "Materials",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Small $CRYSTAL_ARMOR_2$",
      "Unlocks Component: Medium $CRYSTAL_ARMOR_2$",
      "Unlocks Component: Large $CRYSTAL_ARMOR_2$"
    ]
  },
  "tech_thrusters_4": {
    "key": "tech_thrusters_4",
    "name": "Impulse Thrusters",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 4,
    "cost": 6000,
    "prerequisites": [
      "tech_thrusters_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Component: Impulse Thruster"
    ]
  },
  "tech_mining_network_4": {
    "key": "tech_mining_network_4",
    "name": "Mineral Isolation",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_mining_network_3",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Mineral Storage Capacity: +10000",
      "Unlocks Building: Mining Network IV",
      "Unlocks Building: Mining Network V"
    ]
  },
  "tech_engineering_lab_3": {
    "key": "tech_engineering_lab_3",
    "name": "Superfluid Materials",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_engineering_lab_2",
      "tech_galactic_administration"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Building: Engineering Facility III",
      "Unlocks Building: Engineering Facility IV"
    ]
  },
  "tech_synthetic_workers": {
    "key": "tech_synthetic_workers",
    "name": "Synthetics",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 8000,
    "prerequisites": [
      "tech_droid_workers",
      "tech_galactic_administration",
      "tech_sapient_ai"
    ],
    "is_start_tech": false,
    "is_dangerous": true,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Army: Android Assault Army",
      "Unlocks Buildable Pop: Synthetic",
      "Unlocks Buildable Pop: Awoken"
    ]
  },
  "tech_synthetic_leaders": {
    "key": "tech_synthetic_leaders",
    "name": "Synthetic Personality Matrix",
    "area": "engineering",
    "category": "Industry",
    "tier": 4,
    "cost": 10000,
    "prerequisites": [
      "tech_synthetic_workers"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Unlocks Feature: Synth Leaders",
      "Unlocks Feature: Synth Leaders"
    ]
  },
  "tech_dragon_armor": {
    "key": "tech_dragon_armor",
    "name": "Artificial Dragonscales",
    "area": "engineering",
    "category": "Materials",
    "tier": 5,
    "cost": 15000,
    "prerequisites": [],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Small Dragonscale Armor",
      "Unlocks Component: Medium Dragonscale Armor",
      "Unlocks Component: Large Dragonscale Armor"
    ]
  },
  "tech_mine_living_metal": {
    "key": "tech_mine_living_metal",
    "name": "Living Metal",
    "area": "engineering",
    "category": "Materials",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_space_construction"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Reveals Resource: Living Metal ([[sr_living_metal]])"
    ]
  },
  "tech_titans": {
    "key": "tech_titans",
    "name": "Titans",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_battleships"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Fleet Command Limit: +10",
      "Unlocks Ship Type: Titan",
      "Unlocks Station: Ion Cannon"
    ]
  },
  "tech_battleship_hull_2": {
    "key": "tech_battleship_hull_2",
    "name": "Advanced Battleship Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_battleship_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Battleship Hull Points: +800"
    ]
  },
  "tech_titan_hull_1": {
    "key": "tech_titan_hull_1",
    "name": "Improved Titan Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 17000,
    "prerequisites": [
      "tech_titans"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Titan Hull Points: +2000"
    ]
  },
  "tech_titan_hull_2": {
    "key": "tech_titan_hull_2",
    "name": "Advanced Titan Hulls",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_titan_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Titan Hull Points: +2000"
    ]
  },
  "tech_mega_engineering": {
    "key": "tech_mega_engineering",
    "name": "Mega-Engineering",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_starbase_5",
      "tech_battleships",
      "tech_zero_point_power"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Mineral Storage Capacity: +20000",
      "Unlocks Feature: Megastructure Restoration",
      "Unlocks Feature: Megastructure Restoration"
    ]
  },
  "tech_repeatable_improved_tile_mineral_output": {
    "key": "tech_repeatable_improved_tile_mineral_output",
    "name": "Extraction Patterns",
    "area": "engineering",
    "category": "Industry",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_mineral_processing_2"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Minerals: +5%"
    ]
  },
  "tech_repeatable_improved_military_station_damage": {
    "key": "tech_repeatable_improved_military_station_damage",
    "name": "Synchronized Firing Patterns",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_defense_platform_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Defense Platform Damage: +10%"
    ]
  },
  "tech_repeatable_improved_military_station_health": {
    "key": "tech_repeatable_improved_military_station_health",
    "name": "Fortified Core Layers",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_defense_platform_hull_1"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Defense Platform Hull Points: +10%"
    ]
  },
  "tech_repeatable_improved_armor_output": {
    "key": "tech_repeatable_improved_armor_output",
    "name": "Matter Compression",
    "area": "engineering",
    "category": "Materials",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_ship_armor_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Armor Hit Points: +5%"
    ]
  },
  "tech_repeatable_weapon_type_explosive_damage": {
    "key": "tech_repeatable_weapon_type_explosive_damage",
    "name": "Thermodynamic Yield Control",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_missiles_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Explosive Weapon Damage: +5%"
    ]
  },
  "tech_repeatable_weapon_type_explosive_fire_rate": {
    "key": "tech_repeatable_weapon_type_explosive_fire_rate",
    "name": "Miniaturized Pre-Igniters",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_missiles_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Explosive Weapon Attack Speed: +5%"
    ]
  },
  "tech_repeatable_weapon_type_kinetic_damage": {
    "key": "tech_repeatable_weapon_type_kinetic_damage",
    "name": "High-Density Munitions",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Kinetic Weapon Damage: +5%"
    ]
  },
  "tech_repeatable_weapon_type_kinetic_fire_rate": {
    "key": "tech_repeatable_weapon_type_kinetic_fire_rate",
    "name": "Loader Efficiency",
    "area": "engineering",
    "category": "Propulsion",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_mass_drivers_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Kinetic Weapon Attack Speed: +5%"
    ]
  },
  "tech_repeatable_weapon_type_strike_craft_fire_damage": {
    "key": "tech_repeatable_weapon_type_strike_craft_fire_damage",
    "name": "Synapse Interceptors",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_strike_craft_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Strike Craft Damage: +10%"
    ]
  },
  "tech_repeatable_weapon_type_strike_craft_fire_rate": {
    "key": "tech_repeatable_weapon_type_strike_craft_fire_rate",
    "name": "Heat Recyclers",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_strike_craft_3"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Strike Craft Attack Speed: +10%"
    ]
  },
  "tech_repeatable_reduced_building_time": {
    "key": "tech_repeatable_reduced_building_time",
    "name": "Assembly Algorithms",
    "area": "engineering",
    "category": "Industry",
    "tier": 5,
    "cost": 20000,
    "prerequisites": [
      "tech_construction_templates"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": false,
    "feature_unlocks": [
      "Building Build Speed: +10%"
    ]
  },
  "tech_colossus": {
    "key": "tech_colossus",
    "name": "Colossi",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_titans"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Ship Type: Colossus"
    ]
  },
  "tech_pk_cracker": {
    "key": "tech_pk_cracker",
    "name": "Core Cracking",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_colossus"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: World Cracker"
    ]
  },
  "tech_pk_nanobots": {
    "key": "tech_pk_nanobots",
    "name": "Atmospheric Nanobot Dispersal",
    "area": "engineering",
    "category": "Voidcraft",
    "tier": 5,
    "cost": 14000,
    "prerequisites": [
      "tech_colossus"
    ],
    "is_start_tech": false,
    "is_dangerous": false,
    "is_rare": true,
    "feature_unlocks": [
      "Unlocks Component: Nanobot Diffuser"
    ]
  }
}

Object.freeze(Research);

export default Research;