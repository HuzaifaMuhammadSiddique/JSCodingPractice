// QUESTION
/* Write a function that takes an array of integers as input and returns the median value of the array. */

// SOLUTION CODE
function median(array){
  function sorter(a, b){
    return a - b;
  }
  array.sort(sorter);
  let middleValue = (array.length) / 2;
  let medianNumber;
  
  if((middleValue % 1) !== 0){
    medianNumber = array[Math.ceil(middleValue) - 1];
  } else{
    medianNumber = (array[middleValue - 1] + array[middleValue]) / 2
  }

  return medianNumber;
}

// TESTS
let a = [3, 7, 8, 1, 2, 6];
let b = [1,15,9,10,5];

let medianA = median(a)
let medianB = median(b)

console.log(`The median of this ${a} is ${medianA}.`);
console.log(`The median of this ${b} is ${medianB}.`)
