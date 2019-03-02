import Technology from "../../artifact/Technology.js";

const createOption = technology =>
  ReactDOMFactories.option({ key: technology.key, value: technology.key }, technology.name);

class TechnologySelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { myKey, onChange } = this.props;
    const technologySelect = document.getElementById(`${myKey}technologySelect`);
    const selected = technologySelect.options[technologySelect.selectedIndex].value;
    onChange(selected);
  }

  render() {
    const { myKey, technologies, technologyKey } = this.props;
    const options = R.map(createOption, technologies);

    return ReactDOMFactories.select(
      {
        key: technologyKey,
        id: `${myKey}technologySelect`,
        defaultValue: technologyKey,
        onChange: this.handleChange
      },
      options
    );
  }
}

TechnologySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  technologyKey: PropTypes.string.isRequired,

  myKey: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.shape())
};

TechnologySelect.defaultProps = {
  myKey: "myKey",
  technologies: Object.values(Technology)
};

export default TechnologySelect;
