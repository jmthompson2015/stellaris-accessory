import ReactUtils from "./ReactUtilities.js";

class HistoryPanel extends React.Component {
  render() {
    const { isBackDisabled, isForwardDisabled, onBack, onForward } = this.props;

    const imageClass = "tc v-mid";
    const backImage = ReactDOMFactories.img({
      src: "../view/back.png",
      className: imageClass,
      height: 24,
      width: 24
    });
    const forwardImage = ReactDOMFactories.img({
      src: "../view/forward.png",
      className: imageClass,
      height: 24,
      width: 24
    });

    const buttonClass = "ma0 pa1 tc";
    const backButton = ReactDOMFactories.button(
      { className: buttonClass, disabled: isBackDisabled, onClick: onBack, title: "Back" },
      backImage
    );
    const forwardButton = ReactDOMFactories.button(
      { className: buttonClass, disabled: isForwardDisabled, onClick: onForward, title: "Forward" },
      forwardImage
    );

    const row = ReactUtils.createRow([
      ReactUtils.createCell(backButton, "backButtonCell"),
      ReactUtils.createCell(forwardButton, "forwardButtonCell")
    ]);

    return ReactUtils.createTable(row, "historyPanelTable", "bg-gainsboro center ma0");
  }
}

HistoryPanel.propTypes = {
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,

  isBackDisabled: PropTypes.bool,
  isForwardDisabled: PropTypes.bool
};

HistoryPanel.defaultProps = {
  isBackDisabled: false,
  isForwardDisabled: false
};

export default HistoryPanel;
