const inf = 10000;

function checkEnumArgs(args, type) {
  const lengthArgs = args.length;
  let i = 0;
  for (; i < lengthArgs; i++) {
    if (typeof args[i] !== type) {
      console.error(`this enum takes elements of type ${type}, found ${args[i]}`);
    }
  }
}


function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function positive() {
  return Math.floor(Math.random() * inf);
}

function negative() {
  return Math.floor(Math.random() * -1 * inf);
}

function initEnum(enumType) {
  function eNum() {
    const lengthArgs = arguments.length;
    let i = 0;

    switch(enumType) {
      case 'number':
        checkEnumArgs(arguments, 'number');
        break;

      case 'string':
        checkEnumArgs(arguments, 'string');
        break;

      case 'boolean':
        checkEnumArgs(arguments, 'boolean');
        break;

      default:
        console.error(`jsgen doesn\'t handle ${enumType} as an enum type`);
    }

    return {
      Next: () => arguments[getRandomIndex(lengthArgs)],
    };
  }

  return eNum;
}


module.exports = {
  initEnum,
  positive,
  negative,
  getRandomIndex,
};
