const fs = require("fs");
const path = require("path");

module.exports = async function listFiles(dir) {
  const dataResult = [];
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let listOfFiles = fs.readdirSync(dir);

  debugger;

  listOfFiles.map(async (item) => {
    const stat = fs.statSync(dir + "/" + item);

    if (stat.isDirectory()) {
      dataResult.push({
        id: `${dir}/${item}`,
        name: path.dirname(`${dir}/${item}`).split("/").pop(),
        subs: await listFiles(`${dir}/${item}`),
      });
    } else {
      dataResult.push({
        id: `${dir}/${item}`,
        name: path.dirname(`${dir}/${item}`).split("/").pop(),
      });
    }
  });

  return new Promise((resolve, reject) => {
    return resolve(dataResult);
  });
};
