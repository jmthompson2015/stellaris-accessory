import ActionCreator from "../model/ActionCreator.js";
import Reducer from "../model/Reducer.js";

import HistoryPanelContainer from "./HistoryPanelContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setArea("physics"));
store.dispatch(ActionCreator.setCategory("particles"));
store.dispatch(ActionCreator.setTechnology("tech_lasers_1"));

const container = React.createElement(HistoryPanelContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
