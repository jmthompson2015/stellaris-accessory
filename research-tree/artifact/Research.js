const Research = {
  "tech_lasers_1": {
    "key": "tech_lasers_1",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "description": "Laser weapons fire focused beams of light at targets, causing damage through the generation of intense heat.",
    "feature_unlocks": [
      "Component: Small Red Laser",
      "Component: Large Red Laser",
      "Component: Medium Red Laser"
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
    "description": "Capacitors capable of storing vast amounts of energy is one of the cornerstones for any modern civilization.",
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
    "description": "Testable predictions of observable phenomena.",
    "feature_unlocks": [
      "Building: Research Labs"
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
    "description": "Additional power generation systems increase the ship's reactor output.",
    "feature_unlocks": [
      "Component: Reactor Booster"
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
    "description": "A facility where organic matter is converted into energy at a highly efficient rate.",
    "feature_unlocks": [
      "Building: Bio-Reactor"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Bio-Reactor",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "One must be true\n    •   is_machine_empire=yes\n    •   is_mechanical_empire=yes"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_drive_1": {
    "key": "tech_hyper_drive_1",
    "area": "physics",
    "category": "Particles",
    "cost": 0,
    "description": "Like the strands of a spider web, the extra-dimensional realm of hyperspace runs between the gravity wells of most stars. Faster than light travel is theoretically possible along these hyperlanes.",
    "feature_unlocks": [
      "Component: Hyper Drive I"
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
    "description": "This energy source generates power for ships through induced fission, but it also produces harmful nuclear waste.",
    "feature_unlocks": [
      "Component: Fission Reactor"
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
    "description": "The best defense is a good offense.",
    "feature_unlocks": [
      "Component: Sentinel Point-Defense"
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
    "description": "Energy deflector screens can stop a limited amount of incoming enemy fire before overloading. Their main drawback is that they consume large amounts of power.",
    "feature_unlocks": [
      "Component: Large Deflectors",
      "Component: Small Deflectors",
      "Component: Medium Deflectors"
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
    "description": "More powerful than red lasers, these blue variants emit electromagnetic radiation at a wavelength that appears blue or violet to most organics.",
    "feature_unlocks": [
      "Component: Medium Blue Laser",
      "Component: Large Blue Laser",
      "Component: Small Blue Laser"
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
    "description": "Containment force fields are excellent for isolating and holding various substances or specimens so they can be analyzed in detail.",
    "feature_unlocks": [
      "Research Station Output +10%"
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
    "description": "A lot of critical research can only be done in a zero gravity environment, which these specialized laboratories are eminently designed for.",
    "feature_unlocks": [
      "Research Station Output +10%"
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
    "description": "An advanced AI will aid science officers in their task to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no Blorg has gone before. The Science Ship will be able to explore the galaxy with help from an AI.",
    "feature_unlocks": [
      "Survey Speed +25%",
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
    "description": "Active matrices tuned for specific combat-centric tasks greatly improve engagement efficiency.",
    "feature_unlocks": [
      "Component: Combat Computer",
      "Component: Starbase Fire Control"
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
    "description": "By giving control of the colony ship to an Artificial Intelligence, the crew and colonists can be suspended in a deep sleep.",
    "feature_unlocks": [
      "Colony Development Speed +50%"
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
    "description": "Nuclear fusion processes generate a great amount of power for ships, but without many of the risks associated with fission power.",
    "feature_unlocks": [
      "Component: Fusion Reactor"
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
    "description": "Modulated fields allow for increased production and improved energy yield.",
    "feature_unlocks": [
      "£energy£ Energy Credits from £job_technician£ Technicians +10%"
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
    "description": "Load-balancing facilities can greatly improve the stability of local grids and feed excess power back into centralized capacitors.",
    "feature_unlocks": [
      "Building: Energy Grid",
      "Edict: Capacity Overload"
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
    "description": "As we explore the galaxy, we continually encounter new materials and substances that are unfamiliar to us. Cataloging and analyzing these discoveries will require new facilities.",
    "feature_unlocks": [
      "Building: Research Complexes"
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
    "description": "By installing an auxiliary fire-control system our ships can afford to make more advanced calculations, increasing accuracy.",
    "feature_unlocks": [
      "Component: Auxiliary Fire-control"
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
    "description": "The discovery of antimatter power allows for highly advanced reactor boosters that can greatly enhance ship reactors.",
    "feature_unlocks": [
      "Component: Advanced Reactor Booster"
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
    "description": "The discovery of fusion power allows for better reactor boosters to be fitted onto our ships.",
    "feature_unlocks": [
      "Component: Improved Reactor Booster"
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
    "description": "Exploring the mediation of fundamental forces through subatomic particles.",
    "feature_unlocks": [
      "£physics£ Physics Research from £job_researcher£ Researchers +20%"
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
    "description": "Organizational circuitry rerouting academic fervor.",
    "feature_unlocks": [
      "Research Speed +5%"
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
    "description": "These updated deflector screens are capable of soaking up even more punishment before they overload.",
    "feature_unlocks": [
      "Component: Large Improved Deflectors",
      "Component: Small Improved Deflectors",
      "Component: Medium Improved Deflectors"
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
    "description": "Ultraviolet lasers are an updated and more powerful version of their blue predecessors. Accurate and destructive, these weapons are capable of inflicting great damage.",
    "feature_unlocks": [
      "Component: Small UV Laser",
      "Component: Medium UV Laser",
      "Component: Large UV Laser"
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
    "description": "Disruptors fire high-energy bolts that weaken and destroy the molecular bonds that hold the target's constituent atoms together. They are capable of passing through shields and armor to wreak havoc directly on enemy hull and crew.",
    "feature_unlocks": [
      "Component: Small Disruptor",
      "Component: Medium Disruptor"
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
    "description": "Increased automation of station functions will free up more staff for research duties.",
    "feature_unlocks": [
      "Research Station Output +10%"
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
    "description": "Advanced probes that can thoroughly analyze subjects on a sub-atomic level, generating a wealth of valuable research data.",
    "feature_unlocks": [
      "Research Station Output +10%"
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
    "description": "Weapons that eject destructive balls of high-energy plasma at targets. These plasma projectiles are extremely effective at eating through ship armor.",
    "feature_unlocks": [
      "Component: Medium Plasma Thrower",
      "Component: Large Plasma Thrower",
      "Component: Small Plasma Thrower"
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
    "description": "By harnessing the entropic nature of the Null Void, this beam can actually destroy energy.",
    "feature_unlocks": [
      "Component: Medium Null Void Beam",
      "Component: Small Null Void Beam",
      "Component: Large Null Void Beam"
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
    "description": "Using strong-focus lenses in combination with an oscillating firing frequence help create lasers strong enough to mine asteroids, or shoot down hostiles.",
    "feature_unlocks": [
      "Component: Small Cutting Laser",
      "Component: Medium Cutting Laser"
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
    "description": "Introspective prioritization.",
    "feature_unlocks": [
      "Research Alternatives +1"
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
    "description": "A shipboard lab with advanced archaeological equipment, including a vast database supplied by the Curator Order where new discoveries can easily be cross-referenced.",
    "feature_unlocks": [
      "Anomaly Discovery Chance +10%",
      "Anomaly Research Speed +25%"
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
    "description": "These shipboard lab facilities incorporate advanced technologies from the ancient Curator Order to further increase survey speeds.",
    "feature_unlocks": [
      "Survey Speed +33%"
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
    "description": "Basic entanglement principles applied to energy generation provide a substantial increase in energy output.",
    "feature_unlocks": [
      "£energy£ Energy Credits from £job_technician£ Technicians +10%"
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
    "description": "The ability to sustain a fusion reaction at relatively low temperatures will result in a new generation of fusion reactors for our ships.",
    "feature_unlocks": [
      "Component: Cold Fusion Reactor"
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
    "description": "These sensors have been tuned to look for any gravitational changes in space, such as those produced by the presence of a starship.",
    "feature_unlocks": [
      "Starbase Building: Listening Post",
      "Component: Gravitic Sensors"
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
    "description": "Solitary Science Ships can break out of the naturally-occurring hyperlanes and attempt to navigate to known but otherwise unreachable destinations.",
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
    "description": "A re-engineered and unified grid further reduces energy losses over distance.",
    "feature_unlocks": [
      "Building: Energy Nexus"
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
    "description": "These capacitors store surplus energy which can quickly be transferred to reinforce a ship's shields.",
    "feature_unlocks": [
      "Component: Shield Capacitor"
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
    "description": "Gravity well projectors can be used to create localized pockets of space where safe entry into hyperspace is impossible. The immense power requirements and the size of the projectors prohibits their use on anything smaller than a starbase.",
    "feature_unlocks": [
      "<b>Feature : </b>Planetary FTL Inhibitors",
      "Component: FTL Inhibitor"
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
    "description": "The seemingly erratic behavior of tiny things can dramatically alter the way we think about bigger things.",
    "feature_unlocks": [
      "£physics£ Physics Research from £job_researcher£ Researchers +20%"
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
    "description": "We have identified the existence of points in space where a ship expends less energy to \"breach\" their way into a hyperlane. This will lead to a new generation of hyper drives.",
    "feature_unlocks": [
      "Component: Hyper Drive II",
      "Starbase Building: Hyperlane Registrar"
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
    "description": "Arrays of defensive armaments prove much more effective than independent countermeasures.",
    "feature_unlocks": [
      "Component: Barrier Point-Defense"
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
    "description": "These new shield generators represent the next generation of energy screens, replacing the older deflector technology. They offer significantly better protection.",
    "feature_unlocks": [
      "Component: Small Shields",
      "Component: Medium Shields",
      "Component: Large Shields"
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
    "description": "Aside from the obvious safety concerns, the artificial creation of Volatile Motes is an extremely delicate and complicated process that requires highly specialized equipment.",
    "feature_unlocks": [
      "Building: Chemical Plants"
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
    "description": "Void Clouds use the electrical charges generated by the dense gases that make up most of their core to release bolts of burning plasma. Using the same gas composition together with a specialized conduit allows for powerful lightning weaponry.",
    "feature_unlocks": [
      "Component: Cloud Lightning"
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
    "description": "These lasers have a shorter wavelength than UV-based laser weaponry, but are even more destructive.",
    "feature_unlocks": [
      "Component: Small X-Ray Laser",
      "Component: Large X-Ray Laser",
      "Component: Medium X-Ray Laser"
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
    "description": "These upgraded disruptors fire bolts of more destructive ion particles at targets.",
    "feature_unlocks": [
      "Component: Small Ion Disruptor",
      "Component: Medium Ion Disruptor"
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
    "description": "Studying something from the limited perspective of a single dimensional reality does not paint the whole picture. Every angle must be considered.",
    "feature_unlocks": [
      "Research Station Output +10%"
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
    "description": "These new accelerators launch projectiles of high-energy plasma with improved containment fields. This results in less energy leakage as the projectile travels in space towards its target.",
    "feature_unlocks": [
      "Component: Small Plasma Accelerator",
      "Component: Medium Plasma Accelerator",
      "Component: Large Plasma Accelerator",
      "Component: Medium Caravan Cannon",
      "Component: Small Caravan Cannon",
      "Component: Large Caravan Cannon"
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
    "description": "Generating a strong energy shield within a planetary atmosphere is a greater challenge than in the vacuum of space, but it offers a potent defense against orbital bombardment.",
    "feature_unlocks": [
      "Building: Planetary Shield Generator"
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
    "description": "Further advances in predictive algorithms allow for augmented tactical decision-making in the field.",
    "feature_unlocks": [
      "Component: Advanced Combat Computer",
      "Component: Starbase Fire Control"
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
    "description": "By harnessing the energy produced by matter/antimatter annihilations, our efficiency at generating ship power will be orders of magnitude better than fusion.",
    "feature_unlocks": [
      "Component: Antimatter Reactor"
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
    "description": "Sufficiently advanced systems are capable of optimizing themselves if they are made acutely aware of the purpose for which they were made.",
    "feature_unlocks": [
      "Colony Development Speed +50%"
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
    "description": "A bid for interplanetary resource pools and more flexible research grants.",
    "feature_unlocks": [
      "Building: Planetary Supercomputer",
      "Building: Research Institute"
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
    "description": "Sensors that detect the subspace fluctuations left in the wake of traveling starships. Their sensitivity and range is greater than that of a gravitic sensor array.",
    "feature_unlocks": [
      "Starbase Building: Black Hole Observatory",
      "Component: Subspace Sensors"
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
    "description": "To expand our knowledge base, we must consider all levels of existence. A new realm of science awaits us!",
    "feature_unlocks": [
      "Building: Advanced Research Complexes"
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
    "description": "A naturally occurring subspace wormhole is a fickle thing, and its fluctuating energy levels typically make it impossible to travel safely between its linked apertures. There are ways to temporarily stabilize its matrix, however.",
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
    "description": "When a temporal paradox becomes tangled, a kind of consciousness arises, with its own needs, its own desires. This is what has occurred with the consciousness that some call the Worm-in-Waiting. If we can align ourselves with that consciousness, we might just achieve a kind of immortality.",
    "feature_unlocks": [
      "Building: Omega Alignment"
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
    "description": "This exotic substance has many properties that seemingly defy the laws of physics. Harvestable concentrations can only be found near Black Holes or in certain nebulas.",
    "feature_unlocks": [
      "Reveals Ressource: Dark Matter"
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
    "description": "The universe tends irresistibly onwards and downwards. That tendency cannot be reversed... but it can be subverted, for a price.",
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
    "description": "The L-Gates defy our current understanding of subspace mechanics. This must be remedied before they can be opened for travel.",
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "L-Gate Activation",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "Does NOT have the l_cluster_opened global flag"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_hyper_drive_3": {
    "key": "tech_hyper_drive_3",
    "area": "physics",
    "category": "Particles",
    "cost": 6000,
    "description": "A new generation of hyper drives capable of accessing the subspace slipstreams that are present within hyperspace. This leads to dramatically improved drive performance.",
    "feature_unlocks": [
      "Component: Hyper Drive III"
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
    "description": "An updated shield generator that produces an even stronger energy field. Only sustained enemy fire can penetrate this barrier.",
    "feature_unlocks": [
      "Component: Small Advanced Shields",
      "Component: Medium Advanced Shields",
      "Component: Large Advanced Shields"
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
    "description": "These energy projectiles consist of tightly concentrated protons capable of causing immense damage to the hull of enemy ships.",
    "feature_unlocks": [
      "Component: Proton Launchers"
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
    "description": "Extremely high-yield disruptors that fire quantum energy charges causing incredible damage to those unfortunate enough to get in their way.",
    "feature_unlocks": [
      "Component: Small Phased Disruptor",
      "Component: Medium Phased Disruptor"
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
    "description": "The electromagnetic radiation emitted by gamma lasers is of an extremely high frequency. Their destructive potential is unmatched in the field of laser weapons.",
    "feature_unlocks": [
      "Component: Small Gamma Laser",
      "Component: Large Gamma Laser",
      "Component: Medium Gamma Laser"
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
    "description": "Expanding possibilities through the application of limited cybernetics.",
    "feature_unlocks": [
      "Research Speed +5%"
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
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_plasma_3": {
    "key": "tech_plasma_3",
    "area": "physics",
    "category": "Particles",
    "cost": 8000,
    "description": "The latest in plasma weaponry, these cannons are fully militarized versions of the older, somewhat improvised plasma throwers. Their plasma projectiles are even deadlier.",
    "feature_unlocks": [
      "Component: Large Plasma Cannon",
      "Component: Small Plasma Cannon",
      "Component: Medium Plasma Cannon"
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
    "description": "Powerful weapons that launch a lightning arc of chaotic energy at targets, which in part can ignore armor and shields.",
    "feature_unlocks": [
      "Component: Arc Emitter"
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
    "description": "These upgraded emitters are equipped with better focusing lenses, resulting in a more powerful energy discharge.",
    "feature_unlocks": [
      "Component: Focused Arc Emitter"
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
    "description": "Running sapient AIs through high-intensity combat simulations yields valuable insight into potential optimizations for risk-evaluation techniques.",
    "feature_unlocks": [
      "Component: Sapient Combat Computer"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gateway_activation": {
    "key": "tech_gateway_activation",
    "area": "physics",
    "category": "Particles",
    "cost": 12000,
    "description": "The ability to reactivate the derelict Gateway stations that can be found scattered throughout the galaxy has the potential to dramatically shorten travel times.",
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
    "description": "Aligning defensive and offensive weapon execution paradigms allows for increased efficiency.",
    "feature_unlocks": [
      "Starbase Building: Defense-Grid Supercomputer"
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
    "description": "Evolving artificial intellects are opening the door to the possibility for true synthetic sapience.",
    "feature_unlocks": [
      "Research Speed +5%"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_power_plant_4": {
    "key": "tech_power_plant_4",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 10000,
    "description": "Quantum superposition of energy coils, simultaneously drained and charged.",
    "feature_unlocks": [
      "£energy£ Energy Credits from £job_technician£ Technicians +10%"
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
    "description": "Advanced sensors that rely on rotating tachyon beams to detect ship movements even at extreme distances.",
    "feature_unlocks": [
      "Component: Tachyon Sensors"
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
    "description": "Granting our ships their own semi-autonomous intellect will greatly enhance their responsiveness in combat.",
    "feature_unlocks": [
      "Component: Autonomous Ship Intellect"
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
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_zero_point_power": {
    "key": "tech_zero_point_power",
    "area": "physics",
    "category": "Particles",
    "cost": 10000,
    "description": "These generators extract vacuum energy, providing an almost limitless supply of ship power. There is no more efficient way to generate energy.",
    "feature_unlocks": [
      "Component: Zero Point Reactor"
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
    "description": "These heavy energy weapons fire focused particle beams that cause massive damage. The size of the emitter arrays limits their use to battleships and titans.",
    "feature_unlocks": [
      "Component: Particle Lance"
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
    "description": "Three dimensions, inextricable from the fourth.",
    "feature_unlocks": [
      "£physics£ Physics Research from £job_researcher£ Researchers +20%"
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
    "description": "Advanced prediction greatly increases the accuracy of active countermeasure systems.",
    "feature_unlocks": [
      "Component: Guardian Point-Defense"
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
    "description": "These reinforced and hardened energy shields are incredibly powerful. The protection they offer is second to none.",
    "feature_unlocks": [
      "Component: Small Hyper Shields",
      "Component: Large Hyper Shields",
      "Component: Medium Hyper Shields"
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
    "description": "A more powerful version of the particle lance, this weapon fires a tachyon beam of immense power. Like its predecessor, its use is limited to battleships and titans.",
    "feature_unlocks": [
      "Component: Tachyon Lance"
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
    "description": "Upgraded energy projectiles that rely on neutrons instead of protons for their destructive power.",
    "feature_unlocks": [
      "Component: Neutron Launchers"
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
    "description": "A shielding field is deployed around a planet, creating a barrier that is permanent and impenetrable (save for some wavelengths of light).",
    "feature_unlocks": [
      "Component: Global Pacifier"
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
      "Has the Colossus Project country flag"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dark_matter_power_core": {
    "key": "tech_dark_matter_power_core",
    "area": "physics",
    "category": "Particles",
    "cost": 50000,
    "description": "These generators appear to somehow draw energy directly from dark matter, providing more ship power than should be possible according to the laws of physics.",
    "feature_unlocks": [
      "Component: Dark Matter Reactor"
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
  "tech_pk_neutron": {
    "key": "tech_pk_neutron",
    "area": "physics",
    "category": "Voidcraft",
    "cost": 20000,
    "description": "An accelerated plume of neutron radiation \"paints\" the planet surface, severely degrading most materials and directly destroying biological tissue.",
    "feature_unlocks": [
      "Component: Neutron Sweep"
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
      "Has the Colossus Project country flag",
      "Is NOT Spiritualist",
      "Is NOT Pacifist"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_enigmatic_decoder": {
    "key": "tech_enigmatic_decoder",
    "area": "physics",
    "category": "Computing",
    "cost": 50000,
    "description": "While producing average results in standard tests, the accuracy of Enigmatic Decoder's prediction algorithms seemingly increases as the target's flight path grows more erratic.",
    "feature_unlocks": [
      "Component: Enigmatic Decoder"
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
  "tech_jump_drive_1": {
    "key": "tech_jump_drive_1",
    "area": "physics",
    "category": "Particles",
    "cost": 15000,
    "description": "A groundbreaking technological marvel, the Jump Drive shreds the local space-time continuum and rearranges it on the quantum level to be identical to that of the target destination - and thus the ship appears to near-instantly \"jump\" from system to system.",
    "feature_unlocks": [
      "Component: Jump Drive",
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
    "description": "The construction of new Gateway stations enables us to build a fast-travel network that could revolutionize interstellar travel.",
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
  "tech_extradimensional_weapon_1": {
    "key": "tech_extradimensional_weapon_1",
    "area": "physics",
    "category": "Particles",
    "cost": 20000,
    "description": "Applying 5th-dimensional energy manipulation principles on lower dimensional planes allows for the creation of powerful energy weapons.",
    "feature_unlocks": [
      "Component: Medium Matter Disintegrator",
      "Component: Large Matter Disintegrator",
      "Component: Small Matter Disintegrator"
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
    "description": "The Enigmatic Encoder scrambles flight path data according to some indeterminable design before feeding it back to fleet command.",
    "feature_unlocks": [
      "Component: Enigmatic Encoder"
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
  "tech_dark_matter_deflector": {
    "key": "tech_dark_matter_deflector",
    "area": "physics",
    "category": "Field Manipulation",
    "cost": 50000,
    "description": "These deflectors utilize dark matter to deflect incoming projectiles in a way that seems to utterly defy the laws of nature.",
    "feature_unlocks": [
      "Component: Small Dark Matter Deflectors",
      "Component: Medium Dark Matter Deflectors",
      "Component: Large Dark Matter Deflectors"
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
    "description": "Through the development of macroscopic synaptic nodes, the will of the Hive will be strengthened.",
    "feature_unlocks": [
      "Building: Synaptic Nodes"
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
    "description": "Once a colony has been firmly established and pioneers turn into citizens, the need for a strong local government providing stability trumps the colonial need for flexibility.",
    "feature_unlocks": [
      "Building: Hive Core",
      "Building: Sentinel Posts",
      "Building: Planetary Administration",
      "Building: Administrative Array",
      "Building: Precinct Houses",
      "Building: Maintenance Depots"
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
    "description": "Calculating required resources and gear required to establish a planetary colony allows us to herd brave pioneers into grand \"ark ships,\" confident that they will survive the long voyage across the stars to a new home.",
    "feature_unlocks": [
      "Ship Size: Private Colony Ship",
      "Ship Size: Colony Ship"
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
    "description": "With new planetary markets comes new opportunities for commerce. Business will be booming.",
    "feature_unlocks": [
      "Building: Commercial Zones"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Interplanetary Commerce",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_holo_entertainment": {
    "key": "tech_holo_entertainment",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "description": "Pioneering use of holographic technology allows for the creation of artificial environments that seem as authentic as the real world. It is the next step of immersive entertainment.",
    "feature_unlocks": [
      "Building: Holo-Theatres"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Holo-Entertainment",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cultural_heritage": {
    "key": "tech_cultural_heritage",
    "area": "society",
    "category": "Statecraft",
    "cost": 0,
    "description": "An understanding of a shared past is necessary in order to make any significant strides into the future.",
    "feature_unlocks": [
      "Building: Autochthon Monument",
      "Building: Uplink Node",
      "Building: Corporate Culture Site",
      "Building: Temple"
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
    "description": "There may come a time when intellects, vast and cool and unsympathetic, regard our worlds with envy and draw plans against us. We must be ready.",
    "feature_unlocks": [
      "Building: Stronghold"
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
    "description": "Large-scale industrial farms growing nutrient-rich produce allows a civilization to grow its population manifold.",
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
    "description": "Mapping the genome of an individual through the sequencing of their DNA opens up for tailored medical treatments and therapies.",
    "feature_unlocks": [
      "Pop Growth Speed +10%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Genome Mapping",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_planetary_unification": {
    "key": "tech_planetary_unification",
    "area": "society",
    "category": "Statecraft",
    "cost": 500,
    "description": "Ancient warring tribes, historical nations in conflict, now unified in empire. We must not, will not, crumble.",
    "feature_unlocks": [
      "Monthly Unity +2",
      "Edict: Peace Festivals",
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
    "description": "Thorough cataloging, gene sequencing, and computer modeling of exobotanical ecosystems, coupled with gene editing and dispersal mechanisms, will allow us to reshape alien plant communities to our liking.",
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
    "description": "The colonization of alien worlds has opened up an entirely new field of biomedical research.",
    "feature_unlocks": [
      "Building: Gene Clinics"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_space_whale_weapon_1": {
    "key": "tech_space_whale_weapon_1",
    "area": "society",
    "category": "Biology",
    "cost": 1000,
    "description": "Adapting the Tiyanki method of siphoning energy from gaseous matter, it is possible to construct weapons draining energy from enemy ships.",
    "feature_unlocks": [
      "Component: Energy Siphon"
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
    "description": "Improved food processing techniques will lead to better preservation methods and less spoilage.",
    "feature_unlocks": [
      "Building: Food Processing Facilities"
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
    "description": "The process of soil deposition normally takes millions of years. With advanced fracking, chemical engineering, and hydraulic management technologies even the poorest substrate can be turned into fertile topsoil.",
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
    "description": "The progress we make calls for a new, nimbler form of administration that may aid rather than hinder us in our pursuits.",
    "feature_unlocks": [
      "Leader Cost -20%",
      "Leader Pool Size +1"
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
    "description": "Trade across interstellar distances presents a new set of challenges to overcome. It is critical to achieve the transfer of goods from one system to another in a timely and above all cost efficient manner.",
    "feature_unlocks": [
      "Starbase Building: Offworld Trading Company"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_deep_sinkhole": {
    "key": "tech_deep_sinkhole",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "description": "Many planets exhibit extensive subsurface voids. Subterranean exploration, exploitation, and construction techniques can greatly increase the habitable area of some worlds.",
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
    "description": "Studying the different forms of life that appear on our world helps us better understand ourselves and the life that surrounds us.",
    "feature_unlocks": [
      "£society£ Society Research from £job_researcher£ Researchers +20%"
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
    "description": "Hydroponics Farming in a controlled environment allows for crops to be grown in climates where farming would normally be impossible.",
    "feature_unlocks": [
      "Building: Hydroponics Farms",
      "Starbase Building: Hydroponics Bay"
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
    "description": "Orbital systems of mirrors and shades can effect dramatic changes in planetary climates, when managed properly.",
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
    "description": "Voidspawn eggs have evolved to withstand the harsh conditions of space by absorbing and conserving energy from their nearest star.",
    "feature_unlocks": [
      "£energy£ Energy Credits from £job£ Jobs +5%"
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
    "description": "Farming techniques can be further refined through sophisticated computer simulations of different environments and weather patterns. This allows for more predictable crop yields.",
    "feature_unlocks": [
      "£food£ Food from £job_farmer£ Farmers +10%",
      "Edict: Farming Subsidies"
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
    "description": "Sapient races have been reclaiming swampland for thousands of years. A coordinated system of modular aquaducts, pump stations, chemical remediation crawlers and automated soil compactors can reclaim land at unprecedented speeds.",
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
    "description": "These massive entertainment complexes is where dreams come true. Shopping malls, restaurants, amusement parks, virtual arcades, and more. You dream it - we are it!",
    "feature_unlocks": [
      "Building: Hyper-Entertainment Forums"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_toxic_kelp": {
    "key": "tech_toxic_kelp",
    "area": "society",
    "category": "New Worlds",
    "cost": 750,
    "description": "Given enough processing power, networked sensors and distributed stations, even the ocean currents can be managed to a fine level of control.",
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
    "description": "Studying the fauna of other worlds gives insight into alien behaviors, allowing us to identify and domesticate docile entities.",
    "feature_unlocks": [
      "Building: Alien Zoo"
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
    "description": "Cognition is little but the processing of sensory input. It can be altered.",
    "feature_unlocks": [
      "Army: Slave Army",
      "Building: Slave Processing Facility"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Neural Implants",
    "prerequisites": [],
    "tier": 1,
    "prerequisites_names": [],
    "potential": [
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ground_defense_planning": {
    "key": "tech_ground_defense_planning",
    "area": "society",
    "category": "Military Theory",
    "cost": 750,
    "description": "There are many alien empires who would gladly seize our worlds for themselves. We must be prepared for them, should the worst come to pass.",
    "feature_unlocks": [
      "mod_country_show_only_custom_tooltip no",
      "mod_country_custom_tooltip ",
      "Defense Army Damage +33%"
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
    "description": "Sophisticated genetic engineering of crops helps increase yield and further improves both taste and nutrient levels.",
    "feature_unlocks": [
      "£food£ Food from £job_farmer£ Farmers +10%"
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
    "description": "A well-oiled war machine is the key to exerting influence on a galactic scale. Backed by the might of our military, we can lay claim to almost anything we want.",
    "feature_unlocks": [
      "Claim Influence Cost -10%",
      "War Exhaustion Gain -10%"
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
    "description": "Semi-independent units have proved critical to the success of the greater whole.",
    "feature_unlocks": [
      "Monthly Influence +1"
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
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_banks": {
    "key": "tech_gene_banks",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "description": "Gene Banks filter and curate available genomes for deployment in clones.",
    "feature_unlocks": [
      "Army: Clone Army"
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_global_defense_grid": {
    "key": "tech_global_defense_grid",
    "area": "society",
    "category": "Military Theory",
    "cost": 1500,
    "description": "The strategic value of a good defense remains as relevant today as it was to our predecessors in the far distant past. Technology does not render fortifications obsolete - it merely changes their requirements.",
    "feature_unlocks": [
      "Building: Fortress",
      "Defense Army Health +25%"
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
    "description": "By clustering networks of macroscopic synaptic nodes, maximum meganeuron transmission per available surface area can be attained.",
    "feature_unlocks": [
      "Building: Synaptic Clusters"
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
    "description": "The Empire lives, the Empire breathes. We may make up its body, but it is not for the left hand to know what the right hand is doing.",
    "feature_unlocks": [
      "Faction Influence Gain +1",
      "Starbase Building: Deep Space Black Site"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_terrestrial_sculpting": {
    "key": "tech_terrestrial_sculpting",
    "area": "society",
    "category": "New Worlds",
    "cost": 2500,
    "description": "There is no simple solution to the problem of macro-scale reshaping of planetary crusts - only bigger trowels and orbitally-deployed drills.",
    "feature_unlocks": [
      "<b>Feature : </b>Terraforming",
      "Edict: Terraforming Gases"
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
    "description": "Advances in material technology and deep-shaft mining techniques allow geo-engineering at previously unthinkable depths and temperatures. Magma hotspots can now be exploited, suppressed, or even relocated.",
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
    "description": "Further study into the hazardous environments found on other planets help alleviate the difficulties that colonizers encounter in their day-to-day lives on foreign worlds.",
    "feature_unlocks": [
      "Habitability +5%"
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
      "One must be true\n    •   is_machine_empire=no\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_2": {
    "key": "tech_colonization_2",
    "area": "society",
    "category": "New Worlds",
    "cost": 1000,
    "description": "By adjusting atmospheric filtering on a per-site basis to better filter out undesirable elements, colonial living conditions may be improved.",
    "feature_unlocks": [
      "Habitability +5%"
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
      "One must be true\n    •   is_machine_empire=no\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_society_2": {
    "key": "tech_society_2",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "description": "Studying the life that arises on other worlds and beyond allows us to understand fundamental aspects of biology that were previously beyond our reach.",
    "feature_unlocks": [
      "£society£ Society Research from £job_researcher£ Researchers +20%"
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
    "description": "Physical reminders of how far we have come both instill a reverence for past achievements and bolster ambitions for the future.",
    "feature_unlocks": [
      "Building: Business Management Nexus",
      "Building: Heritage Site",
      "Building: Network Junction"
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
      "All must be false\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_amoeba_strike_craft_1": {
    "key": "tech_amoeba_strike_craft_1",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "description": "By breeding Space Amoebas in captivity, we can program their symbiotic flagella to act as organic strike craft for our navy.",
    "feature_unlocks": [
      "Component: Amoeba Flagella"
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
    "description": "The purpose of one is the purpose of all. Together, we are greater than the sum of our parts.",
    "feature_unlocks": [
      "Amenities +5%",
      "Deviancy -15%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Unity of Purpose",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Is Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_centralized_command": {
    "key": "tech_centralized_command",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "description": "Creating dedicated headquarters for all levels of military operations shapes an efficient fleet, and lays a better foundation for future military training.",
    "feature_unlocks": [
      "Max Occupation Garrisons +2",
      "Building: Military Academy"
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
    "description": "Gradual adaptation to the realities of deep-space combat allows us to effectively coordinate larger maneuvers.",
    "feature_unlocks": [
      "Fleet Command Limit +20"
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
    "description": "Robust frameworks for local governance created on a per-case basis, to meet each colony's needs.",
    "feature_unlocks": [
      "Building: Hall of Judgment",
      "Building: Hive Nexus",
      "Building: Planetary Processor",
      "Building: Planetary Capital"
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
    "description": "Gradual adaptation to the realities of deep-space combat allows us to effectively coordinate larger maneuvers.",
    "feature_unlocks": [
      "Fleet Command Limit +20"
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
    "description": "Organics often fight using illogical and unpredictable tactics that can be difficult to effectively counter. Adaptive tactics and new, more maneuverable warforms should provide a decisive advantage.",
    "feature_unlocks": [
      "Army: Battle Frame Army"
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
    "is_machine": false
  },
  "tech_epigenetic_triggers": {
    "key": "tech_epigenetic_triggers",
    "area": "society",
    "category": "Biology",
    "cost": 2000,
    "description": "Advanced DNA methylation techniques allow for functionally significant alterations to be made to arbitrary genomes.",
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_navy_size_1": {
    "key": "tech_doctrine_navy_size_1",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "description": "As extrasolar expeditions become more common, it is important to provide planetside relief for returning fleets.",
    "feature_unlocks": [
      "Naval Capacity +30"
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
    "description": "Breakthroughs in enucleation and artificial womb technology allows for the mass-production of individuals based on a common genetic template.",
    "feature_unlocks": [
      "Pop Growth Speed +10%"
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mountain_range": {
    "key": "tech_mountain_range",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "description": "With the advent of clean fusion, automation, and matter compression technologies, it was only a matter of time before mountain top removal became mountain range removal.",
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
    "description": "Our future lies in the sea of stars.",
    "feature_unlocks": [
      "Starbase Capacity +2"
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
    "description": "Seeing is believing, and belief begets reality.",
    "feature_unlocks": [
      "Building: Holotemple"
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
      "One must be true\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_interstellar_fleet_traditions": {
    "key": "tech_interstellar_fleet_traditions",
    "area": "society",
    "category": "Military Theory",
    "cost": 2000,
    "description": "A body of knowledge regarding combat behaviors is useless without a strong code governing its use.",
    "feature_unlocks": [
      "Starbase Building: Fleet Academy",
      "Starbase Building: Naval Logistics Office"
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
    "description": "Local administrative developments allow for closer supervision of colonial affairs without excessively burdening central decision-making.",
    "feature_unlocks": [
      "Administrative Cap +20"
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
    "description": "Where the body fails, science intervenes.",
    "feature_unlocks": [
      "Age: $AGE|Y$ +10"
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_frontier_hospital": {
    "key": "tech_frontier_hospital",
    "area": "society",
    "category": "Biology",
    "cost": 2500,
    "description": "As our empire grows, so does our understanding of our own biology. Advanced medical treatments on a cellular level have allowed for significant advancements in population health.",
    "feature_unlocks": [
      "Building: Cyto-Revitalization Centers"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dangerous_wildlife": {
    "key": "tech_dangerous_wildlife",
    "area": "society",
    "category": "New Worlds",
    "cost": 2000,
    "description": "Tactical disruption of natural habitats combined with converging search-and-destroy patterns can effectively eliminate hostile wildlife in a very short span of time.",
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
    "description": "Deep-tissue implants are the latest innovation in the revolutionary overlapping of sensory engineering and entertainment experiences. \"Where we're going, we won't need skin to feel!\"",
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_artificial_moral_codes": {
    "key": "tech_artificial_moral_codes",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "description": "It is circumstance that dictates what is moral. Define the circumstances, and ethics is like clay in your hands.",
    "feature_unlocks": [
      "Crime -15%",
      "Amenities +5%"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": false,
    "name": "Artificial Moral Codes",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_slave_colonies": {
    "key": "tech_slave_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 2500,
    "description": "Through the creation of special slave-breeding worlds, we can ensure that we will always have a steady supply of disposable laborers.",
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_penal_colonies": {
    "key": "tech_penal_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "Through the development of special penal worlds, criminals can be rehabilitated through honest, hard labor. Some may be in need of permanent rehabilitation.",
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_command_matrix": {
    "key": "tech_command_matrix",
    "area": "society",
    "category": "Military Theory",
    "cost": 6000,
    "description": "Restructuring the chain of command and deciding what interdependencies are set between officers, make fleets more responsive and effective.",
    "feature_unlocks": [
      "Ship Fire Rate +5%",
      "Starbase Building: Command Center"
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
    "description": "Thinking outside the box merely places you in another, somewhat larger box.",
    "feature_unlocks": [
      "Resources from £job£ Jobs +5%"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_glandular_acclimation": {
    "key": "tech_glandular_acclimation",
    "area": "society",
    "category": "Biology",
    "cost": 6000,
    "description": "Through glandular biological tailoring we can change the environmental tolerance of a species to suit our needs.",
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_food_processing_2": {
    "key": "tech_food_processing_2",
    "area": "society",
    "category": "Biology",
    "cost": 4000,
    "description": "New cryopreservation and protein resequencing methods will make food processing much more efficient.",
    "feature_unlocks": [
      "Building: Food Processing Centers"
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
    "description": "A more extensive training program for new recruits, including realistic combat scenarios, prepare them for the field.",
    "feature_unlocks": [
      "Assault Army Damage +15%",
      "Assault Army Morale +15%"
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
    "description": "Through the establishment of weather-controlled rural communes, we can support a larger population without disrupting our agrarian way of life.",
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
    "description": "Extensive study into different soil types and their ability to support crops will help improve the living conditions of our settlers on foreign worlds.",
    "feature_unlocks": [
      "Habitability +5%"
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
      "One must be true\n    •   is_machine_empire=no\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_ecological_adaptation": {
    "key": "tech_ecological_adaptation",
    "area": "society",
    "category": "New Worlds",
    "cost": 5000,
    "description": "By adapting planetary ecosystems to large-scale environmental changes we can turn terraformation into a less disruptive process.",
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
    "description": "Not all research into faster-than-light communication channels produces useful results, but some outcomes may find new purpose in bringing our people together.",
    "feature_unlocks": [
      "Building: Synergy Forum",
      "Building: System Conflux",
      "Building: Hypercomms Forum"
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
      "All must be false\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_global_production_strategy": {
    "key": "tech_global_production_strategy",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "Planets are big and production sites are often separated by vast distances. A coherent strategy for making certain that everyone is pulling in the same direction is often needed.",
    "feature_unlocks": [
      "Building: Ministry of Production",
      "Building: Resource Processing Center"
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
    "description": "These barriers are generated out of pure psychic energy by a cadre of psionic specialists. They will be able to stop some incoming fire, like our Energy deflector systems, but without the prohibitive power consumption.",
    "feature_unlocks": [
      "Component: Small Psionic Barrier",
      "Component: Medium Psionic Barrier",
      "Component: Large Psionic Barrier"
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
    "description": "Multiple administrative strata efficiently surface only the most vital information to the upper levels of government.",
    "feature_unlocks": [
      "Administrative Cap +20"
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
    "description": "As we journeyed into the cosmos and ventured beyond our home system, we also entered a new era of economics. New markets are appearing a startling rate, and economic theorists are struggling to keep up.",
    "feature_unlocks": [
      "Building: Commerce Megaplexes"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_paradise_dome": {
    "key": "tech_paradise_dome",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "With the latest advances in architecture, landscaping and holographic technology, we shall build the homes of the future.",
    "feature_unlocks": [
      "Building: Organic Paradise",
      "Building: Paradise Dome",
      "Building: Utopian Communal Housing"
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
      "One must be true\n    •   Is NOT Gestalt\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_gene_tailoring": {
    "key": "tech_gene_tailoring",
    "area": "society",
    "category": "Biology",
    "cost": 4000,
    "description": "Making gene-editing tools widely available is sure to have a positive impact on our development as a species.",
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psionic_theory": {
    "key": "tech_psionic_theory",
    "area": "society",
    "category": "Psionics",
    "cost": 4000,
    "description": "The mind is in many ways a reflection of the universe itself, a microcosmos. All species may not reach this insight, but their minds are tools greater than any other.",
    "feature_unlocks": [
      "Monthly Unity +5%"
    ],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "Psionic Theory",
    "prerequisites": [],
    "tier": 3,
    "prerequisites_names": [],
    "potential": [
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_prescient_data_modeling": {
    "key": "tech_prescient_data_modeling",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "Are the precognitive powers of Numa at work or is it a matter of skilled craftsmanship? Either way this galactic stock market prediction model will forecast fluctuations in the economy with divine accuracy.",
    "feature_unlocks": [
      "£energy£ Energy Credits from £job£ Jobs +5%"
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
    "description": "Gradual adaptation to the realities of deep-space combat allows us to effectively coordinate larger maneuvers.",
    "feature_unlocks": [
      "Fleet Command Limit +20"
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
    "description": "Together, we build the future.",
    "feature_unlocks": [
      "Resources from £job£ Jobs +5%"
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
    "description": "Standardizing workflows for upgrading and retrofitting ship components can lead to massive efficiency gains.",
    "feature_unlocks": [
      "Ship Upkeep -5%",
      "Ship Upgrade Cost -20%"
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
    "description": "Efficiency in all things.",
    "feature_unlocks": [
      "Resources from £job£ Jobs +5%"
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
    "is_machine": false
  },
  "tech_doctrine_navy_size_2": {
    "key": "tech_doctrine_navy_size_2",
    "area": "society",
    "category": "Military Theory",
    "cost": 5000,
    "description": "A fleet does not run on zeal alone. To ensure steady access to critical supplies, we should organize our logistics corps into dedicated support vessels.",
    "feature_unlocks": [
      "Naval Capacity +30"
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
    "description": "Through our understanding of physics and field manipulation, our holy places shall we seen and felt by all.",
    "feature_unlocks": [
      "Building: Sacred Nexus"
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
      "One must be true\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_selected_lineages": {
    "key": "tech_selected_lineages",
    "area": "society",
    "category": "Biology",
    "cost": 5000,
    "description": "Careful reproductive planning should be incentivized, lest we waste valuable genetic legacies.",
    "feature_unlocks": [
      "Policy: Selected Lineages"
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
      "Does NOT have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mine_zro": {
    "key": "tech_mine_zro",
    "area": "society",
    "category": "Psionics",
    "cost": 5000,
    "description": "An extremely rare aerosol of exotic particles. It has been deposited on a number of worlds through meteor impacts, but its true origin is a mystery. If ingested by psionically-gifted individuals, Zro acts as a very potent (and addictive) drug that enhances Psi abilities.",
    "feature_unlocks": [
      "Reveals Ressource: Zro"
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
    "description": "Initiative and some measure of ambition must be promoted in our autonomous leader units, while still making certain that they do not stray too far from the directives of the core intelligence.",
    "feature_unlocks": [
      "Leader Level Cap +1",
      "Leader Upkeep -10%"
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
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_galactic_administration": {
    "key": "tech_galactic_administration",
    "area": "society",
    "category": "Statecraft",
    "cost": 6000,
    "description": "The administrative needs of a star empire are as numerous as they are complex. We will rise to the occasion.",
    "feature_unlocks": [
      "Building: Primary Nexus",
      "Civic Slots +1",
      "Building: System Capital-Complex"
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
    "description": "This corporate agency promotes a wide variety of interstellar tourist attractions, as well as offering employment packages and signing bonuses to potential emigrants interested in relocating to corporate space.",
    "feature_unlocks": [
      "Building: Xeno-Outreach Agency"
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
    "description": "A set of social protocols based on paradoxical intuition, and on love. When we know the System of the Loop, we learn that we can influence by receiving instructions, as well as giving them.",
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
    "description": "The will of the Hive will be further strengthened and coordinated with the expansion and development of a massive nervous center of meganeurons.",
    "feature_unlocks": [
      "Building: Confluence of Thought"
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
    "description": "Finding aspects of the self within the group is natural and inevitable; eventually those shared aspects must be valued higher than individual identities.",
    "feature_unlocks": [
      "Leader Level Cap +1",
      "Leader Upkeep -10%"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_telepathy": {
    "key": "tech_telepathy",
    "area": "society",
    "category": "Psionics",
    "cost": 6000,
    "description": "Once fully adapted to the basics of Psionics, the mind is capable of connecting to other individuals, becoming something greater.",
    "feature_unlocks": [
      "Army: Psionic Army"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_tomb_world_adaption": {
    "key": "tech_tomb_world_adaption",
    "area": "society",
    "category": "New Worlds",
    "cost": 4000,
    "description": "Through comprehensive study of irradiated environments we will allow our settlers to colonize worlds that have been devastated by nuclear warfare.",
    "feature_unlocks": [
      "Tomb World Habitability +20%"
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
      "One must be true\n    •   is_machine_empire=no\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_resort_colonies": {
    "key": "tech_resort_colonies",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "With careful study devoted to landscaping, climate control, and the science of fun,  construction of entire worlds dedicated to leisure can be made possible.",
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_executive_retreat": {
    "key": "tech_executive_retreat",
    "area": "society",
    "category": "Statecraft",
    "cost": 4000,
    "description": "A luxurious resort complex for high ranking corporate officers. Here they can sample the local planetary culture in a high security environment.",
    "feature_unlocks": [
      "Building: Executive Retreat"
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
    "description": "Stricter control of RNA and protein production on the cellular level.",
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
      "One must be true\n    •   Does NOT have Machine Intelligence Authority\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_regenerative_hull_tissue": {
    "key": "tech_regenerative_hull_tissue",
    "area": "society",
    "category": "Biology",
    "cost": 5000,
    "description": "A genetically altered version of silicon-based bacteria could potentially be manipulated to regenerate non-organic materials.",
    "feature_unlocks": [
      "Component: Regenerative Hull Tissue"
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
    "description": "When tailored to a species' genome, this form of tissue engineering has intensive neuroregenerative properties, significantly increasing the development of neurons, axons, and synapses in its recipient.",
    "feature_unlocks": [
      "Leader Level Cap +1",
      "Species Leader Exp Gain +25%"
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
    "description": "Leaving our planetary cradle has opened us up to a new understanding of faith, and its place in a wider context.",
    "feature_unlocks": [
      "Building: Citadel of Faith"
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
      "One must be true\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_nano_vitality_crops": {
    "key": "tech_nano_vitality_crops",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "description": "Infusing crop strands with small amounts of nano-machines help create a type of produce that is ultra resilient, and the chemical composition of which can be tailored and altered during its entire lifetime.",
    "feature_unlocks": [
      "£food£ Food from £job_farmer£ Farmers +10%"
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
    "description": "By engaging in free trade of goods and services we allow for a more specialized economy, where an individual can excel in a narrow field and trade for their needs.",
    "feature_unlocks": [
      "Building: Galactic Stock Exchange"
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
      "Is NOT Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_capacity_boosters": {
    "key": "tech_capacity_boosters",
    "area": "society",
    "category": "Biology",
    "cost": 12000,
    "description": "We leave nothing to chance, no matter the cost. Through exacting curation of DNA banks do we build the leaders of tomorrow.",
    "feature_unlocks": [
      "Policy: Capacity Boosters"
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
      "Does NOT have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_manifest_destiny": {
    "key": "tech_manifest_destiny",
    "area": "society",
    "category": "New Worlds",
    "cost": 10000,
    "description": "We must have to courage to seize our fate and make true what was always meant to be.",
    "feature_unlocks": [
      "Starbase Capacity +2"
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
    "description": "Nucleotide purification techniques allow for the isolation and refinement of particularly desirable genetic traits.",
    "feature_unlocks": [
      "Army: Gene Warrior Army"
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
      "Does NOT have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_colonization_5": {
    "key": "tech_colonization_5",
    "area": "society",
    "category": "New Worlds",
    "cost": 12000,
    "description": "Additional study into different planetary climates will allow us to settle our population on worlds previously thought too hostile to support them.",
    "feature_unlocks": [
      "Habitability +5%"
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
      "One must be true\n    •   is_machine_empire=no\n    •   Has Government Civic: Driven Assimilator\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_society_3": {
    "key": "tech_society_3",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "description": "Having the opportunity to study the multitudes of life lets us find some common ground for all living beings. The foundational building blocks of life.",
    "feature_unlocks": [
      "£society£ Society Research from £job_researcher£ Researchers +20%"
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
    "description": "Advances in the field of Psionics suggest the possibility of creating combat computers capable of reading and analysing the impulses of telepathic operatives before they are cognitively processed.",
    "feature_unlocks": [
      "Component: Precognitive Interface"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_biomechanics": {
    "key": "tech_biomechanics",
    "area": "society",
    "category": "Biology",
    "cost": 10000,
    "description": "Millions of years of organic evolution will sometimes, through sheer persistence, produce elegant solutions that can also be applied to machine designs.",
    "feature_unlocks": [
      "Army: Mega-Warform"
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
    "is_machine": false
  },
  "tech_nutrient_replication": {
    "key": "tech_nutrient_replication",
    "area": "society",
    "category": "Biology",
    "cost": 12000,
    "description": "The process of synthetically replicating crops requires a lot of collected waste to create a small amount of produce, but nevertheless provides a significant boost to agricultural output.",
    "feature_unlocks": [
      "£food£ Food from £job£ Jobs +15%"
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
      "Does NOT have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_doctrine_fleet_size_5": {
    "key": "tech_doctrine_fleet_size_5",
    "area": "society",
    "category": "Military Theory",
    "cost": 12000,
    "description": "Gradual adaptation to the realities of deep-space combat allows us to effectively coordinate larger maneuvers.",
    "feature_unlocks": [
      "Fleet Command Limit +20"
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
    "description": "Gradual adaptation to the realities of deep-space combat allows us to effectively coordinate larger maneuvers.",
    "feature_unlocks": [
      "Fleet Command Limit +20"
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
    "description": "Further improvements to administration grant an extended power projection across the stars, and the military clout needed to enforce our demands.",
    "feature_unlocks": [
      "Claim Influence Cost -10%",
      "War Exhaustion Gain -10%"
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
    "description": "Amateurs talk about tactics. Professionals study logistics. By ensuring our fleets are regularly and efficiently supplied, we can increase the number of vessels we can effectively support.",
    "feature_unlocks": [
      "Naval Capacity +30"
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
    "description": "By maintaining a professional corps of fleet liasions, we can improve communications and the flow of orders throughout the chain of command.",
    "feature_unlocks": [
      "Naval Capacity +30"
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
    "description": "From its cradle as a purely pharmaceutical venture, advancements in our understanding of the morphogenetic field allow for direct, subconscious interfaces with organic units.",
    "feature_unlocks": [
      "Army: Xenomorph Army"
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
      "Does NOT have Machine Intelligence Authority"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_autocurating_vault": {
    "key": "tech_autocurating_vault",
    "area": "society",
    "category": "Statecraft",
    "cost": 10000,
    "description": "Continuous, asynchronous analysis of disparate data sets allows for the accurate modeling of hitherto-unpredictable fluctuations in social currents.",
    "feature_unlocks": [
      "Building: Alpha Hub",
      "Building: Vault of Acquisitions",
      "Building: Auto-Curating Vault"
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
      "All must be false\n    •   Has Spiritualist Ethic\n    •   Has Fanatic Spiritualist Ethic\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_climate_restoration": {
    "key": "tech_climate_restoration",
    "area": "society",
    "category": "New Worlds",
    "cost": 8000,
    "description": "By advancing our understanding of atmospheric transformation, we will be able to terraform even the most ecologically devastated worlds.",
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
    "description": "An arcane catalyst amplifying certain psionic wavelengths, capable of inducing hallucinations (religious experiences) in biological brains, and severe disruption (brain death) in electronic ones.",
    "feature_unlocks": [
      "Component: Divine Enforcer"
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
      "Has the Colossus Project country flag",
      "Is Spiritualist",
      "One must be true\n    •   All must be true\n\t    •   Does NOT have DLC Utopia\n\t    •   Has Technology: Telepathy\n    •   All must be true\n\t    •   Has DLC Utopia\n\t    •   Has Mind over Matter Ascension Perk"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_scourge_missile_1": {
    "key": "tech_scourge_missile_1",
    "area": "society",
    "category": "Biology",
    "cost": 20000,
    "description": "By analyzing the biological weaponry employed by the Swarm we can create self-propelled projectiles weapons spreading the very same horrific destruction.",
    "feature_unlocks": [
      "Component: Large Scourge Missile"
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
  "tech_swarm_strike_craft_1": {
    "key": "tech_swarm_strike_craft_1",
    "area": "society",
    "category": "Biology",
    "cost": 20000,
    "description": "Collecting specimens from defeated Prethoryn enables us to clone and genetically program a war-brood of our own.",
    "feature_unlocks": [
      "Component: Swarm Strikers"
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
  "tech_psi_jump_drive_1": {
    "key": "tech_psi_jump_drive_1",
    "area": "society",
    "category": "Psionics",
    "cost": 17500,
    "description": "The Psi Jump Drive harnesses the psi energies emitted by the crew to force the vessel through the very fabric of reality, instantly \"jumping\" vast distances.",
    "feature_unlocks": [
      "Component: Psi Jump Drive",
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_psionic_shield": {
    "key": "tech_psionic_shield",
    "area": "society",
    "category": "Psionics",
    "cost": 20000,
    "description": "These extremely powerful shields are generated out of pure psychic energy by a cadre of psionic specialists. Their powers are further augmented by large arrays of psi emitters.",
    "feature_unlocks": [
      "Component: Large Psionic Shield",
      "Component: Small Psionic Shield",
      "Component: Medium Psionic Shield"
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
    "description": "No longer will we be limited by the basic biological structure of a species when striving to improve them. DNA is just another material to be shaped as the sculptor wills it.",
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
  "tech_ascension_theory": {
    "key": "tech_ascension_theory",
    "area": "society",
    "category": "Statecraft",
    "cost": 17500,
    "description": "Our history is a repeating cycle of dramatic technological, political, and cultural leaps; these leaps are often preceded by periods of upheaval and followed by times of relative stability. By identifying the core, recurring premises of these leaps, we may be able to effectively short-circuit the cycle for our own benefit.",
    "feature_unlocks": [
      "Ascension Perks +1",
      "<b>Feature : </b>Unity Ambitions"
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
  "tech_space_exploration": {
    "key": "tech_space_exploration",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 0,
    "description": "The realization of faster-than-light travel is a new dawn for space exploration. Manned missions to other star systems are now not only possible, but necessary.",
    "feature_unlocks": [
      "Ship Size: Science Ship"
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
    "description": "Space-to-space missiles equipped with high-yield nuclear warheads. Although based on old pre-space technology, these crude fire-and-forget weapons can be surprisingly effective at range.",
    "feature_unlocks": [
      "Component: Nuclear Missiles",
      "Starbase Module: Missile Battery"
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
    "description": "Gun batteries that fire shrapnel rounds at close range. They are particularly lethal to enemy strike craft, but can also defend against missiles.",
    "feature_unlocks": [
      "Component: Flak Battery"
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
    "description": "The FTL breakthrough allowed early attempts to adapt traditional surface-to-space shuttle frames to military applications to finally create relatively small, fast, and maneuverable vessels with limited firepower.",
    "feature_unlocks": [
      "Ship Size: Corvette"
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
    "description": "The application of mechanical engineering to mineral extraction is a fundamental requirement for any industrial society.",
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
    "description": "Advances in solar panel technology could offset the operating costs of our starbases. The panels would require an entire starbase module to generate enough energy, however.",
    "feature_unlocks": [
      "Starbase Module: Solar Panel Network"
    ],
    "is_dangerous": false,
    "is_rare": false,
    "is_start_tech": true,
    "name": "Orbital Energy Conversion",
    "prerequisites": [],
    "tier": 0,
    "prerequisites_names": [],
    "potential": [
      "Is Gestalt"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_assault_armies": {
    "key": "tech_assault_armies",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 500,
    "description": "The invasion of another world is a staggering enterprise. There are immense logistical challenges that must be overcome before we can muster our first interplanetary armies.",
    "feature_unlocks": [
      "Army: Assault Army",
      "Army: Hunter-Killer Army"
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
    "description": "The earliest starbases were little more than makeshift outposts. Permanent starports will enable us to maintain a firmer grip on star systems.",
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
    "description": "A centralized space installation built in close orbit around the system primary is necessary to make full use of the resources in a star system.",
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
    "description": "The basic industrial infrastructure that is required to become a spacefaring civilization.",
    "feature_unlocks": [
      "Building: Resource Silos",
      "Building: Civilian Industries",
      "Building: Alloy Foundries"
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
    "description": "Reinforced nanocomposite hull plating can provide an extra layer of protection that could be the difference between life and death in a combat situation.",
    "feature_unlocks": [
      "Component: Large Nanocomposite Armor",
      "Component: Medium Nanocomposite Armor",
      "Component: Small Nanocomposite Armor"
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
    "description": "Simple yet moderately effective chemical thrusters that rely on combustible propellant to function.",
    "feature_unlocks": [
      "Component: Chemical Thrusters"
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
    "description": "Construction in space presents our engineers with new design challenges that must be solved before we can build orbital stations above other worlds.",
    "feature_unlocks": [
      "Ship Size: Research Station",
      "Ship Size: Mining Station",
      "Ship Size: Constructor"
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
    "description": "These electromagnetic projectile launchers use magnets to accelerate armor-piercing rounds towards targets at high speeds.",
    "feature_unlocks": [
      "Component: Large Mass Driver",
      "Starbase Module: Gun Battery",
      "Component: Small Mass Driver",
      "Component: Medium Mass Driver"
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
    "description": "This will enable the construction of defensive deep space platforms to protect our Starbases.",
    "feature_unlocks": [
      "Ship Size: Defense Platform"
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
    "description": "These robotic work units are perfect for menial labor tasks. They are hard-working and capable of following simple vocal instructions, but should not be expected to climb stairs.",
    "feature_unlocks": [
      "<b>Feature : </b>Robot Workers",
      "Building: Robot Assembly Plants"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_missiles_2": {
    "key": "tech_missiles_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 750,
    "description": "These updated space-to-space missiles have more powerful fusion warheads and improved flight performance.",
    "feature_unlocks": [
      "Component: Fusion Missiles"
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
    "description": "This orbital bombardment management system spams a planet with millions of minute, high-velocity projectiles, overwhelming planetside defensive grids with trash data. Ships equipped with this component will cause more damage during orbital bombardment.",
    "feature_unlocks": [
      "Component: Orbital Trash Disperser"
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
    "description": "Rewritable assembly templates allow for the creation of bespoke synthetic worker designs.",
    "feature_unlocks": [
      "<b>Feature : </b>Robomodding",
      "Robot Modification Points +2"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_1": {
    "key": "tech_mining_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "description": "New fracking techniques will allow us to tap into previously unattainable pockets of geothermal resources deep beneath the planet's crust.",
    "feature_unlocks": [
      "£minerals£ Minerals from £job_miner£ Miners +10%"
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
    "description": "Rapid iteration in construction simulations determines the optimal component assembly patterns for each building project ahead of time.",
    "feature_unlocks": [
      "Planet Build Speed +25%"
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
    "description": "Establishing new standards for the modeling and construction of corvettes greatly improves the efficiency of the production pipeline.",
    "feature_unlocks": [
      "Corvette Build Cost -5%",
      "Corvette Build Speed +25%"
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
    "description": "Wearing a powered exoskeleton suit augments the user's strength and speed. The military applications are obvious, but it will also increase labor efficiency.",
    "feature_unlocks": [
      "Army Damage +5%",
      "£minerals£ Minerals from £job£ Jobs +5%"
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
    "description": "A combination of different metals and ceramics that result in a strong armor without sacrificing flexibility.",
    "feature_unlocks": [
      "Component: Medium Ceramo-Metal Armor",
      "Component: Large Ceramo-Metal Armor",
      "Component: Small Ceramo-Metal Armor"
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
    "description": "Advances in building techniques will allow for the construction of sturdier and more durable corvettes.",
    "feature_unlocks": [
      "Corvette Hull Points +100"
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
    "description": "These manned strike craft are launched from a mothership and rely on their speed and small size to survive long enough to punch through enemy defenses.",
    "feature_unlocks": [
      "Starbase Module: Hangar Bay",
      "Component: Basic Strike Craft"
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
    "description": "Optimal processing of mined materials have allowed us to reach new levels of efficiency.",
    "feature_unlocks": [
      "Edict: Production Targets",
      "Building: Mineral Purification Plants"
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
    "description": "These powerful thrusters provide additional combat speed but consume a great deal of power.",
    "feature_unlocks": [
      "Component: Afterburners"
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
    "description": "With pre-programmed nano-circuits, many consumer products can be rapidly assembled in fabricators.",
    "feature_unlocks": [
      "Building: Civilian Fabricators"
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
      "One must be true\n    •   Is NOT Gestalt\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_engineering_1": {
    "key": "tech_engineering_1",
    "area": "engineering",
    "category": "Industry",
    "cost": 500,
    "description": "Advanced instrumentation allows for the study and practical application of physical systems at nanometric scales.",
    "feature_unlocks": [
      "£engineering£ Engineering Research from £job_researcher£ Researchers +20%"
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
    "description": "The addition of internal refineries on mining stations will substantially increase mineral production.",
    "feature_unlocks": [
      "Starbase Building: Nebula Refinery",
      "Mining Station Output +10%"
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
    "description": "Increased scanner range will allow us to more quickly identify mineral concentrations, and focus our mining efforts there.",
    "feature_unlocks": [
      "Mining Station Output +10%"
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
    "description": "Standardization of assembly templates allow for improved specialization of the drone population.",
    "feature_unlocks": [
      "<b>Feature : </b>Robomodding",
      "Machine Modification Points +1"
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
    "is_machine": false
  },
  "tech_mass_drivers_2": {
    "key": "tech_mass_drivers_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 750,
    "description": "Coilguns are more powerful versions of the early mass drivers, using electromagnetic coils to rapidly accelerate projectiles towards targets.",
    "feature_unlocks": [
      "Component: Small Coilgun",
      "Component: Medium Coilgun",
      "Component: Large Coilgun"
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
    "description": "Solid holographic casts can alter their shapes at a moment's notice, speeding up alloy production.",
    "feature_unlocks": [
      "Building: Alloy Mega-Forges"
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
    "description": "The ability to alter a planet's weather patterns to suppress destructive weather phenomena will make residential buildings easier to maintain and open up new areas for habitation.",
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
    "description": "Advanced missiles equipped with very powerful antimatter warheads. A new and improved guidance system gives them a better chance of finding their targets.",
    "feature_unlocks": [
      "Component: Antimatter Missiles"
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
    "description": "Microscopic tools that can assist our replication units in creating the more complex circuitry needed for new drones.",
    "feature_unlocks": [
      "Pop Assembly Speed +10%",
      "Building: Upgraded Drone Storage"
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
    "is_machine": false
  },
  "tech_rare_crystals": {
    "key": "tech_rare_crystals",
    "area": "engineering",
    "category": "Materials",
    "cost": 1500,
    "description": "The crystallization process is complicated and difficult, but synthetic crystals can be manufactured by using specialized industrial plants.",
    "feature_unlocks": [
      "Building: Synthetic Crystal Plants"
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
    "description": "Mining these crystals without damaging or even destroying them is an extremely delicate process. It requires advanced equipment capable of pinpoint precision.",
    "feature_unlocks": [
      "Reveals Ressource: Rare Crystals",
      "Building: Crystal Mines"
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
    "description": "The mass-production of this particularly capable nanite variety requires very advanced facilities.",
    "feature_unlocks": [
      "Building: Nanite Transmuter"
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
    "description": "Large-caliber ballistic weapons that fire cased explosive shells. The main advantage of these cannons is their high rate of fire.",
    "feature_unlocks": [
      "Component: Autocannon"
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
    "description": "These torpedoes are essentially very large, slow-moving missiles. They are equipped with more powerful warheads and shield modulators that let them slip unmolested through energy screens.",
    "feature_unlocks": [
      "Component: Space Torpedoes"
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
    "description": "Improved production practices allow for greater alterations to synthetic workers without compromising core functionality.",
    "feature_unlocks": [
      "Robot Modification Points +1"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_modular_engineering": {
    "key": "tech_modular_engineering",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "description": "Streamlined starbase construction procedures, using modular designs, will reduce the present build cost and time.",
    "feature_unlocks": [
      "Starbase Building Cost -25%",
      "Starbase Module Cost -25%"
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
    "description": "These massive drills are needed to access the rich mineral deposits that can often be found close to a planet's core.",
    "feature_unlocks": [
      "£minerals£ Minerals from £job_miner£ Miners +10%"
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
    "description": "The Betharian minerals appear to have originated from singular source, but were scattered across the galaxy millennia ago. The minerals are most often encountered as pebble-sized clusters, and are highly flammable.",
    "feature_unlocks": [
      "Building: Betharian Power Plant"
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
    "description": "Upgraded robotic workers, these units have an expanded movement range equal to that of most organics. Their neural processors have also been greatly improved.",
    "feature_unlocks": [
      "<b>Feature : </b>Droid Workers",
      "Army: Robotic Assault Army"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_destroyer_hull_1": {
    "key": "tech_destroyer_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 2500,
    "description": "Advances in building techniques will allow for the construction of sturdier and more durable destroyers.",
    "feature_unlocks": [
      "Destroyer Hull Points +200"
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
    "description": "While larger than Corvettes, Destroyer hull configurations still make for comparatively nimble gunboats.",
    "feature_unlocks": [
      "Fleet Command Limit +10",
      "Ship Size: Destroyer"
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
    "description": "These smaller missiles are launched in volleys and have been specifically designed to overwhelm enemy point-defense systems.",
    "feature_unlocks": [
      "Component: Swarmer Missiles"
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
    "description": "As space traffic increases, larger and more defensible starbases are needed to maintain control over system spacelanes.",
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
    "description": "By infusing armor plating with Crystalline matter we are able to further increase the durability of our ships' protective hulls.",
    "feature_unlocks": [
      "Component: Small Crystal-Infused Plating",
      "Component: Medium Crystal-Infused Plating",
      "Component: Large Crystal-Infused Plating"
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
    "description": "A reinforced framework and blast shields with enhanced impact absorption will ensure the structural integrity of the platform even under immense pressure.",
    "feature_unlocks": [
      "Defense Platform Hull Points +500"
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
    "description": "Pockets of Exotic Gas are rare and often inaccessible by conventional means. Such deposits can only be reached by using special extractor technology.",
    "feature_unlocks": [
      "Building: Gas Extraction Wells",
      "Reveals Ressource: Exotic Gases"
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
    "description": "Exotic Gas can be produced artificially, but it is a difficult process that requires advanced refinery equipment.",
    "feature_unlocks": [
      "Building: Exotic Gas Refineries"
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
    "description": "Plasteel is an elastic material that combines many of the qualities of plastics and metal. It is relatively cheap to produce and can be used to augment ship armor.",
    "feature_unlocks": [
      "Component: Small Plasteel Armor",
      "Component: Medium Plasteel Armor",
      "Component: Large Plasteel Armor"
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
    "description": "The latest generation of corvette hulls have optimized structural integrity fields and improved bulkheads.",
    "feature_unlocks": [
      "Corvette Hull Points +100"
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
    "description": "The next generation of strike craft, featuring improved avionics, better handling characteristics and more powerful armaments.",
    "feature_unlocks": [
      "Component: Improved Strike Craft"
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
    "description": "Establishing new standards for the modeling and construction of destroyers greatly improves the efficiency of the production pipeline.",
    "feature_unlocks": [
      "Destroyer Build Cost -5%",
      "Destroyer Build Speed +25%"
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
    "description": "Second-stage processing of pseudo-refined minerals allow for more efficient storage and transportation.",
    "feature_unlocks": [
      "Building: Mineral Purification Hubs"
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
    "description": "Volatile Motes are fickle particles that are dangerous to work with. In order to safely harvest them without setting off a chain-reaction of explosions, energy fields must be used to stabilize the motes.",
    "feature_unlocks": [
      "Building: Mote Harvesting Traps",
      "Reveals Ressource: Volatile Motes"
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
    "description": "These electric thrusters use beams of ions to generate thrust without the need for propellant.",
    "feature_unlocks": [
      "Component: Ion Thrusters"
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
    "description": "Intensive study within the fields of nanomachinery and subspace phenomena will eventually yield a new L-Gate Insight into the Disabled L-Gate mystery.",
    "feature_unlocks": [],
    "is_dangerous": false,
    "is_rare": true,
    "is_start_tech": false,
    "name": "L-Gate Insight",
    "prerequisites": [],
    "tier": 2,
    "prerequisites_names": [],
    "potential": [
      "Has the encountered_first_lgate country flag",
      "Does NOT have the completed_lcluster_chain country flag"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_engineering_2": {
    "key": "tech_engineering_2",
    "area": "engineering",
    "category": "Industry",
    "cost": 2500,
    "description": "The production and understanding of supersolids are of immeasurable value to any and every space-age civilization.",
    "feature_unlocks": [
      "£engineering£ Engineering Research from £job_researcher£ Researchers +20%"
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
    "description": "These powerful short-range lasers can easily slice through rock, making the extraction of minerals a more efficient affair.",
    "feature_unlocks": [
      "Mining Station Output +10%"
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
    "description": "Fleets of autonomous drones equipped with mining beams are deployed to quickly and efficiently gather nearby minerals.",
    "feature_unlocks": [
      "Mining Station Output +10%"
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
    "description": "The latest in electromagnetic accelerators, railguns use twin parallel rails to fire projectiles at incredible speeds.",
    "feature_unlocks": [
      "Component: Small Railgun",
      "Component: Medium Railgun",
      "Component: Large Railgun"
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
    "description": "With directional gravity technology, buildings on the surface of planets can reach higher than ever before without risking structural collapse. The sky is the limit!",
    "feature_unlocks": [
      "Building: Expanded Warren",
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
    "description": "The latest version of space-to-space missile, this upgraded variant has an immensely powerful warhead that draws its energy from a zero point vacuum.",
    "feature_unlocks": [
      "Component: Quantum Missiles"
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
    "description": "Upgraded flak batteries with new, more powerful shrapnel rounds.",
    "feature_unlocks": [
      "Component: Flak Cannons"
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
    "description": "The creation of a dedicated naval engineering corps will greatly benefit the construction of deep space defense platforms, decreasing building costs and increasing durability.",
    "feature_unlocks": [
      "Starbase Upgrade Speed +25%",
      "Starbase Upgrade Cost -15%"
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
    "description": "Standardized pre-fab templates massively reduce on-site facility construction times.",
    "feature_unlocks": [
      "Planet Build Speed +50%"
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
    "description": "Modelled on organic DNA, these microscopic machine intellects are capable of autonomously assembling most components needed for new drones.",
    "feature_unlocks": [
      "Pop Assembly Speed +10%"
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
    "is_machine": false
  },
  "tech_cruiser_build_speed": {
    "key": "tech_cruiser_build_speed",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 5000,
    "description": "Establishing new standards for the modeling and construction of cruisers greatly improves the efficiency of the production pipeline.",
    "feature_unlocks": [
      "Cruiser Build Cost -5%",
      "Cruiser Build Speed +25%"
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
    "description": "These upgraded rotary autocannons feature improved tracking and fire control systems. This allows them to maintain an even higher rate of fire.",
    "feature_unlocks": [
      "Component: Ripper Autocannon"
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
    "description": "Upgraded space torpedoes encased in armor, to better withstand enemy point-defense fire. The armor fragments into shards that cause additional damage when the torpedo detonates.",
    "feature_unlocks": [
      "Component: Armored Torpedoes"
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
    "description": "These advanced motivators are both smaller and lighter than previous versions, allowing robotic units to allocate additional space for subsystems.",
    "feature_unlocks": [
      "Machine Modification Points +1"
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
    "is_machine": false
  },
  "tech_destroyer_hull_2": {
    "key": "tech_destroyer_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 4000,
    "description": "The latest generation of destroyer hulls have optimized structural integrity fields and improved bulkheads.",
    "feature_unlocks": [
      "Destroyer Hull Points +200"
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
    "description": "These mighty space forts will provide a focal point for all military activity in a star system, and their presence is sure to deter all but the most stubborn attackers.",
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
    "description": "Originally devised as an experimental next-generation colony ship hull configuration, the design's ample hardpoints made it ideal for carrying heavy weapons ordnance.",
    "feature_unlocks": [
      "Fleet Command Limit +10",
      "Ship Size: Cruiser"
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
    "description": "Very long-range artillery capable of hurling powerful rounds over extreme distances with a large degree of accuracy.",
    "feature_unlocks": [
      "Component: Kinetic Battery"
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
    "description": "This strong yet flexible material is capable of withstanding severe punishment. It serves well as ship armor.",
    "feature_unlocks": [
      "Component: Medium Durasteel Armor",
      "Component: Large Durasteel Armor",
      "Component: Small Durasteel Armor"
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
    "description": "A further refinement in strike craft design, these advanced strike craft are a pilot's dream. Their performance far exceeds that of previous models.",
    "feature_unlocks": [
      "Component: Advanced Strike Craft"
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
    "description": "This improved version of the standard afterburners provide an even greater boost to a ship's combat speed.",
    "feature_unlocks": [
      "Component: Advanced Afterburners"
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
    "description": "An advanced form of electric propulsion, plasma thrusters afford ships greater sublight speeds and maneuverability.",
    "feature_unlocks": [
      "Component: Plasma Thrusters"
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
    "description": "These kiosks can replicate any pre-approved object if its pattern has been stored within their memory banks.",
    "feature_unlocks": [
      "Building: Civilian Repli-Complexes"
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
      "One must be true\n    •   Is NOT Gestalt\n    •   Has Government Civic: Rogue Servitor"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_cruiser_hull_1": {
    "key": "tech_cruiser_hull_1",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 6000,
    "description": "Advances in building techniques will allow for the construction of sturdier and more durable cruisers.",
    "feature_unlocks": [
      "Cruiser Hull Points +500"
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
    "description": "These special probes are equipped with swarms of nanites that identify previously unknown mineral concentrations and mark them for later extraction.",
    "feature_unlocks": [
      "Mining Station Output +10%"
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
    "description": "A new version of the venerable railgun, with sturdier rails and an enhanced power supply. These weapons are even more powerful and accurate than their predecessors.",
    "feature_unlocks": [
      "Component: Large Advanced Railgun",
      "Component: Medium Advanced Railgun",
      "Component: Small Advanced Railgun"
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
    "description": "Nano-separators are a revolutionary new step in the creation of alloys, simplifying the casting process while improving overall production quality.",
    "feature_unlocks": [
      "Building: Alloy Nano-Plants"
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
    "description": "These highly advanced missiles are equipped with limited onboard AI pilots that substantially improve their performance and ability to track targets.",
    "feature_unlocks": [
      "Component: Marauder Missiles"
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
    "description": "Predictive tracking algorithms and even more powerful rounds make these batteries incredibly lethal to enemy strike craft.",
    "feature_unlocks": [
      "Component: Flak Artillery"
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
    "description": "Establishing new standards for how we design and construct massive battleships greatly improves the speed at which they can be assembled.",
    "feature_unlocks": [
      "Battleship Build Cost -5%",
      "Battleship Build Speed +25%"
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
    "description": "Advances in building techniques will allow for the construction of sturdier and more durable battleships.",
    "feature_unlocks": [
      "Battleship Hull Points +800"
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
    "description": "Advanced torpedoes with very powerful warheads. They have a sleeker design, faster engines and upgraded shield modulators for slipping through energy screens.",
    "feature_unlocks": [
      "Component: Devastator Torpedoes"
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
    "description": "Advanced rotary autocannons capable of spewing a cloud of high-explosive shells at a target.",
    "feature_unlocks": [
      "Component: Stormfire Autocannon"
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
    "description": "Improved production practices allow for fundamental changes to synthetic workers without compromising core functionality.",
    "feature_unlocks": [
      "Robot Modification Points +1"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_mining_3": {
    "key": "tech_mining_3",
    "area": "engineering",
    "category": "Industry",
    "cost": 10000,
    "description": "Advanced spectrometry combines with fracking techniques and chemical flushing to rapidly exploit shallow and mid-depth deposits.",
    "feature_unlocks": [
      "£minerals£ Minerals from £job_miner£ Miners +10%"
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
    "description": "Highly advanced robots that are stronger, faster and more durable than the vast majority of organics. With their upgraded neural processors they are fully capable of independent operations.",
    "feature_unlocks": [
      "Robot Output +10%",
      "<b>Feature : </b>Synthetic Workers"
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_battleships": {
    "key": "tech_battleships",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 8000,
    "description": "The largest of the standard military vessels, Battleships are traditionally heavily armored and sport several gun batteries.",
    "feature_unlocks": [
      "Fleet Command Limit +10",
      "Ship Size: Battleship"
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
    "description": "New miniaturization techniques will allow us to equip swarmer missiles with more powerful warheads and improved flight performance.",
    "feature_unlocks": [
      "Component: Whirlwind Missiles"
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
    "description": "Using programmable nanites to assist in the construction of new robotic units will allow for more advanced models that are equipped with an even greater array of subsystems.",
    "feature_unlocks": [
      "Machine Modification Points +1"
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
    "is_machine": false
  },
  "tech_starbase_5": {
    "key": "tech_starbase_5",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 10000,
    "description": "Plans for an immense battlestation capable of holding its own against several strike fleets are now being drawn up. If realized, these citadels will become monuments to greatness as much as system hubs.",
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
    "description": "Equipped with a personality, synthetics will finally be able to interact socially on equal terms with the rest of our citizens. Some units may even assume leadership roles.",
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
      "Does NOT have Gestalt Consciousness Ethic"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_kinetic_artillery_2": {
    "key": "tech_kinetic_artillery_2",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 10000,
    "description": "An even more powerful long-range, ship-based artillery cannon, equipped with a new barrel and an upgraded fire control computer.",
    "feature_unlocks": [
      "Component: Kinetic Artillery"
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
    "description": "This incredibly dense and strong material can resist firepower that would turn armor made of any other alloys into slag.",
    "feature_unlocks": [
      "Component: Medium Neutronium Armor",
      "Component: Large Neutronium Armor",
      "Component: Small Neutronium Armor"
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
    "description": "These highly advanced fusion-powered thrusters provide ships with unmatched maneuverability and speed under sublight conditions.",
    "feature_unlocks": [
      "Component: Impulse Thrusters"
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
    "description": "The study of superfluidity promises to marry quantum mechanics with the fundamental interaction of gravity.",
    "feature_unlocks": [
      "£engineering£ Engineering Research from £job_researcher£ Researchers +20%"
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
    "description": "The latest generation of cruiser hulls have optimized structural integrity fields and improved bulkheads.",
    "feature_unlocks": [
      "Cruiser Hull Points +500"
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
    "description": "An even more powerful mass accelerator cannon that can rip through even the toughest shields.",
    "feature_unlocks": [
      "Component: Giga Cannon"
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
    "description": "An enormous mass accelerator cannon that can only be placed in a spinal mount and fires monstrously powerful rounds over vast distances.",
    "feature_unlocks": [
      "Component: Mega Cannon"
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
    "description": "Introducing Crystalline matter into the forging process further improves the ultra-hard qualities of crystal-infused metals.",
    "feature_unlocks": [
      "Component: Large Crystal-Forged Plating",
      "Component: Small Crystal-Forged Plating",
      "Component: Medium Crystal-Forged Plating"
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
    "description": "This updated version of the old coilgun design is even more destructive than the latest railgun designs. It is capable of launching projectiles with incredible accuracy and speed.",
    "feature_unlocks": [
      "Component: Small Gauss Cannon",
      "Component: Medium Gauss Cannon",
      "Component: Large Gauss Cannon"
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
    "description": "The latest generation of battleship hulls have optimized structural integrity fields and improved bulkheads.",
    "feature_unlocks": [
      "Battleship Hull Points +800"
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
  "tech_mine_living_metal": {
    "key": "tech_mine_living_metal",
    "area": "engineering",
    "category": "Materials",
    "cost": 15000,
    "description": "Mining and processing the rare living metals is exceedingly difficult, but successful application of the mutable alloys yields incomparable advantages.",
    "feature_unlocks": [
      "Reveals Ressource: Living Metal",
      "Edict: Living Metal Mega-Construction"
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
  "tech_titan_hull_2": {
    "key": "tech_titan_hull_2",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "description": "The latest generation of titan hulls have optimized structural integrity fields and improved bulkheads.",
    "feature_unlocks": [
      "Titan Hull Points +2000"
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
    "description": "Advances in building techniques will allow for the construction of sturdier and more durable titans.",
    "feature_unlocks": [
      "Titan Hull Points +2000"
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
  "tech_pk_cracker": {
    "key": "tech_pk_cracker",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "description": "A directed feed of thermic energy superheats the atmosphere and agitates the planet's core, setting up disastrous tectonic events. A final and comparatively minute concussive blast is then delivered, cracking the planet open.",
    "feature_unlocks": [
      "Component: World Cracker"
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
      "Has the Colossus Project country flag",
      "Is NOT Pacifist"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dragon_armor": {
    "key": "tech_dragon_armor",
    "area": "engineering",
    "category": "Materials",
    "cost": 50000,
    "description": "The Ether Drake's scales are made up of multiple layers of unique mineral nanostructures. Unorthodox manufacturing techniques allow us to closely emulate these self-repairing structures.",
    "feature_unlocks": [
      "Component: Small Dragonscale Armor",
      "Component: Medium Dragonscale Armor",
      "Component: Large Dragonscale Armor"
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
  "tech_colossus": {
    "key": "tech_colossus",
    "area": "engineering",
    "category": "Voidcraft",
    "cost": 20000,
    "description": "Advances in mega-engineering make blur the lines between reality and the fantastical, enabling the construction of Colossus-class military vessels that carry weapons capable of obliterating - or fundamentally altering - entire worlds, with the push of a button.",
    "feature_unlocks": [
      "Starbase Building: Colossus Assembly Yards"
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
    "description": "Modeled after the hulking shadows looming in the core systems of Stagnant Ascendancies, the Titan class can be outfitted with X-size weapons.",
    "feature_unlocks": [
      "Fleet Command Limit +10",
      "Component: Ion Cannon",
      "Ship Size: Titan",
      "Component: Perdition Beam"
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
    "description": "Nanobot Diffuser",
    "feature_unlocks": [
      "Component: Nanobot Diffuser"
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
      "Has the Colossus Project country flag",
      "Has Government Civic: Driven Assimilator"
    ],
    "is_gestalt": false,
    "is_machine": false
  },
  "tech_dark_matter_propulsion": {
    "key": "tech_dark_matter_propulsion",
    "area": "engineering",
    "category": "Propulsion",
    "cost": 50000,
    "description": "These ship thrusters utilize Dark Matter technology to generate propulsion in a manner that appears to defy numerous laws of physics.",
    "feature_unlocks": [
      "Component: Dark Matter Thrusters"
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
    "description": "To complete construction projects of truly staggering scales we must first achieve a fundamental understanding of both the engineering and resource storage requirements for such megastructures.",
    "feature_unlocks": [
      "<b>Feature : </b>Megastructure Restoration",
      "Resource Storage Capacity +20000"
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
    "description": "A highly effective hull auto-repair system comprised of billions of microscopic nanomachines was found among the smoking remains of the Scavenger, and has been repurposed for our uses. Whether the Scavenger pilfered this system from an ancient derelict, or was originally constructed with it remains unknown.",
    "feature_unlocks": [
      "Component: Nanite Repair System"
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