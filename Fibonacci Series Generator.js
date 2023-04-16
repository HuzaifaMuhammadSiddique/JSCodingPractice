// PROBLEM
/*
Fibonacci series: Write a function that generates the Fibonacci series up to a given number.
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

// CODE
const fsGenerator = (number) => {
    let array = [0,1];
    for(i=2; i<number; i++){
        let nextNumber = array[i-1] + array[i-2];
        array.push(nextNumber)
    }
    return array;
}

console.log(fsGenerator(20))
