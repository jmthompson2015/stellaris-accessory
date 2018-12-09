import Research from "../artifact/Research.js";

import ResearchTable from "../view/ResearchTable.js";

const mapStateToProps = state => {
  const { researchKey } = state;
  const research = Research[researchKey];

  return { research };
};

export default ReactRedux.connect(mapStateToProps)(ResearchTable);
