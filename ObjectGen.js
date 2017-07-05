function updateObject(key, tuples) {
  return {
    Value: value => {
      return {
        Key: nextKey => updateObject(nextKey, tuples.concat([[key, value]])),

        Next: () => {
          return tuples.reduce((obj, tuple) => {
            return Object.assign(obj, { [tuple[0]]: tuple[1].Next() });
          }, { [key]: value.Next() });
        },
      };
    },
  };
}

const generator = {
  Key: nextKey => updateObject(nextKey, []),

  Next: () => ({}),
};

function object(only = null) {
  if (only === null) {
    return generator;
  }
  return only;
}

module.exports = object;
