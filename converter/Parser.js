/* eslint no-console: ["error", { allow: ["log"] }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */

import R from "ramda";

const Parser = {};

const convertValue = (value) => {
  let answer = value;

  if (value.match(/^[-+]?\d+$/)) {
    answer = parseInt(value, 10);
  } else if (value.match(/^[-+]?\d+\.\d+$/)) {
    answer = parseFloat(value);
  } else if (value === "yes") {
    answer = true;
  } else if (value === "no") {
    answer = false;
  }

  return answer;
};

const matchBrace = (content) => {
  let index = 0;
  let openCount = 1;
  let closeCount = 0;

  while (closeCount < openCount && index < content.length) {
    index += 1;
    if (content[index] === "{") {
      openCount += 1;
    } else if (content[index] === "}") {
      closeCount += 1;
    }
  }

  return content.slice(0, index + 1);
};

const parseObject = (fragment0) => {
  // Trim brackets.
  const fragment = fragment0.slice(1, -1);
  // console.log(`fragment = :${fragment}:`);
  let answer = {};
  let key;
  let value;

  for (let i = 0; i < fragment.length; i += 1) {
    if (fragment[i] === "=") {
      key = fragment[i - 1];
      // console.log(`${i} key = :${key}:`);

      if (fragment[i + 1] === "{") {
        const fragment2 = matchBrace(fragment.slice(i + 1));

        if (fragment2.includes("=")) {
          // Object.
          value = parseObject(fragment2);
          i += fragment2.length;
        } else {
          // Array.
          value = fragment2.slice(1, -1);
          i += value.length;
        }
      } else {
        // String.
        value = convertValue(fragment[i + 1]);
        i += 1;
      }

      // console.log(`${i + 1} value = :${value}:`);
      answer = R.assoc(key, value, answer);
    }
  }

  return answer;
};

Parser.parse = (tokens, isVerbose = false) => {
  let answer = {};
  let index0 = 0;
  let index1 = tokens.indexOf("=");

  while (index0 >= 0 && index1 > index0) {
    const key = tokens.slice(index0, index1)[0];
    // console.log(`key = :${key}:`);

    const index2 = index1 + 1;

    if (tokens[index2] === "{") {
      const fragment = matchBrace(tokens.slice(index2));
      // console.log(`fragment = :${fragment}:`);

      const obj = parseObject(fragment);
      // console.log(`obj = ${JSON.stringify(obj, null, 2)}`);
      answer = R.assoc(key, obj, answer);
      index0 = index2 + fragment.length;
    } else {
      const value = convertValue(tokens[index2]);
      answer = R.assoc(key, value, answer);
      index0 = index2 + 1;
    }

    index1 = tokens.indexOf("=", index0);
  }

  return answer;
};

export default Parser;
