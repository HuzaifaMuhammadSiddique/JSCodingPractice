// PROBLEM
/*
Write a function that takes an array of integers as input and returns a new array that contains only the elements that appear more than once in the original array.
*/

// SOLUTION
const moreThanOne = (array) => {
  let newArray = [];
  for(let i=0;i<array.length;i++){
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
      newArray.push(array[i]);
    }
  }
  newArray = new Set(newArray);
  newArray = Array.from(newArray);
  return newArray;
}

// TESTS
let a = [1,2,3,3,4,5,5,6,6,6,7,8,9,10,10];
let b = [-3,-1,5,9,15,20];
let c = [1,1,1,1,1,1];
let d = [1,1,2,2,3,3,4,4];

console.log(moreThanOne(a));
console.log(moreThanOne(b));
console.log(moreThanOne(c));
console.log(moreThanOne(d));
