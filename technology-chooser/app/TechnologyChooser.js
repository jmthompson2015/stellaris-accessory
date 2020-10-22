import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TechAreaChooserContainer from "../container/TechAreaChooserContainer.js";
import TechChooserContainer from "../container/TechChooserContainer.js";
import TechListContainer from "../container/TechListContainer.js";

const { TitledElement } = ReactComponent;

const store = Redux.createStore(Reducer.root);
let currentTechArea;
const handleChange = () => {
  const previousTechArea = currentTechArea;
  currentTechArea = store.getState().techAreaKey;

  if (previousTechArea !== currentTechArea) {
    const areaToBackground = {
      physics: "hsl(195, 100%, 45%)",
      society: "green",
      engineering: "hsl(45, 100%, 45%)",
    };
    const background = areaToBackground[currentTechArea];
    document.body.style = `background: ${background};`;
  }
};
store.subscribe(handleChange);
store.dispatch(ActionCreator.setTechArea("physics"));

const elementClass = "ma0 v-mid";
const titleClass = "b bg-white f5 ph1 pt1 tc";

const container0 = React.createElement(TechAreaChooserContainer);
const element0 = React.createElement(
  ReactRedux.Provider,
  { store },
  container0
);
const panel0 = React.createElement(TitledElement, {
  element: element0,
  title: "Technology Area",
  elementClass,
  titleClass,
});
ReactDOM.render(panel0, document.getElementById("techAreaChooserPanel"));

const container1 = React.createElement(TechListContainer);
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
const panel1 = React.createElement(TitledElement, {
  element: element1,
  title: "Technology Choices",
  elementClass,
  titleClass,
});
ReactDOM.render(panel1, document.getElementById("techListPanel"));

const container2 = React.createElement(TechChooserContainer);
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
const panel2 = React.createElement(TitledElement, {
  element: element2,
  title: "Technologies",
  elementClass,
  titleClass,
});
ReactDOM.render(panel2, document.getElementById("techChooserPanel"));
