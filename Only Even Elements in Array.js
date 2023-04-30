/*
Write a function that takes an array of integers as input and returns a new array that contains only the even integers in the original array.
*/

// SOLUTION
function onlyEvens(array){
  let evenArray = [];
  for(let element of array){
    if(element % 2 === 0){
      evenArray.push(element);
    }
  }
  return evenArray;
}

let a = [1, 2, 3, 5, 6, 9, 11, 12, 15, 18, 21, 28, 34, 35, 40, 41, 42, 48, 50];
console.log(onlyEvens(a));
