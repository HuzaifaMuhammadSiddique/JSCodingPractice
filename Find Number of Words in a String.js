// QUESTION
/* Write a function that takes a string as input and returns the number of words in the string. */

// SOLUTION CODE
function wordCounter(string){
  string = string.trim();
  let count = 1;
  let space = " ";
  for(let letter of string){
    if(letter === space){
      count++;
    }
  }
  return count;
}
console.log("Your sentence should not contain two or more consecutive spaces.");
console.log(`The number of words in your sentences are: ${wordCounter(prompt("Enter a sentence: "))}`);
