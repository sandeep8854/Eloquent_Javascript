// What is this?

// The JavaScript this keyword refers to the object it belongs to.

// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.

const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapti',
  id: 5766,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(person.fullName());

//  Sandeep Prajapati
//==========================================================================
// this in a Method
// In an object method, this refers to the "owner" of the method.

// In the example on the top of this page, this refers to the person object.

// The person object is the owner of the fullName method.

//============================================================================

// this Alone
//When used alone, the owner is the Global object, so this refers to the Global object.

//In a browser window the Global object is [object Window]:

let x = this;
console.log(x);
// refer to window object..

//===================================================================================

//  this in a function(default):
// in function this refer to global object.
function myFunction() {
  return this;
}
console.log(myFunction());

//NOTE :-   if you have default function this refer to window object.
//=====================================================================================

// Explicit Function binding..
// They can both be used to call an object method with another object as argument.
// In the example below, when calling person1.fullName with person2 as argument,
//this will refer to person2, even if it is a method of person1:
const person1 = {
  fullName: function () {
    return this.firstName + '  ' + this.lastName;
  },
};

const person2 = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
};
const x = person1.fullName.call(person2);
console.log(x);
// Sandee Prajapati

//=========================================================

//   Object : --

const car = { type: 'Sport', model: '500', color: 'white' };

console.log(car.type);
// Sport

// Object Definition
//You define (and create) a JavaScript object with an object literal:

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};
console.log(person.firstName + ' is ' + person.age + ' year old. ');

//John is 50 year old.

//====================================================================

//Accessing Object Properties
//You can access object properties in two ways:

//objectName.propertyName
//or

//objectName["propertyName"]

//===============================================================

// Creating a JavaScript Object:-----
//===========================================
// With JavaScript, you can define and create your own objects.

// There are different ways to create new objects:

// 1- Create a single object, using an object literal.
// 2- Create a single object, with the keyword new.
// 3- Define an object constructor, and then create objects of the constructed type.
// 4- Create an object using Object.create().

//========================================================================================

/// 1- Create a single object, using an object literal.

const person = {
  firstName: 'Sandeep',
  lastName: 'Doe',
  age: 24,
  eyeColor: 'blue',
};
console.log(person.firstName + ' is ' + person.age + ' year old. ');
// Sandeep is 24 year old.

//=========================================================================================

// This example creates an empty JavaScript object, and then adds 4 properties:

const person = {};
person.firstName = 'Sandeep';
person.lastName = 'Praapti';
person.age = 24;
person.eyeColor = 'Pink';
person.age = 24;

console.log(person.firstName + ' is ' + person.age + ' year old ');
//  Sandeep is 24 year old
//======================================================================

// 02-  Using the JavaScript Keyword new
//----------------------------------------
// adds 4 properties:

const person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';
person.age = 50;
person.eyeColor = 'blue';
console.log('Eye are ' + person.eyeColor);

//  Eye are blue

//=======================================================================
// JAVASCRIPT OBJECT ARE MUTABLE:---
// They are addressed by reference, not by value.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};
const x = person;
x.age = 10;
console.log(person.age);
//10

// The object x is not a copy of person. It is person. Both x and person are the same object.
// Any changes to x will also change person, because x and person are the same object.

//==========================================================================
// MOST IMPORTANT PROPERTIES OF JAVASCRIPT------
// JavaScript Object Properties

//---------------------------------

//    objectName.property      // person.age
//        OR
//    objectName["property"]   // person["age"]
//       OR
//   objectName[expression]   // x = "age"; person[x]

//Note:-  expression must evaluate to the properties name.

//===========================================================================
//  JavaScript for...in Loop

// for (let variable in object) {
//     // code to be executed
//   }

const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapti',
  age: 24,
  job: 'Software Developer',
  address: 'Azamgarh',
  pincode: 276304,
};
let textAnswer = '';
for (let x in person) {
  textAnswer = textAnswer + person[x] + ' ';
}
console.log(textAnswer);

// Sandeep Prajapti 24 Software Developer Azamgarh 276304

//===============================================================================

//  Adding new Properties...
//-----------------------------------

const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapti',
  age: 24,
  job: 'Software Developer',
  address: 'Azamgarh',
  pincode: 276304,
};

person.nationality = 'Indian';
let res = '';
for (let x in person) {
  res = res + person[x] + ' ';
}
console.log(res);

// Sandeep Prajapti 24 Software Developer Azamgarh 276304 Indian.

//====================================================================================
// DELETE PRPPERTIES:----
//----------------------
const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapti',
  age: 24,
  job: 'Software Developer',
  address: 'Azamgarh',
  pincode: 276304,
};

//delete person.pincode;  // use any one both are same.
delete person['pincode']; //exectly..

let res = '';
for (let x in person) {
  res += person[x] + ' ';
}
console.log(res);

// Sandeep Prajapti 24 Software Developer Azamgarh

//======================================================================

//  NESTED OBECTS.....
//----------------------

const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapti',
  age: 24,
  job: 'Software Developer',
  address: 'Azamgarh',
  pincode: 276304,
  anotherDetails: {
    education: 'B.TECH',
    favoriteSubject: 'Java',
    techer: 'Gupta',
  },
};
//--------------------------------------------------
// let res = '';
// for (let x in person.anotherDetails) {
//   res += person.anotherDetails[x] + ' ';
// }
// console.log(res);
//B.TECH Java Gupta
//--------------------------------------------------
let res1 = '';
for (let x in person['anotherDetails']) {
  res1 += person['anotherDetails'][x] + ' ';
}
console.log(res1);
//  B.TECH Java Gupta

//----------------------------------------------------
//================================================================

//    Nested Array And Objects....
//------------------------------------
// Values in objects can be arrays, and values in arrays can be object

const myObj = {
  name: 'Sandeep',
  age: 24,
  cars: [
    { name: 'Ford', model: ['fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', model: ['320', 'X3', 'X5'] },
    { name: 'Fiat', model: ['500', 'panda'] },
  ],
};

let res = '';
for (let x in myObj.cars) {
  res += myObj.cars[x].name + ' ';

  //console.log(res);
  for (let y in myObj.cars[x].model) {
    res += myObj.cars[x].model[y] + ' ';
  }
}
console.log(res);

//  Ford fiesta Focus Mustang BMW 320 X3 X5 Fiat 500 panda

//==================================================================================

//   JavaScript Display Objects:---
//--------------------------------------
// How to display javascript object....
// 01- Displaying the Object Properties by name
// 02- Displaying the Object Properties in a Loop
// 03- Displaying the Object using Object.values()
// 04- Displaying the Object using JSON.stringify()

//  01-  Display Object Properties----
//----------------------------------------

const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
};

console.log(person.myName + ' ' + person.age + ' ' + person.city);

//  Sandeep 24 Bengaluru

//========================================================================
//  02-  Displaying the Object in a Loop

const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
};
let res = '';
for (let x in person) {
  res += person[x] + ' ';
}
console.log(res);

// Sandeep 24 Bengaluru

//========================================================================

// 03-  Displaying the Object using Object.values()
//-------------------------------------------------
// Any JS object can be converted to an array using Object.values();

const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
  job: 'Software Developer',
};

const myArray = Object.values(person);
console.log(myArray);
// myArray is actually Array properties..

for (let i in myArray) {
  console.log(myArray[i] + ' ');
}
// Sandeep 24 Bengaluru Software Developer

//=========================================================================

//  04- Using JSON stringify()
//------------------------------------
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
  job: 'Software Developer',
  salary: 30000,
  todayDate: new Date(),
};
const myString = JSON.stringify(person);
console.log(myString);

// {"myName":"Sandeep","age":24,"city":"Bengaluru","job":"Software Developer","salary":30000
// todayDate":"2021-09-22T05:09:44.943Z"}

//------------------------------------------------------------------------------------------

//  JavaScript Object Accessors:---
//-----------------------------------

const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
  job: 'Software Developer',
  language: 'English',
  salary: 30000,
  get san1() {
    return this.language;
  },
  get san2() {
    return this.job;
  },
};
console.log(person.san1);
console.log(person.san2);

//  English
//  Software Developer

//=======================================================================================

//  JavaScript Setter (The set Keyword)

const person = {
  myName: 'Sandeep',
  age: 24,
  city: 'Bengaluru',
  job: 'Software Developer',
  language: 'English',
  set lang(value) {
    this.language = value;
  },
};
person.lang = 'Hindi';
console.log(person.language);

// Hindi

//===========================================================================
//   JavaScript Function or Getter?
//  Example 01-
const person = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(person.fullName());

// Sandeep Prajapati..

//===========================================================================

// Example 02-

const person = {
  firstName: 'Sandeep',
  middleName: 'Naresh',
  lastName: 'Prajapati',
  get fullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  },
};
console.log(person.fullName);

// Sandeep Naresh Prajapati

//==========================================================================
//  Data Quality:---
//-------------------
//  JavaScript can secure better data quality when using getters and setters.

const person = {
  firstName: 'Sandeep',
  middleName: 'Naresh',
  lastName: 'Prajapati',
  language: 'English',
  get lang() {
    return this.language.toUpperCase();
  },
};
console.log(person.lang);
// ENGLISH

//===========================================================================
const person = {
  firstName: 'Sandeep',
  middleName: 'Naresh',
  lastName: 'Prajapati',
  language: '',
  set lang(val) {
    this.language = val.toUpperCase();
  },
};
person.lang = 'Urdu';
console.log(person.language);

// URDU

//========================================================================

//   JavaScript Object Constructors
//----------------------------------------------
// They only create single objects.
// Sometimes we need a "blueprint" for creating many objects of the same "type".
// The way to create an "object type", is to use an object constructor function.
// In the example above, function Person() is an object constructor function.
// Objects of the same type are created by calling the constructor function with the new keyword:
// name constrctor function with th uppercase first latter..
//------------------------------------------------------------------------

// constrctor function for Person object:---
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}
//create a person object.
const myFather1 = new Person('Ram Charitra', 'Prajapati', 55, 'Blue');
const myMother1 = new Person('Basmat', 'Devi', 53, 'Black');
console.log('My Father age is : ' + myFather1.age);
console.log('My Mother age is : ' + myMother1.age);

// My Father age is : 55
// My Mother age is : 53

//==========================================================================

// Adding a properties to an Object..
//like as nationality USA:--
//--------------------------------------
function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}
//create a person object.
const myFather = new Person1('Ram Charitra', 'Prajapati', 55, 'Blue');
const myMother = new Person1('Basmat', 'Devi', 53, 'Black');

myFather.nationality = 'Indian';
myMother.education = 'B.Tech';
console.log(myFather.nationality);
console.log(myMother.education);

// Indian
// B.Tech

//==============================================================================

//   Adding a method o an Object...
//-------------------------------------------
//Note:- adding a new method to an existing object is easy.

function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}
//create a person object.
const myFather = new Person1('Ram Charitra', 'Prajapati', 55, 'Blue');
const myMother = new Person1('Basmat', 'Devi', 53, 'Black');
//add a fullName method to first object..

myFather.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};
console.log('My Father is :- ' + myFather.fullName());

//  My Father is :- Ram Charitra Prajapati

// =======================================================================

// Adding Properties to a Constructor..
//--------------------------------------
function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}
myFather.nationality = 'Indian';
//create a person object.
const myFather = new Person1('Ram Charitra', 'Prajapati', 55, 'Blue');
const myMother = new Person1('Basmat', 'Devi', 53, 'Black');

// You can not add a new Properties to a constructor function..
console.log('My Father from ' + myFather.nationality);
//practices.js:596 Uncaught ReferenceError: Cannot access 'myFather' before initialization

//================================================================================

function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = 'India';
}

//create a person object.
const myFather = new Person1('Ram Charitra', 'Prajapati', 55, 'Blue');
const myMother = new Person1('Basmat', 'Devi', 53, 'Black');

console.log(
  'My Father from ' +
    myFather.nationality +
    ' And My Mother from also ' +
    myMother.nationality
);

// My Father from India And My Mother from also India

//====================================================================================
//  Adding method to a constructor..
//-----------------------------------------
// Your constructor function can also define method..
function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const myFather = new Person1('Ram Charitra', 'Prajapati', 55, 'blue');
console.log(myFather.fullName());

// Ram Charitra Prajapati

//==========================================================================================
// Adding a method to a constructor...
//--------------------------------------------
function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

// create a person object..
const mySelf = new Person1('Sandeep', 'Prajapti', 24, 'Blue');

//change last Name:---
mySelf.changeName = 'Naresh ';
console.log('My last Name is : ' + mySelf.changeName);

// Naresh

//========================================================================================
//   JavaScript Object Prototypes
//   ----------------------------------
//   All JavaScript objects inherit properties and methods from a prototype.
//
//-------------------------------------------------------------------------------
//   Prototype Inheritance-
//---------------------------
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

//  Adding Properties and Methods to Objects-
//---------------------------------------------
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.

//-----------------------------------------------------------------------
// Using Prototype Properties:----
//------------------------------------------------------------------------------------------
// The JavaScript prototype property allows you to add new properties to object constructors:
//--------------------------------------------------------------------------------------------
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

Person.prototype.nationality = 'Indian';
const myFather = new Person('Ram Charitra', 'Prajapati', 55, 'blue');
console.log('The nationality of my father is : ' + myFather.nationality);

//  The nationality of my father is : Indian
//---------------------------------------------------------------------------------------
// Javascript prototype properties also allow to add new method to object constructor..

function Person1(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}
Person1.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};
const myFather1 = new Person1('Ram Charitra', 'Prajapati', 55, 'blue');
console.log(myFather1.fullName());

//  Ram Charitra Prajapati

//============================================================================
//   -: JAVASCRIPT SETS -:
//----------------------------------------------------------------
// 01- A JavaScript Set is a collection of unique values.
// 02- Each value can only occur once in a Set.
// 03- A Set can hold any value of any data type.
//-----------------------------------------------------------------
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set

//create a set()
const letter = new Set(['a', 'b', 'c']);
console.log(letter.size);
// 3

// create a Set and add literal values
//------------------------------------------
// create a set
const letters = new Set();
letters.add('A');
letters.add('B');
letters.add('C');
letters.add('D');

console.log(letters.size);
// 4

//----------------------------------------------------
// create a Set and add variable...
const a = 'A';
const b = 'B';
const c = 'C';
// create a Set
const letter_ = new Set();
//add variable to Set
letter_.add(a);
letter_.add(b);
letter_.add(c);

console.log(letter_.size);
// 3
//----------------------------------------------------

//    Add() method in JS-:
const letter = new Set(['A', 'B', 'C']);
letter.add('D');
letter.add('E');
letter.add('C');
console.log('Only Unique Value Are given : ' + letter.size);

// Only Unique Value Are given : 5

//---------------------------------------------------------------
// The forEach() Method:--
//-----------------------------------------------------------------
//  The forEach() method invokes a function for each Set element:
//---------------------------------------------------------------
const letter = new Set(['A', 'B', 'C']);

let text = '';
letter.forEach(function (val) {
  text = text + val + '\n';
});
console.log(text);

//--------------------------------------------------------------
// The Value() method---
//------------------------
//  The values() method returns an Iterator object containing all the values in a Set:
// Now you can use the Iterator object to access the elements:
// use of values() we can use iterate the Array Set..
const letter = new Set(['A', 'B', 'C', 'E', 'F']);
let text = '';
for (const x of letter.values()) {
  text += x + '\n';
}
console.log(text);
// A B C D E F

//====================================================================================

// The keys() Method
//----------------------------------------
//A Set has no keys.
//keys() returns the same as values().
//-------------------------------------------

//   The entries() Method
//  entries() returns [value,value] pairs instead of [key,value] pairs.
//---------------------------------------------------------------------

const letter = new Set(['A', 'B', 'C', 'E', 'F']);
const itera = letter.entries();
let text = '';
for (let x of itera) {
  text += x + '\n';
}
console.log(text);
// A,A
// B,B
// C,C
// E,E
// F,F

//-========================================================================

//  Map in javascript.
//-------------------------------------------------------------------------
// A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
//A Map has a property that represents the size of the map.
//-------------------------------------------------------------------------
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
// Property	Description
// size	Returns the number of Map elements

//---------------------------------------------------------------------------
//  new Map()
//  You can create a Map by passing an Array to the new Map() constructor:
//---------------------------------------------------------------------------
const fruits = new Map([
  ['Apple', 500],
  ['Kivi', 700],
  ['Mango', 800],
]);

console.log(fruits.get('Apple'));
//  500
//--------------------------------------------------------------------------------

//  Map.set()
//  You can add elements to a Map with the set() method:
// create a map
const fruits = new Map();

//set map value
fruits.set('Apple', 600);
fruits.set('Mango', 750);
fruits.set('Orange', 850);

console.log(fruits.get('Orange'));
// 850

//--------------------------------------------------------------------------------
//  The set() method can also be used to change existing Map values:

const fruits = new Map([
  ['Apple', 500],
  ['Kivi', 700],
  ['Mango', 800],
]);

fruits.set('Apple', 555);
console.log(fruits.get('Apple'));
// 555

//----------------------------------------------------------------------------------
//  Map.size
// The size property returns the number of elements in a Map:
//----------------------------------------------------------------------------------
const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

console.log(fruits.size);
// 3

//===================================================================================

// Map.delete()
//The delete() method removes a Map element:
//---------------------------------------------------------

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);
console.log(fruits.size);
// 3
fruits.delete('apples');
console.log(fruits.size);
//2

//-------------------------------------------------------------------
//  Map.clear()
// The clear() method removes all the elements from a Map:
const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);
fruits.clear();
console.log('Current size of fruits :' + fruits.size);
// Current size of fruits : 0

//--------------------------------------------------------------------
//  Map.has()
//  The has() method returns true if a key exists in a Map:

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);
console.log(fruits.has('apples'));
console.log(fruits.has('kivi'));
// true
// false

//----------------------------------------------------------------------
//  Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a Map:

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

let result = '';
fruits.forEach(function (value, key) {
  result += key + ' = ' + value + '\n';
});
console.log(result);

// apples = 500
// bananas = 300
// oranges = 200
//------------------------------------------------------------------------

//  Map.keys()
//  The keys() method returns an iterator object with the keys in a Map:
//----------------------------------------------------------------------

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);
let result = '';
for (let x of fruits.keys()) {
  result += x + '\n';
}
console.log(result);

// apples
// bananas
// oranges

//-------------------------------------------------------------------------
//  Map.values()
//  The values method returns an iterator object with the values in a Map:

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

let result = '';
for (let x of fruits.values()) {
  result += x + '\n';
}
console.log(result);

//  500
//  300
//  200

//------------------------------------------------------------------------------
//  Map.entries()
//  The entries() method returns an iterator object with the [key,values] in a Map:

const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

let text = '';
for (let x of fruits.entries()) {
  text += x + '\n';
}
console.log(text);

// apples,500
// bananas,300
// oranges,200
//-----------------------------------------------------------------------------------

//  Objects as Keys
//  Being able to use objects as keys is an important Map feature.
//-----------------------------------------------------------------------

//   The Argument Object-:
// 01- JavaScript functions have a built-in object called the arguments object.
// 02- The argument object contains an array of the arguments used when the function was called (invoked).

//----------------------------------------------------------------------------------------------------------
//  Javascript Function call
//------------------------------------
// method reuse-:
//                with the call() method , you can write a method that can be used on different object.
//------------------------------------------------------------------------------------------------------
//creata a object 3 properties--
const myObject = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(myObject.fullName());

// Sandeep Prajapati
//------------------------------------------------------------------------
//   The JavaScript call() Method
//-----------------------------------------
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
};

const person2 = {
  firstName: 'Hora',
  lastName: 'Prashad',
};

console.log(person.fullName.call(person1));
// Sandeep Prajapati

console.log(person.fullName.call(person2));
//  Hora Prashad

//-----------------------------------------------------------------------------
//  Call() method can accept argument.
//----------------------------------------
const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country;
  },
};

const person1 = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
};
console.log(person.fullName.call(person1, 'Bengaluru', 'India'));

//  Sandeep Prajapati Bengaluru India

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//   JavaScript Function Apply
//---------------------------------------------------------------------------------
// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.
// The JavaScript apply() Method
// The apply() method is similar to the call() method
//----------------------------------------------------------------------------------

const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'Sandeep',
  lastName: 'Prajapati',
};

console.log(person.fullName.apply(person1));
// Sandeep Prajapati

//=================================================================================
//  The Difference Between call() and apply()
//---------------------------------------------------------------------------------
//The difference is:
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.
//The apply() method is very handy if you want to use an array instead of an argument list.

//----------------------------------------------------------------------------------
// The apply() Method with Arguments
//The apply() method accepts arguments in an array:

const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.LastName + ' ' + city + ' ' + country;
  },
};

const person1 = {
  firstName: 'Rakesh',
  LastName: 'Yadav',
};

console.log(person.fullName.apply(person1, ['BhagalPur', 'India']));

//  Rakesh Yadav BhagalPur India

//-------------------------------------------------------------------------------------
//  Max Method on Arrays
//You can find the largest number (in a list of numbers) using the Math.max() method:

console.log('Max Value of : ' + Math.max(1, 2, 3));
//  Max Value of : 3

console.log(Math.max.apply(null, [1, 2, 3]));
// 3

console.log(Math.max.apply(Math, [1, 4, 5, 6]));
// 6

console.log(Math.max.apply(' ', [4, 6, 9, 7]));
// 9

console.log(Math.max.apply(0, [4, 7, 5, 9, 12]));
// 12

//=====================================================================================

//    Javascript Closure:---
//----------------------------------
// 01-  variable can belongs to local and global scope.
// 02-  global variabe can be made local(private) with closure.
//-------------------------------------------------------------------

// function can access all variable define inside the function..

function myFunction() {
  let a = 4;
  return a * a;
}
console.log(myFunction());
// 16

//-------------------------------------------------------------------------
//But  function can also access variable define ouside the function.
let a = 4;
function myFunction1() {
  return a * a;
}
console.log('Outside Variable : ' + myFunction1());

//   Outside Variable : 16
//----------------------------------------------------------------------
//.Variables created without a declaration keyword
// (var, let, or const) are always global, even if they are created inside a function.
// function myFunction() {
//   a = 5;
// }
// const res = myFunction();
// console.log(res);

// console.log(myFunction() + a);

//=================================================================================
//important..

let counter = 0;
function add() {
  counter = counter + 1;
}
add();
add();
add();
console.log(counter);
// 3

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
//The counter should be local to the add() function, to prevent other code from changing it:

let counter = 0;
function add() {
  let counter = 0;
  counter = counter + 1;
  console.log(counter);
  // 1
}
add();
add();
add();

console.log(counter);
//0
//=====================================================================================
// It did not work because we display the global counter instead of the local counter.
//We can remove the global counter and access the local counter by letting the function return it:

function add() {
  let counter = 0;
  counter += 1;
  return counter;
}
console.log(add()); // 1
console.log(add()); // 1
console.log(add()); // 1

//======================================================================
//    JavaScript Nested Functions
//All functions have access to the global scope.
//In fact, in JavaScript, all functions have access to the scope "above" them.
//JavaScript supports nested functions. Nested functions have access to the scope "above" them.
//In this example, the inner function plus() has access to the counter variable in the parent function:
//-------------------------------------------------------------------------------------------------------
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

console.log(add()); //1

//-------------------------------------------------------------------
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
//We also need to find a way to execute counter = 0 only once.
//We need a closure.

// JavaScript Closures
// Remember self-invoking functions? What does this function do?

const add = (function () {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// A closure is a function having access to the parent scope, even after the parent function has closed.
//----------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// //  Self-Invoking Functions
// (function () {
//   let x = 'Hello I called Myseff.';
//   console.log(x);
// })();
// // Hello I called Myseff
//----------------------------------------------------------------------------------------------
// closures-:
//In JavaScript, closures are defined as inner functions that have access to variables
//and parameters of outer function even after the outer function has returned.
//------------------------------------------------------------------------------------
function greeting(firstName, lastName) {
  var message = 'Hello ' + firstName + ' ' + lastName + '!';

  return function () {
    console.log(message);
  };
}

var greetingBilly = greeting('Billy', 'Bob');
var greetingLuke = greeting('Sandeep', 'Prajapati');

greetingBilly();
greetingBilly();
greetingLuke();

// Hello Billy Bob!
// Hello Billy Bob!
// Sandeep Prajapati.
//----------------------------------------------------------------------------------
// Note:- In this example, a variable mult is defined that is local to the function multFn
//and is only accessible inside this function. When an inner function is declared,
//JavaScript creates a closure where the inner function has access to the
// variable and its parameters.

function multFn() {
  var mult = 9;
  return function (val) {
    mult = mult * val;
    return mult;
  };
}

// Use the closure
var multR = multFn();
console.log(multR(2));
//18

//------------------------------------------------------------------------------

//     JavaScript Classes-:
///----------------------------------
//  01- javascript classes are templates for javascript objects..
// syntax-:

// class ClassName{
//   constructor(){

//   }
// }
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// 01- A JavaScript class is not an object.
// 02- It is a template for JavaScript objects.

//  Using a Class
//  When you have a class, you can use the class to create objects:

const myCar = new Car('Audi', 2019);
const myCar1 = new Car('Ford', 2020);
console.log(myCar.name + ' ' + myCar.year);
console.log(myCar1.name + ' ' + myCar1.year);

// Audi 2019
// Ford 2020

// Note-:
//        Constuctor method is called automatically when new object are created..

//-----------------------------------------------------------------------------------
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let myCar = new Car('Honda City', 2015);
console.log('My Car is ' + myCar.age() + ' year old.');

//  My Car is 6 year old.

//-----------------------------------------------------------------------------------

// You can send parameter to class method.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
let date = new Date();
let year = date.getFullYear();

const myCar = new Car('Audi', 2014);
console.log('My Car is ' + myCar.age(year) + ' year old');

//  My Car is 7 year old
//---------------------------------------------------------------------------------------

// -- --------Class inheritance:----------
//-------------------------------------------------
//  To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  present() {
    return 'I have a ' + this.brand;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.mod = mod;
  }
  show() {
    return this.present() + ' , it is a ' + this.mod;
  }
}
let myCar = new Model('Ford', 'Mustang');
console.log(myCar.show());

// I have a Ford , it is a Mustang

//--------------------------------------------------------------------------------

//    JavaScript Callbacks-:
//-------------------------------------------------------------------------
// A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
//--------------------------------------------------------------------------
function myFirst() {
  myDisplayer('Hello');
}
function mySecond() {
  myDisplayer('Goodbye');
}
function myDisplayer(some) {
  console.log(some);
}
myFirst(); //hello
mySecond(); //Goodbye

//---------------------------------------------------------------------------
