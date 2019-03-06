module.exports = {
  "copper-ore": {
    "category": "resource",
    "order": 2,
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "iron-ore": {
    "category": "resource",
    "order": 1,
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "stone": {
    "category": "resource",
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "coal": {
    "category": "resource",
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "water": {
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "light-oil": {
    "category": "chemistry",
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "petroleum-gas": {
    "category": "chemistry",
    "time": 0,
    "productivity": 0,
    "ingredients": {}
  },
  "sulfur": {
    "time": 1,
    "productivity": 30,
    "ingredients": {
      "water": 30,
      "petroleum-gas": 30
    },
    "result_count": 2
  },
  "sulfuric-acid": {
    "category": "chemistry",
    "time": 1,
    "productivity": 30,
    "ingredients": {
      "sulfur": 5,
      "iron-plate": 1,
      "water": 100
    },
    "result_count": 50
  },
  "lubricant": {
    "category": "chemistry",
    "time": 1,
    "productivity": 10,
    "ingredients": {
    }
  },
  "automation-science-pack": {
    "time": 5,
    "productivity": 40,
    "ingredients": {
      "copper-plate": 1,
      "iron-gear-wheel": 1
    }
  },
  "logistic-science-pack": {
    "time": 6,
    "productivity": 40,
    "ingredients": {
      "inserter": 1,
      "transport-belt": 1
    }
  },
  "chemical-science-pack": {
    "time": 24,
    "productivity": 40,
    "ingredients": {
      "advanced-circuit": 3,
      "engine-unit": 2,
      "solid-fuel": 1
    },
    "result_count": 2
  },
  "military-science-pack": {
    "time": 10,
    "productivity": 40,
    "ingredients": {
      "piercing-rounds-magazine": 1,
      "grenade": 1,
      "stone-wall": 2
    },
    "result_count": 2
  },
  "production-science-pack": {
    "time": 21,
    "productivity": 40,
    "ingredients": {
      "electric-furnace": 1,
      "productivity-module": 1,
      "rail": 30
    },
    "result_count": 3
  },
  "flying-robot-frame": {
    "time": 20,
    "productivity": 40,
    "ingredients": {
      "battery": 2,
      "electric-engine-unit": 1,
      "electronic-circuit": 3,
      "steel-plate": 1,
    },
    "result_count": 1
  },
  "utility-science-pack": {
    "time": 21,
    "productivity": 40,
    "ingredients": {
      "flying-robot-frame": 1,
      "low-density-structure": 3,
      "processing-unit": 2,
    },
    "result_count": 3
  },
  "copper-plate": {
    "category": "smelting",
    "order": 4,
    "time": 3.2,
    "productivity": 20,
    "ingredients": {
      "copper-ore": 1
    }
  },
  "iron-plate": {
    "category": "smelting",
    "order": 3,
    "time": 3.2,
    "productivity": 20,
    "ingredients": {
      "iron-ore": 1
    }
  },
  "steel-plate": {
    "category": "smelting",
    "time": 16,
    "productivity": 20,
    "ingredients": {
      "iron-plate": 5
    }
  },
  "stone-brick": {
    "time": 3.2,
    "productivity": 20,
    "ingredients": {
      "stone": 2
    }
  },
  "iron-gear-wheel": {
    "time": 0.5,
    "productivity": 40,
    "ingredients": {
      "iron-plate": 2
    }
  },
  "copper-cable": {
    "time": 0.5,
    "productivity": 40,
    "ingredients": {
      "copper-plate": 1
    },
    "result_count": 2
  },
  "iron-stick": {
    "time": 0.5,
    "productivity": 40,
    "ingredients": {
      "iron-plate": 1
    },
    "result_count": 2
  },
  "plastic-bar": {
    "category": "chemistry",
    "time": 1,
    "productivity": 30,
    "ingredients": {
      "petroleum-gas": 20,
      "coal": 1
    },
    "result_count": 2
  },
  "battery": {
    "category": "chemistry",
    "time": 4,
    "productivity": 30,
    "ingredients": {
      "sulfuric-acid": 20,
      "iron-plate": 1,
      "copper-plate": 1
    }
  },
  "inserter": {
    "time": 0.5,
    "productivity": 0,
    "ingredients": {
      "electronic-circuit": 1,
      "iron-gear-wheel": 1,
      "iron-plate": 1
    }
  },
  "electronic-circuit": {
    "time": 0.5,
    "productivity": 40,
    "ingredients": {
      "iron-plate": 1,
      "copper-cable": 3
    }
  },
  "advanced-circuit": {
    "time": 6,
    "productivity": 40,
    "ingredients": {
      "electronic-circuit": 2,
      "plastic-bar": 2,
      "copper-cable": 4
    }
  },
  "processing-unit": {
    "time": 10,
    "productivity": 40,
    "ingredients": {
      "electronic-circuit": 20,
      "advanced-circuit": 2,
      "sulfuric-acid": 5
    }
  },
  "pipe": {
    "time": 0.5,
    "productivity": 0,
    "ingredients": {
      "iron-plate": 1
    }
  },
  "transport-belt": {
    "time": 0.5,
    "productivity": 0,
    "ingredients": {
      "iron-plate": 1,
      "iron-gear-wheel": 1
    },
    "result_count": 2
  },
  "engine-unit": {
    "time": 10,
    "productivity": 40,
    "ingredients": {
      "steel-plate": 1,
      "iron-gear-wheel": 1,
      "pipe": 2
    }
  },
  "rail": {
    "time": 0.5,
    "productivity": 40,
    "ingredients": {
      "iron-stick": 1,
      "steel-plate": 1,
      "stone": 1
    },
    "result_count": 2
  },
  "electric-engine-unit": {
    "category": "crafting-with-fluid",
    "time": 10,
    "productivity": 40,
    "ingredients": {
      "engine-unit": 1,
      "lubricant": 15,
      "electronic-circuit": 2
    }
  },
  "grenade": {
    "time": 8,
    "productivity": 0,
    "ingredients": {
      "iron-plate": 5,
      "coal": 10
    }
  },
  "electric-furnace": {
    "time": 5,
    "productivity": 0,
    "ingredients": {
      "steel-plate": 10,
      "advanced-circuit": 5,
      "stone-brick": 10
    }
  },
  "speed-module": {
    "time": 15,
    "productivity": 0,
    "ingredients": {
      "advanced-circuit": 5,
      "electronic-circuit": 5
    }
  },
  "productivity-module": {
    "time": 15,
    "productivity": 0,
    "ingredients": {
      "advanced-circuit": 5,
      "electronic-circuit": 5
    }
  },
  "firearm-magazine": {
    "time": 1,
    "productivity": 0,
    "ingredients": {
      "iron-plate": 4
    }
  },
  "piercing-rounds-magazine": {
    "time": 3,
    "productivity": 0,
    "ingredients": {
      "firearm-magazine": 1,
      "steel-plate": 1,
      "copper-plate": 5
    }
  },
  "solar-panel": {
    "time": 10,
    "productivity": 0,
    "ingredients": {
      "steel-plate": 5,
      "electronic-circuit": 15,
      "copper-plate": 5
    }
  },
  "accumulator": {
    "time": 10,
    "productivity": 0,
    "ingredients": {
      "iron-plate": 2,
      "battery": 5
    }
  },
  "radar": {
    "time": 0.5,
    "productivity": 0,
    "ingredients": {
      "electronic-circuit": 5,
      "iron-gear-wheel": 5,
      "iron-plate": 10
    }
  },
  "rocket-part": {
    "time": 3,
    "productivity": 40,
    "ingredients": {
      "low-density-structure": 10,
      "rocket-fuel": 10,
      "rocket-control-unit": 10
    }
  },
  "satellite": {
    "time": 3,
    "productivity": 0,
    "ingredients": {
      "low-density-structure": 100,
      "solar-panel": 100,
      "accumulator": 100,
      "radar": 5,
      "processing-unit": 100,
      "rocket-fuel": 50
    }
  },
  "solid-fuel": {
    "category": "chemistry",
    "time": 2,
    "productivity": 30,
    "ingredients": {
      "light-oil": 10
    }
  },
  "low-density-structure": {
    "time": 20,
    "productivity": 40,
    "ingredients": {
      "steel-plate": 2,
      "copper-plate": 20,
      "plastic-bar": 5
    }
  },
  "rocket-fuel": {
    "time": 30,
    "productivity": 40,
    "ingredients": {
      "solid-fuel": 10
    }
  },
  "rocket-control-unit": {
    "time": 30,
    "productivity": 40,
    "ingredients": {
      "processing-unit": 1,
      "speed-module": 1
    }
  }
}