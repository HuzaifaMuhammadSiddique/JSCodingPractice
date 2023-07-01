/*
Write a function that takes two arrays of integers as input and returns
a new array that contains only the elements that are common to both arrays.
*/

// function to take an array as input from the user.
function takeArray(){ 
let inputArray = [];
console.log("Note: You can also enter negative numbers.\n")
let n = prompt("How many numbers do you want to put in your array?\nnumbers: ");
for(let i=1; i<=n; i++){
    let num = Number.parseInt(prompt("Enter number: "))
    inputArray.push(num);}
    return inputArray;
}

// This function makes all the values in an array unique
function uniquer(array){
    array = new Set(array)
    array = Array.from(array)
    return array;
}

// Main code
function commonFinder(arrayOne, arrayTwo){
let commonArray = [];

for(let i of arrayOne){
    for(let j of arrayTwo){
        if(i == j){
            commonArray.push(i)
        }
    }
}
    commonArray = uniquer(commonArray);
    return commonArray; 
}

// Takes first array from the user.
console.log("ARRAY ONE");
let array1 = takeArray();

// Takes second array from the user.
console.log("ARRAY TWO");
let array2 = takeArray();


// Final Result
let resultArray = commonFinder(array1,array2);
console.log(`The arrays contain ${resultArray.length} common elements. \n${resultArray}`);
