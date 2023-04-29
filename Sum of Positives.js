/*
1. Write a function that takes an array of integers as input and returns the sum of all the positive integers in the array.
*/

// SOLUTION
function sumOfPositives(array){
  let sum = 0;
  for(let element of array){
    if(element > 0){
      sum = sum + element;
    }
  }
  return sum;
}

let myArray = [3, 8, 15, -4, -2, 13, -18, 11, 11, -20, 50];
console.log(sumOfPositives(myArray));
