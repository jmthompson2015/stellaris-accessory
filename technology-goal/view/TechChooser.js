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
    const { applyOnClick, selectedKeys } = this.props;
    const technologies = Object.values(Technology);
    const items = R.sortBy(R.prop("name"), technologies);
    const selectedItems = TechUtils.technologies(selectedKeys);

    return React.createElement(CheckboxPanel, {
      key: `techChooser`,
      className: "tech-chooser",
      items,
      applyOnClick,
      labelFunction,
      selectedItems,
      useSelectButtons: true,
    });
  }
}

TechChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,

  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

TechChooser.defaultProps = {
  selectedKeys: [],
};

export default TechChooser;
