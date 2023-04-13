// Question
/*
Find Duplicates: Write a function that takes an array of integers
as input and returns an array of integers that are duplicates in
the input array.
*/

// Solution 1
const findDups = (array) => {
    let duplicates = [];
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if((array[i] == array[j]) && (i !== j)){
                if((duplicates.includes(array[i])) || (duplicates.includes(array[j]))){
                    continue;
                } else{
                    duplicates.push(array[j]);
                }
                
            }
        }
    }
    return duplicates;
}

let myArray = [1,2,3,3,5,5,7,9];
let test = findDups(myArray);

console.log(test)


// Solution 2 (OPTIMIZED)

const findDups = (array) => {
    const duplicates = new Set();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                duplicates.add(array[i]);
            }
        }
    }
    return Array.from(duplicates);
}

const myArray = [1, 2, 3, 3, 5, 5, 5, 7, 9];
const test = findDups(myArray);
console.log(test);
