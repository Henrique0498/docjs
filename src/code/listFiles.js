const fs = require("fs");
const getSettings = require("./getSettings");

module.exports = async function listFiles(dir, file = [], dirFile = "") {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let listOfFiles = fs.readdirSync(dir);

  for (let index in listOfFiles) {
    let stat = fs.statSync(dir + "/" + listOfFiles[index]);
    const { search } = await getSettings();
    const regexFile = new RegExp(search.file);

    if (stat.isDirectory()) {
      listFiles(`${dir}/${listOfFiles[index]}`, file, listOfFiles[index]);
    } else if (regexFile.exec(listOfFiles[index])) {
      file.push({
        name: listOfFiles[index],
        path: `${dir}/${listOfFiles[index]}`,
        relativePath: dirFile,
      });
    }
  }

  return file;
};
