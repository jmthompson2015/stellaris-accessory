/* eslint no-console: ["error", { allow: ["log"] }] */

const JsonConverter = require("./JsonConverter.js");

JsonConverter.convert().then(() => console.log("JsonConverterRunner done."));
