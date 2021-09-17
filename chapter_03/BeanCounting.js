'use strict';

const countChar = (string, character) => {
  let count = 0;
  let len = string.length;
  for (let i = 0; i < len; i++) {
    if (string[i] == character) {
      count++;
    }
  }
  return count;
};
const countBs = string => {
  return countChar(string, 'B');
};
console.log(countBs('BABAY'));
// 2

console.log(countChar('SANDEEPPEP', 'S'));
// 1
