import ReactUtils from "./ReactUtilities.js";
import TechnologyCell from "./TechnologyCell.js";

const createCell = onClick => technology => {
  const { name } = technology;
  const element = React.createElement(TechnologyCell, { technology, onClick });

  return ReactDOMFactories.span(
    {
      key: `${name}TechnologyCell`,
      className: "mh1"
    },
    element
  );
};

class TechnologyRow extends React.Component {
  render() {
    const { myKey, onClick, technologies } = this.props;
    const cells = R.map(createCell(onClick), technologies);
    const row = ReactUtils.createRow(cells, `${myKey}TechnologyCellRow`);

    return ReactUtils.createTable(row, `${myKey}TechnologyCellTable`, "center tc v-top");
  }
}

TechnologyRow.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  myKey: PropTypes.string,
  onClick: PropTypes.func
};

TechnologyRow.defaultProps = {
  myKey: "myKey",
  onClick: undefined
};

export default TechnologyRow;
