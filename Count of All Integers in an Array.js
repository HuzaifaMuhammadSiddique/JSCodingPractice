// PROBLEM
/*
Write a function that takes an array of integers as input and returns the number of times each integer appears in the array as an object.
*/

// SOLUTION
function timesOfEachChar(array){
  let count = {};
  for(let num of array){
    if(count[num] >= 1){
      count[num] += 1;
    }
    else{
      count[num] = 1;
    }
  }
  return count;
}

// TESTS
console.log(timesOfEachChar([1,2,2,3,4,5,6,7,7,7,7,8,8,9,10,10]));
console.log(timesOfEachChar([-2,-3,-4,-6,-6,6,6,6,6,6,12,17,0,0]));
console.log(timesOfEachChar([325,7543,3226,782439,87832,325,-2385]));
