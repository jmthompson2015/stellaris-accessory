import TechUtils from "../model/TechnologyUtilities.js";

import TechList from "../view/TechList.js";

const filterFunction = (areaKey) => (item) => item.area === areaKey;

const mapFunction = (item) => item.key;

const mapStateToProps = (state, ownProps) => {
  const techKeys0 = R.concat(state.goalKeys, state.prerequisiteKeys);
  const techKeys1 = R.uniq(techKeys0);
  const { areaKey } = ownProps;
  let techKeys = techKeys1;

  if (areaKey) {
    const technologies0 = TechUtils.technologies(techKeys1);
    const technologies1 = R.filter(filterFunction(areaKey), technologies0);
    techKeys = R.map(mapFunction, technologies1);
  }

  return { techKeys };
};

export default ReactRedux.connect(mapStateToProps)(TechList);
