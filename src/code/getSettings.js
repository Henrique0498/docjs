const getFile = require("./getFile");
const  settingDefault = require('./../settings/index.json')

module.exports = async function getSettings() {
  let result = null;

  try {
    settingUser = JSON.parse(await getFile(".doclib.json"));

    result = {
      ...settingDefault,
      ...settingUser,
      replaces: [...settingDefault.replaces, ...settingUser.replaces],
    };
  } catch {
    result = settingDefault;
  }

  return new Promise((resolve) => {
    resolve(result);
  });
};
