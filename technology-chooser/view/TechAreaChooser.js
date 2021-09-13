import TechnologyArea from "../../artifact/TechnologyArea.js";

const { RadioButtonPanel } = ReactComponent;

class TechAreaChooser extends React.PureComponent {
  render() {
    const { applyOnClick, selected } = this.props;
    const mapFunction = (item) => ({
      key: item.key,
      label: item.name,
    });
    const items0 = [
      TechnologyArea.physics,
      TechnologyArea.society,
      TechnologyArea.engineering,
    ];
    const items = R.map(mapFunction, items0);
    const labelFunction = (item) => item.label;
    const filterFunction = (item) => item.key === selected;
    const selectedItem = R.head(R.filter(filterFunction, items));

    return React.createElement(RadioButtonPanel, {
      key: "techAreaChooser",
      items,
      applyOnClick,
      className: "w-100",
      labelFunction,
      selectedItem,
    });
  }
}

TechAreaChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default TechAreaChooser;
