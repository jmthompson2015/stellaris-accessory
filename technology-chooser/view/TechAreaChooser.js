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

    return React.createElement(RadioButtonPanel, {
      key: "techAreaChooser",
      items,
      applyOnClick,
      selected,
    });
  }
}

TechAreaChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default TechAreaChooser;
