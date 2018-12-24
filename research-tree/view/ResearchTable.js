import RU from "../model/ResearchUtilities.js";

import ReactUtils from "./ReactUtilities.js";
import ResearchRow from "./ResearchRow.js";

const createRow = onClick => researches => {
  const researchRow = React.createElement(ResearchRow, { researches, onClick });

  return ReactUtils.createCell(researchRow, "researchRowCell", "center pa1 tc");
};

const createTextTable = research => {
  const cell00 = ReactUtils.createCell("Description", "descriptionLabelCell", "b i");
  const cell01 = ReactUtils.createCell("Feature Unlocks", "unlocksLabelCell", "b i");
  const cell10 = ReactUtils.createCell(research.description, "descriptionCell", "", {
    style: { maxWidth: 250 }
  });
  const featureUnlocks = research.feature_unlocks.join("<br/>");
  const cell11 = ReactUtils.createCell(undefined, "unlocksCell", "", {
    dangerouslySetInnerHTML: { __html: featureUnlocks }
  });

  const cells0 = [cell00];
  const cells1 = [cell10];

  if (research.feature_unlocks.length > 0) {
    cells0.push(cell01);
    cells1.push(cell11);
  }

  const rows = [ReactUtils.createRow(cells0, "labelRow"), ReactUtils.createRow(cells1, "valueRow")];

  return ReactUtils.createTable(rows, "textTable", "f6 pa1 tl v-top");
};

const createMainCell = onClick => research => {
  const researchRow00 = React.createElement(ResearchRow, { researches: [research], onClick });
  const textTable = createTextTable(research);

  const cell0 = ReactUtils.createCell(researchRow00, "researchRow00Cell", "v-mid");
  const cell1 = ReactUtils.createCell(textTable, "textTableCell", "v-top");
  const row = ReactUtils.createRow([cell0, cell1]);
  const mainTable = ReactUtils.createTable(row, "mainTable", "center ma0");

  return ReactUtils.createRow(mainTable, "nameRow", `bg-cadet-gray center ma0 pa1 tc`);
};

class ResearchTable extends React.Component {
  render() {
    const { myKey, onClick, research } = this.props;

    const rowClass = "center pa1 tc";
    const rows = [];

    const myCreateRow1 = createRow(onClick);
    let parentResearches = RU.parentsForResearches(research);

    while (parentResearches.length > 0) {
      const row = myCreateRow1(parentResearches);
      rows.unshift(ReactUtils.createRow(row, `parentResearchRow${rows.length}Row`, rowClass));
      parentResearches = RU.parentsForResearches(parentResearches);
    }

    rows.push(createMainCell(onClick)(research));

    const myCreateRow2 = createRow(onClick);
    let childResearches = RU.childrenForResearches(research);

    while (childResearches.length > 0) {
      const row = myCreateRow2(childResearches);
      rows.push(ReactUtils.createRow(row, `childResearchRow${rows.length}Row`, rowClass));
      childResearches = RU.childrenForResearches(childResearches);
    }

    return ReactUtils.createTable(rows, `${myKey}ResearchTable`, "bg-gainsboro center ma0");
  }
}

ResearchTable.propTypes = {
  research: PropTypes.shape().isRequired,

  myKey: PropTypes.string,
  onClick: PropTypes.func
};

ResearchTable.defaultProps = {
  myKey: "myKey",
  onClick: undefined
};

export default ResearchTable;
