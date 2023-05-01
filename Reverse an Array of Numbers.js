// PROBLEM
/*
Write a function that takes an array of integers as input and returns a new array that contains the same elements as the original array, but in reverse order.
*/

// SOLUTION CODE
function arrayReverser(array){
  function sorter(a,b){
    return b-a;
  }
  return array.sort(sorter);
}

// TESTS

let a = [1,2,3,4,5,6];
let b = [3, 2, 8, 9, 5, 3, 0, 11, 4];
let c = [-4, -10, 4, 10, 14, -14, 28, -28];

console.log(`${a} in reverse order is ${arrayReverser(a)}`);
console.log(`${b} in reverse order is ${arrayReverser(b)}`);
console.log(`${c} in reverse order is ${arrayReverser(c)}`);
