const R = require("ramda");

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
      R.append({ name: item[PROPERTY], area: item.area }, accum);
    const allItem0 = R.reduce(reduceFunction1, [], data);
    const allItem1 = R.uniq(allItem0);
    const allItem = R.sortBy(R.prop("name"), allItem1);

    const reduceFunction2 = (accum, item) => {
      const newKey = item.name;
      const newItem = R.assoc("key", newKey, item);
      return R.assoc(newKey, newItem, accum);
    };
    const itemMap = R.reduce(reduceFunction2, {}, allItem);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
  });
};

CategoryGenerator.convert();
