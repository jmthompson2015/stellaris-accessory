import Area from "../artifact/Area.js";

const createOption = key => {
  const area = Area[key];

  return ReactDOMFactories.option({ key, value: key }, area.name);
};

class AreaSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { onChange } = this.props;
    const areaSelect = document.getElementById("areaSelect");
    const selected = areaSelect.options[areaSelect.selectedIndex].value;
    onChange(selected);
  }

  render() {
    const { areaKey } = this.props;
    const options0 = [ReactDOMFactories.option({ key: "-all-" }, "-all-")];
    const options = R.map(key => createOption(key), Object.keys(Area));

    return ReactDOMFactories.select(
      { id: "areaSelect", defaultValue: areaKey, onChange: this.handleChange },
      options0,
      options
    );
  }
}

AreaSelect.propTypes = {
  onChange: PropTypes.func.isRequired,

  areaKey: PropTypes.string
};

AreaSelect.defaultProps = {
  areaKey: undefined
};

export default AreaSelect;
