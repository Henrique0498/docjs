const getFile = require("./getFile");
const saveFile = require("./saveFile");
const path = require("path");

module.exports = async function createJson(fileList, source) {
  let json = [];
  let data = {};

  json = await Promise.all(
    fileList.map(async (file) => {
      const text = await getFile(file.path);

      return {
        ...file,
        source: path.dirname(file.path).split("/").pop(),
        text,
      };
    })
  );

  data = {
    data: json,
  };

  await saveFile(data, source);
};
