const getFile = require("./getFile");
const saveFile = require("./saveFile");

module.exports = async function createJson(fileList, path) {
  let json = [];
  let data = {};

  json = await Promise.all(
    fileList.map(async (file) => {
      const text = await getFile(file.path);
      return {
        ...file,
        text,
      };
    })
  );

  data = {
    data: json,
  };

  await saveFile(data, path);
};
