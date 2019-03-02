import Category from "../../artifact/TechnologyCategory.js";

import ReactUtils from "./ReactUtilities.js";

// 2.0: const BASE = "https://gitlab.com/bipedalshark/stellaris-tech-tree/raw/master/";
// 2.0: const IMG = `${BASE}public/vanilla/img/`;
const BASE = "https://turanar.github.io/stellaris-tech-tree/";
const IMG = `${BASE}assets/img/`;

const createImage = technology => {
  const { key } = technology;
  let className = "v-mid";

  if (technology.isDangerous) {
    className += " b--dangerous ba bw2";
  } else if (technology.isRare) {
    className += " b--rare ba bw2";
  }

  return ReactDOMFactories.img({
    className,
    src: `${IMG}${key}.png`,
    style: { width: 48 }
  });
};

const createLabel1 = technology => {
  const { name } = technology;

  return name;
};

const createLabel2 = technology => {
  const { category, tier } = technology;
  const categoryObj = Category[category];
  const myTier = technology.isStartTech ? "Starting" : `Tier ${tier}`;

  return `${categoryObj.name} (${myTier})`;
};

const createLabel3 = technology => {
  const { cost } = technology;

  if (cost !== undefined && typeof cost === "number") {
    return `Cost: ${cost}`;
  }

  return "";
};

const createLabel = technology => {
  const label1 = createLabel1(technology);
  const label2 = createLabel2(technology);
  const label3 = createLabel3(technology);
  const rows = [
    ReactUtils.createRow(ReactUtils.createCell(label1), "labelLine1", "b f6"),
    ReactUtils.createRow(ReactUtils.createCell(label2), "labelLine2"),
    ReactUtils.createRow(ReactUtils.createCell(label3), "labelLine3")
  ];

  return ReactUtils.createTable(rows, "innerTable", "f7 tl");
};

class TechnologyCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClickFunction.bind(this);
  }

  handleClickFunction() {
    const { onClick, technology } = this.props;
    onClick(technology);
  }

  render() {
    const { myKey, technology } = this.props;
    const image = createImage(technology);
    const label = createLabel(technology);

    const { name } = technology;
    const row = ReactUtils.createRow([
      ReactUtils.createCell(image, "imageCell"),
      ReactUtils.createCell(label, "labelCell", "pl1 v-mid")
    ]);
    const innerTable = ReactUtils.createTable(row, "innerTable");

    const outerClass = `b--${technology.area} ba bg-white bw2 ${technology.isRare ? "pr1" : "pa1"}`;
    const outerProps = { onClick: this.handleClick, title: technology.description };

    return ReactUtils.createCell(
      innerTable,
      `${myKey}${name}TechnologyCell`,
      outerClass,
      outerProps
    );
  }
}

TechnologyCell.propTypes = {
  technology: PropTypes.shape().isRequired,

  myKey: PropTypes.string,
  onClick: PropTypes.func
};

TechnologyCell.defaultProps = {
  myKey: "myKey",
  onClick: () => {}
};

export default TechnologyCell;
