import Technology from "../../artifact/Technology.js";

const { ReactUtilities: RU } = ReactComponent;

const tierNameSort = R.sortWith([
  R.descend(R.prop("tier")),
  R.ascend(R.prop("name")),
]);

class TechList extends React.PureComponent {
  render() {
    const { techKeys } = this.props;

    const key = techKeys.join("");
    const items0 = R.map((techKey) => Technology[techKey], techKeys);
    const items = tierNameSort(items0);

    const mapFunction = (item) => {
      const label = `${item.name} (Tier ${item.tier})`;
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
