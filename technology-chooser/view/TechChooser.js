import Technology from "../../artifact/Technology.js";

const { CheckboxPanel } = ReactComponent;

class TechChooser extends React.PureComponent {
  render() {
    const { applyOnClick, areaKey } = this.props;
    const filterFunction = (item) => item.area === areaKey;
    const technologies = Object.values(Technology);
    const areaTechs = R.filter(filterFunction, technologies);

    const mapFunction = (item) => ({
      key: item.key,
      label: `${item.name} (Tier ${item.tier})`,
      tier: item.tier,
    });
    const items1 = R.map(mapFunction, areaTechs);
    const items = R.sortBy(R.prop("label"), items1);

    return React.createElement(CheckboxPanel, {
      key: `techChooser${areaKey}`,
      className: "tech-chooser",
      items,
      applyOnClick,
      itemToChecked: {},
      useSelectButtons: true,
    });
  }
}

TechChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,
  areaKey: PropTypes.string.isRequired,
};

export default TechChooser;
