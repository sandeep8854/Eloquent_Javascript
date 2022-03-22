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

*/
//=================================================================
// Important question or logical qestion---
function reverseNumber(num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  );
}

const result = reverseNumber(-5432100);
console.log(result);

// Hackerrank.com
//-----------------------------------------------------------------




