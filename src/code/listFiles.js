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
      dataResult.push({
        id: `${dir}/${item}`,
        name: formatName(dir, item),
        path: `${dir}/${item}`,
        subs: await listFiles(`${dir}/${item}`),
      });
    } else {
      if (/Readme.md$/.test(item)) {
        dataResult.push({
          id: dir,
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
