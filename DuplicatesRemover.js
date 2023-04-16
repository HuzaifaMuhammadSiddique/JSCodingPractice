// PROBLEM
/*
Duplicate elements: Write a function that finds and removes duplicate elements from an array.
*/

// CODE
const duplicatesRemover = (array) => {
    let newArray = new Set();
    for(element of array){
        newArray.add(element)
    }
    return Array.from(newArray);
}

const myArray = [0, 1, 2, 3, 3, 5, 5, 5, 7, 9, 9, 10, 12, 13, 13];
let optArray = duplicatesRemover(myArray);
console.log(optArray)
// OUTPUT = [0, 1,  2,  3,  5, 7, 9, 10, 12, 13]
