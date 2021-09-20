'use strict';
/*
let total = 0;
let count = 1;
while (count <= 10) {
  total = total + count;
  count++;
}
console.log(total);
//  55

//==========================================================

//   Abstruction:---
//---------------------
//  In the context of programming ,these kinds of vacabularies are usually called abstruction.
//  Abtruction hide details and give us the ability to talk about problem at a higher (or more abstuct ) level.

//   Abstracting repetition :------
// --------------------------------

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//   can we abstruct "doing something" N.times as a function..

function repeateLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeateLog(10);

//  can be represent as a function and functions are just value, so we can pass our action as a function value.

function repeatA(n, action) {
  for (let i = 0; i <= n; i++) {
    action(i);
  }
}
repeatA(3, console.log);
// 0 1 2 3

// we dont have to pass predefined function to repeate  often , it is easier to create function value of
// spot instead.

//   higher Order function..
//----------------------------

//  function that operate an other function , either by taking them as argument or returning them,
//  are called higher order function..

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));
let restrueFalse = greaterThan10(11);
console.log(restrueFalse);
// true

// that is called higher order function...

['A', 'B'].forEach(l => console.log(l));
// A
// B

//      Filter Arrays..
//--------------------------

//   Function Assigned to Variable as -:
//--------------------------------------

let plusFive = number => {
  return number + 5;
};
// f is assigned the value of plusFive;
let f = plusFive;
console.log('Adding: ' + plusFive(3));
//  Adding: 8

console.log('Adding With Function Variable: ' + f(10));
//  Adding With Function Variable: 15

//==========================================================================

// Callback Functions
//-------------------------------------
//
//In JavaScript, a callback function is a function that is passed into another function as an argument.
// This function can then be invoked during the execution of that higher order function
// (that it is an argument of).

const isEven = n => {
  return n % 2 == 0;
};
let printMsg = (isEven, num) => {
  const isNumEven = isEven(num);
  console.log(`The Number ${num} is an even number ${isNumEven}`);
};
printMsg(isEven, 4);

//   The Number 4 is an even number true

//===================================================================================
// Array Method .reduce()

//------------------------------

//The .reduce() method iterates through an array and returns a single value.

//It takes a callback function with two parameters (accumulator, currentValue) as arguments.
// On each iteration, accumulator is the value returned by the last iteration,
//and the currentValue is the current element. Optionally, a second argument can be passed which
// acts as the initial value of the accumulator.
// Here, the .reduce() method will sum all the elements of the array.

const arrayOfNumber = [1, 2, 3, 4];
const sum = arrayOfNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(`Sum of All Array :  ${sum} `);

//  Sum of All Array :  10

//=====================================================

// Array Method .forEach() -:

//--------------------------------------
//The .forEach() method executes a callback function on each of the elements in an array in order.
//Here, the callback function containing a console.log() method will be executed 5 times, once for each element.

const num = [28, 77, 45, 99, 27];
num.forEach(number => {
  console.log(number);
});

// 28 77 45 99 27

//===========================================================================================

//   Array Method .filter()
//The .filter() method executes a callback function on each element in an array. The callback function
//for each of the elements must return either true or false. The returned array is a new array
//with any elements for which the callback function returns true.
//Here, the array filteredArray will contain all the elements of randomNumbers but 4.

const randomNumbers = [4, 11, 42, 14, 39];
const filterArry = randomNumbers.filter(n => {
  return n > 5;
});
//console.log(filterArry);

for (let x in filterArry) {
  console.log(filterArry[x] + ' ');
}

// 11 42 14 39 

//==============================================================================================

//  Array Method .map() -:
//------------------------------------
//The .map() method executes a callback function on each element in an array.
// It returns a new array made up of the return values from the callback function.
//The original array does not get altered, and the returned array may contain
//different elements than the original array.

const finalParticipants = [
  'Sandeep',
  'Rakesh',
  'Yash Wardhan',
  'Rehan Kumar',
  'Hora Prashad',
  'Vashant Kulkarni',
];

const announment = finalParticipants.map(member => {
  return member + ', You are selected Please! joined the contest ';
});

//console.log(announment);
for (let x in announment) {
  console.log(announment[x] + ' ');
}

for (let i = 0; i < announment.length; i++) {
  console.log(announment[i] + ' ');
}


//================================================================================

//  -------Higher Order Function....
//--------------------------------------------

//  A function that accept and/or return another function is called higher order function
//With functions in JavaScript, you can
// Store them as variables
// Use them in arrays
// Assign them as object properties (methods)
// Pass them as arguments
// Return them from other functions

//        1st-
//Functions Operate on Data
//Strings Are Data

const sayHi = name => `Hi, ${name}`;
const result = sayHi('User');

console.log(result); // 'Hi, User!'
//======================================================

//    Number Are Data..
//-----------------------------

const doubleValue = x => x * 2;
const result = doubleValue(4);
console.log(result);

//   8

//=========================================

// Boolean Are Data..
//--------------------------

const getClearance = allowed => (allowed ? 'Access granted' : 'Access denied');
const result1 = getClearance(true);
const result2 = getClearance(false);

console.log(result1);
//  Access granted
console.log(result2);
// 'Access denied

//======================================================================================
//   Object Are data-:
//---------------------------
const getFirstName = obj => obj.firstName;
const result = getFirstName({
  firstName: 'Sandeep',
});
console.log(result);
// Sandeep

//====================================================================================

//  Array Are Data...
//-------------------------

const len = array => array.length;
const result1 = len([1, 2, 3]);

console.log(result1);
// 3

//============================================================================================================
// A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function
// to its callers.

//A callback function is a function that is passed to another function with the expectation
// that the other function will call it.
//=========================================================================================================

//  Higher Order Function:--
//                          Function which takes another function as an argument is called HOF.

// CallBack function:---
//                       Function which get passed as an argumnts to another function is called  CBF.

//  HOF:----

const interviewQuestion = name => {
  if (name === 'Sandeep') {
    return function (topic) {
      console.log(`Hi... ${name}, What is ${topic}? Please explane us.`);
    };
  }
  if (name === 'Yash Wardhan') {
    return function (topic) {
      console.log(`Hi... ${name}, What is ${topic}? Please explane us.`);
    };
  }
  if (name === 'Rakesh') {
    return function (topic) {
      console.log(`Hi... ${name}, What is ${topic}? Please explane us.`);
    };
  } else {
    return function () {
      console.log('Welcome to interview..');
    };
  }
};
interviewQuestion('Sandeep')('Java');
interviewQuestion('Yash Wardhan')('JavaScript');
interviewQuestion('Rakesh')('Indian  Constitution');
interviewQuestion('Vashant')('Python');

// CBF
// ANy function that is passed as an argument is argument is called a callback function.
// a callback function that is to be executed after another function has finished execution hence is call back function

const funA = () => {
  setTimeout(function () {
    console.log('Welcome Function A..');
  }, 3000);
};

const funB = () => {
  console.log('Welcome to Function B..');
};
funA();
funB();

//Welcome to Function B..
//Welcome Function A.
//===================================================================
const perOne = friend => {
  console.log(
    `I am busy right now , i am taking to ${friend}. i will call you back`
  );
};
const perTwo = () => {
  console.log(`Hi what happed.`);
};
perOne('Sandeep');
perTwo();

//=====================================================================

const perOne = (friend, callFriend) => {
  console.log(
    `I am busy right now , i am talking to ${friend}. i will call you back`
  );
  callFriend();
};
const perTwo = () => {
  console.log(`Hi what happed.`);
};
perOne('Sandeep', perTwo);

//  I am busy right now , i am talking to Sandeep. i will call you back
//  Hi what happed.

//=========================================================================
// reduce() method-:--------

//--------------------------
//Definition and Usage
//The reduce() method executes a reducer function for each value of an array.

//reduce() returns a single value which is the function's accumulated result.

//reduce() does not execute the function for empty array elements.

//reduce() does not change the original array.
*/

const myFunc = (total, num) => {
  return total - num;
};
const number = [175, 50, 25, 10];
const res = number.reduce(myFunc);
console.log(res);

//    90
//===================================================
//  Write a program add , sum of the array..

const reducerFunc = (previous, current) => {
  return previous + current;
};

const arr = [10, 20, 30, 40, 50];
const sumOfArray = arr.reduce(reducerFunc);
console.log(`Sum Of The Array :- ${sumOfArray}`);

const sumOfArray1 = arr.reduce(reducerFunc, 10);
console.log(`Sum Of The Array :- ${sumOfArray1}`);
// here 10 is previous value....

//  Sum Of The Array :- 150
//  Sum Of The Array :- 160
//=====================================================
// Flatten an array of arrays:-----

const flattenFunc = (previousVal, currentVal) => {
  return previousVal.concat(currentVal);
};

let flattend = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let result = flattend.reduce(flattenFunc);
console.log(result);
for (let x in result) {
  console.log(result[x] + '  ');
}

// 0 1 2 3 4 5

//=====================================================================
