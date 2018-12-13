import Research from "../artifact/Research.js";

import RU from "../model/ResearchUtilities.js";

import ReactUtils from "./ReactUtilities.js";
import ResearchRow from "./ResearchRow.js";

const maxTier = R.reduce((accum, r) => Math.max(accum, r.tier), 0, Object.values(Research));

class ResearchTable extends React.Component {
  render() {
    const { myKey, onClick, research } = this.props;

    const cellClass = "center pa1 tc";
    const rowClass = "center tc";
    const tierFilter = t => r => r.tier === t;
    const rows = [];

    const parentResearches = RU.allParents(research);

    for (let t = 0; t <= maxTier; t += 1) {
      const researchByTier = R.filter(tierFilter(t), parentResearches);

      if (researchByTier.length > 0) {
        const researchRow = React.createElement(ResearchRow, {
          researches: researchByTier,
          myKey: `myResearchRow${t}`,
          onClick
        });
        const cell = ReactUtils.createCell(researchRow, `parentResearchRow${t}Cell`, cellClass);
        rows.push(ReactUtils.createRow(cell, `parentResearchRow${t}Row`, rowClass));
      }
    }

    const researchRow00 = React.createElement(ResearchRow, { researches: [research], onClick });
    const cell0 = ReactUtils.createCell(researchRow00, "researchRow00Cell", cellClass);
    rows.push(ReactUtils.createRow(cell0, "nameRow", `bg-gainsboro ${rowClass}`));

    const childResearches = RU.allChildren(research);

    for (let t = 0; t <= maxTier; t += 1) {
      const researchByTier = R.filter(tierFilter(t), childResearches);

      if (researchByTier.length > 0) {
        const researchRow = React.createElement(ResearchRow, {
          researches: researchByTier,
          myKey: `myResearchRow${t}`,
          onClick
        });
        const cell = ReactUtils.createCell(researchRow, `childResearchRow${t}Cell`, cellClass);
        rows.push(ReactUtils.createRow(cell, `childResearchRow${t}Row`, rowClass));
      }
    }

    return ReactUtils.createTable(rows, `${myKey}ResearchTable`, "tc");
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
