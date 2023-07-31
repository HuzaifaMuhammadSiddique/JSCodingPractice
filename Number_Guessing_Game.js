// Number Guessing Game

/*
--About the game--
* The computer randomly generates a number between 1 and 100, and the user has to guess it.
* The user has 10 guesses and after every guess the computer tells the user whether the guess it right or wrong.
* If the guess it right, the program ends and a message is displayed on the screen telling the user that he/she has guessed the word.
* If the guess is wrong, the program tells the user whether the original number is greater or less than their guess. 
* User can keep on guessing until he/she is out of lives. If he/she is out of lives, a message is displayed on the screen saying that the user has lost the game.
*/

// THE PROGRAM

// Generating a random number between 1 and 100 inclusive.
let randomNumber = Math.random() * 100;
randomNumber = Math.ceil(randomNumber);

// Initial lives that the user will get.
let lives = 6;

// A boolean which will track if the number was guessed.
let guessed = false;

// Using a do-while loop because we need to run our code at least once before we run it through any condition.
do {
    // taking the guess number from the user.
    let guess = Number.parseInt(prompt("Guess a number: "));

    // checking whether the user has given the correct input or not.
    if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
    continue;
    }

    // Using a nested if-else block to check if the guess matches the random number or not.
    // If it matches, this block runs.
    if(guess === randomNumber){
    console.log(`You have won the game. The number was ${randomNumber}`);
    console.log(`You had ${lives} life/lives left.`)
    guessed = true;
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
