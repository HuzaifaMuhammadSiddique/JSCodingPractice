// PROBLEM
/*
Write a function that takes an array of integers as input and returns a new array that contains only the elements that are unique to the original array.
*/

// SOLUTION CODE
function onlyUnique(array){
  array = new Set(array);
  return Array.from(array);
}

// TESTS

a = [1, 2, 2, 5, 6, 6, 6, 8];
b = [2, 2, 2, 2, 2, 3];
c = [-10, -10, -8, -8, -2, -1, -1, -1, 10, 10];

console.log(onlyUnique(a));
console.log(onlyUnique(b));
console.log(onlyUnique(c));
