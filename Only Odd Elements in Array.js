/*
Write a function that takes an array of integers as input and returns a new array that contains only the odd integers in the original array.
*/

// SOLUTION
function onlyOdds(array){
  let oddArray = [];
  for(let element of array){
    if(element % 2 !== 0){
      oddArray.push(element);
    }
  }
  return oddArray;
}

let a = [1, 2, 3, 5, 6, 9, 11, 12, 15, 18, 21, 28, 34, 35, 40, 41, 42, 48, 50];
console.log(onlyOdds(a));
