const AppState = {};

AppState.create = ({
  appName = "TechnologyGoal",
  goalKeys = [],
  isVerbose = true,
  prerequisiteKeys = [],
  selectedKeys = [],
} = {}) =>
  Immutable({
    appName,
    goalKeys,
    isVerbose,
    prerequisiteKeys,
    selectedKeys,
  });

Object.freeze(AppState);

export default AppState;
