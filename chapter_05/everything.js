// Everything...
const every = (arr, test) => {
  for (let item of arr) {
    if (test(item) === false) {
      return false;
    }
    return true;
  }
};

console.log(every([1, 3, 5], n => n < 10));

// true
console.log(every([12, 4, 16], n => n < 10));
// false

console.log(every([], n => n < 10));
// undefined
