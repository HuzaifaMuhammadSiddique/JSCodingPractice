// PROBLEM
/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// SOLUTION
function largestOfFour(arr) {
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        let largest = arr[i][0];
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j]; 
            }
        }
        newArray.push(largest);
    }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
