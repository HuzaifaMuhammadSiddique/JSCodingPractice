// PROBLEM
/*
Write a function that takes a string as input and returns the same string with the characters in reverse order.
*/

// SOLUTION CODE
function stringReverser(string){
  let reverseWord = [];
  for(let i=string.length-1; i>=0; i--){
    reverseWord.push(string[i]);
  }
  return reverseWord.join("");
}

// TESTS

let a = 'a quick brown fox jumps over a lazy cat';
let b = 'name is name';
let c = 'abcdefghijklmnopqrstuvwxyz';
let d = 'yes!';
let e = 'level';

console.log(stringReverser(a))
console.log(stringReverser(b))
console.log(stringReverser(c))
console.log(stringReverser(d))
console.log(stringReverser(e))
