module.exports = function getSource(value = "") {
  const path = require("path");

  return path.resolve(value);
};
