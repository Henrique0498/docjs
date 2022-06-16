const createJson = require("./code/createJson");
const getSource = require("./code/getSource");
const listFiles = require("./code/listFiles");
const formatData = require("./code/formatData");
const deleteFile = require("./code/deleteFile");
const getSettings = require("./code/getSettings");
const saveFile = require("./code/saveFile");

function deleteAfterData() {
  return new Promise((resolve) => {
    resolve(deleteFile());
  });
}

async function createNewData() {
  const { search } = await getSettings();
  const source = getSource(search.path);
  const fileList = await listFiles(source);

  const data = await createJson(fileList);

  return new Promise((resolve) => {
    resolve(saveFile(data));
  });
}

function generatorData() {
  return new Promise((resolve) => {
    resolve(formatData());
  });
}

module.exports = function build() {
  deleteAfterData()
    .then(() => createNewData())
    .then(() => generatorData());
};
