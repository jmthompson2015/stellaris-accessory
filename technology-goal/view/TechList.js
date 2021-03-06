import TechUtils from "../model/TechnologyUtilities.js";

const { ReactUtilities: RU } = ReactComponent;

const labelFunction = (item) => {
  const label = `${item.tier}: ${item.name}`;
  const style = {
    color: TechUtils.areaColor(item.area),
    verticalAlign: "middle",
  };

  return ReactDOMFactories.span({ style }, label);
};

const tierNameSort = R.sortWith([
  R.descend(R.prop("tier")),
  R.ascend(R.prop("name")),
]);

class TechList extends React.PureComponent {
  render() {
    const { techKeys } = this.props;

    const key = techKeys.join("");
    const items0 = TechUtils.technologies(techKeys);
    const items = tierNameSort(items0);

    const mapFunction = (item) => {
      const label = labelFunction(item);
      const cell = RU.createCell(label);
      return RU.createRow(cell, item.key);
    };
    const rows = R.map(mapFunction, items);

    return RU.createTable(rows, key, "tech-list-table");
  }
}

TechList.propTypes = {
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechList;
