// Questions:---
//  Flattening
//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original
//arrays.

const flattenFunc = (previousVal, currentVal) => {
  return previousVal.concat(currentVal);
};

let flattend = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let result = flattend.reduce(flattenFunc);
//console.log(result);
for (let x in result) {
  console.log(result[x] + '  ');
}

// 0 1 2 3 4 5
