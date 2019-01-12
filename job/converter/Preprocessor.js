const R = require("ramda");

const Preprocessor = {};

Preprocessor.process = content0 => {
  // Remove blank lines and comment lines.
  const lines0 = content0.split(/[\r\n]/);
  const lines1 = R.filter(f => f.trim() !== "" && f.trim().charAt(0) !== "#", lines0);

  // FIXME: remove lines with "<", ">=", or ">"
  const lines2 = R.filter(f => !(f.includes("<") || f.includes(">=") || f.includes(">")), lines1);

  // FIXME: remove embedded comments
  const lines3 = R.map(l => {
    const index = l.indexOf("#");
    if (index >= 0) {
      return l.substring(0, index);
    }
    return l;
  }, lines2);

  const content1 = lines3.join("\n");
  const content = content1.replace(/"/g, "");

  return content;
};

module.exports = Preprocessor;
