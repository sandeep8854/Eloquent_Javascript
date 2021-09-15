'use strict';

const isEven = number => {
  if (number < 0) {
    return null;
  }
  if (number == 0) {
    return true;
  }
  if (number == 1) {
    return false;
  }
  return isEven(number - 2);
};
const resBoo = isEven(75);
console.log(resBoo);
// false

const resBo = isEven(50);
console.log(resBo);
// true

const resBB = isEven(-1);
console.log(resBB);
// null
