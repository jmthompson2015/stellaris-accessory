const Preferences = {};

const fetchItem = (appName) => {
  const oldItemString = localStorage.getItem(appName);

  return oldItemString !== undefined ? JSON.parse(oldItemString) : {};
};

Preferences.getEngineeringGoalKeys = (appName) => {
  const item = fetchItem(appName);

  return item && item.engineeringGoalKeys
    ? Immutable(item.engineeringGoalKeys)
    : Immutable([]);
};

Preferences.getEngineeringTier = (appName) => {
  const item = fetchItem(appName);

  return item && item.engineeringTier
    ? Immutable(item.engineeringTier)
    : Immutable(1);
};

Preferences.getPhysicsGoalKeys = (appName) => {
  const item = fetchItem(appName);

  return item && item.physicsGoalKeys
    ? Immutable(item.physicsGoalKeys)
    : Immutable([]);
};

Preferences.getPhysicsTier = (appName) => {
  const item = fetchItem(appName);

  return item && item.physicsTier ? Immutable(item.physicsTier) : Immutable(1);
};

Preferences.getSocietyGoalKeys = (appName) => {
  const item = fetchItem(appName);

  return item && item.societyGoalKeys
    ? Immutable(item.societyGoalKeys)
    : Immutable([]);
};

Preferences.getSocietyTier = (appName) => {
  const item = fetchItem(appName);

  return item && item.societyTier ? Immutable(item.societyTier) : Immutable(1);
};

Preferences.setEngineeringGoalKeys = (appName, engineeringGoalKeys) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { engineeringGoalKeys });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Preferences.setEngineeringTier = (appName, engineeringTier) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { engineeringTier });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Preferences.setPhysicsGoalKeys = (appName, physicsGoalKeys) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { physicsGoalKeys });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Preferences.setPhysicsTier = (appName, physicsTier) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { physicsTier });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Preferences.setSocietyGoalKeys = (appName, societyGoalKeys) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { societyGoalKeys });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Preferences.setSocietyTier = (appName, societyTier) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { societyTier });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Object.freeze(Preferences);

export default Preferences;
