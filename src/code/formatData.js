const replaceValues = require("./replaceValues");
const saveFile = require("./saveFile");
const getFile = require("./getFile");
const getSettings = require("./getSettings");

const path = require("path");
const dir = path.resolve(__dirname, "../file/data.json");

module.exports = async function formatData() {
  const json = JSON.parse(await getFile(dir));
  const { replaces, sourceSave } = await getSettings();

  const savePath = path.resolve("../../" + sourceSave);

  // const dataModified = {
  //   ...props,
  //   data: data.map((item) => {
  //     return { ...item, text: replaceValues(item.text, replaces) };
  //   }),
  // };

  const jsonModified = {
    data: json.map((item) => {
      return { ...item, data: replaceValues(item.data, replaces) };
    }),
  };

  // await saveFile(dataModified, savePath);
  await saveFile(jsonModified, savePath);
};
