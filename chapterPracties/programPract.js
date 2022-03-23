'use strict';
/*
console.log('Sandeep');

function log() {
  console.log('Hi... Sandeep Welcome to Geekskool.com');
}
function add(num, num2) {
  let c;
  return (c = num + num2);
}

log();
log();
let res = add(2, 5);
console.log(res);

// function declaration

function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const resAge = calculateAge(1997);
console.log('Current Age of Sandeep : ' + resAge);

// function Expressions

const calAggeee = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

const age = calAggeee(1997);
console.log('Age : ' + age);

// arrow function
// with no argument

const greet = () => {
  console.log('Hello Sandeep Welcome to hot and happing Karnataka.');
};

greet();

//with argument;

const add2 = (a, b) => {
  const result = a + b;
  return result;
};

const res = add2(30, 70);
console.log('Adding Two Number : ' + res);

// bigger value Finding:----------------------

const bigger = (a, b) => {
  if (a > b) {
    console.log(`${a} is bigger.`);
  } else {
    console.log(`${b} is bigger.`);
  }
};

bigger(20, 30);

//==============================================================

const checkForVote = age => {
  if (age >= 18) {
    console.log('Welcome To Vote.');
  } else {
    console.log('Sorry ! You Are Not Eligible for Vote.');
  }
};
checkForVote(18);
checkForVote(19);
checkForVote(15);

//===============================================================

const fact = num => {
  let fac = 1;
  let i = 1;
  while (i <= num) {
    fac = fac * i;
    i++;
  }
  return fac;
};
const resFact = fact(5);
console.log(resFact);


//=================================================================
// Important question or logical qestion---
function reverseNumber(num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  );
}

const result = reverseNumber(-5432100);
console.log(result);

///===================================================================
const number = [33, 2, 8];
number.sort();

console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
// task value..
console.log('Task ' + number[1]);

//==================================================================
//  DATA STRUCTURE AND ALGORITHMS IN JAVASCRIPT
//------------------------------------------------------------------
// Step -1 , Simple Programming Question ....
//like as function..

function curve(arr, amount) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + amount;
  }
  return arr;
}

let arr = [77, 73, 74, 81, 90];
let result = curve(arr, 5);
console.log(result);
for (let j = 0; j < result.length; j++) {
  console.log(result[j]);
}

//=========================================================================
//Scoping Variable....
function showScope() {
  return scope;
}

let scope = 'Global Scope Variable';
let result1 = showScope();
console.log(result1);
//==========================================================================

// Array:---
// 1st Simple way to create array

let arrNum = [];
console.log(arrNum.length); // 0

//==========================================================================
//2nd way to create array
let arrNum2 = [1, 2, 3, 4, 5];
console.log(arrNum2.length); // 5
//==========================================================================
//3rd way to create array
// You can also create an array by calling the Array constructor:

let arrNum3 = new Array(1, 2, 3, 4, 5, 6);
console.log(arrNum3.length);

//===========================================================================
// 4th way to create array
// by array calling the array constuctor
let arrNum4 = new Array();
console.log(arrNum4.length); // 0

//=============================================================================
// 5th way to create an array

let arrNum5 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(arrNum5.length); // 8

//===========================================================================
//6th way to create array

let arrNum6 = new Array(10);
console.log(arrNum6.length); // 10
//===========================================================================

// Creating array from String
//  IMPORTANT

let sentence = 'the quick brown fox jumped over the lazy dog';
let words = sentence.split('');
for (let i = 0; i < words.length; i++) {
  console.log(`Word ${i} : ${words[i]} `);
}

//=========================================================================
// Searching for Values:---------------

let names = ['Sandeep', 'Ram Ashish', 'Harsh', 'Anshika', 'Ram Charitra'];
let name1 = 'Sandeep';
let position = names.indexOf(name1);

if (position >= 0) {
  console.log(`Found ${name1} at position ${position}`);
} else {
  console.log(`${name1} not found in the array`);
}

//===========================================================================

//  String Representation of Array..
//---------------------------------------------
// There are two function that return string representation of the array
// 1- join();
// 2- toString();

let names1 = ['Sandeep', 'Harsh', 'Anshika', 'Ram Ashish', 'Ram Charitra'];
let nameStr = names1.join();
console.log(nameStr);

let nameStr2 = names1.toString();
console.log(nameStr2);
// when yo call the print function with the array name, it automatically call the toString Function
let names2 = ['Sandeep', 'Harsh', 'Anshika', 'Ram Ashish', 'Ram Charitra'];
console.log(names2);

//=================================================================================
// Creating new Array from existing Arrays
// that allow you create new arrays from the existing arrays
// 1- concat();
// 2- splice();

//    the concat() function allows you put together two are more arrays to create a new arrays.
//    the splice() function allowa you to create a new array from a subset of an existing arrays.

let csDeptt = ['Harsh', 'Anshika', 'Sarvesh', 'Vrijesh'];
let meDEptt = ['Ram Ashish', 'Ram Charitra', 'Vikash', 'Deepak'];
let addingArray = csDeptt.concat(meDEptt);
console.log(addingArray);

let csmeDeptt = [
  'Harsh',
  'Anshika',
  'Sarvesh',
  'Vrijesh',
  'Ram Ashish',
  'Ram Charitra',
  'Vikash',
  'Deepak',
];

let csDeptt1 = csmeDeptt.splice(3, 3);
console.log(csDeptt1);


// Adding element to an array
//-------------------------------------
// there are two mutator function for adding element to the array.
// 1-  push();
// 2- unshift();

// push() function add an element to the end of array.

let nums = [1, 2, 3, 4, 5];
console.log(nums);

nums.push(6);
console.log(nums); // 1 2 3 4 5 6

// Using is more intuitive than the using the length properties to extends an array.

let nums1 = [1, 2, 3, 4, 5];
console.log(nums1);
nums1[nums1.length] = 6;
console.log(nums1); // 1 2 3 4 5 6

// the mutator function for adding array elements to the beginning of an array is unshift()

let nums_3 = [2, 3, 4, 5];
console.log(nums_3);

let newNum = 1;
nums_3.unshift(newNum);
console.log(nums_3); // 1,2,3,4,5

let newNum_1 = [3, 4, 5];
let new_1 = 1;
newNum_1.unshift(new_1, 0, 2);
console.log(newNum_1);

// Removing element from an array.
//--------------------------------------------------------------------------
//removing an element from the end of array is easy using pop function
let nums_p = [1, 2, 3, 4, 5, 9];
nums_p.pop();
console.log(nums_p); // 1,2,3,4,5

let num_pp = [9, 1, 2, 3, 4, 5];
console.log(num_pp); //9,1,2,3,4,5

for (let i = 0; i < num_pp.length; i++) {
  num_pp[i] = num_pp[i + 1];
}
console.log(num_pp);


//remove element from the beginning of an array is shift().
let nums_s = [9, 1, 2, 3, 4, 5];
nums_s.shift();
console.log(nums_s); //1,2,3,4,5

let num_sp = [6, 1, 2, 3, 4, 5];
console.log(num_sp);
let first_1 = num_sp.shift();
console.log(first_1); // 6

console.log(num_sp);

num_sp.push(first_1);
console.log(num_sp); //1,2,3,4,5,6
*/
//
