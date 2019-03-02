import Technology from "../../artifact/Technology.js";

import ActionCreator from "../model/ActionCreator.js";

import TechnologyTable from "../view/TechnologyTable.js";

const mapStateToProps = state => {
  const { technologyKey } = state;
  const technology = Technology[technologyKey];

  return { technology };
};

const mapDispatchToProps = dispatch => ({
  onClick: technology => {
    dispatch(ActionCreator.setTechnology(technology.key));
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TechnologyTable);
