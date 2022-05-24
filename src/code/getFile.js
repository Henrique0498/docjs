const fs = require("fs");

async function getFile(source) {
  const encoding = "utf-8";

  try {
    const text = await fs.promises.readFile(source, encoding);
    return text;
  } catch (erro) {
    throw new Error(erro);
  }
}

module.exports = getFile;
