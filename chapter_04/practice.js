'use strict';
/*
let sequence = [1, 2, 3, 4, 5];
sequence.push(6);
sequence.push(7);
sequence.push(8);
console.log(sequence);

console.log(sequence.pop());

//==============================================================
//   Objects----
//-----------------

let day1 = {
  squirrel: false,
  events: ['Work', 'touched Tree', 'pizza', 'running'],
};
console.log(day1.squirrel);

console.log(day1.wolf);
// undefined

day1.wolf = false;
console.log(day1.wolf);

//======================================================================

let descriptions = {
  work: 'Went to work',
  'touched tree': 'Touched a tree',
};
console.log(descriptions.work); //Went to work
console.log(descriptions['touched tree']); //Touched a tree

//=======================================================================
//  delete an Object property
//  it also called as unary operator

let anObject = { left: 1, right: 2 };
console.log(anObject.left); // 1

delete anObject.left;
console.log(anObject.left); //undefined

console.log('left' in anObject); //false

console.log('right' in anObject); //true


// The in operator is an inbuilt operator in JavaScript which is used to check whether a
// particular property exists in an object or not.
//  It returns boolean value true if the specified property
//   is in an object, otherwise it returns false.
//==========================================================================================

// to find out what properties an object has you can use the object.keys function.
// you give it an object and it return an array of string - the object properties name..

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
//  ['x', 'y', 'z']

//=============================================================================================

//There’s an Object.assign function that copies all properties from one object
//into another.

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);

// Note - if b is already there then if you want to assign new b the whose b already present
//  that value will be skip an that position new value will be updated...
//

let object1 = { value: 10 };
let object2 = object1;

let object3 = { value: 10 };
console.log(object1 == object2);
// true
console.log(object1 == object3);
//false

object1.value = 15;
console.log(object1.value);
//  15

console.log(object3.value);


//==========================================================================
console.log(Math.floor(Math.random() * 10));
// he give 0 > || 10 <

console.log(Math.floor(Math.random() * 100));
// he give 0 > || 100 <


let { name, age, job } = {
  name: 'Sandeep',
  age: 24,
  job: 'Software Developer',
};
console.log(name);
console.log(age);
console.log(job);


// rest parameter---
//--------------------
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log(max(4, 1, 3, -1, 9));
// 9

//========================================================================
//   ----  JSON ----
//-------------------------
//  Developed by Douglas CrockFord--
//  JSON stands for JavaScript Object Notation
//  JSON is a lightweight data-interchange format
//  JSON is plain text written in JavaScript object notation
//  JSON is used to send data between computers
//  JSON is language independent.

//  He is best known for having discovered that there are good parts in JavaScript.
//  That was the first important discovery of the Twenty First Century.
// He also discovered the JSON Data Interchange Format,
// the world’s most loved data format.
//-------------------------------------]
//--------------------------------------
//   WHY USE JSON----
//-------------------------------------
//-------------------------------------

// The JSON format is syntactically similar to the code for creating JavaScript objects.
//  Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

// Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()

// You can receive pure text from a server and use it as a JavaScript object.

// You can send a JavaScript object to a server in pure text formaT
//------------------------------------------------------------------
// ---------------------- IMPORTANT---------------------------------
//------------------------------------------------------------------

// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const text = '{"name":"Sandeep","age":24,"city":"Azamgarh"}';
const obj = JSON.parse(text);
console.log(obj.name + '  ' + obj.age + '  ' + obj.city);

//   Sandeep  24  Azamgarh

//======================================================================

//Array as JSON
//=======================

//When using the JSON.parse() on a JSON derived from an array,
//the method will return a JavaScript array, instead of a JavaScript object.

const text1 = '["Ford","BMW","Audi","Ferrari"]';
const obj1 = JSON.parse(text1);
console.log(obj1[0]);
console.log(obj1[2]);
console.log(obj1[3]);

for (let re of obj1) {
  console.log(re + ' ');
}

// ----- Exceptions  -------------
//--------------------------------
// Parsing Dates
// Date objects are not allowed in JSON.

// If you need to include a date, write it as a string.

// You can convert it back into a date object later:

const text2 = '{"name":"Sandeep","birth":"1997-04-01","city":"Azamgarh"}';
const obj = JSON.parse(text2);
obj.birth = new Date(obj.birth);
console.log(obj.name + '  ' + obj.birth);

//Sandeep  Tue Apr 01 1997 05:30:00 GMT+0530 (India Standard Time)

//==============================================================================

// Or, you can use the second parameter, of the JSON.parse() function, called reviver.
//The reviver parameter is a function that checks each property, before returning the value.

const text2 = '{"name":"Sandeep","birth":"1997-04-01","city":"Azamgarh"}';
const obj = JSON.parse(text2, function (key, value) {
  if (key == 'birth') {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(obj.name + ' ' + obj.birth + ' ' + obj.city);
//----------------------------------------------------------------------------

//   JSON.stringify()
//---------------------------------------------------------
//  A common use of JSON is to exchange data to/from a web server.
//  When sending data to a web server, the data has to be a string.
//  Convert a JavaScript object into a string with JSON.stringify().

const obj = { name: 'Sandeep', age: 24, job: 'Softwere Developer' };
const myJSON = JSON.stringify(obj);
console.log(typeof myJSON); // string
console.log(myJSON);
//{"name":"Sandeep","age":24,"job":"Softwere Developer"}


// Looping in Object...
//------------------------

// you can loop through object properties with a for in loop
const myJSON = '{"name":"Sandeep","age":24,"car":null}';
const myObj = JSON.parse(myJSON);
let text = '';
for (let x in myObj) {
  text = text + x + ' , ';
}

console.log(text);
// name , age , car ,


//In for in loop , use the bracket to access the properties value...
//-------------------------------------------------------------------

const myJSON = '{"name":"Sandeep","age":24,"car":null}';
const myObj = JSON.parse(myJSON);
let text = '';
for (let x in myObj) {
  text = text + myObj[x] + ', ';
}
console.log(text);
// Sandeep, 24, null, 

*/
//
