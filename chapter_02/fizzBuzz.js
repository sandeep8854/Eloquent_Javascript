'use strict';

const fizzbuzzmeth = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
fizzbuzzmeth(100);

//============================================================

//============================================================
const fibo = count => {
  if (count > 0) {
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(' ' + n3);
    fibo(count - 1);
  }
};
let count = 10;
let n1 = 0;
let n2 = 1;
console.log(n1 + ' \n ' + n2);
fibo(count - 2, n1, n2);

// 0 1 1 2 3 5 8 13 21 34

//====================================================
