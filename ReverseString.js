/*
Write a function that takes a string and returns the same string with the characters reversed.
*/

function reverseString(string){
  let newString = "";
  for(let i=0; i<string.length; i++){
    newString = newString + string[string.length - i - 1];
  }
  return newString;
}

console.log(reverseString(prompt("Enter a string ")));
