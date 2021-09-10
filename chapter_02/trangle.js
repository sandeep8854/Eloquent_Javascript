'use strict';

const trianglePattern = num => {
  let string = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      string = string + '#';
    }
    string = string + '\n';
  }
  console.log(string);
};
trianglePattern(7);

//=================================================================

const trianglePattern = num => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push('#');
    console.log(res.join(''));
  }
};
trianglePattern(7);

//==================================================================

let array = ['I', 'Love', 'Tamil', 'language'];

let joinedSting = array.join(''); // join with comma as delimiter
// console.log(typeof joinedSting);
//string

//console.log('After joining array =', joinedSting);
console.log(joinedSting);

//==================================================================
const tri = num => {
  for (let i = 0; i < num; i++) {
    console.log('#'.repeat(i));
  }
};
tri(7);

//===================================================================
const trianglePP = num => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      console.log('#');
    }
    console.log('\n');
  }
};

trianglePP(7);
//he will not work javascript
//java---
//==================================================================

// const planePattern = num => {
let num = 5;
let string = '';
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    string = string + '#';
  }
  string = string + '\n';
}
console.log(string);
//============================================================================

const planePat = num => {
  let string = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      string = string + '#';
    }
    string = string + '\n';
  }
  console.log(string);
};
planePat(7);

//============================================================================
//
//console.log('san');
const leftPattern = num => {
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str = str + ' ';
    }
    for (let k = 0; k <= i; k++) {
      str = str + '#';
    }
    str = str + '\n';
  }
  console.log(str);
};
leftPattern(5);

//    #
//   ##
//  ###
// ####
//#####
