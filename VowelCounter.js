/*
Count the number of vowels: Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.
For example, if the string is "hello", the function should return 2.
*/

const vowelCounter = (string) => {
  let counter = 0;
  for(let i=0; i<string.length; i++){
    if((string[i].toLowerCase() === "a") || (string[i].toLowerCase() === "e") || (string[i].toLowerCase() === "i") || (string[i].toLowerCase() === "o") || (string[i].toLowerCase() === "u")){
      counter+= 1; 
    }
  }
  return counter
}

console.log(vowelCounter(prompt("Enter a word ")));
