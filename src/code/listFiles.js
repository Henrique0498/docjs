const fs = require("fs");

const formatName = require("./formatName");

module.exports = async function listFiles(dir = "") {
  const dataResult = [];

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let listOfFiles = fs.readdirSync(dir);

  listOfFiles.map(async (item) => {
    const stat = fs.statSync(dir + "/" + item);

    if (stat.isDirectory()) {
      const subs = await listFiles(`${dir}/${item}`);
      if (subs && subs.length >= 1) {

        dataResult.push({
          id: `${dir}/${item}`.split('src/').pop(),
          name: formatName(dir, item),
          path: `${dir}/${item}`,
          subs,
        });
      }
    } else {
      if (/Readme.md$/.test(item)) {
        dataResult.push({
          id: `${dir}/${item}`.split('src/').pop(),
          path: `${dir}/${item}`,
          name: formatName(dir, item),
        });
      }
    }
  });

  return new Promise((resolve, reject) => {
    return resolve(dataResult);
  });
};
