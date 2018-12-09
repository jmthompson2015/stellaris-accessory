import Category from "../artifact/Category.js";

const createOption = category =>
  ReactDOMFactories.option({ key: category.key, value: category.key }, category.name);

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { myKey, onChange } = this.props;
    const categorySelect = document.getElementById(`${myKey}categorySelect`);
    const selected = categorySelect.options[categorySelect.selectedIndex].value;
    onChange(selected);
  }

  render() {
    const { categories, categoryKey, myKey } = this.props;
    const options0 = [ReactDOMFactories.option({ key: "-all-" }, "-all-")];
    const options = R.map(createOption, categories);

    return ReactDOMFactories.select(
      { id: `${myKey}categorySelect`, defaultValue: categoryKey, onChange: this.handleChange },
      options0,
      options
    );
  }
}

CategorySelect.propTypes = {
  onChange: PropTypes.func.isRequired,

  categories: PropTypes.arrayOf(PropTypes.shape()),
  categoryKey: PropTypes.string,
  myKey: PropTypes.string
};

CategorySelect.defaultProps = {
  categories: Object.values(Category),
  categoryKey: undefined,
  myKey: "myKey"
};

export default CategorySelect;
