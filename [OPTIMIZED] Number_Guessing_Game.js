// Number Guessing Game [AN IMPROVED VERSION]
/*
--About the game--
* The computer randomly generates a number between 1 and 100, and the user has to guess it.
* The user has 10 guesses and after every guess the computer tells the user whether the guess it right or wrong.
* If the guess it right, the program ends and a message is displayed on the screen telling the user that he/she has guessed the word.
* If the guess is wrong, the program tells the user whether the original number is greater or less than their guess. 
* User can keep on guessing until he/she is out of lives. If he/she is out of lives, a message is displayed on the screen saying that the user has lost the game.
*/

// I will try to make this game more controllable and with more options.
// In this version, the user can select the range of numbers (from which the random number is generated) and the user can also select how many lives he/she will be having.



// Variablizing the code
let minNumber = 1;
let maxNumber = 100;
let userLives = 7;

// We can also ask the user for the range of numbers and the lives
minNumber = Number.parseInt(prompt("Enter the lowest possible number:"));
maxNumber = Number.parseInt(prompt("Enter the highest possible number:"));
userLives = Number.parseInt(prompt("Enter the number of lives you want to play with:"));


// Generating a random number between 1 and 100 inclusive.
let randomNumber = Math.random() * maxNumber;
randomNumber = Math.ceil(randomNumber);

// Initial lives that the user will get.
let lives = userLives;

// A boolean which will track if the number was guessed.
let guessed = false;

// Using a do-while loop because we need to run our code at least once before we run it through any condition.
do {
    // taking the guess number from the user.
    let guess = Number.parseInt(prompt("Guess a number: "));

    // checking whether the user has given the correct input or not.
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
    console.log(`Invalid input. Please enter a number between ${minNumber} and ${maxNumber}.`);
    continue;
    }

    // Using a nested if-else block to check if the guess matches the random number or not.
    // If it matches, this block runs.
    if(guess === randomNumber){
    console.log(`You have won the game. The number was ${randomNumber}`);
    guessed = true;
    // This block is not important for the code to work properly but it ensures that the message is displayed using correct English rules.
    if(lives === 1){
    console.log(`You had ${lives} life left.`)
    } else if(lives > 1){
    console.log(`You had ${lives} lives left.`)
    }
    }
    // if it does not match, this block runs
    else{
        if(guess > randomNumber){
        console.log(`Your guess is GREATER than the number. Please try a SMALLER guess.`)
            lives--;
        }
        else{
        console.log(`Your guess is LESSER than the number. Please try a BIGGER guess.`);
            lives--;
        }
}
} while((lives >= 1) && (guessed !== true)) // Checking if the number was guessed and keeping a track of the number of remaining lives; both of these conditions are necessary.

// message displayed in case the user loses all of the lives
if(lives === 0) {
  console.log(`You lose! You have ${lives} lives left! The number was ${randomNumber}.`);
}
