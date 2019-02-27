const R = require("ramda");

const Lexer = {};

Lexer.lex = input => {
  // Remove embedded comments.
  const lines0 = input.split(/[\r\n]/);
  const lines1 = R.map(l => {
    const index = l.indexOf("#");
    if (index >= 0) {
      return l.substring(0, index);
    }
    return l;
  }, lines0);
  const input1 = lines1.join("\n");

  const tokens0 = input1.split(/[\s\n]/);
  const tokens1 = R.filter(t => t !== "", tokens0);

  // Separate }.
  const reduceFunction = (accum, t) => {
    const index0 = t.indexOf("}");
    if (t.length > 1 && index0 >= 0) {
      const accum2 = R.append(t.substring(0, index0), accum);
      const accum3 = R.append("}", accum2);
      if (index0 + 2 < t.length) {
        return R.append(t.substring(index0 + 2), accum3);
      }
      return accum3;
    }
    return R.append(t, accum);
  };
  const tokens2 = R.reduce(reduceFunction, [], tokens1);

  // Remove quotation marks.
  const mapFunction = t => {
    if (t.indexOf(" ") < 0 && t.indexOf('"') >= 0) {
      return t.replace(/"/g, "");
    }
    return t;
  };
  const tokens = R.map(mapFunction, tokens2);

  return tokens;
};

module.exports = Lexer;
