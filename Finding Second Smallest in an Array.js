/*
Write a function that takes an array of integers as input and returns the second smallest integer in the array.
*/

// SOLUTION
function secondSmallest(array){
  function sorter(a,b){
    return a - b
  }
  array = array.sort(sorter);
  array = new Set(array);
  array = Array.from(array);
  return array[1]
}

let a = [2, 5, 7, 5, 5];
let b = [-6, -10, 8, 5, -1, -1];
let c = [1, 1, 1, 2, 2, 3, 3];
let d = [2, 4];
let e = [3];

let all = [a, b, c, d, e];

for(let index of all){
  console.log(secondSmallest(index));
}
