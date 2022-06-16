const getFile = require("./getFile");
const fs = require("fs");

module.exports = async function createJson(fileList, source) {
  let json = [];

  json = await Promise.all(
    fileList.map(async (file) => {
      const stat = fs.statSync(file.path);

      if (stat.isDirectory()) {
        return {
          ...file,
          subs: await createJson(file.subs),
        };
      } else {
        const text = await getFile(file.path);

        return {
          ...file,
          data: text,
        };
      }
    })
  );

  return new Promise((resolve) => {
    return resolve(json);
  });
};
