/*
Write a function that takes a string as input and returns the number of vowels in the string.
*/

// SOLUTION
function noOfVowels(string){
  let count = 0;
  let vowels = ["a","e","i","o","u"];
  for(letter of string){
    if(vowels.includes(letter)){
      count++;
    }
  }
  return count;
}

let userWord = prompt("Enter a word: ");
let vowelsOfWord = noOfVowels(userWord);

console.log(`${userWord} contains ${vowelsOfWord} vowels.`);
