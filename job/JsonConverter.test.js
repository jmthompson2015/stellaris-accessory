/* eslint no-console: ["error", { allow: ["log"] }] */

import UnitJS from "unit.js";

import FileLoader from "../converter/FileLoader.js";

import JsonConverter from "./JsonConverter.js";

const { assert } = UnitJS;

const testExpected = () => {
  JsonConverter.convert().then(() =>
    FileLoader.loadLocalFileJson("job.json").then((result) => {
      assert(result !== undefined);
      console.log("JsonConverter Test 1: passed");
    })
  );
};

testExpected();
