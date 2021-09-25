import TU from "../model/TechnologyUtilities.js";

const { ReactUtilities: RU } = ReactComponent;

const labelFunction = (item, goalKeys) => {
  const isGoal = goalKeys.includes(item.key);
  const prefix = isGoal ? "bg-yellow " : "";
  const className = `${prefix}color-${item.area} v-mid`;
  let answer;

  if (item.is_dangerous || item.is_rare) {
    const span1 = ReactDOMFactories.span({ className }, `${item.tier}: `);
    const colorClass = item.is_dangerous ? "color-dangerous" : "color-rare";
    const span2 = ReactDOMFactories.span(
      { className: `${prefix}${colorClass} v-mid` },
      item.name
    );
    answer = ReactDOMFactories.span({}, span1, span2);
  } else {
    const label = `${item.tier}: ${item.name}`;
    answer = ReactDOMFactories.span({ className }, label);
  }

  return answer;
};

const tierNameSort = R.sortWith([
  R.descend(R.prop("tier")),
  R.ascend(R.prop("name")),
]);

class TechList extends React.PureComponent {
  render() {
    const { goalKeys, techKeys } = this.props;

    const key = techKeys.join("");
    const items0 = TU.technologies(techKeys);
    const items = tierNameSort(items0);

    const mapFunction = (item) => {
      const label = labelFunction(item, goalKeys);
      const cell = RU.createCell(label);
      return RU.createRow(cell, item.key);
    };
    const rows = R.map(mapFunction, items);

    return RU.createTable(rows, key, "tech-list-table bg-white");
  }
}

TechList.propTypes = {
  goalKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechList;
