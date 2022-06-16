const getFile = require("./getFile");
const settingDefault = require("./../settings/index.json");
const path = require("path");

module.exports = async function getSettings() {
  let result = null;

  try {
    settingUser = JSON.parse(
      await getFile(path.resolve("../../.iziDocJs.json"))
    );

    if (!settingUser.replaces) {
      settingUser.replaces = [];
    }

    result = {
      ...settingDefault,
      ...settingUser,
      replaces: [...settingDefault.replaces, ...settingUser.replaces],
    };
  } catch {
    result = settingDefault;
  }

  return new Promise((resolve, reject) => {
    resolve(result);
  });
};
