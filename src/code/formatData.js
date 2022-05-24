const replaceValues = require("./replaceValues");
const saveFile = require("./saveFile");
const getFile = require("./getFile");
const getSettings = require("./getSettings");

module.exports = async function formatData() {
  const { data, ...teste } = JSON.parse(await getFile("src/file/data.json"));
  const { replaces, sourceSave } = await getSettings();

  const dataModified = {
    ...teste,
    data: data.map((item) => {
      return { ...item, text: replaceValues(item.text, replaces) };
    }),
  };

  await saveFile(dataModified, sourceSave);
};
