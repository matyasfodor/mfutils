var curry = (f, ...args) =>
  (f.length <= args.length) ?
    f(...args) :
    (...more) => curry(f, ...args, ...more);

const contains = (iteratee, data) => (
  Array.prototype.bind(data)
    .indexOf(iteratee)
);

const pick = (keys, obj) => (
  Object.assign(...Object.entries(obj)
    .filter(([k, v]) => contains(keys, k))
    .map(([k, v]) => ({ [k]: v })))
);

const objectMap = (fn, obj) => (
  Object.assign(...Object.entries(obj)
    .map(([k, v]) => ({ [k]: fn(v) })))
);

const curriedFunctions = {
  contains,
  pick,
};

const utilFunctions = {
  curry,
};

module.exports = {
  ...objectMap(curry, curriedFunctions),
  ...utilFunctions,
}
