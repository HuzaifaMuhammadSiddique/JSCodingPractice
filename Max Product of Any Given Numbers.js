/*
Write a function that takes an array of numbers and returns the maximum possible product of any given numbers in the array.
*/

// SOLUTION

let arr = [1,3,8,5,9,15,12,56,23,98,22,7,76,19];

function maxProduct(array, number){ // 4  98,76,56,23
  function sorter(a,b){
    return b - a;
  }
  
  array.sort(sorter);
  var product = 1;
  for(i = 0; i < number; i++){
    product = product * array[i];
  }

  return product;
}

console.log(maxProduct(arr, 4))
