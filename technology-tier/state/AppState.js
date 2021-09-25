const AppState = {};

AppState.create = ({
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
