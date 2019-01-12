/* eslint no-console: ["error", { allow: ["log"] }] */

const { assert } = require("unit.js");

const FileLoader = require("../converter/FileLoader.js");

const JsonConverter = require("./JsonConverter.js");

const testExpected = () => {
  JsonConverter.convert().then(() =>
    FileLoader.loadLocalFileJson("building.json").then(result => {
      assert(result !== undefined);
      console.log("JsonConverter Test 1: passed");
    })
  );
};

testExpected();
