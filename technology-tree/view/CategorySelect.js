import Category from "../../artifact/TechnologyCategory.js";

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
    const options = R.map(createOption, categories);

    return ReactDOMFactories.select(
      {
        key: categoryKey,
        id: `${myKey}categorySelect`,
        defaultValue: categoryKey,
        onChange: this.handleChange
      },
      options
    );
  }
}

CategorySelect.propTypes = {
  categoryKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  categories: PropTypes.arrayOf(PropTypes.shape()),
  myKey: PropTypes.string
};

CategorySelect.defaultProps = {
  categories: Object.values(Category),
  myKey: "myKey"
};

export default CategorySelect;
