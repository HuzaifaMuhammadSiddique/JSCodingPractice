/* Write a function that takes an array of integers as input and returns
the sum of all the positive integers in the array. */
// This function takes an array of numbers from the user.
function takeArray(){ 
let inputArray = [];
console.log("Note: You can also enter negative numbers.\n")
let n = prompt("How many numbers do you want to put in your array?\nnumbers: ");

for(let i=1; i<=n; i++){
    let num = Number.parseInt(prompt("Enter number: "))
    inputArray.push(num);}
    return inputArray;
}
// This function calculates the sum of positives in the array.
function sumOfPositives(array){
    let sum = 0;
    for(let number of array){
        if(number>0){
            sum += number;
        }
    }
    return sum
}

let output = takeArray();
let result = sumOfPositives(output);
console.log(`The sum of positive numbers in your array is ${result}`);
