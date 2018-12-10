import ReactUtils from "./ReactUtilities.js";
import ResearchCell from "./ResearchCell.js";

const createCell = research => {
  const { name } = research;
  const element = React.createElement(ResearchCell, { research });

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
    const { myKey, researches } = this.props;
    const cells = R.map(createCell, researches);
    const row = ReactUtils.createRow(cells, `${myKey}ResearchCellRow`);

    return ReactUtils.createTable(row, `${myKey}ResearchCellTable`, "center tc v-top");
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
