// PROBLEM
/*
Write a function that takes a string as input and returns true if all of the letters in the string are unique, and false otherwise.
*/

// SOLUTION CODE
function uniqueCheck(string){
  let uniqueChars = {};

  for(let i=0; i<string.length; i++){
    let char = string[i];
    if(uniqueChars[char]){
      return false;
    }
    else{
      uniqueChars[char] = true;
    }
  }
  return true;
}

// TESTS

let a = 'a quick brown fox jumps over a lazy dog';
let b = 'huzaifa';
let c = 'abcdefghijklmnopqrstuvwxyz';
let d = 'yes!';

console.log(uniqueCheck(a));
console.log(uniqueCheck(b));
console.log(uniqueCheck(c));
console.log(uniqueCheck(d));
