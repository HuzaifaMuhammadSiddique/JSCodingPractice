let word = prompt("Enter the word: ");
console.clear()
word = word.toLowerCase();
let len = word.length;
let wordArray = word.split("");
let guessArray = [];
let dash = "_";
let lives = 7;
let usedWords = [];

for (let letter in word) {
  guessArray.push(dash);
}
let result = guessArray.join("")
console.log(result)

while (lives > 0 && result !== word ) {
  let guess = prompt("Enter your guess: ");
  guess = guess.toLowerCase()
  
  for(let i=0; i<len; i++){
    if(guess === wordArray[i]){
      guessArray[i] = guess;
    }
  }
    result = guessArray.join("")
  
  if(wordArray.includes(guess)){
  } else{
    lives--;
    usedWords.push(guess);
    console.log("Wrong guess");
  
  }
  console.log(`The result is ${result} and you have ${lives} lives left.`)
}
if(word === result){
  console.log("Congratulations! You guessed the word! The word was", word)
}
