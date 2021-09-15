import TU from "../model/TechnologyUtilities.js";

const { Select } = ReactComponent;

class TierSelect extends React.PureComponent {
  render() {
    const { initialValue, onChange, techAreaKey } = this.props;
    const reduceFunction = (accum, tier) =>
      R.append({ key: tier, label: tier }, accum);
    const tiers = TU.tiersByArea(techAreaKey);
    const values = R.reduce(reduceFunction, [], tiers);

    return React.createElement(Select, {
      id: techAreaKey,
      initialValue,
      onChange,
      values,
    });
  }
}

TierSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  techAreaKey: PropTypes.string.isRequired,

  initialValue: PropTypes.string,
};

TierSelect.defaultProps = {
  initialValue: undefined,
};

export default TierSelect;
