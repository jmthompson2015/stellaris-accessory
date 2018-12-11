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
    const reduceFunction1 = (accum, item) => {
      const obj0 = accum[item[PROPERTY]];
      if (obj0) {
        const newAreas0 = R.append(item.area, obj0.areas);
        const newAreas = R.uniq(newAreas0);
        newAreas.sort();
        const newObj0 = R.assoc("areas", newAreas, obj0);
        const newObj = R.assoc("key", item[PROPERTY], newObj0);
        return R.assoc(item[PROPERTY], newObj, accum);
      }

      return R.assoc(
        item[PROPERTY],
        { name: item[PROPERTY], areas: [item.area], key: item[PROPERTY] },
        accum
      );
    };
    const allItem0 = R.reduce(reduceFunction1, {}, data);
    const allKeys = Object.keys(allItem0);
    allKeys.sort();
    const itemMap = R.reduce((accum, key) => R.assoc(key, allItem0[key], accum), {}, allKeys);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
  });
};

CategoryGenerator.convert();
