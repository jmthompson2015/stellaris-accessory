const AppState = {};

AppState.create = ({
  isVerbose = true,
  itemKeys = [],
  selectedKeys = [],
  techAreaKey = "physics",
} = {}) =>
  Immutable({
    isVerbose,
    itemKeys,
    selectedKeys,
    techAreaKey,
  });

Object.freeze(AppState);

export default AppState;
