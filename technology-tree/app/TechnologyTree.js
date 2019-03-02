import ActionCreator from "../model/ActionCreator.js";
import Reducer from "../model/Reducer.js";

import HistoryPanelContainer from "../container/HistoryPanelContainer.js";
import InputPanelContainer from "../container/InputPanelContainer.js";
import TechnologyTableContainer from "../container/TechnologyTableContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setTechnology("tech_lasers_4"));

const container0 = React.createElement(InputPanelContainer);
const element0 = React.createElement(ReactRedux.Provider, { store }, container0);
ReactDOM.render(element0, document.getElementById("inputPanel"));

const container1 = React.createElement(HistoryPanelContainer);
const element1 = React.createElement(ReactRedux.Provider, { store }, container1);
ReactDOM.render(element1, document.getElementById("historyPanel"));

const container2 = React.createElement(TechnologyTableContainer);
const element2 = React.createElement(ReactRedux.Provider, { store }, container2);
ReactDOM.render(element2, document.getElementById("researchTable"));
