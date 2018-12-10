import ActionCreator from "../model/ActionCreator.js";
import Reducer from "../model/Reducer.js";

import ResearchTableContainer from "./ResearchTableContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setArea("physics"));
store.dispatch(ActionCreator.setCategory("Particles"));
store.dispatch(ActionCreator.setResearch("tech_lasers_4"));

const container = React.createElement(ResearchTableContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
