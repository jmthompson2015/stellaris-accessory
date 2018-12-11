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
    const options = R.map(key => createOption(key), Object.keys(Area));

    return ReactDOMFactories.select(
      { id: "areaSelect", defaultValue: areaKey, onChange: this.handleChange },
      options
    );
  }
}

AreaSelect.propTypes = {
  areaKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AreaSelect;
