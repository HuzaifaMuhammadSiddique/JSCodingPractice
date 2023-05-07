// Find the common elements between two arrays.

// CODE
let a1 = [1, 2, 5, 10,];
let a2 = [2, 3, 4, 5, 8, 11];
let commonArray = [];
for(num1 of a1){
    for(num2 of a2){
        if(num1 === num2){
            commonArray.push(num1);
        }
    }
}

console.log(commonArray)
