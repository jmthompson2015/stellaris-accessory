/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
/* eslint no-useless-escape: "off" */

const ohm = require("ohm-js");

const Parser = {};

Parser.grammar = ohm.grammar(`
  Stellaris {
    Exp = AssignExp+

	  AssignExp = KeyExp "=" ValExp

    KeyExp = string

    ValExp = (ObjAssignExp | ObjValExp | SimpleValExp)

    ObjAssignExp = "{" AssignExp+ "}"

    ObjValExp = "{" SimpleValExp* "}"

    SimpleValExp = number | qstring | string

    qstring = "\"" string "\""

    string = (letter | number | "_" | "@")+

    number = float | int
    float = "-"* digit+ "."* digit*
    int = digit+
  }
`);

Parser.semantics = Parser.grammar.createSemantics();
Parser.semantics.addOperation("eval", {
  Exp: a => `${a.eval()},
`,
  AssignExp: (a, b, c) => `${a.eval()}: ${c.eval()}`,
  ObjAssignExp: (a, b, c) => `{
  ${b.eval()}
}`,
  ObjValExp: (a, b, c) => {
    if (b.sourceString === undefined || b.sourceString === "") {
      return `[]`;
    }
    return `[
  ${b.eval()},
]`;
  },
  qstring: (a, b, c) => b.eval(),
  string: a => `"${a.sourceString}"`,
  float: (sign, prefix, decimalPoint, suffix) => {
    const p = decimalPoint.sourceString;
    const factor = sign.sourceString !== undefined && sign.sourceString === "-" ? -1.0 : 1.0;

    if (p !== undefined && p.length > 0) {
      return factor * parseFloat(`${prefix.sourceString}${p}${suffix.sourceString}`);
    }
    return factor * parseInt(prefix.sourceString, 10);
  },
  int: i => parseInt(i.sourceString, 10)
});

Parser.parse = (content, isVerbose = false) => {
  const { grammar, semantics } = Parser;
  const matchResult = grammar.match(content);
  if (isVerbose) {
    console.log(`matchResult.succeeded() ? ${matchResult.succeeded()}`);
    console.log(`matchResult.failed() ? ${matchResult.failed()}`);
  }

  if (matchResult.failed()) {
    console.log(`matchResult.shortMessage = ${matchResult.shortMessage}`);
    console.log(`matchResult.message = ${matchResult.message}`);
    console.log(
      `matchResult.getRightmostFailurePosition() = ${matchResult.getRightmostFailurePosition()}`
    );
    console.log(`matchResult.getRightmostFailures() = ${matchResult.getRightmostFailures()}`);
  }

  return semantics(matchResult).eval();
};

module.exports = Parser;
