import TechList from "../view/TechList.js";

const mapStateToProps = (state) => ({ techKeys: state.prerequisiteKeys });

export default ReactRedux.connect(mapStateToProps)(TechList);
