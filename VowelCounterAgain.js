/*
Write a function that takes a string as input and returns the number of
vowels in the string.
*/

let userString = prompt("Enter a string:\n");

function vowelCounter(string){
    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    string.toLowerCase();
    
    for(let letter of string){
        if(vowels.includes(letter)){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(`Your string contains ${vowelCounter(userString)} vowels.`);
