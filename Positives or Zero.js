// PROBLEM
/*
Write a function that takes an array of integers as input and returns a new array that contains the same elements as the original array, but with all negative integers replaced by 0.
*/

// SOLUTION
function positiveOrZero(array){
  let newArray = [];
  for(let num of array){
    if(num < 0){
      newArray.push(0);
    }
    else{
      newArray.push(num);  
    }
  }
  return newArray;
}

// TESTS
let a = [-2,5,-4,7,2,8,-9,-12];
let b = [0,1,2,3,4,4,5,6];
let c = [235,124,756,324,-7823,-237,-659,-82,0,0,53251];
let d = [4,5,6,7,8,9];

console.log(positiveOrZero(a));
console.log(positiveOrZero(b));
console.log(positiveOrZero(c));
console.log(positiveOrZero(d));
