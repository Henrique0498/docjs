const build = require("./src/build");
// const createJson = require("./src/code/createJson");
// const getSettings = require("./src/code/getSettings");
// const getSource = require("./src/code/getSource");
// const listFiles = require("./src/code/listFiles");
// const saveFile = require("./src/code/saveFile");

function run(){
  build()
}

// async function run() {
//   debugger;
//   const { search } = await getSettings();
//   const source = getSource(search.path);
//   const fileList = await listFiles(source);
//   const data = await createJson(fileList);
//   await saveFile(data);
// }

run();
