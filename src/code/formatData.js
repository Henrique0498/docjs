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

  const jsonModified = {
    data: json.map((item) => {
      if (item.subs) {
        return item;
      }

      return { ...item, data: replaceValues(item.data, replaces) };
    }),
  };

  await saveFile(jsonModified, savePath);
};
