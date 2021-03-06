import Technology from "../../artifact/Technology.js";

import TechUtils from "../model/TechnologyUtilities.js";

const { CheckboxPanel } = ReactComponent;

const labelFunction = (item) => {
  const style = {
    color: TechUtils.areaColor(item.area),
    verticalAlign: "middle",
  };
  const label = `${item.name} (Tier ${item.tier})`;

  return ReactDOMFactories.span({ style }, label);
};

class TechChooser extends React.PureComponent {
  render() {
    const { applyOnClick, areaKey } = this.props;
    const filterFunction = (item) =>
      item.start_tech !== true && item.area === areaKey;
    const technologies = Object.values(Technology);
    const areaTechs = R.filter(filterFunction, technologies);
    const items = R.sortBy(R.prop("name"), areaTechs);

    return React.createElement(CheckboxPanel, {
      key: `techChooser${areaKey}`,
      className: "tech-chooser",
      items,
      applyOnClick,
      itemToChecked: {},
      labelFunction,
      useSelectButtons: true,
    });
  }
}

TechChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,
  areaKey: PropTypes.string.isRequired,
};

export default TechChooser;
