const replaceValues = require("./replaceValues");
const saveFile = require("./saveFile");
const getFile = require("./getFile");
const getSettings = require("./getSettings");

const path = require("path");
const dir = path.resolve(__dirname, "../file/data.json");

module.exports = async function formatData() {
  const { data, ...props } = JSON.parse(await getFile(dir));
  const { replaces, sourceSave } = await getSettings();

  const savePath = path.resolve("../../" + sourceSave);

  const dataModified = {
    ...props,
    data: data.map((item) => {
      return { ...item, text: replaceValues(item.text, replaces) };
    }),
  };

  await saveFile(dataModified, savePath);
};
