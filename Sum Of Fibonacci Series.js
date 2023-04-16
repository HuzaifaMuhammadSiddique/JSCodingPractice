// PROBLEM
/*
Sum of Fibonacci Series: Write a function that generates the sum of the Fibonacci series up to a given number.
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

// CODE
const sumOfFibonacciSeries = (number) => {
    if(number === 1){
        return 0;
    }
        
    let array = [0,1];
    for(i=2; i<number; i++){
        let nextNumber = array[i-1] + array[i-2];
        array.push(nextNumber)
    }
    let sum = 0;
    for(element of array){
        sum = sum + element
    }
    return sum
}

console.log(sumOfFibonacciSeries(20))
