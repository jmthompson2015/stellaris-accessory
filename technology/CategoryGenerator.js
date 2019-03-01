const R = require("ramda");

const FileLoader = require("../converter/FileLoader.js");
const FileWriter = require("../converter/FileWriter.js");

const CategoryGenerator = {};

const INPUT_FILE = "technology.json";
const PROPERTY = "category";
const OUTPUT_FILE = "../artifact/TechnologyCategory.js";
const HEADER = `const TechnologyCategory = `;
const FOOTER = `

Object.freeze(TechnologyCategory);

export default TechnologyCategory;`;

const createName = key => {
  const name0 = key.replace(/_/g, " ");
  let name = name0.charAt(0).toUpperCase() + name0.substring(1);

  let index = name.indexOf(" ");

  while (index > 0) {
    name =
      name.substring(0, index + 1) +
      name.charAt(index + 1).toUpperCase() +
      name.substring(index + 2);
    index = name.indexOf(" ", index + 1);
  }

  return name;
};

CategoryGenerator.convert = () => {
  FileLoader.loadLocalFileJson(INPUT_FILE).then(data => {
    const reduceFunction1 = (accum, item) => {
      let answer = accum;

      for (let i = 0; i < item[PROPERTY].length; i += 1) {
        const key = item[PROPERTY][i];
        const obj0 = accum[key];

        if (obj0) {
          const oldAreas = Array.isArray(obj0.area) ? obj0.area : [obj0.area];
          const newAreas0 = R.append(item.area, oldAreas);
          const newAreas1 = R.uniq(newAreas0);
          newAreas1.sort();
          const newAreas = newAreas1.length === 1 ? newAreas1[0] : newAreas1;
          const newObj0 = R.assoc("area", newAreas, obj0);
          const newObj = R.assoc("key", key, newObj0);
          answer = R.assoc(key, newObj, accum);
        } else {
          const name = createName(key);
          answer = R.assoc(key, { name, area: item.area, key }, accum);
        }
      }
      return answer;
    };
    const values = Object.values(data);
    const allItem0 = R.reduce(reduceFunction1, {}, values);
    const allKeys = Object.keys(allItem0);
    allKeys.sort();
    const itemMap = R.reduce((accum, key) => R.assoc(key, allItem0[key], accum), {}, allKeys);

    const content = `${HEADER}${JSON.stringify(itemMap, null, "  ")}${FOOTER}`;
    FileWriter.writeFile(OUTPUT_FILE, content);
  });
};

CategoryGenerator.convert();
