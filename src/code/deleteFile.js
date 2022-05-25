var fs = require("fs");
const getSource = require("./getSource");

module.exports = async function deleteFile(
  path = "src/file",
  nameFile = "data.json"
) {
  const source = getSource(path);

  if (!fs.existsSync(source)) {
    fs.mkdirSync(source, { recursive: true });
  }

  let listaDeArquivos = fs.readdirSync(source);

  if (listaDeArquivos[0]) {
    await fs.unlink(`${source}/${nameFile}`, function (err) {
      if (err) {
        throw err;
      }
    });
  }
};
