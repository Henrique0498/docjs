const fs = require("fs");

const getSource = require("./getSource");

module.exports = async function saveFile(
  data,
  path = "src/file",
  fileName = "data.json"
) {
  const dir = getSource(path);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file = JSON.stringify(data);

  await fs.promises.writeFile(`${dir}/${fileName}`, file, function (err) {
    if (err) {
      throw new Error(erro);
    }
  });
};
