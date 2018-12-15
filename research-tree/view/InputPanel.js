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
      rareResearches,
      researches,
      researchKey,
      startingResearches
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
    const starterSelect = React.createElement(ResearchSelect, {
      onChange: onResearchChange,
      researches: startingResearches,
      researchKey,
      myKey: "starting"
    });
    const rareSelect = React.createElement(ResearchSelect, {
      onChange: onResearchChange,
      researches: rareResearches,
      researchKey,
      myKey: "rare"
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
    const cells3 = [
      ReactUtils.createCell("Starting: ", "starterLabel", "pr1 pv1"),
      ReactUtils.createCell(starterSelect, "starterSelect")
    ];
    const cells4 = [
      ReactUtils.createCell("Rare: ", "rareLabel", "pr1 pv1"),
      ReactUtils.createCell(rareSelect, "rareSelect")
    ];

    const rows = [
      ReactUtils.createRow(cells0, "areaRow"),
      ReactUtils.createRow(cells1, "categoryRow"),
      ReactUtils.createRow(cells2, "researchRow"),
      ReactUtils.createRow(cells3, "starterRow"),
      ReactUtils.createRow(cells4, "rareRow")
    ];

    return ReactUtils.createTable(rows, "inputPanel", "bg-gainsboro pa1");
  }
}

InputPanel.propTypes = {
  onAreaChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onResearchChange: PropTypes.func.isRequired,

  areaKey: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  categoryKey: PropTypes.string,
  rareResearches: PropTypes.arrayOf(PropTypes.shape()),
  researches: PropTypes.arrayOf(PropTypes.shape()),
  researchKey: PropTypes.string,
  startingResearches: PropTypes.arrayOf(PropTypes.shape())
};

InputPanel.defaultProps = {
  areaKey: undefined,
  categories: undefined,
  categoryKey: undefined,
  rareResearches: [],
  researches: undefined,
  researchKey: undefined,
  startingResearches: []
};

export default InputPanel;
