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

    const labelClass = "pa1 tr";
    const selectClass = "pa1";

    const cells0 = [
      ReactUtils.createCell("Area: ", "areaLabel", labelClass),
      ReactUtils.createCell(areaSelect, "areaSelect", selectClass)
    ];
    const topRow = ReactUtils.createRow(cells0);
    const topTable = ReactUtils.createTable(topRow, "topTable", "center m0 pa1");

    const cells1 = [
      ReactUtils.createCell("Category: ", "categoryLabel", labelClass),
      ReactUtils.createCell(
        categorySelect,
        "categorySelect",
        `b--slate-gray br bw1 ${selectClass}`
      ),
      ReactUtils.createCell("Starting: ", "starterLabel", `b--slate-gray bb bw1 ${labelClass}`),
      ReactUtils.createCell(starterSelect, "starterSelect", `b--slate-gray bb bw1 ${selectClass}`)
    ];
    const cells2 = [
      ReactUtils.createCell("Research: ", "researchLabel", labelClass),
      ReactUtils.createCell(
        researchSelect,
        "researchSelect",
        `b--slate-gray br bw1 ${selectClass}`
      ),
      ReactUtils.createCell("Rare: ", "rareLabel", labelClass),
      ReactUtils.createCell(rareSelect, "rareSelect", selectClass)
    ];
    const innerRows = [
      ReactUtils.createRow(cells1, "categoryStarterRow"),
      ReactUtils.createRow(cells2, "researchRareRow")
    ];
    const innerTable = ReactUtils.createTable(innerRows, "innerTable");

    const cell0 = ReactUtils.createCell(topTable, "topTable", "b--slate-gray bb bw1");
    const cell1 = ReactUtils.createCell(innerTable, "innerTableRow");

    const rows = [
      ReactUtils.createRow(cell0, "topTable"),
      ReactUtils.createRow(cell1, "innerTableRow")
    ];

    return ReactUtils.createTable(rows, "inputPanel", "bg-gainsboro");
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
