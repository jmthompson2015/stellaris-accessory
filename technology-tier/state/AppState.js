const AppState = {};

AppState.create = ({
  appName = "TechnologyTier",
  engineeringGoalKeys = [],
  engineeringTechKeys = [],
  engineeringTier = 1,
  isVerbose = false,
  physicsGoalKeys = [],
  physicsTechKeys = [],
  physicsTier = 1,
  societyGoalKeys = [],
  societyTechKeys = [],
  societyTier = 1,
} = {}) =>
  Immutable({
    appName,
    engineeringGoalKeys,
    engineeringTechKeys,
    engineeringTier,
    isVerbose,
    physicsGoalKeys,
    physicsTechKeys,
    physicsTier,
    societyGoalKeys,
    societyTechKeys,
    societyTier,
  });

Object.freeze(AppState);

export default AppState;
