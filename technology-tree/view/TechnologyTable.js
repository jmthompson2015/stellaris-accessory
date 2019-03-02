import TU from "../model/TechnologyUtilities.js";

import ReactUtils from "./ReactUtilities.js";
import TechnologyRow from "./TechnologyRow.js";

const createRow = onClick => technologies => {
  const technologyRow = React.createElement(TechnologyRow, { technologies, onClick });

  return ReactUtils.createCell(technologyRow, "technologyRowCell", "center pa1 tc");
};

const createTextTable = technology => {
  const cell00 = ReactUtils.createCell("Description", "descriptionLabelCell", "b i");
  const cell01 = ReactUtils.createCell("Feature Unlocks", "unlocksLabelCell", "b i");
  const cell10 = ReactUtils.createCell(technology.description, "descriptionCell", "", {
    style: { maxWidth: 250 }
  });
  const featureUnlocks = technology.feature_unlocks ? technology.feature_unlocks.join("<br/>") : "";
  const cell11 = ReactUtils.createCell(undefined, "unlocksCell", "", {
    dangerouslySetInnerHTML: { __html: featureUnlocks }
  });

  const cells0 = [cell00];
  const cells1 = [cell10];

  if (technology.feature_unlocks && technology.feature_unlocks.length > 0) {
    cells0.push(cell01);
    cells1.push(cell11);
  }

  const rows = [ReactUtils.createRow(cells0, "labelRow"), ReactUtils.createRow(cells1, "valueRow")];

  return ReactUtils.createTable(rows, "textTable", "f6 pa1 tl v-top");
};

const createMainCell = onClick => technology => {
  const technologyRow00 = React.createElement(TechnologyRow, {
    technologies: [technology],
    onClick
  });
  const textTable = createTextTable(technology);

  const cell0 = ReactUtils.createCell(technologyRow00, "technologyRow00Cell", "v-mid");
  const cell1 = ReactUtils.createCell(textTable, "textTableCell", "v-top");
  const row = ReactUtils.createRow([cell0, cell1]);
  const mainTable = ReactUtils.createTable(row, "mainTable", "center ma0");

  return ReactUtils.createRow(mainTable, "nameRow", `bg-cadet-gray center ma0 pa1 tc`);
};

class TechnologyTable extends React.Component {
  render() {
    const { myKey, onClick, technology } = this.props;

    const rowClass = "center pa1 tc";
    const rows = [];

    const myCreateRow1 = createRow(onClick);
    let parentTechnologies = TU.parentsForTechnologies(technology);

    while (parentTechnologies.length > 0) {
      const row = myCreateRow1(parentTechnologies);
      rows.unshift(ReactUtils.createRow(row, `parentTechnologyRow${rows.length}Row`, rowClass));
      parentTechnologies = TU.parentsForTechnologies(parentTechnologies);
    }

    rows.push(createMainCell(onClick)(technology));

    const myCreateRow2 = createRow(onClick);
    let childTechnologies = TU.childrenForTechnologies(technology);

    while (childTechnologies.length > 0) {
      const row = myCreateRow2(childTechnologies);
      rows.push(ReactUtils.createRow(row, `childTechnologyRow${rows.length}Row`, rowClass));
      childTechnologies = TU.childrenForTechnologies(childTechnologies);
    }

    return ReactUtils.createTable(rows, `${myKey}TechnologyTable`, "bg-gainsboro center ma0");
  }
}

TechnologyTable.propTypes = {
  technology: PropTypes.shape().isRequired,

  myKey: PropTypes.string,
  onClick: PropTypes.func
};

TechnologyTable.defaultProps = {
  myKey: "myKey",
  onClick: undefined
};

export default TechnologyTable;
