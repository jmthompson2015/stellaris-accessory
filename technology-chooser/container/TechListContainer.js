import TechList from "../view/TechList.js";

const mapStateToProps = (state) => {
  const techKeys = state.selectedKeys;

  return { techKeys };
};

export default ReactRedux.connect(mapStateToProps)(TechList);
