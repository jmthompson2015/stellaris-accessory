import AreaSelect from "./AreaSelect.js";
import CategorySelect from "./CategorySelect.js";
import ReactUtils from "./ReactUtilities.js";
import ResearchSelect from "./ResearchSelect.js";

class InputPanel extends React.Component {
  render() {
    const {
      areaKey,
      categories,
      categoryKey,
      onAreaChange,
      onCategoryChange,
      onResearchChange,
      researches,
      researchKey
    } = this.props;

    const areaSelect = React.createElement(AreaSelect, { onChange: onAreaChange, areaKey });
    const categorySelect = React.createElement(CategorySelect, {
      onChange: onCategoryChange,
      categories,
      categoryKey
    });
    const researchSelect = React.createElement(ResearchSelect, {
      onChange: onResearchChange,
      researches,
      researchKey
    });

    const cells0 = [
      ReactUtils.createCell("Area: ", "areaLabel", "pr1 pv1"),
      ReactUtils.createCell(areaSelect, "areaSelect")
    ];
    const cells1 = [
      ReactUtils.createCell("Category: ", "categoryLabel", "pr1 pv1"),
      ReactUtils.createCell(categorySelect, "categorySelect")
    ];
    const cells2 = [
      ReactUtils.createCell("Research: ", "researchLabel", "pr1 pv1"),
      ReactUtils.createCell(researchSelect, "researchSelect")
    ];

    const rows = [
      ReactUtils.createRow(cells0, "areaRow"),
      ReactUtils.createRow(cells1, "categoryRow"),
      ReactUtils.createRow(cells2, "researchRow")
    ];

    return ReactUtils.createTable(rows);
  }
}

InputPanel.propTypes = {
  onAreaChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onResearchChange: PropTypes.func.isRequired,

  areaKey: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  categoryKey: PropTypes.string,
  researches: PropTypes.arrayOf(PropTypes.shape()),
  researchKey: PropTypes.string
};

InputPanel.defaultProps = {
  areaKey: undefined,
  categories: undefined,
  categoryKey: undefined,
  researches: undefined,
  researchKey: undefined
};

export default InputPanel;
