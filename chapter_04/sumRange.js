/*
const sumM = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
};
const res = sumM(1, 10);
console.log('Sum of the Range:  ' + res);

//  Sum of the Range: 55


//As a bonus Assingnment...

const sumRange = (start, end, step) => {
  const arr = [];
  if (step == 1) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(sumRange(1, 10, 2));

// 1,2,3,4,5,6,7,8,9,10

const sumRange = (start, end, step) => {
  const arr = [];
  if (step == 1) {
    for (let i = start; i <= end; i = i + 2) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(sumRange(1, 10, 1));
// 1,3,5,7,9
*/
const sumRange = (start, end, step) => {
  const arr = [];
  if (step == 1) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(sumRange(5, 2, -1));

// 5,4,3,2
