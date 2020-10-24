import TechList from "../view/TechList.js";

const mapStateToProps = (state) => ({ techKeys: state.goalKeys });

export default ReactRedux.connect(mapStateToProps)(TechList);
