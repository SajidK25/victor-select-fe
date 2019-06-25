function getNested(theObject, path, separator) {
  try {
    separator = separator || ".";

    return path
      .replace("[", separator)
      .replace("]", "")
      .split(separator)
      .reduce(function(obj, property) {
        return obj[property];
      }, theObject);
  } catch (err) {
    return undefined;
  }
}

const optionsAllFalse = (options, values) => {
  for (var i = 0; i < options.length; i++) {
    console.log(options[i].name, getNested(values, options[i].name));
    if (getNested(values, options[i].name) === true) {
      return false;
    }
  }

  return true;
};

const simpleMemoize = fn => {
  let lastArg;
  let lastResult;
  return arg => {
    if (arg !== lastArg) {
      lastArg = arg;
      lastResult = fn(arg);
    }
    return lastResult;
  };
};

export { optionsAllFalse, simpleMemoize };
