// PROBLEM
/*
Write a function that takes an array of integers as input and returns the smallest integer that is not in the array.
*/

// SOLUTION
function smallestNotInArray(array){
  function sorter(a,b){
    return a-b;
  }
  array = new Set(array);
  array = Array.from(array);
  array.sort(sorter);

  return (array[0] - 1)
}

console.log(smallestNotInArray([1,2,3,4,4,5,6,7,8,8]));
console.log(smallestNotInArray([-1,-7,-3,-90,-2, -99]));
console.log(smallestNotInArray([235,23263,124,8792,741]));
console.log(smallestNotInArray([1,1,1,1,1]));
