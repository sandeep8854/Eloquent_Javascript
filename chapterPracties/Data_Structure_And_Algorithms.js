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
// Good Program......

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

// LINEAR SEARCH:-------------
//----------------------------
// Pseudocode for linear search...
//1- the function accepts an array and value.
//2- loop througth the array and check if the current array element is equal to the value.
//3- if it is return the index at which the element is found.
//4- if the value is never found , return -1;

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
let arr = [34, 51, 46, 78, 100, 156, 148, 144];
let result_ = linearSearch(arr, 156);
console.log(result_);

//==================================================================
// BINARY SEARCH:---------------------------------------------------
//Pseudocode of binary Search...

// 1- The function accept a sorted array and value.
// 2- create a left pointer at the start of the array,and right pointer at the end of array.
// 3- while the left pointer comes before the right pointer.
//   (i) create a pointer in the middle.
//   (ii) if you find the value you want a return a index.
//   (iii) if the value is too small move to left pointer
//   (iv)  if the value is too large, move the right pointer down.
// 4- if you never find the value return -1.

function binary_Search(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? console.log(middle) : console.log(-1);
}
let arrBin = [2, 5, 6, 9, 12, 15, 28, 30];
let search = 30;
binary_Search(arrBin, search);

//===============================================================================

// Sorting :--
///          Sorting is a process of rearranging the item in a collection, so that the items
//          are in same kind of order.
//Example:-
// (i) Sorting Number from smallest to largest
// (ii) Soring Number from largest to smallest.
// (iii) Sorting names alphabetically.
// (iv) Sorting movie based on release date.
// (v) Sorting movies based on revenue .
//===================================================================
// Simple Swap by Javascript:----
//step-1st
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//==============================================================
//step-2nd

const swap1 = (arr, id1, id2) => {
  [arr[id1], arr[id2]] = [arr[id2], arr[id2]];
};
//==================================================================

// Pseudo code for bubble sort.
//1- Start looping from with variable called i the end of array towords the beginning.
//2- start the inner loop with a variable called j from the beginnig until i-1;
//3- if arr[j] is greater than arr[j+1], swap those two values.
//4- return the sorted array.
//=========================================================================================

function bubble_Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubble_Sort([37, 45, 30, 11, 98, 6, 7, 70]));

//===========================================================================
//Bubble sort optimization.
function bubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 30, 11, 98, 6, 7, 70]));

//========================================================================
// Selection Sort--
//------------------
// 1-  similar to bubble sort instead of first placing large value into sorted position
// 2- it places small values into second position.
// 3- store the first position as the smallest values.
// 4- compare this item to the next item in the array until you find the smallest number.
// 5- if a smallest number is found designate that smallest number to be the new minimum
//     and continue until the end of the array.
// 6- if the minumum is not value(index) you initially begin with swap two values.
// 7- repreat this with the next element until the array is sorted.

function selectionSort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let lower = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lower]) {
        lower = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lower];
    arr[lower] = temp;
  }
  return arr;
}
console.log(selectionSort([42, 24, 65, 14, 3, 47]));

//==================================================================

// Insertion sort:----
//--------------------------
// 1-  start by picking the second element in the array.
// 2-  now the compare the second element with the one before it and swap it if necessary.
// 3-  continue to the next element and if it is in incorrect order iterate throught the sorted position
//       (left side ) to places the element in the correct order.
// 4-  repeate until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log('Actual Array ' + arr);
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));
//   ====================================================================
//  arr= [26,41,21,34,8,25,15,48,40,13,12]
//  mark the first element (26) as sorted
//  Extract the first unsorted element (41) extract.
//  figure where to insert compare with sorted element.
//  26>41 is false , insert element at current position.
//   Extract the first unsorted element (21) extract.
//   figure where to insert compare with sorted element.compare with sorted element 41.
//   41>21 is true hence move current sorted element (41) to right by 1. 
//  continue......
//
//====================================================================================
// function insertSort(arr){
  let currentValue,j
  for(let i=1;i<arr.length;i++){
    currentValue=arr[i];
    j=i-1;
    while(j>=0 && arr[j]>currentValue){
      arr[j+1]=arr[j];
      j=j-1;
    }
    arr[j+1]=currentValue;
  }
  return arr;
}
//==============================================================================

//==============================================================
// Merge Sort:---
//-----------------
//  1-  create an empty array take a look at the smallest values in each input array.
//  2-  while here are still values we are not looked up.
//  3-  if the values in the first arrray is smaller than the value in the second array push value
//         in the first array into our result and move on the next values in the first array.
//  4-  if the values in the first array is larger than the value in the second array push the value
//         in the second array in to our result and move on the next value in the second array.
//  5-  onces we exhaust one array push all remaining vslues from another array.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
let arr_ = [27, 10, 1, 2, 14, 99, 50, 100];
let res = mergeSort(arr_);
console.log(res);

//==================================================================

// Selection Sort  :-------
//-------------------------------------
//repeat (numOfElements - 1) times

//set the first unsorted element as the minimum
//for each of the unsorted elements
//if element < currentMinimum
// set element as new minimum
//swap minimum with first unsorted position
//  ---------------------------------------------------------------------
//  |6 |36 | 15 | 48 | 9 | 22| 24 | 31 | 4 | 50 | 17| 7 | 37| 3| 40  |
//------------------------------------------------------------------------
//  Iteration -1
//        set 6 as the current minimum, then iterate througth the remaining unsorted element to find
//        the true minimum.
//   check if 36 is smaller than the currentMinimum (6)  -- false
//   ---------15-------------------------------------(6) --- false
//  ----------48-------------------------------------(6)-----false
//  ----------9-------------------------------------(6)-----false
//  ----------22-------------------------------------(6)-----false
//  ----------24-------------------------------------(6)-----false
//  ----------31-------------------------------------(6)-----false
//  ----------4-------------------------------------(6)----- true
//   but now condition will become true;
//   set 4 as the new currentMinimum.
//    check if 50 is smaller than the currentMinimum (4)  -- false
/// -----------17------------------------------------(6) --- false
//  ------------7------------------------------------(6) --- false
//  -----------37------------------------------------(6) --- false
//  -----------3------------------------------------(6) --- true
//  now conditon become true
//  set 3 as the new currentMinimum
//  check if 40 is smaller than the currentMinimum (3)  -- false
//
//   swap the minimum (3) with the first unsorted element (6)
//   3 is now considerd sorted.
//
// ---------------------------------------------------------------------
//  |3 |36 | 15 | 48 | 9 | 22| 24 | 31 | 4 | 50 | 17| 7 | 37| 6| 40  |
//------------------------------------------------------------------------
//
// Iteration 2:
//  Set 36 as the current minimum, then iterate through the remaining
//  unsorted elements to find the true minimum.
//
//    SAME PROCEDURE ON FURTHER.
//        CONTINUE....
//        CONTINUE....

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentMinimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMinimum]) {
        currentMinimum = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[currentMinimum];
    arr[currentMinimum] = temp;
  }
  return arr;
}
console.log(
  selectionSort([6, 36, 15, 48, 9, 22, 24, 31, 50, 17, 7, 37, 3, 40])
);
*/
//==================================================================================
// Quick Sort:--
//------------------
//
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //we assuming the pivot is always the first element.
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // swap the pivot from start the swap point
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]));

//
//------------------------------------------------
//  |27 |2 | 38 | 49 | 35 | 37| 7 | 46 | 9 | 33 |
//-----------------------------------------------
// 1:- Working on partition [27,2,7........33] (index 2 to 9)
//     selecting 27 as a pivot (swapIndx=1)

// 2:- checking if 27>2 (pivot) is true , swapping index 1 (value=2) with the element swapIdx 1(value=2)
//      (value if swapIdx is now =2)
// 3:- checking if 27>38 false
// 4:- checking if 27>49 false
// 5:- checking if 27>35 false
// 6:- checking if 27>7 true
// 7:- swaping index 6 (value=7) with element at swapIdx 2 (value=38) value of swapIdx is now=3.

//-----------------------------------------------
//  |27 |2 | 7 | 49 | 35 | 37| 38 | 46 | 9 | 33 |
//-----------------------------------------------
// checking if 27>46 false
//checking if 27>9 true
// 27>9 is true ,swaping index 8 (value =9 ) with element at swapIndx 3 (value=49 )value of swapIdx is
//   now =4;

// checking 27>33 false

//-----------------------------------------------
//  |27 |2 | 7 | 9 | 35 | 37| 38 | 46 | 49 | 33 |
//-----------------------------------------------
// 1st Iteration compleate....
//  continue .....
// further iteration....
