// CODE
/* Write a function that takes a string as input and returns the same string with all of the spaces removed. */

// SOLUTION CODE
function removeSpaces(string){
  let space = " ";
  let newWord = [];
  for(let letter of string){
    if(letter !== space){
      newWord.push(letter)
    }
  }
  newWord = newWord.join("")
  return newWord;
}

// TEST
console.log(`Your sentence without spaces is '${removeSpaces(prompt("Enter a sentence: "))}'`);
