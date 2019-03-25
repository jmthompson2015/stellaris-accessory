const Formatter = {};

Formatter.format = object => {
  if (Array.isArray(object)) {
    return Formatter.formatArray(object);
  }

  return Formatter.formatObject(object);
};

Formatter.formatArray = object => {
  if (Array.isArray(object)) {
    if (object.length === 1) {
      return object[0];
    }

    if (object.length > 0) {
      return `[${object.join(", ")}]`;
    }
  }

  return undefined;
};

Formatter.formatObject = object => (object ? JSON.stringify(object, null, 1) : undefined);

export default Formatter;
