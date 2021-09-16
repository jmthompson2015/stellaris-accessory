import R from "ramda";

const Lexer = {};

const maybeAppend = (string) => (array) =>
  string.length > 0 ? R.append(string, array) : array;

const removeBlanks = (tokens) => R.filter((t) => t !== "", tokens);

const removeComments = (input) => {
  const lines0 = input.split(/[\r\n]/);
  const mapFunction = (l) => {
    const index = l.indexOf("#");
    if (index >= 0) {
      return l.substring(0, index);
    }
    return l;
  };
  const lines1 = R.map(mapFunction, lines0);

  return lines1.join("\n");
};

const removeQuotationMarks = (tokens) => {
  const mapFunction = (t) => {
    if (t.indexOf(" ") < 0 && t.indexOf('"') >= 0) {
      return t.replace(/"/g, "");
    }
    return t;
  };

  return R.map(mapFunction, tokens);
};

const separateChar = (char) => (tokens) => {
  const reduceFunction = (accum, t) => {
    if (t.length > char.length) {
      const index0 = t.indexOf(char);

      if (index0 >= 0) {
        const parts = t.split(char);
        const pipeFunction = R.pipe(
          maybeAppend(parts[0]),
          R.append(char),
          maybeAppend(parts[1])
        );
        return pipeFunction(accum);
      }
    }
    return R.append(t, accum);
  };

  return R.reduce(reduceFunction, [], tokens);
};

Lexer.lex = (input) => {
  const input1 = removeComments(input);
  const tokens0 = input1.split(/[\s\n]/);

  const pipeFunction = R.pipe(
    removeBlanks,
    separateChar("{"),
    separateChar("}"),
    removeQuotationMarks
  );

  return pipeFunction(tokens0);
};

export default Lexer;
