const fs = require("fs");
const getSettings = require("./getSettings");
const path = require('path')


module.exports = async function listFiles(dir) {
  const dataResult = []
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let listOfFiles = fs.readdirSync(dir);

  listOfFiles.map(async (item) => {
    const stat = fs.statSync(dir + "/" + item);

    if(stat.isDirectory()){
      dataResult.push({
        id: `${dir}/${item}`,
        name: item,
        subs: await listFiles(`${dir}/${item}`)
      })
    }else {
      dataResult.push({
        teste: ''
      })
    }

    return null
  })

  // for (let index in listOfFiles) {
  //   let stat = fs.statSync(dir + "/" + listOfFiles[index]);
  //   const { search } = await getSettings();
  //   const regexFile = new RegExp(search.file);

  //   if (stat.isDirectory()) {
  //     file.push({
  //       name: listOfFiles[index],
  //       path: `${dir}/${listOfFiles[index]}`,
  //       subs: listFiles(
  //         `${dir}/${listOfFiles[index]}`,
  //         file,
  //         listOfFiles[index]
  //       ),
  //     });
  //   } else if (regexFile.exec(listOfFiles[index])) {
  //     file.push({
  //       name: listOfFiles[index],
  //       path: `${dir}/${listOfFiles[index]}`,
  //     });
  //   }
  // }


  return dataResult;
};
