'use strict';
/*
//First Program 1-
console.log('Hello');

// o/p Hello
//==================================================
//function

function logger() {
  console.log('Hi.. Sandeep Welcome to Geekskool.com');
}
logger();
logger();
//o/p Hi.. Sandeep Welcome to Geekskool.com
//o/p Hi.. Sandeep Welcome to Geekskool.com
//================================================================
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
const appleOrangesJuice = fruitProcessor(2, 5);
console.log(appleOrangesJuice);
//o/p = 5,0
//o/p = Juice with 5 apples and 0 oranges.
//o/p = 2,5
//o/p = Juice with 2 apples and 5 oranges.
//=====================================================================
// Function declaration===================
function calAge(birthYear) {
  const age = 2021 - birthYear;
  return age;
}
const age1 = calAge(1997);
console.log(`Sandeep age is ${age1}.`);
//Sandeep age is 24.
//======================================================================

// Function Expressions=========================
const calAge2 = function (birthYear) {
  const agee = 2021 - birthYear;
  return agee;
};
const ag = calAge2(1997);
console.log(ag);
//O/P=  24
//======================================================================
// Arrow Functions============
//Arrow function with no argument..
const greet = () => console.log('Hello Sandeep');
greet();
//O/P=  Hello Sandeep
//========================================================================
//Arrow Function with one argument...
const greet2 = x => console.log(x);
greet2('Hello');

//O/P Hello
//============================================================================
//MultiLine Arrow Function...
const add = (a, b) => {
  const result = a + b;
  return result;
};
const res = add(20, 50);
console.log(res);
// O/P  70
//=================================================================================
//Find the Bigger value between two value...
const bigger = (a, b) => {
  if (a > b) {
    console.log(`${a} is bigger`);
  } else {
    console.log(`${b} is bigger`);
  }
};
bigger(30, 50);
//O/P=  50 is bigger
//==================================================================================
// Program 11-
//Even And Odd Number...
const evenOddNumber = num => {
  if (num % 2 == 0) {
    console.log(`${num} is Even Number ..`);
  } else {
    console.log(`${num} is Odd Number..`);
  }
};
evenOddNumber(26);
//O/P=  26 is Even Number.
//==================================================================================
//Program 12
//check for vote
const checkForVote = num => {
  if (num >= 18) {
    console.log('Welcome to Vote.');
  } else {
    console.log('Sorry ! You are Not Eligible.');
  }
};
checkForVote(19);
// O/P Welcome to Vote.
//=================================================================================
// Program 13
// Factorial Number..

const factorial = num => {
  let fact = 1;
  let i = 1;
  while (i <= num) {
    fact = fact * i;
    i++;
  }
  return fact;
};
const resu_ = factorial(5);
console.log(`Foctorial of 5! : ${resu_}`);
// O/P  Foctorial of 5 : 120
//=================================================================================

// Program 14
// Enter Day Number Print Day.

const findDay = dayNumber => {
  if (dayNumber == 1) {
    console.log('Sunday..');
  } else if (dayNumber == 2) {
    console.log('Monday..');
  } else if (dayNumber == 3) {
    console.log('Tuesday..');
  } else if (dayNumber == 4) {
    console.log('Wednesday..');
  } else if (dayNumber == 5) {
    console.log('Thursday');
  } else if (dayNumber == 6) {
    console.log('Friday..');
  } else if (dayNumber == 7) {
    console.log('saturday..');
  } else {
    console.log('Wrong Number.');
  }
};
findDay(8);
// O/P =  Monday..
// O/P =  Wrong Number..

//==================================================================================
//Program 15:
//Write a program , Count Digit...

const countDigit = number => {
  let count = 0;
  do {
    number = Math.floor(number / 10);
    count++;
  } while (number != 0);
  return count;
};
const result = countDigit(456);
console.log(`Number of Digits : ${result}`);
//O/P =Number of Digits : 3
//====================================================================================
//Program 16 2nd Type::  ::::

const digitCount = number => {
  let count = number.toString();
  let findLen = count.length;
  return findLen;
};
const co = digitCount(4567);
console.log(`Number of Dogit Is ${co}`);
//O/P== Number of Dogit Is 4

//====================================================================================
//Program 17:
//Write a program to find is digit are Number..
//Example -9 to +9 is called as Digit
// another called as Number...

const findDigitNumber = number => {
  if (number >= -9 && number <= 9) {
    console.log('It is Digit..');
  } else {
    console.log(`It is Number..`);
  }
};
findDigitNumber(8);
// O/P It is Number..
//O/P  It is Digit..

//==========================================================================================

//Program No. 18:
//find how many Number are Divisible.
const countDivisible = number => {
  let divisible_Count = 1;
  for (let i = 1; i <= number; i++) {
    if (i % number === 0) {
      divisible_Count++;
    }
  }
  return divisible_Count;
};
const di = countDivisible(40);
console.log(di);

//console.log(19 / 2); //9.5
//========================================================================
//Program No. 19
//Even or Odd
const evenOrOdd = number => {
  if (number % 2 == 0) {
    console.log('Even Number.');
  } else {
    console.log('Odd Number');
  }
};
evenOrOdd(10);
// O/P = Even Number.
//========================================================================
//Program No. 20
//Enter Month Number , print Month Name..
const monthNumber = number => {
  if (number == 1) {
    console.log('January..');
  } else if (number == 2) {
    console.log('Febuary.');
  } else if (number == 3) {
    console.log('March');
  } else if (number == 4) {
    console.log('April');
  } else if (number == 5) {
    console.log('May');
  } else if (number == 6) {
    console.log('june');
  } else if (number == 7) {
    console.log('July');
  } else if (number == 8) {
    console.log('August');
  } else if (number == 9) {
    console.log('September.');
  } else if (number == 10) {
    console.log('October');
  } else if (number == 11) {
    console.log('November');
  } else if (number == 12) {
    console.log('December');
  } else {
    console.log('Wrong Number');
  }
};
monthNumber(13);
//O/P= Wrong Number.

//=================================================================
//Program No. 21
//check equal or not.
const equalOrNot = (num1, num2) => {
  if (num1 === num2) {
    console.log('It is equal Number..');
  } else {
    console.log('It is not equal Number.');
  }
};
equalOrNot(12, 14);
// O/P : It is not equal Number.

//=====================================================================

//Program No. 22
//print all Even Number
const evenTillNum = num => {
  let i = 2;
  while (num >= i) {
    console.log(i);
    i = i + 2;
  }
};
evenTillNum(10);
//O/P 2 4 6 8 10 like that.

//======================================================================
//Program No. 23
//Print how many even Number and  how Many odd Number.
const countEvenOrOdd = num => {
  let evenCount = 0;
  let oddCount = 0;
  while (num >= 1) {
    if (num % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    num--;
  }
  console.log(`${evenCount} Even Number`);
  console.log(`${oddCount} Odd Number`);
};
countEvenOrOdd(15);
// 7 Even Number.
// 8 odd Number.

//==========================================================================
//Program No. 24
//Fibonacci Number..

const ffibonacci = num => {
  let i = 1;
  let temp1 = 0;
  let temp2 = 1;
  while (num >= i) {
    console.log(temp1 + ' ');
    let sum = temp1 + temp2;
    temp1 = temp2;
    temp2 = sum;
    i++;
  }
};
ffibonacci(10);
//O/P =  0 1 1 2 3 5 8 13 21 34

//=============================================================================
//Program No. 25
//Leap Year ..  .

const checkLeepYear = year => {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    console.log(`${year} is Leep Year.`);
  } else {
    console.log(`${year} Not a Leep Year.`);
  }
};
checkLeepYear(2021);
//2021 Not a Leep Year.

//=============================================================================
//program No. 26
//Leap Year..
const checkLeepyear = year => {
  if (year % 400 == 0) {
    console.log(`${year} Leap Year..`);
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} Leap Year..`);
  } else {
    console.log('Not a Leap Year.');
  }
};
checkLeepyear(2021);

//==============================================================================
//program No. 27
// Pass Fail Program

const passFail = (sub1, sub2, sub3, sub4) => {
  if (sub1 < 33 || sub2 < 33 || sub3 < 33 || sub4 < 33) {
    console.log('You are Failed.');
  } else {
    console.log('You are passed...');
  }
};
passFail(44, 45, 75, 95);
// O/P = You are passed...
//================================================================================
//Program No. 28
// check positive and negative number..
const checkPossitiveNagative = num => {
  if (num < 0) {
    console.log('Negative Number..');
  } else {
    console.log('Positive Number..');
  }
};
checkPossitiveNagative(12);
//O/P =Positive Number..

//====================================================================================
//program 29:
//check two digit spacial Number or not..
const checkTwoDigitSpacialNum = num => {
  if (num < 10 || num > 99) {
    console.log('Invalid Number ! Number should be two digit only.');
  } else {
    //finding first digit
    let first = parseInt(num / 10);

    //finding last digit
    let last = parseInt(num % 10);

    let sum = first + last;

    let product = first * last;

    if (sum + product === num) {
      console.log(`${num} is a spacial two digit number.`);
    } else {
      console.log(`${num} is not a spacial to digit number.`);
    }
  }
};
checkTwoDigitSpacialNum(100);

//O/P = 59 is a spacial two digit number.
//O/P = 29 is a spacial two digit number.
//=================================================================================

//Program No. 30
//Strong number is a special number whose sum of factorial of digit is equal to original number
//Example : 145 is strong number Since 1!+4!+5!=145
const checkStrongNumber = num => {
  let sum = 0;
  let temp = num;
  do {
    let reminder = parseInt(num % 10);
    let fact = 1;
    while (reminder > 1) {
      fact = fact * reminder;
      reminder--;
    }

    sum = sum + fact;
    num = parseInt(num / 10);
  } while (num != 0);
  if (sum == temp) {
    console.log(`${temp}: is a strong Number`);
  } else {
    console.log(`${temp}: is not strong Number.`);
  }
};
checkStrongNumber(145);
// O/P = 145: is a strong Number
// O/P = 157: is not a strong Number.

//=====================================================================================
//Program No. 31
//Find Power of given base and power

const findPowerOFGivenNumber = (base, power) => {
  let powerStored = 1;
  while (power > 0) {
    powerStored = powerStored * base;
    power--;
  }
  return powerStored;
};
const po = findPowerOFGivenNumber(2, 3);
console.log(po);
// O/P 8

//===========================================================================================
//Program No. 32
//write a program to find how many digit are present.

const countDigit = num => {
  let count = 0;
  do {
    count++;
    num = parseInt(num / 10);
  } while (num != 0);
  return count;
};

const co = countDigit(1234);
console.log('Number are Digit : ' + co);
// O/P = Number are Digit : 4

//=========================================================================================
//Program No. 33
// find the Minimum Number given two Number

const findMinNum = (num1, num2) => {
  let min;
  if (num1 > num2) {
    min = num2;
  } else {
    min = num1;
  }
  return min;
};
const minNu = findMinNum(24, 10);
console.log('Minimum Number are : ' + minNu);

//Minimum Number are : 10
//

//===============================================================================
//Program No. 34
//Type -1
//Write a Program to print reverse Number...

const reveseNumber = num => {
  let reverseN = 0;
  do {
    let reminder_ = parseInt(num % 10);
    reverseN = reverseN * 10 + reminder_;
    num = parseInt(num / 10);
  } while (num != 0);
  return reverseN;
};
const rev = reveseNumber(1456);
console.log('Reverse Number are: ' + rev);

//O/P=  Reverse Number are: 6541

//================================================================================

//Program No. 35
// Therory of the parseFloat
var a = parseFloat('10');
var b = parseFloat('10.00');
var c = parseFloat('10.33');
var d = parseFloat('34 45 66');
var e = parseFloat(' 60 ');
var f = parseFloat('40 years');
var g = parseFloat('He was 40');

console.log(a); //10
console.log(b); //10
console.log(c); //10.33
console.log(d); //34
console.log(e); // 60
console.log(f); //40
console.log(g); //NaN

//=============================================================================
// Program No. 36
//Type -2
//Write a Program to print reverse Number...

//Solving with a regular function.

function reverseNum(num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  );
}
const re = reverseNum(-5432100);
console.log('Reverse Of the Number : ' + re);

//Reverse Of the Number : -12345

//==============================================================================

// // Program No. 37
// //Theory Explanation of above reverseNum function.

// Let’s break the steps down:
// Step 1st : Convert the number to a string
// ----------------------------------------------
// num.toString() converts the given number into a String. We do this so we can use the split function on it next.

// let num = -5432100
// num.toString()

// // num = '-5432100'
// ------------------------------------------------------
// Step 2nd : ==Split the String into an Array
// num.split('') converts the String into an Array of characters. We do this so we can
// use the Array reverse function (which does not work on a String).

// // num = '-5432100'

// num.split('')

// // num = [ '-', '5', '4', '3', '2', '1', '0', '0' ]
// step 3rd-----
// -----------------------------------------------------------------
// Reverse the Array
// num.reverse() reverses the order of the items in the array.

// // num = [ '-', '5', '4', '3', '2', '1', '0', '0' ]

// num.reverse()

// // num = [ '0', '0', '1', '2', '3', '4', '5', '-' ]
// -----------------------------------------------------------------
// step 4th
// Join it back into a string
// num.join('') reassembles the reversed characters into a String.

// // num = [ '0', '0', '1', '2', '3', '4', '5', '-' ]

// num.join('')

// // num = '0012345-'
// step 5th ---
// --------------------------------------------------------
// Parse the input value into a floating point number:
// parseFloat(num) converts num into a float from a String.

// // num = '0012345-'

// parseFloat(num)

// // num = 12345
// Note: parseFloat runs in the end (even though it is on the first line of the function) on the
//  reversed number and removes any leading zeroes.

// Multiply it by the sign of the original number — to maintain the negative value.
// num * Math.sign(num) multiplies the number with the sign of the original number provided.

// // original value of num = -5432100
// // num = 12345

// num * Math.sign(-5432100)

// // num = -12345
// And, there you have it!

//==========================================================================================
// Program No. 38
// Write a Program to print reverse Number...
// Using Arrow Function...

const revNum = num =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(revNum(-5432100));

// O/P -12345

//==============================================================================================
//Program No. 39
//Write a program check palindrome Number are Not...
const checkPalindromeNumber = num => {
  let reverse_ = 0;
  let temp = num;
  do {
    let reminder = parseInt(num % 10);
    reverse_ = reverse_ * 10 + reminder;
    num = parseInt(num / 10);
  } while (num != 0);
  if (reverse_ == temp) {
    return true;
  } else {
    return false;
  }
};
const che = checkPalindromeNumber(1245);
if (che == true) {
  console.log('It is a Palindrome Number');
} else {
  console.log('It is Not Palindrome Number');
}

// O/P = It is Not Palindrome Number
// O/P =It is a Palindrome Number

//================================================================================
// program No. 40
// Check Number are prime or Not.
//Type 1st--------
const chechprimeOrNot = num => {
  num = parseInt(num);
  let flag = true;
  for (let i = 2; i <= num - 1; i++)
    if (num % i == 0) {
      flag = false;
      break;
    }
  if (flag == true) {
    console.log('It is a Prime Number.');
  } else {
    console.log('Not a prime Number');
  }
};
chechprimeOrNot(10);

// It is a prime Number.

//==================================================================================
// program No. 41
// Check Number are prime or Not.
//Type 2nd--------
const checkpri = num => {
  num = parseInt(num);
  let divisible_Count = 1;
  let i = 1;
  while (num / 2 >= i) {
    if (num % i == 0) divisible_Count++;
    i++;
  }
  return divisible_Count;
};
const chec = checkpri(7);
if (chec == 2) console.log('It is Prime Number');
else console.log('It is Not a prime Number..');

//O/P - It is Prime Number

//===================================================================================
// Program No. 42
//Find the cube of the Number.
const cubeFind = num => {
  let sum = 0;
  while (num != 0) {
    let reminder = num % 10;
    sum = sum + reminder * reminder * reminder;
    num = parseInt(num / 10);
  }
  return sum;
};
let cube = cubeFind(5);
console.log(cube);

//O/P = 125

//=====================================================================================

//Program No. 43
// Check Number are armStrong Number or Not.
//sum of cubes of each digit is equal to number itself 153
//For example: 153 = 1*1*1 + 5*5*5 + 3*3*3 // 153 is an Armstrong number

const checkArmstrongNumberOrNot = num => {
  let sum = 0;
  let temp = num;
  do {
    let reminder_ = num % 10;
    sum = sum + reminder_ * reminder_ * reminder_;
    num = parseInt(num / 10);
  } while (num != 0);
  if (sum == temp) {
    return true;
  } else {
    return false;
  }
};
const checking = checkArmstrongNumberOrNot(153);
if (checking == true) {
  console.log('It is a armstrong Number..');
} else {
  console.log('It is Not a armstrong Number.');
}

//O/p = It is a armstrong Number..

//==================================================================================
// Program No. 44
//check happy Number or Not...

const happyOrSadNumber = num => {
  while (num > 9) {
    let sum = 0;
    while (num != 0) {
      let _reminder = num % 10;
      sum = sum + _reminder * _reminder;
      num = parseInt(num / 10);
    }
    num = sum;
  }
  return num == 1 || num == 7;
};

const happyUnhappy = happyOrSadNumber(19);
if (happyUnhappy == true) console.log('Happy Number..');
else console.log('Unhappy Number, Or Bad Number.');

//O/P - Unhappy Number, Or Bad Number.
//O/P - Happy Number..

//=====================================================================================
// Program No. 45
//Sum Of Natural Number....

const sumOfNatural = num => {
  let sum = 0;
  while (num > 0) {
    sum = sum + num;
    num--;
  }
  return sum;
};
const sumN = sumOfNatural(10);
console.log('Sum of the Number : ' + sumN);

//O/P - Sum of the Number : 55

//========================================================================================
//Program No. 46
// Find the Middle Number...

const findMiddleNum = (first, second, third) => {
  if ((first > second && first < third) || (first > third && first < second)) {
    console.log(`${first} is Middile Number.`);
  } else if (
    (second > third && second < first) ||
    (second > first && second < third)
  ) {
    console.log(`${second} middle Number..`);
  } else {
    console.log(`${third} middle Number..`);
  }
};
findMiddleNum(45, 65, 89);

//O/P - 65 middle Number..
//==========================================================================================
//Program No. 47
// Print table.

const table = num => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}  *  ${i}  = ${num * i} `);
  }
};
table(5);

//5  *  1  = 5
//5  *  2  = 10
//5  *  3  = 15
//5  *  4  = 20
//5  *  5  = 25
//5  *  6  = 30
//5  *  7  = 35
//5  *  8  = 40
//5  *  9  = 45
//5  *  10  = 50

//===================================================================================
// program No. 48
//A number is called Disarium if sum of its digits powered
// with their respective positions is equal to the number itself.
//Input   : n = 135
//Output  : Yes
// 1^1 + 3^2 + 5^3 = 135
// Therefore, 135 is a Disarium number

const findDisariumNumber = num => {
  let sum = 0;
  let digitCount = 0;
  let temp = num;

  while (temp != 0) {
    temp = parseInt(temp / 10);
    digitCount++;
  }

  let temp1 = num;
  while (temp1 != 0) {
    let _reminder = temp1 % 10;
    sum = sum + Math.pow(_reminder, digitCount);
    temp1 = parseInt(temp1 / 10);
    digitCount--;
  }
  if (sum == num) return true;
  else return false;
};
const dire = findDisariumNumber(135);
if (dire == true) {
  console.log('It is a Disarim Number..');
} else {
  console.log('Not a Disarium Number..');
}

// O/P = It is a Disarim Number..

//===============================================================================
//Program No. 49
// write a program student pass a fail..

const subjectMark = (sub1, sub2, sub3, sub4) => {
  if (sub1 < 33 || sub3 < 33 || sub3 < 33 || sub4 < 33) {
    console.log('You are fail..');
  } else {
    console.log('You are Pass.');
  }
};
subjectMark(45, 65, 75, 63);

// O/P = You are Pass.

//================================================================================
// String Question.....
//--------------------------------
//--------------------------------
// Program No. 50
// find the length of string...

const str = 'sandeep';
console.log('String are : ' + str);
console.log('Length of String : ' + str.length);

//O/P = String are : sandeep
//    = Length of String : 7

//==================================================================================
// program No. 51
//Add two String..
const str1 = 'sandeep';
const str2 = 'Prajapati';

const str3 = str1.concat(str2);
console.log(str3);

// O/P sandeepPrajapati

const str4 = str1 + str2;
console.log(str4);
// O/P sandeepPrajapati

//==================================================================================
// Program No. 52
// equal String checking...

const str1 = 'Javascript programming';
const str2 = 'Java Programming';
const str3 = 'Javascript programming';

if (str1 == str3) {
  console.log('Both string are equal..');
} else {
  console.log('Not Equal ...');
}

//  o/p = Both string are equal..

//===================================================================================
// Program No. 53
//charAt() function..
//find index..

const str = 'sandeep';
console.log(str);

console.log(str.charAt(0));
console.log(str.charAt(2));

// s
// n

//=================================================================================
//Program No. 54
const str = 'sanDeep!';
console.log(str.substr(2));
// ndeep
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace('!', 'W'));
// sanDeepW

// let str1 = 'easy easy font easy';
// str1 = str1.replace('easy', ' ');
// console.log(str1);

//=================================================================================
//Program No. 55
//Remove vowel from sentence or string.

const removeVowel = str => {
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      result = result + str[i];
    }
  }
  return result;
};

let str = 'sandeep';
const res = removeVowel(str);
console.log('After removing Vowel: ' + res);

// O/P - After removing Vowel: sndp

//=================================================================================
//Program No.56
//Find the Frequency Count...
const frequencyCount = str1 => {
  let arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let c = 0; c <= arr.length; c++) {
    let charCount = 0;
    for (let j = 0; j < str1.length; j++) {
      let ch = str1.charAt(j);
      if (ch == arr[c]) {
        charCount++;
      }
    }
    if (charCount > 0) {
      console.log(
        `The Character ${arr[c]}  has occoured for ${charCount} times..`
      );
    }
  }
};

let str1 = 'sandeepssss';
frequencyCount(str1);

// The Character a  has occoured for 1 times..
// The Character d  has occoured for 1 times..
// The Character e  has occoured for 2 times..
// The Character n  has occoured for 1 times..
// The Character p  has occoured for 1 times..
// The Character s  has occoured for 5 times..

//=======================================================================================
//Program No. 57
//Given an String and given character find the character how many times are present in string.

let contingGiven = (str, charar) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == charar) {
      count++;
    }
  }
  console.log(`${count} times`);
};
let str = 'sandeepsdddddd';
let charar = 'd'.charAt(0);
// console.log(typeof charar);
contingGiven(str, charar);

// O/P - 7 times
//================================================================================================
//Program No. 58
// Write a program in String how many types are string upper lower digit spacial character like that..

// for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
//   console.log(String.fromCharCode(i) + ' ');
// }
//========================================================================================
// Program No. 59
let uc = 0;
let lc = 0;
let str = 'SandeepPP';
for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (ch >= 'A' && ch <= 'Z') {
    uc++;
  } else {
    lc++;
  }
}
console.log(`Upper Latter are : ${uc}  and Lower Latter are : ${lc} `);

//================================================================================
//Program No. 60
//
let whichTypeLetter = str1 => {
  let uc = 0;
  let lc = 0;
  let vc = 0;
  let cc = 0;
  let dd = 0;
  let spcialC = 0;
  for (let i = 0; i < str1.length; i++) {
    let ch = str1.charAt(i);
    if (ch >= 'A' && ch <= 'Z') {
      uc++;
      if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        vc++;
      } else {
        cc++;
      }
    } else if (ch >= 'a' && ch <= 'z') {
      lc++;

      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        vc++;
      } else {
        cc++;
      }
    } else if (ch >= '0' && ch <= '9') dd++;
    else spcialC++;
  }
  console.log('upper case are : ' + uc);
  console.log('lower case are : ' + lc);
  console.log('Vowel are : ' + vc);
  console.log('Consonenet are : ' + cc);
  console.log('Digit are : ' + dd);
  console.log('Spcial are : ' + spcialC);
};

let str1 = 'kgjrgjrg[rlgro24444@$%12423';
whichTypeLetter(str1);

// output are-------
// upper case are : 0
// lower case are : 13
// Vowel are : 1
// Consonenet are : 12
// Digit are : 10
// Spcial are : 4

//================================================================================
//================================================================================
//=================================================================================
// IMPORTANT CONCEPT----
//  Array Program----------------------
//-------------------------------------

//Program No. 61

const arr = [4, 5, 7, 9, 23, 45, 62, 86, 15, 24];
//access each element..
console.log('Acces element of array...');
console.log('Element are ' + arr[0]);
console.log('Element are ' + arr[1]);
console.log('Element are ' + arr[2]);
console.log('Element are ' + arr[3]);

//===================================================================================
//Program No. 62

const age = [4, 5, 6, 8, 75, 49, 2, 4, 3, 5, 341, 51, 45, 22];
console.log('Using for Loop..');
for (let i = 0; i < age.length; i++) {
  console.log(age[i] + ' ');
}

//====================================================================================
//Program No. 63

const age = [12, 4, 5, 4, 7, 84];
console.log(age.length);
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum = sum + age[i];
}
console.log(sum);

//====================================================================================
//Very Important.....
//Program No. 64
//Taking User Input..
let noOfEle = prompt('Enter Number Of Element ?  ? ');
let arr = [];

//input
for (let i = 0; i < noOfEle; i++) {
  arr[i] = prompt(`Enter ${noOfEle} of element .`);
}

//print array.
for (let i = 0; i < noOfEle; i++) {
  console.log(arr[i] + ' ');
}

//Output---

//  10
//  20
//  30
//  40
//  50

//========================================================================================
// Program No. 65
// print reverse an array.....

let noOfEle = prompt('Enter Any Array Lenght ?    ? ');
let arr = [];

for (let i = 0; i < noOfEle; i++) {
  arr[i] = prompt(`Enter  ${noOfEle} Length of Element ?   ?   `);
}

for (let k = 0; k < parseInt(noOfEle / 2); k++) {
  let temp = arr[k];
  arr[k] = arr[arr.length - 1 - k];
  arr[arr.length - 1 - k] = temp;
}
console.log('After reverse the array..');
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j] + ' ');
}

// O/P- 50,40,30,20,10

//=================================================================================

//Program No. 66
// reverse the array..
function customReverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    // Swap the elements with temp variable
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
  return originalArray;
}
let myArray = [1, 2, 3, 4, 5];

let res = customReverse(myArray);
for (let ii = 0; ii < res.length; ii++) {
  console.log(res[ii] + ' ');
}
// 5 4 3 2 1

//===================================================================
//Program No. 67
// Using while loop - 1:---

const factorial_Me = num => {
  let fact = 1;
  while (num != 0) {
    fact = fact * num;
    num--;
  }
  return fact;
};
const res = factorial_Me(5);
console.log(res);
//O/P- 120

//====================================================================
//Program No. 68
//Using do While loop

const facto = num => {
  let fact = 1;
  do {
    fact = fact * num;
    num--;
  } while (num != 0);
  return fact;
};
const resss = facto(5);
console.log(resss);

// O/P 120

//==================================================================
//Program No. 69
//Using for loop
const factoria = num => {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
};
const res = factoria(5);
console.log(res);

//O/P 120

//==================================================================================
//Program No. 70
//Using recursion...

const factorial = num => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const res = factorial(5);
console.log(res);

//O/P 120

//===============================================================================
//Program No. 71
// Write a program to find a big number in array...

let noOfEle = prompt('Enter Any Array Length  ?    ? ');
let arr = [];

for (let i = 0; i < noOfEle; i++) {
  arr[i] = prompt();
}

let big = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > big) {
    big = arr[i];
  }
}

console.log('Heighest Number is : ' + big);

//Heighest Number is : 62

//=======================================================================================
//Program No. 72
//write a program print sum of the all given array...

let noOfEle = prompt('Enter Any Array Length  ?   ?   ');
const arr = [];
for (let i = 0; i < noOfEle; i++) {
  arr[i] = prompt();
}
let sum = 1;
for (let i = 0; i < noOfEle; i++) {
  sum = sum + arr[i];
}
console.log('Sum of all Array Number :' + sum);

//=================================================================================
//Program No. 73
//

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

//  Output :  15

//======================================================================================
//program No. 74
//positive aor negitive count an array...

let arr = [12, 14, -14, 19, 78, -14, -23, 32, -1, -36, 119, 145];

let negative = 0;
let positive = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negative++;
  } else {
    positive++;
  }
}
console.log(`Positive : ${positive}`);
console.log(`Negative : ${negative}`);

//Positive : 7
//Negative : 5

//========================================================================================
//Program No. 75
// count even or odd in array..

const arr = [11, 14, 16, 17, 27, 19, 50, 24, 36, 40, 54, 66, 75, 80];
let evevCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evevCount++;
  } else {
    oddCount++;
  }
}
console.log(`Even count : ${evevCount}`);
console.log(`Odd Count : ${oddCount}`);

// Even count : 9
// Odd Count : 5


//==========================================================================================
//Program No. 76
//merge two array in single array..
//immuutable ---we can not change...
//mutable---we can change....
//=====================================================================================
//merge using spread operator....

let arr1 = [10, 20, 40, 60, 45, 70, 63];
let arr2 = [70, 54, 65, 75, 85, 95, 14];
let mergeRes = [...arr1, ...arr2];

for (let i = 0; i < mergeRes.length; i++) {
  console.log(mergeRes[i] + '  ');
}


//==========================================================================
//Program No. 77
// Using array.cancat() method...

let arr1 = [10, 20, 40, 60, 45, 70, 63];
let arr2 = [70, 54, 65, 75, 85, 95, 144];

const mergeRess = arr1.concat(arr2);
for (let i = 0; i < mergeRess.length; i++) {
  console.log(mergeRess[i] + ' ');
}


//===========================================================================
//Program No.78
//using push ans spread() method...

let arr1 = [10, 20, 40, 60, 45, 70, 63];
let arr2 = [70, 54, 65, 75, 85, 95, 104];
arr1.push(...arr2);
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i] + ' ');
}
*/
//==========================================================================
//Program No.79
//given array find the number of prime number...

let arr1 = [4, 3, 7, 9, 15, 11, 13, 45, 66, 25];
let count = 0;
for (let i = 0; i < arr1.length; i++) {
  let res = isPrimeNumber(arr1[i]);
  if (res == true) count++;
}
console.log('count of prime number ' + count);

function isPrimeNumber(num) {
  num = parseInt(num);
  let i = 2;
  while (num / 2 >= i) {
    if (num % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

//O/P - count of prime number 4

//==================================================================================
//Program No. 80
//
