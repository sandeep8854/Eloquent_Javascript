const reverseArray = arr => {
  const len = arr.length;
  arr.reverse();
  return arr;
};
const arrr = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const res = reverseArray(arrr);
for (let x in res) {
  console.log(res[x] + ' ');
}

//  20,19,18,17,16,15,14,13,12

let reverseArrayInPlace = arr => {
  const len = arr.length;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
};
const arrayy = [90, 80, 70, 60, 50, 40, 30, 20, 10];
let result = reverseArrayInPlace(arrayy);
for (let x in result) {
  console.log(result[x] + ' ');
}

// 10,20,30,40,50,60,70,80,90
