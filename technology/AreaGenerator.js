import R from "ramda";

import FileLoader from "../converter/FileLoader.js";
import FileWriter from "../converter/FileWriter.js";

const AreaGenerator = {};

const INPUT_FILE = "technology.json";
const PROPERTY = "area";
const OUTPUT_FILE = "../artifact/TechnologyArea.js";
const HEADER = `const TechnologyArea = `;
const FOOTER = `

Object.freeze(TechnologyArea);

export default TechnologyArea;`;

const capitalizeFirstLetter = (string) => {
  const firstLetter = string[0] || string.charAt(0);

  return firstLetter ? firstLetter.toUpperCase() + string.substring(1) : "";
};

AreaGenerator.convert = () => {
  FileLoader.loadLocalFileJson(INPUT_FILE).then((data) => {
    const reduceFunction1 = (accum, item) =>
      item[PROPERTY] ? R.append(item[PROPERTY], accum) : accum;
    const values = Object.values(data);
    const allItem0 = R.reduce(reduceFunction1, [], values);
    const allItem = R.uniq(allItem0);
    allItem.sort();

    const reduceFunction2 = (accum, item) => {
      const newItem = { name: capitalizeFirstLetter(item), key: item };
      return R.assoc(item, newItem, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allItem);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
  });
};

AreaGenerator.convert();
