import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TechAreaChooserContainer from "./TechAreaChooserContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setTechArea("physics"));

const container = React.createElement(TechAreaChooserContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
