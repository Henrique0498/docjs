module.exports = function formatName(text = "", option = "") {
  let result = text.split("src")[1].split("/").pop();

  if (result) {
    result = result[0].toUpperCase() + result.substring(1);
  }else {
    result = option.split('.')[0]
    result = result[0].toUpperCase() + result.substring(1);
  }

  return result;
};
