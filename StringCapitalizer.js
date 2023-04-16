// PROBLEM
/*
String capitalization: Write a function that capitalizes the first
letter of each word in a given string.
*/

// CODE
const stringCap = (string) => {
    let words = string.split(" "); // Split the string into an array of words
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" "); // Join the words back into a single string
}

let sentence = "my name is huzaifa and I am huzaifa.";
let mySentence = stringCap(sentence);

console.log(mySentence);
// Output: "My Name Is Huzaifa And I Am Huzaifa."
