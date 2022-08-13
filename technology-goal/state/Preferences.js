const Preferences = {};

const fetchItem = (appName) => {
  const oldItemString = localStorage.getItem(appName);

  return oldItemString !== undefined ? JSON.parse(oldItemString) : {};
};

Preferences.getGoalKeys = (appName) => {
  const item = fetchItem(appName);

  return item && item.goalKeys ? Immutable(item.goalKeys) : Immutable([]);
};

Preferences.setGoalKeys = (appName, goalKeys) => {
  const oldItem = fetchItem(appName);
  const newItem = R.merge(oldItem, { goalKeys });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

Object.freeze(Preferences);

export default Preferences;
