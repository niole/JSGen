const inf = 10000;


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
