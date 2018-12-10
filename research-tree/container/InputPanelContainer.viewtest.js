import ActionCreator from "../model/ActionCreator.js";
import Reducer from "../model/Reducer.js";

import InputPanelContainer from "./InputPanelContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setArea("physics"));
store.dispatch(ActionCreator.setCategory("PARTICLES"));
store.dispatch(ActionCreator.setResearch("tech_lasers_1"));

const container = React.createElement(InputPanelContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
