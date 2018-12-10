import ActionCreator from "../model/ActionCreator.js";
import Reducer from "../model/Reducer.js";

import InputPanelContainer from "../container/InputPanelContainer.js";
import ResearchTableContainer from "../container/ResearchTableContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setArea("physics"));
store.dispatch(ActionCreator.setCategory("Particles"));
store.dispatch(ActionCreator.setResearch("tech_lasers_4"));

const container0 = React.createElement(InputPanelContainer);
const element0 = React.createElement(ReactRedux.Provider, { store }, container0);
ReactDOM.render(element0, document.getElementById("inputPanel"));

const container1 = React.createElement(ResearchTableContainer);
const element1 = React.createElement(ReactRedux.Provider, { store }, container1);
ReactDOM.render(element1, document.getElementById("researchTable"));
