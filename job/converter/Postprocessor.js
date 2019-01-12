const Postprocessor = {};

Postprocessor.process = content0 => {
  const content1 = content0.replace(/,\n]/g, "\n]");

  const key2 = "},";
  const index2 = content1.lastIndexOf(key2);
  const prefix2 = content1.substring(0, index2);
  const suffix2 = content1.substring(index2 + key2.length);
  const content = `${prefix2}}${suffix2}`;

  return content;
};

module.exports = Postprocessor;
