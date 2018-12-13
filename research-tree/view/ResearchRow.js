import ReactUtils from "./ReactUtilities.js";
import ResearchCell from "./ResearchCell.js";

const createCell = onClick => research => {
  const { name } = research;
  const element = React.createElement(ResearchCell, { research, onClick });

  return ReactDOMFactories.span(
    {
      key: `${name}ResearchCell`,
      className: "mh1"
    },
    element
  );
};

class ResearchRow extends React.Component {
  render() {
    const { myKey, onClick, researches } = this.props;
    const cells = R.map(createCell(onClick), researches);
    const row = ReactUtils.createRow(cells, `${myKey}ResearchCellRow`);

    return ReactUtils.createTable(row, `${myKey}ResearchCellTable`, "center tc v-top");
  }
}

ResearchRow.propTypes = {
  researches: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  myKey: PropTypes.string,
  onClick: PropTypes.func
};

ResearchRow.defaultProps = {
  myKey: "myKey",
  onClick: undefined
};

export default ResearchRow;
