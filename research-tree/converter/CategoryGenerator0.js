const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");

const CategoryGenerator = {};

const INPUT_FILE = "techs.json";
const PROPERTY = "category";
const OUTPUT_FILE = "../artifact/Category.js";
const HEADER = `const Category = `;
const FOOTER = `

Object.freeze(Category);

export default Category;`;

CategoryGenerator.convert = () => {
  FileLoader.loadLocalFileJson(INPUT_FILE).then(data => {
    const reduceFunction1 = (accum, item) =>
      item[PROPERTY] ? R.append(item[PROPERTY], accum) : accum;
    const allItem0 = R.reduce(reduceFunction1, [], data);
    const allItem = R.uniq(allItem0);
    allItem.sort();

    const reduceFunction2 = (accum, item) => {
      const newKey = EnumGenerator.createEnumName(item);
      const newItem = { name: item, key: newKey };
      return R.assoc(newKey, newItem, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allItem);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
  });
};

CategoryGenerator.convert();
