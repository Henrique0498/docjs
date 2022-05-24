var fs = require("fs");
const getSource = require("./getSource");

module.exports = async function deleteData(
  path = "src/file",
  nameFile = "data.json"
) {
  const source = getSource(path);
  let listaDeArquivos = fs.readdirSync(source);

  if (listaDeArquivos[0]) {
    await fs.unlink(`${source}/${nameFile}`, function (err) {
      if (err) {
        throw err;
      }
    });
  }
};
