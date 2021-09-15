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
  const row = RU.createRow(cells);

  return RU.createTable(row, "selectPanel", "pa1");
};

class TierPanel extends React.PureComponent {
  render() {
    const { initialValue, onChange, techAreaKey, techKeys } = this.props;
    const tierSelect = createSelectPanel(initialValue, onChange, techAreaKey);
    const techList = React.createElement(TechList, { techKeys });
    const selectCell = RU.createCell(tierSelect);
    const listCell = RU.createCell(techList);
    const rows = [
      RU.createRow(selectCell, "selectCell"),
      RU.createRow(listCell, "listCell"),
    ];

    return RU.createTable(rows, `${techAreaKey}TierPanel`);
  }
}

TierPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
  techAreaKey: PropTypes.string.isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,

  initialValue: PropTypes.string,
};

TierPanel.defaultProps = {
  initialValue: undefined,
};

export default TierPanel;
