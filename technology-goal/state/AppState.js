const AppState = {};

AppState.create = ({
  goalKeys = [],
  isVerbose = true,
  prerequisiteKeys = [],
  selectedKeys = [],
} = {}) =>
  Immutable({
    goalKeys,
    isVerbose,
    prerequisiteKeys,
    selectedKeys,
  });

Object.freeze(AppState);

export default AppState;
