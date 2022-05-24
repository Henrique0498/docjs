const getFile = require("./getFile");

module.exports = async function getSettings() {
  const settingDefault = JSON.parse(await getFile("src/settings/index.json"));
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
