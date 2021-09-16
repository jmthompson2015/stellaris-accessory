/* eslint no-console: ["error", { allow: ["log"] }] */

import JsonConverter from "./JsonConverter.js";

JsonConverter.convert().then(() => console.log("JsonConverterRunner done."));
