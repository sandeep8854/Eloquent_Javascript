'use strict';
/*
//function ---
// a function in javascript similar to procedure - a set of statement
// that perform task or  calculation a value

const square = function (x) {
  return x * x;
};
const res = square(12);
console.log(`Square of the number:- ${res}`);


//======================================================================
const makeNoise = function () {
  console.log('Pling!');
};
makeNoise();

// Pling!
//=====================================================================

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};
const res = power(2, 10);
console.log(`Power of 2^10:- ${res} `);

// Power of 2^10:- 1024 

//=======================================================================
//    Binding and Scopes........
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); //60
}
//console.log(y); we cant access otside because of let variable...
console.log(z); //30
console.log(x + z); //40


//=======================================================================
//  Nested Scope.....
//=------------------
const hummus = function (factor) {
  const ingredients = function (amount, unit, name) {
    let ingredientAmount = amount + factor;
    if (ingredientAmount > 1) {
      unit = unit + 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredients(2, 'can', 'checkpeas');
};


//=======================================================================
//  function Notations...
function square(x) {
  return x * x;
}
const res = square(5);
console.log(`Square of the Number : ${res} `);

// function declration are not part of the regular top to bottom flow of control..
//
console.log('The future say : ', future());
function future() {
  return 'You will never have flying car';
}
//O/P -The future say :  You will never have flying

//=======================================================================
// The call stack...
//
function greet(who) {
  console.log('Hello ' + who);
}
greet('Sandeep');
console.log('Bye');

//========================================================================

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + 'come first');

//practics.js:91 Uncaught RangeError: Maximum call stack size exceeded

//=======================================================================
// Optional Argument---

function square(x) {
  return x * x;
}
console.log(square(4, true, 'sandeep'));
// O/P - 16

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10)); //-10
console.log(minus(10, 5)); //5

// if you write  an = operator after the parameter followed by an expression the value of that expression will replace
// the argument when it is not given ...
//  Like as a example-----
function power(base, exponent = 2) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}
console.log(power(4)); //16
console.log(power(2, 6)); //64
//2nd console, if you find any argument and power function already pass as an argument exponent=2
// the exponent value will be skip
//and consider whatever value has been passed in the console or called the function or invoked the function..


//==============================================================================================================
//   Closure---
//---------------
//  To ablitiy to treat function as values combined with the fact that local binding are re - created every time
//  a function is called as closuer
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
console.log(wrap1());
// 1

let wrap2 = wrapValue(2);
console.log(wrap2());
// 2

//===============================
function multilier(factor) {
  return number => number * factor;
}
let twice = multilier(2);
//twice is a return as a function...
let res = twice(5);
console.log(res);

//===============================================================================
function numberGenerator() {
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}
let number = numberGenerator();
number();

//================================================================================
//A variable innerFunc reference the InnerFunction() only, not the OuterFunction().
// So now, when you call innerFunc(), it can still access outerVariable
//which is declared in OuterFunction(). This is called Closure.

function outerFunction() {
  var outerVariable = 100;
  function innerFunction() {
    console.log(`value of outerFunction:  ${outerVariable}`);
  }
  return innerFunction;
}
let innerFun = outerFunction();
innerFun();
//  value of outerFunction:  100

//======================================================================================
//value of the outer variables will be changed if you change it using inner function.
function counter() {
  var counter = 0;
  function increaseCounter() {
    return (counter = counter + 1);
  }
  return increaseCounter;
}
var res = counter();
console.log(res());
console.log(res());


//=========================================================================

// Recursions-------
//----------------------------

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
//  8

//===========================================================================
function printFormInventry(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFormInventry(7, 11);

//    007 Cows
//    011 Chickens

//==========================================================================
// formar calls and tells us she also started keeping pigs and could not , so please extend the software
// to also print pigs..

function printZeroPaddedWithLabels1(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFormInventry(cows, checkens, pigs) {
  printZeroPaddedWithLabels1(cows, 'Cows');
  printZeroPaddedWithLabels1(checkens, 'Chickens');
  printZeroPaddedWithLabels1(pigs, 'Pigs');
}

printFormInventry(7, 11, 3);

//  007 Cows
//  011 Chickens
//  003 Pigs
*/
//=================================================================================
// it work! but that name, printZeroPaddedWoithLabel is lettle akward
// it compleate three links- printing,zeroPadding,and adding a label-into a single function.
// Instead of lifting out the repeated part of our program hole sales ,try to single concept...

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventry(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows `);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventry(7, 16, 3);

//  007 Cows
//  016 Chickens
//  003 Pigs
// Note - This is a better and sufficients code of the as like a developer mood..
// better and funtastic , reliable code...
//
//===========================================================================================
