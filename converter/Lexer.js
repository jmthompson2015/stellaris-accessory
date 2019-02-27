const R = require("ramda");

const Lexer = {};

const removeBlanks = tokens => R.filter(t => t !== "", tokens);

const removeComments = input => {
  const lines0 = input.split(/[\r\n]/);
  const mapFunction = l => {
    const index = l.indexOf("#");
    if (index >= 0) {
      return l.substring(0, index);
    }
    return l;
  };
  const lines1 = R.map(mapFunction, lines0);

  return lines1.join("\n");
};

const removeQuotationMarks = tokens => {
  const mapFunction = t => {
    if (t.indexOf(" ") < 0 && t.indexOf('"') >= 0) {
      return t.replace(/"/g, "");
    }
    return t;
  };

  return R.map(mapFunction, tokens);
};

const separateRightBrace = tokens => {
  const reduceFunction = (accum, t) => {
    if (t.length > 1) {
      const index0 = t.indexOf("}");

      if (index0 >= 0) {
        const accum2 = R.append(t.substring(0, index0), accum);
        const accum3 = R.append("}", accum2);
        if (index0 + 2 < t.length) {
          return R.append(t.substring(index0 + 2), accum3);
        }
        return accum3;
      }
    }
    return R.append(t, accum);
  };

  return R.reduce(reduceFunction, [], tokens);
};

Lexer.lex = input => {
  const input1 = removeComments(input);

  const tokens0 = input1.split(/[\s\n]/);
  const tokens1 = removeBlanks(tokens0);
  const tokens2 = separateRightBrace(tokens1);

  return removeQuotationMarks(tokens2);
};

module.exports = Lexer;
