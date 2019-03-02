import AreaSelect from "./AreaSelect.js";
import CategorySelect from "./CategorySelect.js";
import ReactUtils from "./ReactUtilities.js";
import TechnologySelect from "./TechnologySelect.js";

class InputPanel extends React.Component {
  render() {
    const {
      areaKey,
      categories,
      categoryKey,
      onAreaChange,
      onCategoryChange,
      onTechnologyChange,
      rareTechnologies,
      technologies,
      technologyKey,
      startingTechnologies
    } = this.props;

    const areaSelect = React.createElement(AreaSelect, { onChange: onAreaChange, areaKey });
    const categorySelect = React.createElement(CategorySelect, {
      onChange: onCategoryChange,
      categories,
      categoryKey
    });
    const technologySelect = React.createElement(TechnologySelect, {
      onChange: onTechnologyChange,
      technologies,
      technologyKey
    });
    const starterSelect = React.createElement(TechnologySelect, {
      onChange: onTechnologyChange,
      technologies: startingTechnologies,
      technologyKey,
      myKey: "starting"
    });
    const rareSelect = React.createElement(TechnologySelect, {
      onChange: onTechnologyChange,
      technologies: rareTechnologies,
      technologyKey,
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
      ReactUtils.createCell("Technology: ", "technologyLabel", labelClass),
      ReactUtils.createCell(
        technologySelect,
        "technologySelect",
        `b--slate-gray br bw1 ${selectClass}`
      ),
      ReactUtils.createCell("Rare: ", "rareLabel", labelClass),
      ReactUtils.createCell(rareSelect, "rareSelect", selectClass)
    ];
    const innerRows = [
      ReactUtils.createRow(cells1, "categoryStarterRow"),
      ReactUtils.createRow(cells2, "technologyRareRow")
    ];
    const innerTable = ReactUtils.createTable(innerRows, "innerTable");

    const cell0 = ReactUtils.createCell(topTable, "topTable", "b--slate-gray bb bw1");
    const cell1 = ReactUtils.createCell(innerTable, "innerTableRow");

    const rows = [
      ReactUtils.createRow(cell0, "topTable"),
      ReactUtils.createRow(cell1, "innerTableRow")
    ];

    return ReactUtils.createTable(rows, "inputPanel", "bg-gainsboro center ma0");
  }
}

InputPanel.propTypes = {
  onAreaChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onTechnologyChange: PropTypes.func.isRequired,

  areaKey: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  categoryKey: PropTypes.string,
  rareTechnologies: PropTypes.arrayOf(PropTypes.shape()),
  technologies: PropTypes.arrayOf(PropTypes.shape()),
  technologyKey: PropTypes.string,
  startingTechnologies: PropTypes.arrayOf(PropTypes.shape())
};

InputPanel.defaultProps = {
  areaKey: undefined,
  categories: undefined,
  categoryKey: undefined,
  rareTechnologies: [],
  technologies: undefined,
  technologyKey: undefined,
  startingTechnologies: []
};

export default InputPanel;
