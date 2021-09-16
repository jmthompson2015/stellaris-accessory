import fetch from "node-fetch";
import fs from "fs";

const FileLoader = {};

// see https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g
FileLoader.fetchRetry = (url, options, n) =>
  fetch(url, options)
    .then((response) => {
      if (response.ok) return response;
      throw Error(`Request rejected with status ${response.status}`);
    })
    .catch((error) => {
      if (n === 1) throw error;
      return FileLoader.fetchRetry(url, options, n - 1);
    });

FileLoader.fetchRetryJson = (url, options, n) =>
  FileLoader.fetchRetry(url, options, n)
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText));

FileLoader.loadLocalFile = (fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

FileLoader.loadLocalFileJson = (url) =>
  FileLoader.loadLocalFile(url).then((data) => JSON.parse(data));

export default FileLoader;
