const AppState = {};

AppState.create = ({
  engineeringTechKeys = [],
  engineeringTier = 1,
  isVerbose = false,
  physicsTechKeys = [],
  physicsTier = 1,
  societyTechKeys = [],
  societyTier = 1,
} = {}) =>
  Immutable({
    engineeringTechKeys,
    engineeringTier,
    isVerbose,
    physicsTechKeys,
    physicsTier,
    societyTechKeys,
    societyTier,
  });

Object.freeze(AppState);

export default AppState;
