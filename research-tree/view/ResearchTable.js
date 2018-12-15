import Research from "../artifact/Research.js";

import RU from "../model/ResearchUtilities.js";

import ReactUtils from "./ReactUtilities.js";
import ResearchRow from "./ResearchRow.js";

const maxTier = R.reduce((accum, r) => Math.max(accum, r.tier), 0, Object.values(Research));

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
    const tierFilter = t => r => r.tier === t;
    const rows = [];

    const parentResearches = RU.allParents(research);
    const myCreateRow1 = createRow(onClick);

    for (let t = 0; t <= maxTier; t += 1) {
      const researchByTier = R.filter(tierFilter(t), parentResearches);

      if (researchByTier.length > 0) {
        const row = myCreateRow1(researchByTier);
        rows.push(ReactUtils.createRow(row, `parentResearchRow${t}Row`, rowClass));
      }
    }

    rows.push(createMainCell(onClick)(research));

    const childResearches = RU.allChildren(research);
    const myCreateRow2 = createRow(onClick);

    for (let t = 0; t <= maxTier; t += 1) {
      const researchByTier = R.filter(tierFilter(t), childResearches);

      if (researchByTier.length > 0) {
        const row = myCreateRow2(researchByTier);
        rows.push(ReactUtils.createRow(row, `childResearchRow${t}Row`, rowClass));
      }
    }

    return ReactUtils.createTable(rows, `${myKey}ResearchTable`, "bg-gainsboro tc");
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
