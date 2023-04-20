/*
Title case a sentence: Write a function that takes a string and returns the same string with the first letter of each word capitalized. For example, if the string is "the quick brown fox", the function should return "The Quick Brown Fox".
*/

function capitalizer(string){
  let words = string.split(' ');
  let newString = "";

  for(let i = 0; i < words.length; i++){
    let word = words[i];
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
    newString = newString + firstLetter + restOfWord + " ";
  }

  return newString.trim();
}

let theString = prompt("Enter something ");
let capedString = capitalizer(theString);
console.log(capedString);

