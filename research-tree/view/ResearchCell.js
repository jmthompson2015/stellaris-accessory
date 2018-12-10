import Category from "../artifact/Category.js";

import ReactUtils from "./ReactUtilities.js";

const BASE = "https://gitlab.com/bipedalshark/stellaris-tech-tree/raw/master/";
const IMG = `${BASE}public/vanilla/img/`;

const createImage = research => {
  const { key } = research;
  const className = `v-mid ${research.is_rare ? "b--rare ba bw2" : ""}`;

  return ReactDOMFactories.img({
    className,
    src: `${IMG}${key}.png`,
    style: { width: 48 }
  });
};

const createLabel1 = research => {
  const { name } = research;

  return name;
};

const createLabel2 = research => {
  const { category, tier } = research;
  const categoryObj = Category[category.replace(/ /g, "_").toUpperCase()];
  const myTier = research.is_start_tech ? "Starting" : `Tier ${tier}`;

  return `${categoryObj.name} (${myTier})`;
};

const createLabel3 = research => {
  const { cost } = research;

  return `Cost: ${cost}`;
};

class ResearchCell extends React.Component {
  render() {
    const { myKey, research } = this.props;
    const image = createImage(research);

    const label1 = createLabel1(research);
    const label2 = createLabel2(research);
    const label3 = createLabel3(research);
    const rows = [
      ReactUtils.createRow(ReactUtils.createCell(label1), "labelLine1", "b f6"),
      ReactUtils.createRow(ReactUtils.createCell(label2), "labelLine2"),
      ReactUtils.createRow(ReactUtils.createCell(label3), "labelLine3")
    ];
    const label = ReactUtils.createTable(rows, "innerTable", "f7 tl");

    const { name } = research;
    const row = ReactUtils.createRow([
      ReactUtils.createCell(image, "imageCell"),
      ReactUtils.createCell(label, "labelCell", "pl1 v-mid")
    ]);
    const innerTable = ReactUtils.createTable(row, "innerTable");

    const outerClass = `b--${research.area} ba bw2 ${research.is_rare ? "pr1" : "pa1"}`;

    return ReactUtils.createCell(innerTable, `${myKey}${name}ResearchCell`, outerClass);
  }
}

ResearchCell.propTypes = {
  research: PropTypes.shape().isRequired,

  myKey: PropTypes.string
};

ResearchCell.defaultProps = {
  myKey: "myKey"
};

export default ResearchCell;
