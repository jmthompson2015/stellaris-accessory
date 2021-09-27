import TU from "../model/TechnologyUtilities.js";

import TechList from "./TechList.js";
import TierSelect from "./TierSelect.js";

const { ReactUtilities: RU } = ReactComponent;

const createSelectPanel = (initialValue, onChange, techAreaKey) => {
  const tierSelect = React.createElement(TierSelect, {
    onChange,
    techAreaKey,
    initialValue,
  });
  const cells = [
    RU.createCell(RU.createSpan("Tier: ", "labelSpan", "pr2"), "labelCell"),
    RU.createCell(tierSelect, "tierSelectCell"),
  ];
  const row = RU.createRow(cells, "selectRow");

  return RU.createTable(row, "selectPanel");
};

class TierPanel extends React.PureComponent {
  render() {
    const {
      goalKeys,
      initialValue,
      onChange,
      techAreaKey,
      techKeys,
    } = this.props;
    const technologies = TU.technologies(goalKeys);
    const prerequisites = TU.prerequisitesForTechnologies(technologies);
    const technologies2 = R.concat(prerequisites, technologies);
    const goalKeys2 = R.uniq(R.map(R.prop("key"), technologies2));

    const tierSelect = createSelectPanel(initialValue, onChange, techAreaKey);
    const techList = React.createElement(TechList, {
      goalKeys: goalKeys2,
      techKeys,
    });

    const selectCell = RU.createCell(tierSelect, "selectCell", "pa1");
    const listCell = RU.createCell(techList, "listCell", "pa1");
    const rows = [
      RU.createRow(selectCell, "selectRow"),
      RU.createRow(listCell, "listRow"),
    ];

    return RU.createTable(rows, `${techAreaKey}TierPanel`);
  }
}

TierPanel.propTypes = {
  goalKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  techAreaKey: PropTypes.string.isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,

  initialValue: PropTypes.string,
};

TierPanel.defaultProps = {
  initialValue: 1,
};

export default TierPanel;
