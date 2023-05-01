// PROBLEM
/*
Write a function that takes an array of integers as input and returns a new array that contains the same elements as the original array, but in ascending order.
*/

// SOLUTION CODE
function arraySorter(array){
  function sorter(a,b){
    return a-b;
  }

  return array.sort(sorter);
}

// TESTS

let a = [9,8,7,6,5,4,3,2,1];
let b = [3, 2, 8, 9, 5, 3, 0, 11, 4];
let c = [-4, -10, 4, 10, 14, -14, 28, -28];

console.log(`${a} in acsending order is ${arraySorter(a)}`);
console.log(`${b} in acsending order is ${arraySorter(b)}`);
console.log(`${c} in acsending order is ${arraySorter(c)}`);
