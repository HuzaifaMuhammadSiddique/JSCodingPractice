// PROBLEM
/*
4. Write a function that takes an array of integers as input and returns the nth largest integer in the array.
*/

// SOLUTION 
function anyLargest(array, n){
  function sorter(a,b){return a-b;}
  array = new Set(array);
  array = Array.from(array);
  array.sort(sorter);
  let length = array.length;
  let largest = length - n
  return array[largest];
}

// TESTS
let a = [2,4,7,9,11,13,19,21,26,30];
let b = [3,2,17,12,13,10,45,23,12,13];
let c = [1,2,3,3,3,4,4,5,6,7,7,8,9,10];

console.log(anyLargest(a, 1))
console.log(anyLargest(a, 2))
console.log(anyLargest(a, 4))
console.log(anyLargest(a, 7))
console.log(anyLargest(b, 1))
console.log(anyLargest(b, 10))
console.log(anyLargest(b, 9))
console.log(anyLargest(b, 8))
console.log(anyLargest(b, 7))
console.log(anyLargest(b, 2))
console.log(anyLargest(c, 1))
console.log(anyLargest(c, 2))
console.log(anyLargest(c, 10))
console.log(anyLargest(c, 5))
