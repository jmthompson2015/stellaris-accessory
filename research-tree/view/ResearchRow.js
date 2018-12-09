import ReactUtils from "./ReactUtilities.js";
import ResearchCell from "./ResearchCell.js";

const createCell = research => {
  const { name } = research;

  return React.createElement(ResearchCell, { research, key: `${name}ResearchCell` });
};

class ResearchRow extends React.Component {
  render() {
    const { myKey, researches } = this.props;
    const cells = R.map(createCell, researches);
    const row = ReactUtils.createRow(cells, `${myKey}ResearchCellRow`, "center tc");

    return ReactUtils.createTable(row, `${myKey}ResearchCellTable`, "center tc");
  }
}

ResearchRow.propTypes = {
  researches: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  myKey: PropTypes.string
};

ResearchRow.defaultProps = {
  myKey: "myKey"
};

export default ResearchRow;
