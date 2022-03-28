'use strict';

// console.log(
//   'Hello Sandeep , Welcome to Data Structure And Algorthms in javaScript'
// );

//  Data Structure And Algorthms in JavaScript:--
//--------------------------------------------------
/*
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount('Sandeep'));


//     Recursion:----
//------------------------
/*
function takeShower() {
  return 'Showering';
}
function eatBreakFast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let item = ['Oatmeal', 'Egg', 'Protein Shake'];
  return item[Math.floor(Math.random() * item.length)];
}

function wakeUp() {
  takeShower();
  eatBreakFast();
  console.log('Ok ready to go to work!');
}
wakeUp();

//====================================================//
//Example No. 02

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5);
//--------------------------------
// Output:--
//  5
//  4
//  3
//  2
//  1
// All done!

//=========================================================

// Recursion:---

function sumOfRange(num) {
  if (num === 1) return 1;
  return num + sumOfRange(num - 1);
}
let result = sumOfRange(10);
console.log(`Sum of all number is: ${result}`);
// Sum of all number is: 55

//============================================================
// Recursion:----
//--------------------
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
let arr = [1, 2, 3, 4, 5];
let newRes = collectOddValues(arr);
for (let i = 0; i < newRes.length; i++) {
  console.log(newRes[i]);
}
//---------------------------------------------------------------
//   collectOddValues([1,2,3,4,5])
//   [1].concat(collectOddValues([2,3,4,5]))
//         [].concat(collectValues([3,4,5]))
//              [3].concat(collectValues([4,5]))
//                  [].concat(collectValues([5]))
//                         [5].(concatValues([]))
//================================================================

// Product of Array through recursive method.
//----------------------------------------------
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
let arr = [1, 2, 3];
let res = productOfArray(arr);
console.log(res);

//     [1]*productOfArray([2,3])
//         [2]*productOfArray([3])
//              [3]*productOfArray([])

//==================================================================
// Reverse String through recursive

function reverse_(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse_(str.slice(1)) + str[0];
}
let str = 'peednas';
let res_ = reverse_(str);
console.log(res_);
//================================================================
*/
function ispalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return ispalindrome(str.slice(1, -1));

  return false;
}
let str = 'level';
let res = ispalindrome(str);
console.log(res);
//=============================================================
