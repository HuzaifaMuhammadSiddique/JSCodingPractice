// PROBLEM
/*
Write a function that takes a string as input and returns the number of times each character appears in the string as an object.
*/

// SOLUTION
function timesOfEachChar(string){
  let array = string.split("");
  let count = {};
  for(let char of array){
    if(count[char] >= 1){
      count[char] += 1;
    }
    else{
      count[char] = 1;
    }
  }
  return count;
}

// TESTS
console.log(timesOfEachChar("huzaifa"));
console.log(timesOfEachChar("my name is huzaifa"));
console.log(timesOfEachChar("this is a dollor sign : $$"));
console.log(timesOfEachChar("1 animal 2 humans are only yes."));
console.log(timesOfEachChar("a quick brown fox jumps over a lazy dog"));
