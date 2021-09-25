import TU from "../model/TechnologyUtilities.js";

const { CheckboxPanel } = ReactComponent;

const labelFunction = (item) => {
  const className = `color-${item.area} v-mid`;
  let answer;

  if (item.is_dangerous || item.is_rare) {
    const span1 = ReactDOMFactories.span({ className }, `${item.tier}: `);
    const colorClass = item.is_dangerous ? "color-dangerous" : "color-rare";
    const span2 = ReactDOMFactories.span(
      { className: `${colorClass} v-mid` },
      item.name
    );
    answer = ReactDOMFactories.span({}, span1, span2);
  } else {
    const label = `${item.tier}: ${item.name}`;
    answer = ReactDOMFactories.span({ className }, label);
  }

  return answer;
};

class TechChooser extends React.PureComponent {
  render() {
    const { applyOnClick, selectedKeys, techAreaKey } = this.props;
    const technologies = TU.techByArea(techAreaKey);
    const techKeys = TU.techKeysByArea(techAreaKey);
    const key = techKeys.join("");
    const items = R.sortBy(R.prop("name"), technologies);
    const selectedItems = TU.technologies(selectedKeys);

    return React.createElement(CheckboxPanel, {
      key,
      className: "tech-chooser",
      items,
      applyOnClick,
      labelFunction,
      selectedItems,
      useSelectButtons: true,
    });
  }
}

TechChooser.propTypes = {
  applyOnClick: PropTypes.func.isRequired,
  techAreaKey: PropTypes.string.isRequired,

  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

TechChooser.defaultProps = {
  selectedKeys: [],
};

export default TechChooser;
