/*
Write a function that takes a string as input and returns the same string with all of the vowels removed.
*/

// SOLUTION
function removeVowels(string){
  let newWord = [];
  let vowels = ['a','e','i','o','u'];
  for(let letter of string){
    if(vowels.includes(letter)){
      
    }else{
      newWord.push(letter);
    }
  }
  return newWord.join("")
}

let word = prompt("Enter a word: ");
let processedWord = removeVowels(word);

console.log(`${word} without vowels is ${processedWord}`)
