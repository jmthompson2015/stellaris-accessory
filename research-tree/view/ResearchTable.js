import ResearchUtils from "../model/ResearchUtilities.js";

import ReactUtils from "./ReactUtilities.js";
import ResearchRow from "./ResearchRow.js";

class ResearchTable extends React.Component {
  render() {
    const { isDescending, myKey, research } = this.props;
    const { tier } = research;

    const cellClass = "center pa1 tc";
    const rowClass = "center tc";
    const rows = [];
    const researchRow00 = React.createElement(ResearchRow, { researches: [research] });
    const cell0 = ReactUtils.createCell(researchRow00, "researchRow00Cell", cellClass);
    rows.push(ReactUtils.createRow(cell0, "nameRow", rowClass));

    if (isDescending) {
      const researches = ResearchUtils.allPrerequisites(research);

      for (let t = tier; t >= 0; t -= 1) {
        const researchByTier = R.filter(r => r.tier === t, researches);

        if (researchByTier.length > 0) {
          const researchRow = React.createElement(ResearchRow, {
            researches: researchByTier,
            myKey: `myResearchRow${t}`
          });
          const cell = ReactUtils.createCell(researchRow, `researchRow${t}Cell`, cellClass);
          rows.push(ReactUtils.createRow(cell, `researchRow${t}Row`, rowClass));
        }
      }
    } else {
      const researches = ResearchUtils.allChildren(research);

      for (let t = tier; t < 6; t += 1) {
        const researchByTier = R.filter(r => r.tier === t, researches);

        if (researchByTier.length > 0) {
          const researchRow = React.createElement(ResearchRow, {
            researches: researchByTier,
            myKey: `myResearchRow${t}`
          });
          const cell = ReactUtils.createCell(researchRow, `researchRow${t}Cell`, cellClass);
          rows.push(ReactUtils.createRow(cell, `researchRow${t}Row`, rowClass));
        }
      }
    }

    return ReactUtils.createTable(rows, `${myKey}ResearchTable`, "tc");
  }
}

ResearchTable.propTypes = {
  research: PropTypes.shape().isRequired,

  isDescending: PropTypes.bool,
  myKey: PropTypes.string
};

ResearchTable.defaultProps = {
  isDescending: true,
  myKey: "myKey"
};

export default ResearchTable;
