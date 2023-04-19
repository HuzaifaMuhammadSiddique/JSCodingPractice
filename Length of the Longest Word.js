/* Find the longest word: Write a function that takes a string and returns the length of the longest word in the string.
For example, if the string is "The quick brown fox jumps over the lazy dog", the function should return 5 for the word "quick". */

function lengthOfLongestWord(string) {
  let newString = string.split(" ");
  let previousLength = newString[0].length;
  let currentLength = 0;
  let highestLength = previousLength;

  for (let i = 1; i < newString.length; i++) {
    currentLength = newString[i].length;
    if (currentLength > highestLength) {
      highestLength = currentLength; 
    }
  }
  return highestLength;
}

let myString = "The quick brown fox jumps over the lazy dog";
console.log(lengthOfLongestWord(myString)); 
