import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TechListContainer from "./TechListContainer.js";

const techKeys = ["tech_destroyers", "tech_cruisers", "tech_battleships"];
const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setPrerequisiteItems(techKeys));

const container = React.createElement(TechListContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
