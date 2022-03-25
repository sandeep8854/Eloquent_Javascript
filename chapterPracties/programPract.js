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

//-=============================================================================
// Adding and removing element from the middle of array.
//using splice() function.
let nums_A = [1, 2, 3, 7, 8, 9];
let newEle = [4, 5, 6];
nums_A.splice(3, 0, newEle);
console.log(nums_A);
for (let i = 0; i < nums_A.length; i++) {
  console.log(`Modified Array ${nums_A[i]}`);
}
//---------------------------------------------------------
let num_Sp = [1, 2, 3, 7, 8, 9];
num_Sp.splice(3, 0, 4, 5, 6);
console.log(num_Sp);
//--------------------------------------------
//Using splice() to remove element from an array

let numSP = [1, 2, 3, 100, 200, 300, 400, 4, 5];
numSP.splice(3, 4);
console.log(numSP); //1,2,3,4,5
//================================================================

// Putting Array Element in Order.
let numP = [1, 2, 3, 4, 5];
numP.reverse();
console.log(numP);

//we afen need to sort the element of an array into order, the mutator function for
// this task sort()  work very well with string.

let striName = ['Sandeep', 'Sarvesh', 'Nidhi', 'Harsh', 'Anshika'];
striName.sort();
console.log(striName);
//-------------------------------------------------

let numArr = [3, 1, 2, 100, 4, 200];
numArr.sort();
console.log(numArr); // 1,100,2,200,3,4
// but sort() does not work so well with number.

//----------------------------------------------------------------
function compare(num1, num2) {
  return num1 - num2;
}
let numArr1 = [3, 1, 2, 100, 4, 200];
numArr1.sort(compare);
console.log(numArr1); //1,2,3,4,100,200

// sort in desending order..
function compare_1(num1, num2) {
  return num2 - num1;
}
let numArr2 = [3, 1, 2, 100, 4, 200];
numArr2.sort(compare_1);
console.log(numArr2);
//------------------------------------------------------
// IMPORTANT POINT-
//  1-  A<B----- A COMES FIRST
//  2-  A==0-----NOTHING WILL BE CHANGED
//  3-  A>B------B COMES FIRST

const number = [2, 5, 100, 4];
const sortedNumber = number.sort((a, b) => {
  return a - b;
});
console.log(sortedNumber);

//-----------------------------------------------------

const num_arr = [2, 5, 100, 4, 65, 80];
const sortedNumber_1 = num_arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedNumber_1); //

//---------------------------------------------------
const spiceFamily = [
  { name: 'Ram Ashish', age: 40 },
  { name: 'Anshika', age: 8 },
  { name: 'Ram Charitra', age: 69 },
  { name: 'Harsh', age: 12 },
  { name: 'Sandeep', age: 24 },
];
const compa = (a, b) => {
  // return a.age - b.age;
  return a.name.length - b.name.length;
};
console.log(spiceFamily.sort(compa));
//--------------------------------------------------------------

// forEach() function----
// the forEach() method executes a provided function onces for each array element.

let stuRoll = [1, 5, 3, 7, 9, 6];
stuRoll.forEach(myFunction);

function myFunction(item) {
  console.log(item); // 1 5,3,7,9,6
}

// Updating array element----
//---------------------------------------

let stu = ['Sandeep', 'Harsh', 'Rehan', 'Deepak', 'Yash Wardhan'];
stu.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = 'Hello ' + item;
}
console.log(stu);
//------------------------------------------------------------------
let numA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numA.forEach(squareBySandeep);

function squareBySandeep(num) {
  console.log(num, num * num);
}

//==========================================================================
// every() function..
// When You want drive a single boolean value from multiple elements in the array.
//condition
//  1- You hava an array
//  2- You want to test each element in the array.
//  3- You want to konw whether all the element pass the test true or false

let simArr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let simArr_2 = [0, -1, -30, -50, 78];

function tester(number) {
  return number > 0;
}

let testFind = simArr_1.every(tester);
console.log(testFind); //true

let testFindd = simArr_2.every(tester);
console.log(testFindd); //false

//==================================================================

function isEven(numberr) {
  return numberr % 2 == 0;
}

let arrNum = [2, 4, 6, 8, 10, 12, 17];
let even = arrNum.every(isEven);
let task = true;
if (even == task) {
  console.log('All Number are Even..');
} else {
  console.log('All Nuumber are Not Even.');
}

//-------------------------------------------------------------
// some() function
//-----------------
// the some() function will take a boolean function and return true if at least one of the element
// in the array meets the criteria of the boolean function.

function isEven(num) {
  return num % 2 == 0;
}
let numArr_1 = [1, 3, 5, 7, 9];
//let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let someEven = numArr_1.some(isEven);
if (someEven) {
  console.log('Some Number are Even..');
} else {
  console.log('No Number are even..');
}

//reduce() function....
//---------------------------------
function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce(add);
console.log(`Adding Total Number of Array :- ${sum}`);
//--------------------------------------------------------------------
// Using Reduce Function for cancatnation string.
function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduceRight(concat);
console.log(sentence);

// step 1st--
// accumlatedString=the
// item =quick

// the quick
//-------------------------------
//  Step 2nd
// accumulatedString=the quick
// item= brown
// the quick brown
//-------------------------------
// step 3rd
// accumulatedString= the quick brown
// item = fox
// the quick brown fox              --- Final Result.
//=========================================================================================
// reduceRight() function, which works similarly to
//reduce(), only working from the righthand side of the array to the left, instead of from
//left to right.

function concat_1(accumlatedString, item) {
  return accumlatedString + item;
}
//---------------------------------------------------------------------------------------------------------
let word = ['the ', 'quick ', 'brown ', 'fox ']; // single quote with right hand single space is mandtrary.
let sentence_1 = word.reduceRight(concat_1);
console.log(sentence_1);

function concat_2(accumulatedString, item) {
  return accumulatedString + item;
}
var words_ = ['the ', 'quick ', 'brown ', 'fox '];
var sentence_ = words_.reduceRight(concat_2);
console.log(sentence_);

// Iterator function that return a new Array
//--------------------------------------------
// there are tow iterator function that return a new array : map() and filter()
// map() function work like the forEach() function.

function curve(grade) {
  return (grade = grade + 5);
}
let grade = [77, 65, 81, 92, 83];
let newGrade = grade.map(curve);
console.log(newGrade);

//---------------------------------------------------------
// Example with String
function first(word) {
  return word[0];
}
let words = ['kind', 'your', 'information'];
let accronym = words.map(first);
console.log(accronym.join('')); //kyi

//------------------------------------------------------------

// filter() function
// the filter function words similarly to every() function but instead of returning true
// if all the element of the array satisfied the boolean function ,the function return new
// array, consisting of those element that satisfied the boolean function.

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num_1) {
  return num_1 % 2 != 0;
}
let arr = [];
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}
let even = arr.filter(isEven);
console.log('Even Number: ');
console.log(even);

let odd = arr.filter(isOdd);
console.log('Odd Number:-');
console.log(odd);
//==============================================================================================
//Another use of filter() function...
function passing(num_2) {
  return num_2 >= 60;
}

let grade = [];
for (let i = 0; i < 20; i++) {
  grade[i] = Math.floor(Math.random() * 101);
}

let passGrade = grade.filter(passing);
console.log('All Grades: - ');
console.log(grade);
console.log('passing Grades');
console.log(passGrade);

//============================================================================
// Creating 2D dimenstional Array.
let twoDarray = new Array(2); //one dimenstional array
console.log('Creating 2D array.');
//loop to create 2 d Array using 1 d Array
for (let i = 0; i < 2; i++) {
  twoDarray[i] = new Array(2);
}

let h = 0; //loop initalization 2D array
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    twoDarray[i][j] = h++;
  }
}

//loop for display
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(twoDarray[i][j] + ' ');
  }
}
//========================================================
*/
//create  a one dimenstional array
let twoDarray = new Array(3);
//loop to create 2d array using 1d

for (let i = 0; i < twoDarray.length; i++) {
  twoDarray[i] = [];
}
let h = 0;
let s = 'GeeksforGeeks';
//loop to initialzation 2d array..
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    twoDarray[i][j] = s[h++];
  }
}

//loop to display the element of two d array

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(twoDarray[i][j] + ' ');
  }
}
