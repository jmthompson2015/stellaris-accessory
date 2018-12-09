import Research from "../artifact/Research.js";

const createOption = research =>
  ReactDOMFactories.option({ key: research.key, value: research.key }, research.name);

class ResearchSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { myKey, onChange } = this.props;
    const researchSelect = document.getElementById(`${myKey}researchSelect`);
    const selected = researchSelect.options[researchSelect.selectedIndex].value;
    onChange(selected);
  }

  render() {
    const { myKey, researches, researchKey } = this.props;
    const options0 = [ReactDOMFactories.option({ key: "-all-" }, "-all-")];
    const options = R.map(createOption, researches);

    return ReactDOMFactories.select(
      { id: `${myKey}researchSelect`, defaultValue: researchKey, onChange: this.handleChange },
      options0,
      options
    );
  }
}

ResearchSelect.propTypes = {
  onChange: PropTypes.func.isRequired,

  myKey: PropTypes.string,
  researches: PropTypes.arrayOf(PropTypes.shape()),
  researchKey: PropTypes.string
};

ResearchSelect.defaultProps = {
  myKey: "myKey",
  researches: Object.values(Research),
  researchKey: undefined
};

export default ResearchSelect;
