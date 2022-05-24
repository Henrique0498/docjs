module.exports = function replaceValue(value, regexArray = []) {
  let valueModified = value;

  regexArray.map(({ open, close }) => {
    if (open) {
      const regexOpen = new RegExp(open.regex, "gm");

      valueModified = valueModified.replace(regexOpen, open.replace);
    }

    if (close) {
      const regexClose = new RegExp(close.regex, "gm");

      valueModified = valueModified.replace(regexClose, close.replace);
    }
  });

  return valueModified;
};
