const R = require("ramda");

const EnumGenerator = {};

function toCamelCase(str) {
  return str
    .split(" ")
    .map((word, index) => {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }

      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

EnumGenerator.createEnumName = card => {
  const name = card;

  const answer = R.pipe(
    R.replace(/[().!#'"’]/g, ""),
    R.replace(/[- /]/g, "_"),
    R.toUpper
  )(name);

  return answer;
};

EnumGenerator.createEnumValue = card => {
  const name = card;

  const answer = R.pipe(
    R.replace(/[().!#'"’]/g, ""),
    R.replace(/[-/]/g, " ")
  )(name);

  return toCamelCase(answer);
};

module.exports = EnumGenerator;
